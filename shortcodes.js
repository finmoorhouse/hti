// Image shortcode

const Image = require("@11ty/eleventy-img");
const LFS_URL = "https://hti-images.netlify.app/";
const matter = require("gray-matter");
const fs = require("fs");
const path = require("path");

//Maybe this is inefficient?
async function imageShortcode(src, alt = src, size) {
  const str = fs.readFileSync(this.page.inputPath, "utf8");
  // Reading the file to get the 'number' frontmatter field.
  const data = matter(str).data;
  let urlPath = LFS_URL;
  if (data.number) {
    urlPath = LFS_URL + `episodes/${data.number}/`;
  }

  const metadataOptions = {
    widths: [1000, 750, 500, 300],
    formats: ["avif", "jpeg"],
    outputDir: "build/img/",
    cacheOptions: {
      // if a remote image URL, this is the amount of time before it fetches a fresh copy
      duration: "30d",
      // project-relative path to the cache directory
      directory: ".cache",
      removeUrlQueryParams: true,
    },
  };
  let sizes = "(max-width: 1000px) 100vw"; // This seems key
  let metadata = "";
  try {
    // New image source is host URL plus episode number plus filename.
    updatedSrc = urlPath + src;
    //console.log("Downloading:", updatedSrc);
    metadata = await Image(updatedSrc, metadataOptions);
  } catch (error) {
    // Handle error
    console.error("Error retrieving LFS image:", error);
    // Optionally return placeholder
    metadata = await Image(
      "https://upload.wikimedia.org/wikipedia/commons/1/14/Rubber_Duck_(8374802487).jpg",
      metadataOptions
    );
  }
  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline",
  });
}

// Featured image shortcode

async function featuredImageShortcode(content, src, alt) {
  let fullSrc = LFS_URL + `${src}`;
  const metadataOptions = {
    widths: [400],
    formats: ["avif", "jpeg"],
    outputDir: "build/img/",
    cacheOptions: {
      // if a remote image URL, this is the amount of time before it fetches a fresh copy
      duration: "10d",
      // project-relative path to the cache directory
      directory: ".cache",
      removeUrlQueryParams: true,
    },
  };
  try {
    //console.log("Downloading:", fullSrc);
    // New image source is host URL plus episode number plus filename.
    updatedSrc = fullSrc;
    // Docs on resizing images with Netlify LFS: https://docs.netlify.com/large-media/transform-images/
    returnedImage = await Image(updatedSrc, metadataOptions);
  } catch (error) {
    // Handle error
    console.error("Error retrieving LFS image:", error);

    // Optionally return placeholder
    returnedImage = await Image(
      "https://upload.wikimedia.org/wikipedia/commons/1/14/Rubber_Duck_(8374802487).jpg",
      {
        widths: [400],
        formats: ["avif", "jpeg"],
        outputDir: "build/img/",
        cacheOptions: {
          // if a remote image URL, this is the amount of time before it fetches a fresh copy
          duration: "100d",
          // project-relative path to the cache directory
          directory: ".cache",
          removeUrlQueryParams: true,
        },
      }
    );
  }
  return `<div
  class="p-0 w-3/12 sm:w-full bg-cover overflow-hidden aspect-square sm:aspect-video"
  style="background-image: url('${returnedImage.avif[0].url}')"
  >${content}
</div>`; // returnedImage.avif[0] is smallest, and returnedImage.avif[n] is largest for n sizes. But currently these images are not responsive. One thing I could do is make it a standard image element to support responsive sizes.
}



// One thing I can do with this shortcode is move ~all the html to the episode.njk template, and just get it to return the background image URL
async function backgroundImageShortcode(content, src) {
  let fullSrc = LFS_URL + `${src}`;
  const metadataOptions = {
    widths: [1000],
    formats: ["avif", "jpeg"],
    outputDir: "build/img/",
    cacheOptions: {
      // if a remote image URL, this is the amount of time before it fetches a fresh copy
      duration: "10d",
      // project-relative path to the cache directory
      directory: ".cache",
      removeUrlQueryParams: true,
    },
  };
  try {
    //console.log("Downloading:", fullSrc);
    // New image source is host URL plus episode number plus filename.
    updatedSrc = fullSrc;
    returnedImage = await Image(updatedSrc, metadataOptions);
  } catch (error) {
    // Handle error
    console.error("Error retrieving LFS image:", error);

    // Optionally return placeholder
    returnedImage = await Image(
      "https://upload.wikimedia.org/wikipedia/commons/1/14/Rubber_Duck_(8374802487).jpg",
      metadataOptions
    );
  }
  return `<div
    class="rounded-lg ring-2 ring-slate-200 dark:ring-flexoki-600  p-0 mb-2 shadow-md w-full bg-cover relative overflow-hidden  "
    style="background-image: url('${returnedImage.avif[0].url}')"
    ><div class="p-4 z-10 relative w-full h-full">${content}</div>
    <div class="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent opacity-80 z-0 mix-blend-multiply"></div>
  </div>`;
}

// This is both a filter and a shortcode currently. It returns just the url of the 100px width version of the image passed to it. It doesn't work on episode pages, for some reason.
async function generateBackgroundImageSrc(src) {
  let fullSrc = LFS_URL + `${src}`;
  const metadataOptions = {
    widths: [1000],
    formats: ["avif", "jpeg"],
    outputDir: "build/img/",
    cacheOptions: {
      // if a remote image URL, this is the amount of time before it fetches a fresh copy
      duration: "10d",
      // project-relative path to the cache directory
      directory: ".cache",
      removeUrlQueryParams: true,
    },
  };
  try {
    console.log("Downloading:", fullSrc);
    // New image source is host URL plus episode number plus filename.
    updatedSrc = fullSrc;
    returnedImage = await Image(updatedSrc, metadataOptions);
  } catch (error) {
    // Handle error
    console.error("Error retrieving LFS image:", error);

    // Optionally return placeholder
    returnedImage = await Image(
      "https://upload.wikimedia.org/wikipedia/commons/1/14/Rubber_Duck_(8374802487).jpg",
      metadataOptions
    );
  }
  return returnedImage.avif[0].url;
}

// Other shortcodes

function dateToString(date) {
  // Check if date is a string
  if (typeof date === "string") {
    // Parse into Date object
    date = new Date(date);
  }
  // Format date
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
  });
}

function aside(content) {
  return `<aside class="rounded-md px-8 py-2 bg-amber-50 dark:bg-flexoki-950 ring-amber-300 hover:ring-amber-400 ring-1 dark:ring-yellow-800 dark:ring-1 dark:hover:ring-yellow-600">${content}</aside>`;
}

module.exports = {
  imageShortcode,
  featuredImageShortcode,
  backgroundImageShortcode,
  generateBackgroundImageSrc,
  dateToString,
  aside,
};

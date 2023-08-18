// Image shortcode

const Image = require("@11ty/eleventy-img");
const LFS_URL = "https://hti-images.netlify.app/";
const matter = require("gray-matter");
const fs = require("fs");

//Maybe this is inefficient?
async function imageShortcode(src, alt = src, size = "medium") {
  const metadataOptions = {
    widths: [100, 600],
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
  const str = fs.readFileSync(this.page.inputPath, "utf8");
  // Reading the file to get the 'number' frontmatter field.
  const data = matter(str).data;
  let urlPath = LFS_URL;
  if (data.number) {
    urlPath = LFS_URL + `episodes/${data.number}/`;
  }
  let sizes = "100vw";
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

async function featuredImageShortcode(content, src, alt) {
  let fullSrc = LFS_URL + `episodes/${src}?nf_resize=smartcrop&w=1000`;
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
    // Docs on resizing images with Netlify LFS: https://docs.netlify.com/large-media/transform-images/
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
  class="p-0 w-3/12 sm:w-full bg-cover overflow-hidden aspect-square sm:aspect-video"
  style="background-image: url('${returnedImage.avif[0].url}')"
  >${content}
</div>`;
}

async function backgroundImageShortcode(content, src) {
  let fullSrc = LFS_URL + `episodes/${src}?nf_resize=smartcrop&w=1000`;
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
    // Docs on resizing images with Netlify LFS: https://docs.netlify.com/large-media/transform-images/
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
    class="rounded-lg ring-2 ring-slate-200 p-0 mb-8 shadow-md w-full bg-cover relative overflow-hidden  "
    style="background-image: url('${returnedImage.avif[0].url}')"
    ><div class="p-4 z-10 relative w-full h-full pt-10 md:pt-[130px]">${content}</div>
    <div class="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent opacity-80 z-0 mix-blend-multiply"></div>
  </div>`;
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
  return `<aside class="rounded-md px-8 py-2 bg-slate-100">${content}</aside>`;
}

module.exports = {
  imageShortcode,
  featuredImageShortcode,
  backgroundImageShortcode,
  dateToString,
  aside,
};

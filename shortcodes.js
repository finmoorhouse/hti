// Image shortcode

const Image = require("@11ty/eleventy-img");
const LFS_URL = "https://hti-images.netlify.app/";
const matter = require("gray-matter");
const fs = require("fs");

//Maybe this is inefficient?
async function imageShortcode(src, alt) {
  const metadataOptions = {
    widths: [300, 600],
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
  const str = fs.readFileSync(this.page.inputPath, "utf8");
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

async function featuredImageShortcode(src, alt) {
  let sizes = "100vw";
  let metadata = "";
  let fullSrc = LFS_URL + `episodes/${src}?nf_resize=smartcrop&w=100&h=100`;
  const metadataOptions = {
    widths: [300],
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


function note(content, label) {
  return `<span class="sidenote"><input
      aria-label="Show sidenote"
      type="checkbox"
      id="sidenote__checkbox--${label.replaceAll(" ", "-")}"
      class="sidenote__checkbox"><label
      tabindex="0"
      title=""
      aria-describedby="sidenote-${label.replaceAll(" ", "-")}"
      for="sidenote__checkbox--${label.replaceAll(" ", "-")}"
      class="sidenote__button"
      >${label}</label><small
      id="sidenote-${label.replaceAll(" ", "-")}"
      class="sidenote__content"><span class="sidenote__content-parenthesis"
      >(sidenote: </span>${content}<span class="sidenote__content-parenthesis">)</span></small></span>`;
}

function aside(content) {
  return `<aside class=" rounded-md px-8 py-2">${content}</aside>`;
}

module.exports = {
  imageShortcode,
  featuredImageShortcode,
  dateToString,
  note,
  aside,
};

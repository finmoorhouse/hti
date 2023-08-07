// Image shortcode

const Image = require("@11ty/eleventy-img");
const LFS_URL = "https://hti-images.netlify.app/episodes/";
const matter = require("gray-matter");
const fs = require('fs')

//Maybe this is inefficient?
async function imageShortcode(src, alt) {
  const str = fs.readFileSync(this.page.inputPath, "utf8");
  const data = matter(str).data;
  let sizes = "100vw";
  let metadata = "";
  try {
    // New image source is host URL plus episode number plus filename.
    updatedSrc = LFS_URL + `${data.number}/${src}`;
    metadata = await Image(updatedSrc, {
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
    });
  } catch (error) {
    // Handle error
    console.error("Error retrieving LFS image:", error);

    // Optionally return placeholder
    metadata = await Image(
      "https://upload.wikimedia.org/wikipedia/commons/1/14/Rubber_Duck_(8374802487).jpg",
      {
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
      }
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

function backLink(link, title) {
  return `<div class="mb-6">
  <a
    href="/${link}"
    class="flex items-center gap-1.5 text-sm font-semibold px-2.5 py-0.5 rounded-full max-w-max no-underline font-medium font-sans"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="white"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none"></rect>
      <polyline
        points="160 208 80 128 160 48"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></polyline>
    </svg>
    <span>Back to ${title}</span>
  </a>
</div>`;
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
  dateToString,
  backLink,
  note,
  aside,
};

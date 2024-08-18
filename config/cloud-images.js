const matter = require("gray-matter");
const fs = require("fs");

function cloudBG(content, path) {
  const cloudinaryPrefix =
    "https://res.cloudinary.com/hear-this-idea/image/upload/";

  return `<div
      class="rounded-lg ring-2 ring-slate-200 dark:ring-flexoki-600  p-0 mb-2 shadow-md w-full bg-cover relative overflow-hidden  "
      style="background-image: url('${cloudinaryPrefix}w_800,c_fill,g_auto,q_auto:good/f_auto/${path}')"
      ><div class="p-4 z-10 relative w-full h-full">${content}</div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent opacity-80 z-0 mix-blend-multiply"></div>
    </div>`;
}
function cloudFeaturedImage(content, src, alt) {
  const cloudinaryPrefix =
    "https://res.cloudinary.com/hear-this-idea/image/upload/";
  return `<div
    class="p-0 w-3/12 sm:w-full bg-cover overflow-hidden aspect-square sm:aspect-video"
    style="background-image: url('${cloudinaryPrefix}w_400,c_fill,g_auto,q_auto:good/f_auto/${src}')"
    >${content}
  </div>`;
}

function cloudImage(
  path = "episodes/77/bazaar-7",
  alt = "An image.",
  caption,
  source
) {
  const cloudinaryPrefix =
    "https://res.cloudinary.com/hear-this-idea/image/upload/";
  const str = fs.readFileSync(this.page.inputPath, "utf8");
  // Reading the file to get the 'number' frontmatter field.
  const data = matter(str).data;
  const episodePrefix = data.number ? `episodes/${data.number}/` : "";
  // Create a link to the original size image
  const originalSizeUrl = `${cloudinaryPrefix}${episodePrefix}${path}`;
  const widths = [500, 800, 1200];
  const srcset = widths
    .map(
      (width) =>
        `${cloudinaryPrefix}w_${width},c_fill,g_auto,q_auto:good/f_auto/${episodePrefix}${path} ${width}w`
    )
    .join(", ");
  const sizes = "(max-width: 600px) 100vw, 600px";
  const style =
    "max-width: 100%; max-height: 400px; height: auto; margin-left: auto; margin-right: auto; min-height:80px";
  const imageHtml = `<a class="!m-0" href="${originalSizeUrl}" target="_blank"><img
    loading="lazy"
    decoding="async"
    src="${cloudinaryPrefix}w_800,c_fill,g_auto,q_auto:good/f_auto/${episodePrefix}${path}"
    srcset="${srcset}"
    sizes="${sizes}"
    style="${style}" 
    class="font-sans text-sm bg-flint-400 bg-slate-100 dark:bg-flexoki-950 min-h-4"
    alt="(Image) ${alt}"></a>`;
  if (caption) {
    const sourceElement = source
      ? ` • <a target="_blank" href="${source}" class="m-0 p-0">Source</a>`
      : "";
    return `
        <figure class="!p-0 !m-0 group">
          ${imageHtml}<figcaption class="!pt-0 !my-2 !pb-4 font-sans opacity-60 group-hover:opacity-100 transition-opacity">${caption}${sourceElement}</figcaption>
        </figure>
      `;
  } else {
    return imageHtml;
  }
}

// This is both a filter and a shortcode currently. It returns just the url of the 1000px width version of the image passed to it.
function cloudImageSrc(src) {
  const cloudinaryPrefix =
    "https://res.cloudinary.com/hear-this-idea/image/upload/";
  return `${cloudinaryPrefix}w_1000,c_fill,g_auto,q_auto:good/f_auto/${src}`;
}

module.exports = {
  cloudBG,
  cloudFeaturedImage,
  cloudImage,
  cloudImageSrc,
};

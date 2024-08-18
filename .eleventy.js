const pluginTOC = require("eleventy-plugin-toc");
const wordStats = require("@photogabble/eleventy-plugin-word-stats");
const htmlShortcodes = require("./config/shortcodes.js");
const cloudImageShortcodes = require("./config/cloud-images.js");
const markdown = require("./config/markdown.js");
// const imageShortcodes = require("./config/local-images.js");


module.exports = function (config) {

  // Image shortcodes
  config.addLiquidShortcode("image", cloudImageShortcodes.cloudImage);
  config.addLiquidShortcode("cloudImage", cloudImageShortcodes.cloudImage);
  config.addLiquidFilter("bgsrcfilter", cloudImageShortcodes.cloudImageSrc);
  config.addPairedShortcode("bg", cloudImageShortcodes.cloudBG);
  config.addPairedShortcode("featured", cloudImageShortcodes.cloudFeaturedImage);
  
  // Obselete image shortcodes
  // config.addLiquidShortcode("image", imageShortcodes.imageShortcode);
  // config.addPairedShortcode("bg", imageShortcodes.backgroundImageShortcode);
  // config.addPairedShortcode("featured", imageShortcodes.featuredImageShortcode);
  
  // HTML shortcodes
  config.addPairedShortcode("aside", htmlShortcodes.aside);
  config.addShortcode("year", htmlShortcodes.dateToString);

  // Markdown
  config.setLibrary("md", markdown.markdownLib);

  // Plugins
  config.addPlugin(pluginTOC);
  config.addPlugin(wordStats);

  // Passthrough
  config.addPassthroughCopy("src/style/*.css");
  config.addPassthroughCopy({ "src/favicon": "/" });
  config.addPassthroughCopy("./src/admin");

  return {
    dir: {
      input: "./src",
      output: "./build",
    },
  };
};

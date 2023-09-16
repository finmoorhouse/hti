const pluginTOC = require("eleventy-plugin-toc");

const eleventyFetch = require("@11ty/eleventy-fetch");

const { imageShortcode, dateToString, aside, featuredImageShortcode, backgroundImageShortcode, generateBackgroundImageSrc } = require("./shortcodes");

const wordStats = require("@photogabble/eleventy-plugin-word-stats");


module.exports = function (config) {

  // Image shortcode
  config.addNunjucksAsyncShortcode("image", imageShortcode);
  config.addLiquidShortcode("image", imageShortcode);
  config.addJavaScriptFunction("image", imageShortcode);

  // BG image src shortcode
  config.addNunjucksAsyncShortcode("bg-src", generateBackgroundImageSrc);
  config.addLiquidShortcode("bg-src", generateBackgroundImageSrc);
  config.addJavaScriptFunction("bg-src", generateBackgroundImageSrc);

  // BG image src shortcode
  config.addNunjucksAsyncFilter("bgsrcfilter", generateBackgroundImageSrc);
  config.addLiquidFilter("bgsrcfilter", generateBackgroundImageSrc);

  // BG shortcode
  config.addPairedShortcode("bg", backgroundImageShortcode);

  //Aside shortcode
  config.addPairedShortcode("aside", aside);

  // Featured shortcode
  config.addPairedShortcode("featured", featuredImageShortcode);

  // Year shortcode
  config.addShortcode("year", dateToString);


  let markdownIt = require("markdown-it");
  let markdownItKatex = require("@iktakahiro/markdown-it-katex");
  let markdownItFootnote = require("markdown-it-footnote");
  const markdownItAnchor = require("markdown-it-anchor");
  const markdownItAttrs = require("markdown-it-attrs");

  let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  };

  let markdownItAnchorOptions = {
    level: 2, // minimum level header -- anchors will only be applied to h2 level headers and below but not h1
    permalink: markdownItAnchor.permalink.headerLink({
      safariReaderFix: false,
      class: "header-anchor",
    }),
  };

  let markdownLib = markdownIt(options)
    .use(markdownItFootnote)
    .use(markdownItKatex)
    .use(markdownItAnchor, markdownItAnchorOptions)
    .use(markdownItAttrs);

  // config.addPlugin(eleventyFetch, {
  //   duration: "1d",
  //   type: "buffer",
  // });

  config.setLibrary("md", markdownLib);

  config.addPlugin(pluginTOC);

  config.addPlugin(wordStats);

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

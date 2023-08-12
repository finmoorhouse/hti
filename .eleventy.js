const pluginTOC = require("eleventy-plugin-toc");

const eleventyFetch = require("@11ty/eleventy-fetch");

const { imageShortcode, dateToString, note, aside, featuredImageShortcode } = require("./shortcodes");

const wordStats = require("@photogabble/eleventy-plugin-word-stats");


module.exports = function (config) {

  config.addNunjucksAsyncShortcode("image", imageShortcode);
  config.addLiquidShortcode("image", imageShortcode);
  config.addJavaScriptFunction("image", imageShortcode);
  config.addNunjucksAsyncShortcode("featuredImage", featuredImageShortcode);
  config.addLiquidShortcode("featuredImage", featuredImageShortcode);
  config.addJavaScriptFunction("featuredImage", featuredImageShortcode);
  config.addPairedShortcode("aside", aside);
  config.addPairedShortcode("note", note);
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

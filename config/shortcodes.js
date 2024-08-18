const wordStats = require("@photogabble/eleventy-plugin-word-stats");
const pluginTOC = require("eleventy-plugin-toc");

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
  dateToString,
  aside,
};

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy('./src/assets/font');
  eleventyConfig.addPassthroughCopy('./src/assets/img');

  eleventyConfig.addPassthroughCopy("./src/assets/style/main.css");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");

  const {
    DateTime
  } = require("luxon");

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('yy-MM-dd');
  });

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat("DDD");
  });

  return {
    dir: { input: 'src', output: '_site' }
  };
};

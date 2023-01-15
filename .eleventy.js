/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("getSound", (sounds = [], label = "") => {
    // console.log({sounds, label});
    const sound = sounds.find(s => s.key === label.toString());
    if (sound) {
      return sound;
    }
    throw new Error(`Unknown sound key: "${label}"`);
  });

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};

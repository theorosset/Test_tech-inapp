const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

const publicPath =
  process.env.NODE_ENV === "production" ? "/Test_tech-inapp/" : "/";

module.exports = {
  publicPath: publicPath,
};

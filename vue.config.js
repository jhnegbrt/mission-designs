const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import '@/styles/main.scss';
          @import "@/styles/_variables.scss";
        `
      }
    }
  }
}
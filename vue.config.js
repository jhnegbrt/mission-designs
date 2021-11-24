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
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
}
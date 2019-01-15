module.exports = {
  title: "xxxxxxxxx",
  plugins: [
    require("./my-plugin.js")
  ],
  themeConfig: {
    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: "vuejs/vuepress",
    // if your docs are not at the root of the repo:
    docsDir: "docs",
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: "master",
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page!"
  },
  chainWebpack: config => {
    // force inlining all images regard-less of the size
    config.module.rules.delete('images');
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        // You options here, default options:
        // limit: 10000,
        // name: `assets/img/[name].[hash:8].[ext]`
      });
  }
};

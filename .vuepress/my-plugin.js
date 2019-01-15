console.log("myplugin loaded");

module.exports = (options = {}, context) => ({
  extendPageData($page) {
    //console.log('myplugin extendPageData', $page);
    $page.lastUpdated = "yyyyyyyyyyyyyyyyyyyyy";
  },

  async generated(pagePaths) {
    //console.log("myplugin generated", pagePaths, context);
  }
});

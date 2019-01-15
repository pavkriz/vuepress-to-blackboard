const axios = require("axios");
const fs = require("fs");
const juice = require("juice");

// load HTML
const contents = fs.readFileSync(".vuepress/dist/b.html", "utf8");
// load CSS
const css = fs.readFileSync(
  ".vuepress/dist/assets/css/0.styles.6484a32f.css",  // TODO configure predictable CSS name
  "utf8"
);

// inline styles to HTML (BB does not allow stylesheets)
const body = juice.inlineContent(contents, css);

// upload to particular "Content Item" in BB

const token = "xxx"; // OAuth access token

const config = {
  headers: {
    Authorization: "Bearer " + token
  }
};

axios
  .patch(
    "https://oliva.uhk.cz/learn/api/public/v1/courses/courseId:MIGRACE-KIKM-OWE/contents/_89239_1",
    {
      body
    },
    config
  )
  .then(response => {
    console.log(response);
  })
  .catch(e => {
    console.error(e);
  });

let contentfulClient = contentful.createClient({
  accessToken: "",
  space: ""
});

let blog_type_id = "blog";

var container = document.getElementById("content");

contentfulClient.getEntries({
  content_type: blog_type_id
});

let contentfulClient = contentful.createClient({
  accessToken: "bTJXK1FZB8j8LAXH4vgmtdZKiNtkmWfxELmSiruTou8",
  space: "2445owhf4tle"
});

let blog_type_id = "blogPost";

let container = document.getElementById('content');
console.log('content type', blog_type_id)


contentfulClient
  .getEntries({
    content_type: blog_type_id
  })
  .then(function(entries) {
    container.innerHTML = renderBlogs(entries.items);
  });


  function renderBlogs(blogs) {
  return (
    "<h1>Blogs</h1>" +
    '<div class="blog">' +
   	blogs.map(renderSinglePost).join("\n") +
    "</div>"
  );
}

function renderSinglePost(blog) {
	let fields = blog.fields;
	console.log('fields',fields);
	console.log('image url',fields.heroImage.fields.file.url,' fields.slug', fields.slug);

	//console.log(`render fields ${JSON.stringify(fields)}`);
	
	return (
		'<div class="blog">'+
		renderTitle(fields.title) +
		'<div class="blog__img">'+
		renderImage(fields.heroImage.fields.file.url, fields.slug) +
		'</div>' +
		'<div class="blog__details">'+
		//renderImage(field.image[0], fields.slug) +
		'</div>' +
		'</div>'
		)
	

}

function renderTitle(title) {
	if (title) {
		return title
		} else {
			return "";
		}
	}

function renderImage(image, slug) {
	if(image) {
		return (
			"<a href='/" +
			slug +
			"'><img src='" +
			image +
			"' width='200'/>"+
			"</a>"
			);

	} else {
		return ""
	}

}

	
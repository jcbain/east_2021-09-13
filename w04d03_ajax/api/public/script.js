$(() => { // same as $(document).ready(() => {})

  // making a get request to see some data
  const fetchBlogs = () => {
    $.ajax({
      url: "/api/blogs",
      method: "GET",
      dataType: "json",
      success: (blogs) => {
        console.log("data:", blogs)
        createBlogs(blogs);
  
      },
      error: (err) => {
        console.log(`there was an error: ${err}`)
      }
    })
  }

  fetchBlogs();

  const createBlog = (blog) => {

    const $title = $("<h1>").text(blog.title);
    const $body = $("<p>").text(blog.body);
    const $authorId = $("<p>").text(`author id: ${blog.userId}`) 

    const $blog = $("<div>").addClass("blog-post");
    
    $blog.append($title, $body, $authorId)


    // <div class="blog-post">
    //   <h1>Title</h1>
    //   <p>body of the blog post</p>
    //   <p>author id: 2</p>
    // </div>
    return $blog
  }

  const createBlogs = (blogs) => {
    // clear out blog-container
    const $blogContainer = $(".blog-container");
    $blogContainer.empty();

    // repopulate blog-container
    for( const blog of blogs) {
      const $blog = createBlog(blog);
      $blogContainer.prepend($blog);
    }
  }

  const $form = $("#new-blog-form");
  $form.on("submit", function(event) {
    event.preventDefault();
    console.log('form was submitted');

    const serializedData = $(this).serialize();

    $.post("/api/blogs", serializedData, (response) => {
      console.log(response)
      fetchBlogs()
    })
  })

})

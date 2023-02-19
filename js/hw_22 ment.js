// YOU NEED TO CREATE FUNCTIONS FOR SORTING BY COMMENT LENGTH AND BY ID
// I HAVE INITIALIZED THE FUNCTIONS sortById() AND sortByCommentLength()
// YOU ONLY NEED TO WRITE THE CODE INSIDE

// FETCHING FUNCTION
const getData = () =>
  fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );

// RENDERING FUNCTION
const render = (posts) => {
  let output = "";
  posts.forEach((post) => {
    output += `
      <div class="post-item">
        <h3>Title: ${post.title}</h3>
        <p>Body: ${post.body}</p>
        <div class="post-info">
          <p>ID: ${post.id}</p>
          <p>User ID: ${post.userId}</p>
          <p>Comment length: ${post.body.length}</p>
        </div>
      </div>
    `;
  });
  document.getElementById("posts").innerHTML = output;
};

// CLICK FUNCTION HANDLER
const handleClick = (sortFn) => {
  getData().then((posts) => {
    const sortedPosts = sortFn(posts);
    render(sortedPosts);
  });
};

// INITIAL
getData().then((posts) => {
  render(posts);

  const byIdBtn = document.getElementById("byId");
  byIdBtn.addEventListener("click", () => handleClick(sortById));

  const byCommentLengthBtn = document.getElementById("byCommentLength");
  byCommentLengthBtn.addEventListener("click", () =>
    handleClick(sortByCommentLength)
  );
});

// YOUR CODE UNDER THE COMMENT

// SORTING FUNCTION BY ID (post.id)
const sortById = (posts) => {
  const sortById = posts.sort((x,y) => x.id < y.id ? 1 : -1)
  return sortById
};

// SORTING FUNCTION BY LENGTH (post.body.length)
const sortByCommentLength = (posts) => {
  const sortLenght = posts.sort((x, y) => x.body.length > y.body.length ? 1 : -1);
 return sortLenght
}



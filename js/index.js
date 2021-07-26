const renderPosts = async (e) => {
  e.preventDefault();
  const uri = `http://localhost:3000/posts`;

  const response = await fetch(uri);
  const posts = await response.json();
  console.log(posts);
}

window.addEventListener('DOMContentLoaded', renderPosts);
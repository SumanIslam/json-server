const blogPostContainer = document.querySelector('.blogs');

const renderPosts = async (e) => {
  e.preventDefault();
  const uri = `http://localhost:3000/posts?_sort=likes&_order=desc`;

  const response = await fetch(uri);
  const posts = await response.json();

  let template = '';
  posts.forEach(post => {
    template += `
      <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>
          ${post.body.slice(0,200).concat('......')}
        </p>
        <a href="/details.html?id=${post.id}">Read more...</a>
      </div>
    `
  })
  blogPostContainer.innerHTML = template;
}

window.addEventListener('DOMContentLoaded', renderPosts);
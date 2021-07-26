const blogPostContainer = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');
const search = document.querySelector('.search input')

const renderPosts = async (term) => {
  let uri = `http://localhost:3000/posts?_sort=likes&_order=desc`;

  if(term) {
    uri += `&q=${term}`;
  }

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

const searchBlogs = () => {
  renderPosts(searchForm.search.value.trim());
}


search.addEventListener('keyup', searchBlogs);
window.addEventListener('DOMContentLoaded', () => renderPosts());
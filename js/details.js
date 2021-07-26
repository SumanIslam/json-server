const postDetailsContainer = document.querySelector('.details');
const deleteBlog = document.querySelector('.delete');

const urlParamId = new URLSearchParams(window.location.search).get('id');

const renderDetails = async () => {
  const response = await fetch(`http://localhost:3000/posts/${urlParamId}`);
  const post = await response.json();

  let template = `
    <div class="post">
      <h1>${post.title}</h1>
      <p><small>${post.likes} likes</small></p>
      <p>${post.body}</p>
    <div/>
  `;

  postDetailsContainer.innerHTML = template;
}

const removeBlog = async () => {
  await fetch(`http://localhost:3000/posts/${urlParamId}`,{
    method: 'DELETE'
  })

  window.location.replace('/index.html');
}

deleteBlog.addEventListener('click', removeBlog)
window.addEventListener('DOMContentLoaded', renderDetails)
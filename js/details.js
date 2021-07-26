const postDetailsContainer = document.querySelector('.details')
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
  console.log(post);
}


window.addEventListener('DOMContentLoaded', renderDetails)
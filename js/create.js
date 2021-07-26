const form = document.querySelector('form');

const savePost = async (e) => {
  e.preventDefault();
  const title = form.title.value;
  const body = form.body.value;

  const doc = {
    title,
    body,
    likes: 0,
  };

  await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(doc),
    headers: {'Content-Type': 'application/json'}
  });

  window.location.replace('/index.html');
}

window.addEventListener('submit', savePost);
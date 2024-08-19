document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('blogForm');
  const formMessage = document.getElementById('formMessage');
  
  form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const username = form.username.value.trim();
      const title = form.title.value.trim();
      const content = form.content.value.trim();
      
      if (!username || !title || !content) {
          formMessage.classList.remove('hidden');
          return;
      }
      
      formMessage.classList.add('hidden');
      
      const blogPost = { username, title, content };
      const posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.push(blogPost);
      localStorage.setItem('posts', JSON.stringify(posts));
      
      window.location.href = 'blog.html';
  });
});

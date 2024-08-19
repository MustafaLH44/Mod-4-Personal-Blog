document.addEventListener('DOMContentLoaded', () => {
  const postsContainer = document.getElementById('postsContainer');
  
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  
  posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.className = 'post';
      postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p><strong>Author:</strong> ${post.username}</p>
          <p>${post.content}</p>
      `;
      postsContainer.appendChild(postElement);
  });
});

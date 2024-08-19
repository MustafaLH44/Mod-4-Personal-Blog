document.addEventListener('DOMContentLoaded', () => {
  const toggleModeButton = document.getElementById('toggleMode');
  const backButton = document.getElementById('backButton');
  
  // Load mode from localStorage or default to light mode
  const currentMode = localStorage.getItem('mode') || 'light-mode';
  document.body.className = currentMode;
  
  toggleModeButton.addEventListener('click', () => {
      const newMode = document.body.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';
      document.body.className = newMode;
      localStorage.setItem('mode', newMode);
  });
  
  backButton.addEventListener('click', () => {
      window.location.href = 'index.html';
  });
});

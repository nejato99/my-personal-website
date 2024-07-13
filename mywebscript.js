// Add smooth scrolling to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      window.scrollTo({
        topI apologize, but it seems that my response got cut off again. Here's the complete JavaScript code for the personal website:
  
  JavaScript (script.js):
  `javascript
  // Add smooth scrolling to navigation links
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });
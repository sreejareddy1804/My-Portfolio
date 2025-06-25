window.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(res => res.text())
    .then(data => document.getElementById('header').innerHTML = data);

  fetch('footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data);

  // Dark/light toggle
  document.addEventListener('click', e => {
    if (e.target.id === 'themeToggle') {
      document.body.classList.toggle('dark-mode');
    }
  });

  // Scroll animation
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});

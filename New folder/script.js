function showSection(sectionId) {
  let sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(sectionId).classList.add('active');
}

const toggleBtn = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  toggleBtn.textContent = '☀️ Light';
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = '☀️ Light';
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = '🌙 Dark';
  }
});
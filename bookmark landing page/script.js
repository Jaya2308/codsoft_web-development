const settingsButton = document.getElementById('settings-button');
const settingsPopup = document.querySelector('.settings-popup');

settingsButton.addEventListener('click', () => {
  settingsPopup.style.display = (settingsPopup.style.display === 'block') ? 'none' : 'block';
});

const bookmarkLinks = document.querySelectorAll('.folder-content a');

bookmarkLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

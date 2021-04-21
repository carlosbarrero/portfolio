const navLinksElement = document.getElementById('nav-links');
const menuButtonElement = document.getElementById('menu-btn');

const toggleMenuVisibility = () => {
  return navLinksElement.classList.toggle('is-visible');
};

menuButtonElement.addEventListener('click', toggleMenuVisibility);

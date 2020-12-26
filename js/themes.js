let theme = false;

const toggleButton = () => {
  theme = !theme;

  switch (theme) {
    case true:
      document.getElementById('nav').classList.add('darkMode');
      document.getElementById('switchButtonWhite').src =
        './images/switchbuttonBlue.png';
      document.getElementById('article-section').classList.add('darkMode');
      document.getElementById('main').classList.add('darkMode');
      document.getElementById('loadMore').classList.add('darkMode');
      document.getElementById('arrowGroup').classList.add('darkMode');
      document.getElementById('footerForm').classList.add('darkMode');
      break;
    case false:
      document.getElementById('nav').classList.remove('darkMode');
      document.getElementById('switchButtonWhite').src =
        './images/switch.png';
      document.getElementById('article-section').classList.remove('darkMode');
      document.getElementById('main').classList.remove('darkMode');
      document.getElementById('loadMore').classList.remove('darkMode');
      document.getElementById('arrowGroup').classList.remove('darkMode');
      document.getElementById('footerForm').classList.remove('darkMode');
      break;
  }
};

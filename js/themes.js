let theme = false;

const toggleButton = () => {
  theme = true;
  
  switch (theme) {
    case true:
      document.getElementById('nav').classList.add('darkMode');
      break;
    case false:
      document.getElementById('nav').classList.remove('darkMode');
      break;
  }
};

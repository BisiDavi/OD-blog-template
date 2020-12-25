let theme = false;

const toggleButton = () => {
  theme = !theme;

  switch (theme) {
    case true:
      document.getElementById('nav').classList.add('darkMode');
      document.getElementById('switchButtonWhite').src =
        './images/switchbuttonBlue.png';
      break;
    case false:
      document.getElementById('nav').classList.remove('darkMode');
      document.getElementById('switchButtonWhite').src =
        './images/switch.png';
      break;
  }
};

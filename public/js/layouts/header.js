const toggleButton = document.getElementById('header__hamburger-toggle')
toggleButton.addEventListener('click', () => {
  if (toggleButton.hasAttribute('open')) {
    toggleButton.removeAttribute('open')
  } else {
    toggleButton.setAttribute('open', '')
  }
})

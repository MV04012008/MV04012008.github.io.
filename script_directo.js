window.onload = function() {
  document.body.classList.remove('not-loaded');

  setTimeout(function() {
    const paper = document.querySelector('.wrapper-paper');
    if (paper) {
      paper.classList.add('paper-visible');
    }
  }, 1200);
};
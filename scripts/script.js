window.onscroll = function () {
  showBackIcon();
};

function showBackIcon() {
  if (window.scrollY < 200) {
    document.getElementById("back-icon").style.display = "none";
  } else {
    document.getElementById("back-icon").style.display = "block";
  }
}

function goToTop() {
  document.documentElement.scrollTop = 0;
}

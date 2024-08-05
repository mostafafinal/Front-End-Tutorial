const toTop = document.querySelector("span");

// Scrolling Behavior
window.onscroll = function () {
  console.log(this.scrollY);

  this.scrollY >= 500
    ? toTop.classList.add("to-top")
    : toTop.classList.remove("to-top");
};

// Scrolling Default
toTop.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};

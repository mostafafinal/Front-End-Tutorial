const scrollProgress = document.querySelector(".scroll-progress");

// Calc client currient scroll height and the page scroll height
const allScrollHeight = document.documentElement.scrollHeight;
const clientCurrentScroll = document.documentElement.clientHeight;
// Overall remain height for making the scroll progress value reach to 100% and 0%
const height = allScrollHeight - clientCurrentScroll;

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollProgressValue = `${(scrollTop / height) * 100}%`;
  scrollProgress.style.width = scrollProgressValue;
});

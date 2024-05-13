// Handling Tabs
const tabs = document.querySelector(".tabs");
const content = document.querySelector(".content");

// Getting an array from both tabs and content divs
const arrOfTabs = Array.from(tabs.children);
const arrOfContent = Array.from(content.children);

// A function that empties the content div
emptyContentDiv();
function emptyContentDiv() {
  for (let i = 0; i < arrOfContent.length; i++) {
    arrOfContent[i].style.display = "none";
  }
}
arrOfContent[0].style.display = "block";

// Linking tabs with content
tabs.onclick = function (tab) {
  // remove current tab activation
  document.querySelector(".tabs .active").classList.remove("active");
  // add the activation to the clicked tab
  tab.target.classList.add("active");
  emptyContentDiv();
  arrOfContent[arrOfTabs.indexOf(tab.target)].style.display = "block";
};

// const obj = {};

// for (let i = 0; i < arrOfTabs.length; i++) {
//   Object.assign(obj, { [`${arrOfTabs[i]}`]: `${arrOfContent[i]}` });
// }
// console.log(obj[0]);

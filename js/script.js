// toggle class on icon
let myMenu = document.querySelector(".toggle-menu");
let myLinks = document.querySelector(".links");

// myMenu.onclick = () => {
//   this.classList.add("menu-active");
// };
// console.log(myMenu);

myMenu.onclick = function (e) {
  e.stopPropagation();
  // show the arrow when click (toggle => show and remove)
  this.classList.toggle("menu-active");
  // show the menu links in mobile mode (toggle => show and remove)
  myLinks.classList.toggle("open");
};
// click anyWher Outside menu And toggle button
document.addEventListener("click", (e) => {
  if (e.target !== myMenu && e.target !== myLinks) {
    // check if menu is open
    if (myLinks.classList.contains("open")) {
      // toggle (add) Class "menu actve" on button
      myMenu.classList.toggle("menu-active");
      // toggle class "open" On Links
      myLinks.classList.toggle("open");
    }
  }
});

// stopPropagation on menu
myLinks.onclick = function (e) {
  e.stopPropagation();
};

// Select skills selector

let ourSkills = document.querySelector(".progress");

window.onscroll = function () {
  // get ofset top from skills
  let skillsOfsetTop = ourSkills.offsetTop;

  // outer hight
  let skillOuterHeight = ourSkills.offsetHeight;

  // window height
  let windowHeight = this.innerHeight;

  // scroll Top
  let ScrollTop = this.pageYOffset;

  if (ScrollTop > skillsOfsetTop + skillOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".technique-box .skill-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.prog;
    });
  }
};

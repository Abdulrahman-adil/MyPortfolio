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
// click anyWear Outside menu And toggle button
document.addEventListener("click", (e) => {
  if (e.target !== myMenu && e.target !== myLinks) {
    // check if menu is open
    if (myLinks.classList.contains("open")) {
      // toggle (add) Class "menu active" on button
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
let goUp = document.getElementById("totp");
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
  // go up
  if (window.scrollY >= 700) {
    goUp.style.display = "block";
  } else {
    goUp.style.display = "none";
  }
};
// Click For Going Up
goUp.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
let mainColors = localStorage.getItem("colors");
if (mainColors !== null) {
  // console.log("empty");
  document.documentElement.style.setProperty(
    "--bs-main",
    localStorage.getItem("colors")
  );
}
// change colors
const myColors = document.querySelectorAll(".colors-option li");
// Loop On All Colors
myColors.forEach((li) => {
  // Click On Every List Items
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);

    //set Color On Root
    document.documentElement.style.setProperty(
      "--bs-main",
      e.currentTarget.dataset.color
    );
    // set the current dataset to local storage
    localStorage.setItem("colors", e.currentTarget.dataset.color);
    // Remove Active Class From All children's
    let removeActive = e.target.parentElement.querySelectorAll(".activ");
    removeActive.forEach((element) => {
      element.classList.remove("activ");
    });

    //add Active Class to current
    e.currentTarget.classList.add("activ");
  });
});


//toogel our design
let ourDesgin = document.querySelectorAll('.our-design-links li');
ourDesgin.forEach(our => {
  console.log(our);
our.addEventListener('click', function (){
  let review = document.querySelector('.review');
  review.classList.remove('d-none')
})
})
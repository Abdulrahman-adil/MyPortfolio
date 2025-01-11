//Start Button for Download my CV File
// 01 git the button
let downloadBtn = document.getElementById("downloadBtn");
// 02 // Set the file URL (This should be the path to your file)
let DownMyCv = "../files/Junior .net Developer.pdf";
// 03 // Add an event listener to the button
downloadBtn.addEventListener("click", function () {
  // Create an anchor element
  let a = document.createElement("a");
  // Set the href attribute to the file URL
  a.href = DownMyCv;
  a.click();
  a.remove();
});

// change the heading on smaller screens:
// function updateCvText() {
//   const cvHeading = document.querySelector(".cv .text");

//   if (window.innerHTML <= 576) {
//     cvHeading.textContent = "CV";
//   } else {
//     cvHeading.textContent = "My Resume";
//   }
// }
// // Call the function on page load
// window.onload = updateCVText;

// // Call the function when resizing the window
// window.onresize = updateCVText;
//End Button for Download my CV File

//==========================================================================
// toggle class on icon
let myMenu = document.querySelector(".toggle-menu");
let myLinks = document.querySelector(".links");
//==========================================================================

// myMenu.onclick = () => {
//   this.classList.add("menu-active");
// };
// console.log(myMenu);
//==========================================================================

//Start Typing hello text
// -1 Array of text to be Typed
const texts = ["Hi , i'm Abdo", "Software Engineer"];
// index to keep track current text
let textIndex = 0;
// index to keep track current character
let charIndex = 0;
// reference of the first text
let text1 = document.getElementById("text1");
// reference of the first text
let text2 = document.getElementById("text2");
// function to type Out the texts
function typeText() {
  // chech if theres are still chars to type
  if (charIndex < texts[textIndex].length) {
    // Append the next chars to the approoprate h2
    if (textIndex % 2 === 0) {
      text1.innerHTML += texts[textIndex].charAt(charIndex);
    } else {
      text2.innerHTML += texts[textIndex].charAt(charIndex);
    }
    // increment the index for the next character
    charIndex++;

    // setTime out function for delay
    setTimeout(typeText, 100);
  } else {
    // Move To the next index
    textIndex++;
    // reset the char index for the new index
    charIndex = 0;
    // if all texts are typed , stop typed animation
    if (textIndex === texts.length) {
      return;
    }
    // add the blinking text to the next h2
    if (textIndex % 2 === 0) {
      text1.classList.add("blinking-cursor");
      text2.classList.remove("blinking-cursor");
    } else {
      text2.classList.add("blinking-cursor");
      text1.classList.remove("blinking-cursor");
    }
    // Call typeText function recursively to type the next text
    setTimeout(typeText, 1000); // Add a delay before typing the next text
  }
}
window.onload = typeText;
//==========================================================================
// stopPropagation on menu
myLinks.onclick = function (e) {
  e.stopPropagation();
};
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

//==========================================================================

// animations
window.addEventListener("scroll", () => {
  let img = document.getElementById("img");
  let ourDesign = document.getElementById("our-design");
  let imgPosition = img.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.5;

  if (imgPosition < screenPosition) {
    img.classList.add("show");
    ourDesign.classList.add("show");
  } else {
    img.classList.remove("show");
    ourDesign.classList.remove("show");
  }
});

// Select skills selector

// let ourSkills = document.querySelector(".prog-ress");

// window.onscroll = function () {
//   // get ofset top from skills
//   let skillsOfsetTop = ourSkills.offsetTop;

//   // outer hight
//   let skillOuterHeight = ourSkills.offsetHeight;

//   // window height
//   let windowHeight = this.innerHeight;

//   // scroll Top
//   let ScrollTop = this.pageYOffset;

//   if (ScrollTop > skillsOfsetTop + skillOuterHeight - windowHeight) {
//     let allSkills = document.querySelectorAll(
//       ".technique-box .skill-progress span"
//     );
//     allSkills.forEach((skill) => {
//       skill.style.width = skill.dataset.prog;
//     });
//   }
// };

// go up
let goUp = document.getElementById("totp");
window.onscroll = function () {
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
    let removeActive = e.target.parentElement.querySelectorAll(".active");
    removeActive.forEach((element) => {
      element.classList.remove("active");
    });

    //add Active Class to current
    e.currentTarget.classList.add("active");
  });
});

let ourDesignLinks = document.querySelectorAll(".our-design-links li");
ourDesignLinks.forEach((e) => {
  let heading = e.querySelector(".head");
  let review = e.querySelector(".review");
  heading.addEventListener("click", () => {
    review.classList.toggle("d-none");
  });
});

// for card Contents

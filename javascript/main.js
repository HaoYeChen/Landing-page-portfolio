// Main navbar
const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
  rootMargin: "300px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// End of main navbar

//Hamburger menu
function openNav() {
  document.getElementById("hamburger").style.height = "100%";
}

function closeNav() {
  document.getElementById("hamburger").style.height = "0%";
}


// close hamburger menu after click a
$( '.menu li a' ).on("click", function(){
  $('#hamburger-menu-icon').click();
});


// End of hamburger menu
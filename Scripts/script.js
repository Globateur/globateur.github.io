// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
function navSlide() {

  const burger = document.querySelector(".burger");
  console.log(burger);
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  
  burger.addEventListener("click", () => {
      //Toggle Nav
      nav.classList.toggle("nav-active");
      
      //Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = ""
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
      });
      //Burger Animation
      burger.classList.toggle("toggle");
  });
  
}

navSlide();

function cache() {
  var elt = document.getElementById('offres');
  elt.style.display='block';
  var elt = document.getElementById('acache');
  elt.style.display='none';
};

function showformulaire(){
  var elt = document.getElementById('form');
  elt.style.display='block';
  var elt = document.getElementById('offres');
  elt.style.display='none';
}

var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );
if (page == "Unity%20cours%20en%20ligne.html"){

  var parentWidth = (document.body.clientWidth - 50) * 70/100
  console.log((parentWidth * document.getElementById('vid2').width / 100))


  document.getElementById('vid1').height = (parentWidth * document.getElementById('vid2').width / 100) * 720 / 1280;
  document.getElementById('vid2').height = (parentWidth * document.getElementById('vid2').width / 100) * 720 / 1280 - 4;

  var video = document.getElementById('vid2');

  function checkScroll() {
      var fraction = 0.8; // Play when 80% of the player is visible.

      var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
              b = y + h, //bottom
              visibleX, visibleY, visible;

              visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
              visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

              visible = visibleX * visibleY / (w * h);

              if (visible > fraction) {
                  video.play();
              } else {
                  video.pause();
              }

  }

  window.addEventListener('scroll', checkScroll, false);
  window.addEventListener('resize', checkScroll, false);
}
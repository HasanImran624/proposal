const parentElement = document.getElementById("parentElement");
const showMassage = document.getElementById("showMassage");
const changeColor = document.body.style;

propose = () => {
  parentElement.style.display = "none";
  showMessage.style.display = "block";
  changeColor.background =
    "linear-gradient(116.82deg, #FEDE00 0%, #27cbff 100%)";
};
/* Throttle function to limit how often hearts are created */
function throttle(func, delay) {
  let lastCall = 0;
  return function(...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
          return;
      }
      lastCall = now;
      return func(...args);
  };
}
// Animate Text with Anim JS
var textWrapper = document.querySelector(".ml6 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml6 .letter",
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml6",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
// JavaScript for the cute heart follower animation
function createHeart(e) {
  // Create a new heart element
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Set the position of the heart to follow the mouse
  heart.style.left = `${e.pageX}px`;
  heart.style.top = `${e.pageY}px`;

  // Add the heart to the document body
  document.body.appendChild(heart);

  // Remove the heart after the animation completes
  setTimeout(() => {
      heart.remove();
  }, 3000); // 3 seconds (matches the CSS animation duration)
}

// Add event listener to mousemove with throttling (delay in ms)
document.addEventListener('mousemove', throttle(createHeart, 200)); // Change '200' for more or less hearts
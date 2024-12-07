
// Select the lastCard element
const lastCard = document.getElementById("lastCard-id");

if (lastCard) {
  AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 200, // offset (in px) from the original trigger point
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  });


// Listen for when the element with data-aos-id="lastCard" enters the viewport
document.addEventListener("aos:in:lastCard", ({ detail }) => {
  console.log("Last card animated in", detail);
  
  // Remove exit-animation if it exists
  lastCard.classList.add("exit-animation");
});

}
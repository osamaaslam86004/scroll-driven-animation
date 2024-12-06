
  // Listen for AOS events
  document.addEventListener("aos:in", ({ detail }) => {
    console.log("animated in", detail);
    // Remove exit animation class if it exists
    detail.classList.remove("exit-animation");
  });

  document.addEventListener("aos:out", ({ detail }) => {
    console.log("animated out", detail);
    // Add exit animation class when the element is out of the viewport
    detail.classList.add("exit-animation");
  });


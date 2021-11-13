// Grab all panels in a nodelist (similar to an array)
const panels = document.querySelectorAll(".panel");
// Grab all h3 elements
const headers = document.querySelectorAll("h3");

// Dynamically update the left attribute for each h3 element based on length of text
headers.forEach((h3) => {
  let len = h3.innerText.length;
  let leftPos = `${50 - len}%`;
  h3.style.left = leftPos;
  console.log(leftPos);
});

// Add 'active' class when panel is clicked if it doesn't have it, remove it if it does
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

// Helper function to remove 'active' class
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

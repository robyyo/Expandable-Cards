const panels = document.querySelectorAll(".panel");

const headers = document.querySelectorAll("h3");
console.log(headers);

headers.forEach((h3) => {
  let len = h3.innerText.length;
  let leftPos = `calc(50% + ${len})`;
  h3.style.left = leftPos;
});

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

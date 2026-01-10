const scrollContainer = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");


scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 900;
});

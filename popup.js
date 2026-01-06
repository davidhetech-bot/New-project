const openBtn = document.getElementById("openPopup");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");


openBtn.addEventListener("click", () => {
  popup.classList.add("open");
});


closeBtn.addEventListener("click", () => {
  popup.classList.remove("open");
});


let toastBox = document.getElementById("toastBox");

let successMessage = '<i class="fa-solid fa-circle-check"></i> Success occurred';
let errorMessage = '<i class="fa-solid fa-circle-exclamation"></i> Error occurred';
let invalidMessage = '<i class="fa-solid fa-circle-xmark"></i> Invalid message';

function showToast(message, type) {
  let toast = document.createElement("div");
  toast.classList.add("toast", type);
  toast.innerHTML = message;

  toastBox.appendChild(toast);

  if (type === "success") {
    toast.style.backgroundColor = "#4BB543";
  } else if (type === "error") {
    toast.style.backgroundColor = "#FF3333";
  } else if (type === "invalid") {
    toast.style.backgroundColor = "#FFCC00";
  } if (type === "info") {
    toast.style.backgroundColor = "#3399FF";
  }     

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
document.getElementById("successBtn").addEventListener("click", () => {
  showToast(successMessage, "success");
});

document.getElementById("errorBtn").addEventListener("click", () => {
  showToast(errorMessage, "error");
}); 
document.getElementById("invalidBtn").addEventListener("click", () => {
  showToast(invalidMessage, "invalid");
});
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

function updatestorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");

  img.src = "app.png";

  notesContainer.appendChild(inputBox).appendChild(img);
  updatestorage(); // save immediately
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updatestorage();
  } 
  else if (e.target.tagName === "P") {
    const notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.oninput = updatestorage;
    });
  }
})


document.addEventListener("keydown", event =>{
  if(event.key === "Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})

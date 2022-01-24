let submit = document.querySelector(".submit");
let notesElem = document.querySelector(".notes");
let title = document.querySelector("#text");
let Note = document.querySelector("#Note");
let notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((element) => {
    addNotes(element);
  });
}
submit.addEventListener("click", (e) => {
  e.preventDefault();
  addNotes();
});
function addNotes(obj) {
  let card = document.createElement("div");
  card.classList.add("card");
  let titleval = title.value;
  let NoteVal = Note.value;
  if (obj) {
    titleval = obj.title;
    NoteVal = obj.Note;
  }
  if (titleval) {
    card.innerHTML = `<h3>${titleval}</h3>
                                    <p class="ptag">${NoteVal}</p>
                             <button class="del">Delete</button>`;
    notesElem.appendChild(card);
    updateLs();
  }
  let del = card.querySelector(".del");
  del.addEventListener("click", () => {
    card.remove();
    updateLs();
  });
}
function updateLs() {
  let card = document.querySelectorAll(".card");
  let arr = [];
  card.forEach((element) => {
    arr.push({
      title: element.children[0].innerText,
      Note: element.children[1].innerText,
    });
  });
  localStorage.setItem("notes", JSON.stringify(arr));
}

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    const noteWrapper = document.createElement("div");
    noteWrapper.className = "input-box";

    const inputBox = document.createElement("p");
    inputBox.setAttribute("contenteditable", "true");
    inputBox.style.minHeight = "20px";  // ensures space for cursor
    inputBox.style.outline = "none";    // no browser outline

    const img = document.createElement("img");
    img.src = "/img/delete.png";

    noteWrapper.appendChild(inputBox);
    noteWrapper.appendChild(img);
    notesContainer.appendChild(noteWrapper);

    inputBox.focus(); // ✅ brings cursor into focus
});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        const notes = document.querySelectorAll(".input-box p");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        });
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

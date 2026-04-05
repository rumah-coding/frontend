
localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];
let editId = null;

function saveNote() {

    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title === "" && content === "") {
        alert("Note cannot be empty");
        return;
    }

    if (editId) {
        notes = notes.map(note => {
            if (note.id === editId) {
                return {
                    ...note,
                    title,
                    content
                };
            }
            return note;
        });

        editId = null;

    } else {

        const newNote = {
            id: Date.now(),
            title,
            content
        };

        notes.push(newNote);

    }

    localStorage.setItem("notes", JSON.stringify(notes));

    titleInput.value = "";
    contentInput.value = "";

    renderNotes();
}

function renderNotes(filtered = notes) {

    const notesContainer = document.getElementById("notes");
    const empty = document.getElementById("empty");

    notesContainer.innerHTML = "";

    if (filtered.length === 0) {
        empty.style.display = "block";
        return;
    }

    empty.style.display = "none";

    filtered.forEach(note => {

        const div = document.createElement("div");
        div.className = "note";

        div.innerHTML = `
            <div>
                <div class="note-title">${note.title}</div>
                <div class="note-content">${note.content}</div>
            </div>
            <div class="note-actions">
                <button class="edit" onclick="editNote(${note.id})">Edit</button>
                <button class="delete" onclick="deleteNote(${note.id})">Delete</button>
            </div>
        `;

        notesContainer.appendChild(div);

    });
}

function deleteNote(id) {

    if (!confirm("Delete this note?")) return;

    notes = notes.filter(note => note.id !== id);

    localStorage.setItem("notes", JSON.stringify(notes));

    renderNotes();
}

function editNote(id) {

    const note = notes.find(note => note.id === id);

    document.getElementById("title").value = note.title;
    document.getElementById("content").value = note.content;

    editId = id;
}

function searchNotes() {

    const keyword = document.getElementById("search").value.toLowerCase();

    const filtered = notes.filter(note =>
        note.title.toLowerCase().includes(keyword) ||
        note.content.toLowerCase().includes(keyword)
    );

    renderNotes(filtered);
}

renderNotes();

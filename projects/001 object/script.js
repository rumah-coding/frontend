

// Array of objects
let students = [];

function addStudent() {

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const major = document.getElementById("major").value;

    if (name === "" || age === "" || major === "") {
        alert("Please fill all fields");
        return;
    }

    // Object
    const student = {
        id: Date.now(),
        name: name,
        age: Number(age),
        major: major
    };

    students.push(student);

    renderStudents();
    showJSON();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("major").value = "";
}

function renderStudents() {

    const container = document.getElementById("students");
    container.innerHTML = "";

    students.forEach(student => {

        const div = document.createElement("div");
        div.className = "student";

        div.innerHTML = `
            <strong>${student.name}</strong><br>
            Age: ${student.age}<br>
            Major: ${student.major}
        `;

        container.appendChild(div);
    });
}

function showJSON() {

    // Convert object to JSON string
    const json = JSON.stringify(students, null, 2);

    document.getElementById("jsonOutput").textContent = json;
}

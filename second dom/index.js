
/* 1. Student data array */
const students = [
    {
        id: 1,
        name: "Maya",
        course: "Frontend",
        score: 92
    },
    {
        id: 2,
        name: "John",
        course: "Backend",
        score: 75
    },
    {
        id: 3,
        name: "Aline",
        course: "Frontend",
        score: 85
    },
    {
        id: 4,
        name: "Peter",
        course: "Backend",
        score: 42
    },
    {
        id: 5,
        name: "Sarah",
        course: "Frontend",
        score: 68
    },
    {
        id: 6,
        name: "David",
        course: "Backend",
        score: 88
    },
    {
        id: 7,
        name: "Grace",
        course: "Frontend",
        score: 47
    },
    {
        id: 8,
        name: "Eric",
        course: "Backend",
        score: 80
    }
];


/* 2. Render function */
function render() {

    // Sort a COPY: Frontend students first
    const sortedStudents = [...students].sort((a, b) => {
        if (a.course === "Frontend" && b.course !== "Frontend") {
            return -1;
        }

        if (a.course !== "Frontend" && b.course === "Frontend") {
            return 1;
        }

        return a.name.localeCompare(b.name);
    });

    // Calculate total count
    const count = students.length;

    // Calculate average score
    const totalScore = students.reduce(
        (total, student) => total + student.score,
        0
    );

    const average = count > 0 ? totalScore / count : 0;

    // Find the highest score
    const highestScore = count > 0
        ? Math.max(...students.map(student => student.score))
        : null;

    // Find all students with the highest score
    const topStudents = students.filter(
        student => student.score === highestScore
    );

    // Display statistics
    document.getElementById("count").textContent = count;

    document.getElementById("average").textContent =
        count > 0 ? average.toFixed(2) : "0.00";

    document.getElementById("top-students").textContent =
        count > 0
            ? topStudents.map(student => student.name).join(", ")
              + " (" + highestScore + ")"
            : "None";

    // Get the student cards container
    const studentList = document.getElementById("student-list");

    // Render all student cards
    studentList.innerHTML = sortedStudents.map(student => {

        let scoreClass = "";

        if (student.score >= 80) {
            scoreClass = "high-score";
        } else if (student.score < 50) {
            scoreClass = "failed";
        }

        return `
            <div class="student-card ${scoreClass}">
                <h3>${student.name}</h3>

                <p>
                    <strong>Course:</strong>
                    ${student.course}
                </p>

                <p class="score">
                    <strong>Score:</strong>
                    ${student.score}
                </p>

                <button onclick="addPoints(${student.id})">
                    Add 5 Points
                </button>
            </div>
        `;
    }).join("");
}


/* 3. Update a student's score */
function addPoints(id) {

    const student = students.find(student => student.id === id);

    if (!student) return;

    // Increase score, without exceeding 100
    student.score = Math.min(student.score + 5, 100);

    // Render again after the change
    render();
}


/* 4. Initial render */
render();

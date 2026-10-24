
const myName = "KWIZERA DIVINE";

// 1. Change the page title and heading
document.title = myName;
document.querySelector("h1").textContent = myName;

// 2. Set the profile image
const profileImage = document.getElementById("profile-image");
profileImage.src = "img.jpg";
profileImage.alt = "Photo of "PHOTO OF KWIZERA DIVINE";

// 3. Add active class to the first navigation link
const firstLink = document.querySelector("nav a");
firstLink.classList.add("active");

// 4. Add three skills
const skills = ["HTML", "CSS", "JavaScript"];
const skillsList = document.getElementById("skills-list");

skills.forEach(function(skill) {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

// 5. Display today's date
const today = new Date().toLocaleDateString();

document.getElementById("footer").textContent =
    "Last updated: " + today;

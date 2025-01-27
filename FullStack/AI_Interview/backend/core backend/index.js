// // dark mode 
// function toggleMode() {
//     document.body.classList.toggle('dark-mode');

//     if (document.body.classList.contains("dark-mode")){
//         localStorage.setItem("theme", "dark");
//         document.querySelector(".toggle").innerHTML = "☀️ Light Mode"
//     } else {
//         localStorage.setItem("theme", "light");
//         document.querySelector(".toggle").innerHTML = "🌙 Dark Mode"
//     }
// }

// // to save theme whenever page loads 

// document.addEventListener("DOMContentLoaded", () => {
//     if (localStorage.getItem("theme") ==="dark") {
//         document.body.classList.add("dark-mode");
//         document.querySelector(".toggle").innerHTML = "☀️ Light Mode";
//     }
// });

// // fetch job titles and skills thorugh API 

// async function fetchJobTitles() {
//     try {
//         const response = await fetch("");
//         const jobTitles = await response.json();
//         const dataList = document.getElementById("job-list");

//         jobTitles.forEach(title => {
//             let option = document.createElement("option");
//             option.value = title;
//             dataList.appendChild(option);
//         });
//     } catch (error){
//         console.error("Error fetching job titles:", error);
//     }
// }

// async function fetchSkills() {
//     try {
//         const response = await fetch("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");
//         const skills = await response.json();
//         const dataList = document.getElementById("skill-list");

//         skills.forEach(skill =>{
//             let option = document.createElement("option");
//             option.value = skill;
//             dataList.appendChild(option);
//         });
//     } catch (error){
//         console.error("Error fetching skills:", error);
//     }
// }

// // call functions once it loads 

// document.addEventListener("DOMContentLoaded", () => {
//     fetchJobTitles();
//     fetchSkills();
// });


// List of 20 job titles
const jobTitles = [
    "Software Engineer", "Frontend Developer", "Backend Developer", "Full Stack Developer", "Data Scientist",
    "Machine Learning Engineer", "AI Engineer", "Cloud Engineer", "Cybersecurity Analyst", "DevOps Engineer",
    "Product Manager", "UI/UX Designer", "Web Developer", "Mobile App Developer", "Game Developer",
    "Database Administrator", "System Administrator", "IT Support Specialist", "QA Engineer", "Business Analyst"
];

// List of 30 skills
const skills = [
    "JavaScript", "Python", "Java", "C++", "React", "Node.js", "Express.js", "MongoDB", "SQL", "PostgreSQL",
    "Machine Learning", "Deep Learning", "Data Analysis", "Cloud Computing", "AWS", "Azure", "Docker", "Kubernetes",
    "Cybersecurity", "Penetration Testing", "DevOps", "Git", "HTML", "CSS", "SASS", "Figma", "Adobe XD", "Django", "Flask", "TensorFlow"
];

// Function to populate datalist with options
function populateDatalist(datalistId, data) {
    const datalist = document.getElementById(datalistId);
    datalist.innerHTML = "";  // Clear previous entries if any

    data.forEach(item => {
        const option = document.createElement("option");
        option.value = item;
        datalist.appendChild(option);
    });
}

// Call the function for job titles and skills
populateDatalist("job-list", jobTitles);
populateDatalist("skill-list", skills);

// Function to redirect to another page after clicking "Get Question"
function redirectToQuestions() {
    const jobTitle = document.getElementById("job-title").value;
    const skill = document.getElementById("skills").value;

    if (jobTitle && skill) {
        // Redirect with query parameters (if you want to pass data to another page)
        window.location.href = "frontend/redirected-page/question.html?job=" + encodeURIComponent(jobTitle) + "&skill=" + encodeURIComponent(skill);    } else {
        alert("Please fill out both fields before proceeding.");
    }
}

// Dark Mode Toggle
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

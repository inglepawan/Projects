// frontend/redirect/question.js

document.addEventListener("DOMContentLoaded", function () {
    // Get Job Title and Skills from URL
    const params = new URLSearchParams(window.location.search);
    const jobTitle = params.get("job");
    const skill = params.get("skill");

    if (!jobTitle || !skill) {
        document.getElementById("question-list").innerHTML = "<p>Error: Job title or skill is missing.</p>";
        return;
    }

    // Display job title and skill on the page (ensure elements exist)
    const jobTitleElement = document.getElementById("job-title");
    if (jobTitleElement) {
        jobTitleElement.value = jobTitle; // Set the value of the input field
    } else {
        console.error("Element with ID 'job-title' not found.");
    }

    const skillElement = document.getElementById("skill");
    if (skillElement) {
        skillElement.value = skill;  // Set the value of the input field
    } else {
        console.error("Element with ID 'skill' not found.");
    }

    const apiKey = 'AIzaSyCSk82vq8n-TaUsDBqtl5qAjhENNP839A0'; // Replace with your actual API key
    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=apiKey'; // Gemini API endpoint

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: `Generate insightful interview questions for a ${jobTitle} candidate with skills in ${skill}.`
        })
    })
    .then(response => response.json())
    .then(data => {
        // Hide loading indicator
        document.getElementById("loading").style.display = "none";

        // Assuming the API returns questions in a 'questions' array
        if (data.questions && data.questions.length > 0) {
            displayQuestions(data.questions);
        } else {
            document.getElementById("question-list").innerHTML = "<p>No questions found.</p>";
        }
    })
    .catch(error => {
        // Hide loading indicator and display error message
        document.getElementById("loading").style.display = "none";
        document.getElementById("question-list").innerHTML = "<p>Error fetching questions. Please try again later.</p>";
        console.error(error);
    });
});

// Function to display the fetched questions
function displayQuestions(questions) {
    const questionList = document.getElementById("question-list");
    questionList.innerHTML = ""; // Clear previous content

    questions.forEach((question, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${question}`;
        questionList.appendChild(li);
    });
}

// Function to go back to the previous page
function goBack() {
    window.history.back();
}

// Function to toggle dark mode
function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

// Function to download questions as a text file
function downloadQuestion() {
    const questions = document.getElementById("question-list").innerText;
    if (!questions) {
        alert("No questions available to download.");
        return;
    }

    const blob = new Blob([questions], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "Interview_Questions.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Function to share questions via social media or copy to clipboard
function shareQuestion() {
    const questions = document.getElementById("question-list").innerText;
    if (!questions) {
        alert("No questions available to share.");
        return;
    }

    navigator.clipboard.writeText(questions).then(() => {
        alert("Questions copied to clipboard! Share them anywhere.");
    }).catch(err => {
        console.error("Could not copy text: ", err);
    });
}
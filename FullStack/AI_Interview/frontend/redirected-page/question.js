// question.js

// Fetch and display interview questions
document.addEventListener("DOMContentLoaded", function () {
    // Get Job Title and Skills from URL
    const params = new URLSearchParams(window.location.search);
    const jobTitle = params.get("job");
    const skill = params.get("skill");

    if (!jobTitle || !skill) {
        document.getElementById("question-list").innerHTML = "<p>Error: Job title or skill is missing.</p>";
        return;
    }

    fetchQuestions(jobTitle, skill);
});

// Function to fetch interview questions from the backend (via OpenAI API)
function fetchQuestions(job, skill) {
    const loading = document.getElementById("loading");
    const questionList = document.getElementById("question-list");

    loading.style.display = "block"; // Show loading

    // Send request to the backend to fetch questions
    fetch('http://localhost:3000/get-interview-questions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobTitle: job, skill: skill }),
    })
    .then(response => response.json())
    .then(data => {
        loading.style.display = "none"; // Hide loading
        if (data.questions && data.questions.length > 0) {
            displayQuestions(data.questions);
        } else {
            questionList.innerHTML = "<p>No questions found.</p>";
        }
    })
    .catch(error => {
        loading.style.display = "none"; // Hide loading
        questionList.innerHTML = "<p>Error fetching questions. Please try again later.</p>";
    });
}

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

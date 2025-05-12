// Button click event
document.getElementById("colorButton").addEventListener("click", function() {
    document.body.style.backgroundColor = "#ffcccb";
});

// Hover effect
document.getElementById("textButton").addEventListener("mouseover", function() {
    this.textContent = "Thanks for hovering!";
});

// Keypress detection
document.getElementById("keypressInput").addEventListener("keyup", function(event) {
    console.log("You typed: " + event.key);
});

// Secret action for double-click
document.getElementById("secretButton").addEventListener("dblclick", function() {
    alert("🎉 Secret unlocked!");
});

// Tab functionality with animation
function openTab(tabId) {
    // Remove active class from all tabs
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => tab.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // Add active class to the selected tab and content
    document.querySelector([onclick="openTab('${tabId}')"]).classList.add("active");
    document.getElementById(tabId).classList.add("active");
}

// Set the first tab as active by default
document.addEventListener("DOMContentLoaded", function() {
    openTab("tab1");
});

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill out all fields.");
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters.");
    } else {
        alert("Thank you " + name + " for your message.");
        this.reset();
    }
});

//
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(function (tab, index) {
        tab.addEventListener("click", function () {
            tabs.forEach(function (t) { t.classList.remove("active"); });
            tabContents.forEach(function (content) { content.classList.remove("active"); });
            tab.classList.add("active");
            tabContents[index].classList.add("active");
        });
    });
});
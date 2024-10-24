// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Page loaded and ready!");

    // Add event listener to the demo button
    const demoButton = document.querySelector(".btn.demo");
    if (demoButton) {
        demoButton.addEventListener('click', () => {
            alert("This feature is under development! Stay tuned.");
        });
    }

    // Placeholder chat functionality
    const chatBox = document.getElementById('chat-box');
    if (chatBox) {
        chatBox.innerHTML = "Welcome! Start chatting with Sami the Sales Mentor.";
    }
});

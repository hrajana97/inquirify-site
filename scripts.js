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

document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    // Welcome message
    if (chatBox) {
        chatBox.innerHTML = "<p>Welcome! Start chatting with Sami the Sales Mentor.</p>";
    }

    sendButton.addEventListener('click', async () => {
        const userMessage = userInput.value;
        if (!userMessage.trim()) {
            return; // Do nothing if the input is empty
        }
        try {
            const response = await fetch('http://localhost:3000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer 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`
                },
                body: JSON.stringify({ message: userMessage })

            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            chatBox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
            chatBox.innerHTML += `<p><strong>Sami:</strong> ${data.choices[0].text}</p>`;
            userInput.value = ''; // Clear input after sending
        } catch (error) {
            console.error('Error:', error);
            chatBox.innerHTML += `<p><strong>Error:</strong> Unable to fetch response. Please try again later.</p>`;
        }
    });
});


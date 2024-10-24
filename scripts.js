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

    sendButton.addEventListener('click', async () => {
        const userMessage = userInput.value;

        try {
            const response = await fetch('https://api.openai.com/v1/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer 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`
                },
                body: JSON.stringify({
                    model: "text-davinci-003", // Specify the GPT model you want to use
                    prompt: userMessage,
                    max_tokens: 150
                })
            });

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


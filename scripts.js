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
    chatBox.innerHTML = "<p>Welcome! Start chatting with Sami the Sales Mentor.</p>";
}

// Chat interaction setup
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

if (sendButton) {
    sendButton.addEventListener('click', async () => {
        const userMessage = userInput.value;

        if (!userMessage.trim()) {
            return; // Do nothing if the input is empty
        }

        // Generate the response using the OpenAI API
        try {
            const responseMessage = await generateResponse(userMessage);

            // Display the user message and the assistant's response
            chatBox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
            chatBox.innerHTML += `<p><strong>Sami:</strong> ${responseMessage}</p>`;
            userInput.value = ''; // Clear input after sending

            // Auto-scroll to the latest message
            chatBox.scrollTop = chatBox.scrollHeight;
        } catch (error) {
            console.error('Error:', error);
            chatBox.innerHTML += `<p><strong>Error:</strong> Unable to fetch response. Please try again later.</p>`;
        }
    });
}

// Allow sending message by pressing Enter key
if (userInput) {
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission if necessary
            sendButton.click(); // Trigger the click event of the send button
        }
    });
}
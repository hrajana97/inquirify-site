import OpenAI from "openai";

// Initialize the OpenAI client
const openai = new OpenAI();

// Define the function to generate a completion
async function generateResponse(userMessage) {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o", // specify the model you want to use
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: userMessage },  // User input
            ],
        });

        return completion.choices[0].message.content; // Return the response content
    } catch (error) {
        console.error("Error generating response:", error);
        return "Sorry, I encountered an issue generating the response.";
    }
}

// Example of sending a user message to the API
document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    // Welcome message
    if (chatBox) {
        chatBox.innerHTML = "<p>Welcome! Start chatting with Sami the Sales Mentor.</p>";
    }

    // Event listener to send the message on button click
    sendButton.addEventListener('click', async () => {
        const userMessage = userInput.value;

        if (!userMessage.trim()) {
            return; // Do nothing if the input is empty
        }

        // Generate the response using the API
        const response = await generateResponse(userMessage);

        // Display the user message and the assistant's response
        chatBox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
        chatBox.innerHTML += `<p><strong>Sami:</strong> ${response}</p>`;
        userInput.value = ''; // Clear input after sending
    });
});

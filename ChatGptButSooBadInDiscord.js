// ==UserScript==
// @name         Ai-by-DoulsttV2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Create a ChatGPT-themed AI chat with predefined responses.
// @author       Doulstt
// @match        https://discord.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Predefined responses
    const responses = {
        "hi nigga": "shut the fuck up nigga",
        "i hate you": "go ask shark.",
        "LMFAOSa": "shut the fuck up nigga",
        "i hate you": "go ask shark.",
        "lmao": "shut the fuck up nigga",
        "i hate you": "go ask shark.",
        "hi nigga": "shut the fuck up nigga",
        "i hate you": "go ask shark.",
        "hi nigga": "shut the fuck up nigga",
        "i hate you": "go ask shark.",
        "stfu": "no you.",
        "faggot": "reverse.",
        "yo": "fckd your mom sorry brb.",
        "wtf": "NO MORE SAYING CUSS WORD GUYS ! ITS INNAPRORPIATE AND VIOLENT!.",
        "suck my dick": "fashion.",
        "💀": "8 year old died in apartement.",
        "my mom died": "your mom is good.",
        "stop": "doing it?.",
        "why you ass": "voruality i see you.",
        "jijigaga": "FUCK YOUU.",
        // Add more questions and responses as needed
    };



    // CSS styles for the chat
    const style = `
        #chat-container {
            position: fixed;
            background-color: #F0F0F0; /* ChatGPT background color */
            color: #000000; /* ChatGPT text color */
            border-radius: 10px;
            overflow: auto;
            z-index: 9999; /* Ensure chat is above other elements */
            padding: 10px;
            font-family: Arial, sans-serif;
        }
        #chat-messages {
            height: 80%;
            overflow-y: scroll;
            margin-bottom: 10px;
        }
        .button {
            background-color: #7289da; /* Discord blue */
            color: #ffffff; /* White text */
            padding: 5px 10px;
            border: 2px solid #4f5d75; /* Add border to the buttons */
            border-radius: 5px;
            margin-right: 10px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .button:hover {
            background-color: #677bc4; /* Darker blue on hover */
        }
        #chat-input {
            width: calc(100% - 20px);
            padding: 5px;
            margin: 0 10px;
            border: none;
            border-radius: 5px;
            background-color: #ffffff; /* White background for input */
            color: #000000; /* Black text */
            margin-bottom: 10px;
        }
    `;

    // Create chat container and apply styles
    const chatContainer = document.createElement("div");
    chatContainer.id = "chat-container";
    chatContainer.innerHTML = `
        <div id="chat-messages"></div>
        <div id="response-buttons">
            <button class="button">i hate you</button>
            <button class="button">why you ass</button>
            <button class="button">yo</button>
            <button class="button">faggot</button>
            <button class="button">LMFAOSa</button>
            <button class="button">💀</button>
            <button class="button">hi nigga</button>
            <button class="button">wtf</button>
        </div>
        <input id="chat-input" type="text" placeholder="Type your message...Fast nigga"/>
    `;
    document.body.appendChild(chatContainer);
    const chatMessages = document.getElementById("chat-messages");
    const chatInput = document.getElementById("chat-input");

    // Apply styles to the document
    const styleElement = document.createElement("style");
    styleElement.innerHTML = style;
    document.head.appendChild(styleElement);

    // Function to send message
    function sendMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.innerText = `You: ${message}`;
        chatMessages.appendChild(messageElement);

        // Respond if there is a predefined response
        if (responses.hasOwnProperty(message.toLowerCase())) {
            const replyElement = document.createElement("div");
            replyElement.innerText = `ChatGPT: ${responses[message.toLowerCase()]}`;
            chatMessages.appendChild(replyElement);
        } else {
            const replyElement = document.createElement("div");
            replyElement.innerText = `ChatGPT: I didn't understand the question.`;
            chatMessages.appendChild(replyElement);
        }
    }

    // Event on pressing Enter
    chatInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const message = chatInput.value.trim();
            if (message !== "") {
                sendMessage(message);
                chatInput.value = "";
            }
        }
    });

    // Add event listener to buttons
    const responseButtons = document.querySelectorAll(".button");
    responseButtons.forEach(button => {
        button.addEventListener("click", function() {
            sendMessage(button.innerText);
        });
    });

    // Make the chat container draggable
    let isDragging = false;
    let initialX;
    let initialY;
    let currentX;
    let currentY;

    chatContainer.addEventListener('mousedown', (e) => {
        isDragging = true;
        initialX = e.clientX - chatContainer.getBoundingClientRect().left;
        initialY = e.clientY - chatContainer.getBoundingClientRect().top;
    });

    chatContainer.addEventListener('mousemove', (e) => {
        if (isDragging) {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            chatContainer.style.left = currentX + 'px';
            chatContainer.style.top = currentY + 'px';
        }
    });

    chatContainer.addEventListener('mouseup', () => {
        isDragging = false;
    });

})();

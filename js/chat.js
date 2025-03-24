// Message related elements
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const messageContainer = document.getElementById('message-container');

// Initialization on page load
window.addEventListener('DOMContentLoaded', function() {
    // Clear message container (don't load previous messages when refreshing)
    messageContainer.innerHTML = '';
    
    // Set up message sending event
    sendBtn.addEventListener('click', addMessage);
    
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addMessage();
        }
    });
});

// Add message functionality
function addMessage() {
    const message = messageInput.value.trim();
    
    if (message) {
        // Create message element
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        
        // Add timestamp
        const now = new Date();
        const timestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        // Set message content, including user avatar
        messageElement.innerHTML = `
            <div class="d-flex align-items-start">
                <img src="${currentUser.image}" class="message-avatar me-2" alt="${currentUser.name}">
                <div class="message-content flex-grow-1">
                    <div class="d-flex justify-content-between">
                        <strong>${currentUser.name}</strong>
                        <small class="text-muted">${timestamp}</small>
                    </div>
                    <p class="mb-0 mt-1">${message}</p>
                </div>
            </div>
        `;
        
        // Add message to container
        messageContainer.appendChild(messageElement);
        
        // Clear input field
        messageInput.value = '';
        
        // Scroll to latest message
        messageContainer.scrollTop = messageContainer.scrollHeight;
        
        // Don't store messages in localStorage, make them disappear after refresh
    }
}

// These functions are no longer used, as we no longer save chat history
// Save messages to localStorage
function saveMessages() {
    // Do not perform any operation
}

// Load messages from localStorage
function loadMessages() {
    // Do not perform any operation
} 
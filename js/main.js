
/**
 * Tickit Rewards Wireframe Interactions
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize any interactive elements
  initNavigation();
  initOfferCards();
  initChatbot();
});

/**
 * Handle navigation item clicks
 */
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      // Remove active class from all items
      navItems.forEach(i => i.classList.remove('active'));
      
      // Add active class to clicked item
      this.classList.add('active');
      
      // In a real app, we'd switch screens here
      // For wireframe, just show a message
      console.log('Navigating to: ' + this.querySelector('.nav-text').textContent);
    });
  });
}

/**
 * Handle offer card interactions
 */
function initOfferCards() {
  const offerCards = document.querySelectorAll('.offer-card');
  
  offerCards.forEach(card => {
    card.addEventListener('click', function() {
      // In a real app, this would open the offer details
      console.log('Opening offer: ' + this.querySelector('.offer-title').textContent);
      
      // Add a visual feedback for the wireframe
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });
}

/**
 * Handle chatbot interactions
 */
function initChatbot() {
  const chatInput = document.querySelector('.chat-input input');
  const sendButton = document.querySelector('.send-button');
  const chatMessages = document.querySelector('.chat-messages');
  
  // Only initialize if we're on the chatbot screen
  if (!chatInput || !sendButton) return;
  
  // Handle send button click
  sendButton.addEventListener('click', function() {
    sendMessage();
  });
  
  // Handle enter key press
  chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message to chat
    addMessage(message, 'user');
    
    // Clear input
    chatInput.value = '';
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      let response;
      
      // Simple pattern matching for demo purposes
      if (message.toLowerCase().includes('point') || message.toLowerCase().includes('points')) {
        response = "You currently have 2,450 points. 250 points will expire in 30 days. Would you like to see redemption options?";
      } else if (message.toLowerCase().includes('tier') || message.toLowerCase().includes('status')) {
        response = "You're currently a Gold member. You need 1,200 more points to reach Platinum status.";
      } else if (message.toLowerCase().includes('help') || message.toLowerCase().includes('agent')) {
        response = "I'll connect you with a customer support agent. Please wait a moment while I transfer you.";
      } else {
        response = "I'm here to help with your Tickit Rewards questions. You can ask about your points, account status, or available offers.";
      }
      
      addMessage(response, 'bot');
    }, 1000);
  }
  
  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;
    
    chatMessages.appendChild(messageDiv);
    
    // Scroll to the bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
} 

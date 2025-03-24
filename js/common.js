// Common DOM elements
const visitorCount = document.getElementById('visitor-count');
const userStatusGuest = document.getElementById('user-status-guest');
const userStatusLogged = document.getElementById('user-status-logged');
const navUsername = document.getElementById('nav-username');
const navUserAvatar = document.getElementById('nav-user-avatar');
const loginSignupButtons = document.getElementById('login-signup-buttons');
const logoutButton = document.getElementById('logout-button');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const logoutLink = document.getElementById('logout-link');

// Default user data
const defaultUser = {
    name: "Charlie",
    bio: "Hello, my name is Charlie, I am a student at NTU, this is my midterm project",
    image: "users/Charlie.jpg"
};

// Guest user data
const guestUser = {
    name: "Guest",
    bio: "Guest mode",
    image: "users/guest.png" // Default guest avatar
};

// Current user (default is Charlie)
let currentUser = { ...defaultUser };
let isLoggedIn = true; // Default logged in status

// Initialize visitor counter (using localStorage to save visitor count)
let visitors = localStorage.getItem('visitorCount') ? parseInt(localStorage.getItem('visitorCount')) : 0;
updateVisitorCount();

// Initialize user status
initUserStatus();

// Increase visitor count
function updateVisitorCount() {
    visitors++;
    visitorCount.textContent = visitors;
    localStorage.setItem('visitorCount', visitors);
}

// Initialize user status
function initUserStatus() {
    // Force set to logged in status (Charlie)
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    
    // Logged in status
    showLoggedInUI();
    
    // Load profile
    loadProfile();
}

// Show logged in UI
function showLoggedInUI() {
    userStatusGuest.style.display = 'none';
    userStatusLogged.style.display = 'flex';
    loginSignupButtons.style.display = 'none';
    logoutButton.style.display = 'block';
    
    updateNavUserInfo();
}

// Show guest UI (currently never triggered)
function showGuestUI() {
    userStatusGuest.style.display = 'none'; // Always hide Guest Mode
    userStatusLogged.style.display = 'none';
    loginSignupButtons.style.display = 'block';
    logoutButton.style.display = 'none';
}

// Update navigation bar user info
function updateNavUserInfo() {
    navUsername.textContent = currentUser.name;
    navUserAvatar.src = currentUser.image;
}

// Load profile
function loadProfile() {
    const profileData = localStorage.getItem('profileData');
    if (profileData) {
        const data = JSON.parse(profileData);
        currentUser = { ...data };
        // Update navigation bar user info
        updateNavUserInfo();
    } else {
        // Use default value (Charlie)
        currentUser = { ...defaultUser };
        localStorage.setItem('profileData', JSON.stringify(defaultUser));
        // Update navigation bar user info
        updateNavUserInfo();
    }
}

// Handle login action
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // This is just simulating a successful login
    alert('Login feature requires backend support. This is just a simulation.');
    
    // Set to logged in status
    isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    
    // Update UI
    showLoggedInUI();
    
    // Load profile
    loadProfile();
    
    // Close modal dialog
    const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    loginModal.hide();
}

// Handle logout action (since we're now defaulting to always logged in, this function won't actually be used)
function handleLogout(e) {
    e.preventDefault();
    
    // Since we need to keep Charlie logged in, this doesn't do anything
    alert('This feature has been disabled, the site defaults to using the Charlie account.');
}

// Handle signup form submission
function handleSignup(e) {
    e.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    
    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // This is just simulating a successful registration
    alert('Registration feature requires backend support. This is just a simulation.');
    
    // Close modal dialog
    const signupModal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
    signupModal.hide();
}

// Login, logout, and registration form submission event listeners
if (loginForm) loginForm.addEventListener('submit', handleLogin);
if (signupForm) signupForm.addEventListener('submit', handleSignup);
if (logoutLink) logoutLink.addEventListener('click', handleLogout);

// Initialization after page load is complete
window.addEventListener('DOMContentLoaded', function() {
    // Initialize user status
    initUserStatus();
}); 
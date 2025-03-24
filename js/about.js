// Profile editing related elements
const editProfileBtn = document.getElementById('edit-profile-btn');
const saveProfileBtn = document.getElementById('save-profile-btn');
const profileViewMode = document.getElementById('profile-view-mode');
const profileEditMode = document.getElementById('profile-edit-mode');
const displayName = document.getElementById('display-name');
const displayBio = document.getElementById('display-bio');
const inputName = document.getElementById('input-name');
const inputBio = document.getElementById('input-bio');
const profileImage = document.getElementById('profile-image');

// Initialize after page load
window.addEventListener('DOMContentLoaded', function() {
    // Display profile
    updateProfileDisplay();
    
    // Set up profile edit button events
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', toggleEditMode);
    }
    
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', saveProfile);
    }
});

// Update profile display
function updateProfileDisplay() {
    // If in guest mode
    if (!isLoggedIn) {
        displayName.textContent = guestUser.name;
        displayBio.textContent = guestUser.bio;
        profileImage.src = guestUser.image;
        
        // Hide edit button
        if (editProfileBtn) {
            editProfileBtn.style.display = 'none';
        }
    } else {
        // Display profile
        displayName.textContent = currentUser.name;
        displayBio.textContent = currentUser.bio;
        profileImage.src = currentUser.image;
        
        // Show edit button
        if (editProfileBtn) {
            editProfileBtn.style.display = 'inline-block';
        }
    }
}

// Toggle profile edit mode
function toggleEditMode() {
    if (profileViewMode.style.display !== 'none') {
        // Switch to edit mode
        profileViewMode.style.display = 'none';
        profileEditMode.style.display = 'block';
        editProfileBtn.style.display = 'none';
        saveProfileBtn.style.display = 'inline-block';
        
        // Fill current data into input fields
        inputName.value = displayName.textContent;
        inputBio.value = displayBio.textContent;
    } else {
        // Switch back to view mode
        profileEditMode.style.display = 'none';
        profileViewMode.style.display = 'block';
        saveProfileBtn.style.display = 'none';
        editProfileBtn.style.display = 'inline-block';
    }
}

// Save profile
function saveProfile() {
    const name = inputName.value.trim();
    const bio = inputBio.value.trim();
    
    if (name) {
        // Update displayed data
        displayName.textContent = name;
        displayBio.textContent = bio;
        
        // Update current user data
        currentUser.name = name;
        currentUser.bio = bio;
        
        // Update navigation bar user info
        updateNavUserInfo();
        
        // Save to localStorage (simulating database)
        const profileData = {
            name: name,
            bio: bio,
            image: currentUser.image
        };
        localStorage.setItem('profileData', JSON.stringify(profileData));
        
        // Switch back to view mode
        toggleEditMode();
    }
} 
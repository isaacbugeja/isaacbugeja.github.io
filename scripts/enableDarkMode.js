// Get the dark mode switch element by its ID
const darkModeSwitch = document.getElementById('flexSwitchCheckDefault');

/**
 * Toggle the dark mode on and off.
 * First, it checks if the dark mode is enabled or not.
 * If it is enabled, it sets the 'data-bs-theme' attribute of the document element to 'dark'.
 * If it is not enabled, it removes the 'data-bs-theme' attribute from the document element.
 * Then, it updates the text of the label element to indicate whether dark mode is enabled or not.
 * Finally, it saves the dark mode status in the local storage.
 */
function toggleDarkMode() {
    const isDarkModeEnabled = darkModeSwitch.checked;

    if (isDarkModeEnabled) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-bs-theme');
    }

    if (isDarkModeEnabled) {
        document.querySelector('.form-check-label').textContent = 'Disable Dark Mode';
    } else {
        document.querySelector('.form-check-label').textContent = 'Enable Dark Mode';
    }

    localStorage.setItem('darkModeEnabled', isDarkModeEnabled);
}

// Add an event listener to the dark mode switch element to call the toggleDarkMode function when the switch is changed
darkModeSwitch.addEventListener('change', toggleDarkMode);

// Get the dark mode status from the local storage and set it to the dark mode switch element
const savedDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
darkModeSwitch.checked = savedDarkModeEnabled;
// Call the toggleDarkMode function to initialize the dark mode status on page load
toggleDarkMode();

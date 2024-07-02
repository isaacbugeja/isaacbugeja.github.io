const darkModeSwitch = document.getElementById('flexSwitchCheckDefault');

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

darkModeSwitch.addEventListener('change', toggleDarkMode);

const savedDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
darkModeSwitch.checked = savedDarkModeEnabled;
toggleDarkMode();
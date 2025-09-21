// DARK MODE BUTTON
const darkSwitch = document.getElementById('darkModeSwitch');
const darkLabel = document.getElementById('darkModeLabel');

function updateLabel() {
if (document.body.classList.contains('dark-mode')) {
    darkLabel.textContent = 'Light Mode';
    darkLabel.style.color = '#fff';
} else {
    darkLabel.textContent = 'Dark Mode';
    darkLabel.style.color = '#222';
}
}

darkSwitch.addEventListener('change', function() {
document.body.classList.toggle('dark-mode', this.checked);
updateLabel();
});

updateLabel();
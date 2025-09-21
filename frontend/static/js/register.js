
// DARK MODE BUTTON
const darkSwitchRegister = document.getElementById('darkModeSwitchRegister');
const darkLabelRegister = document.getElementById('darkModeLabelRegister');
const darkSwitchVerify = document.getElementById('darkModeSwitchVerify');
const darkLabelVerify = document.getElementById('darkModeLabelVerify');

function updateLabels() {
  const isDark = document.body.classList.contains('dark-mode');
  const text = isDark ? 'Light Mode' : 'Dark Mode';
  const color = isDark ? '#fff' : '#222';

  darkLabelRegister.textContent = text;
  darkLabelRegister.style.color = color;

  darkLabelVerify.textContent = text;
  darkLabelVerify.style.color = color;
}

// Handle Register toggle
darkSwitchRegister.addEventListener('change', function() {
  document.body.classList.toggle('dark-mode', this.checked);
  darkSwitchVerify.checked = this.checked; // keep verify in sync
  updateLabels();
});

// Handle Verify toggle
darkSwitchVerify.addEventListener('change', function() {
  document.body.classList.toggle('dark-mode', this.checked);
  darkSwitchRegister.checked = this.checked; // keep register in sync
  updateLabels();
});

// Initialize labels on load
updateLabels();


// DIGITS ONLY IN CODE INPUTS AND AUTO MOVES WHEN DIGIT IS ENTERED OR REMOVED
document.querySelectorAll('.code-input').forEach(function(input, idx, arr) {
input.addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
    if (this.value.length === 1 && idx < arr.length - 1) {
    arr[idx + 1].focus();
    }
});
input.addEventListener('keypress', function(e) {
    if (e.key.length === 1 && !/[0-9]/.test(e.key)) {
    e.preventDefault();
    }
});
input.addEventListener('paste', function(e) {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData('text');
    const digits = paste.replace(/[^0-9]/g, '');
    for (let i = 0; i < digits.length && idx + i < arr.length; i++) {
    arr[idx + i].value = digits.charAt(i);
    }
    for (let i = idx; i < arr.length; i++) {
    if (!arr[i].value) { arr[i].focus(); break; }
    }
});
input.addEventListener('keydown', function(e) {
    if (e.key === 'Backspace' && !this.value && idx > 0) {
    arr[idx - 1].focus();
    }
});
});

function showVerify() {
document.getElementById("register-section").classList.add("d-none");
document.getElementById("verify-section").classList.remove("d-none");
}


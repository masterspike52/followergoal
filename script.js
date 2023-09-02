const currentCountElement = document.getElementById('currentCount');
const goalCountElement = document.getElementById('goalCount');
const progressBar = document.getElementById('progressBar');
const progressPercentElement = document.getElementById('progressPercent');

function updateProgressBar() {
    const currentCount = parseInt(currentCountElement.innerText);
    const goalCount = parseInt(goalCountElement.innerText);
    const progressPercent = Math.min((currentCount / goalCount) * 100, 100);

    progressBar.style.width = progressPercent + '%';
    progressPercentElement.innerText = progressPercent.toFixed(2) + '%';
}

function updateCurrentCount() {
    const newCurrentCount = parseInt(document.getElementById('editCurrentCount').value);
    if (!isNaN(newCurrentCount)) {
        currentCountElement.innerText = newCurrentCount;
        updateProgressBar();
    }
}

function updateGoalCount() {
    const newGoalCount = parseInt(document.getElementById('editGoalCount').value);
    if (!isNaN(newGoalCount) && newGoalCount >= 1) {
        goalCountElement.innerText = newGoalCount;
        updateProgressBar();
    }
}

// Initialize progress bar
updateProgressBar();

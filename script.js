// 1. Static Data - Activity List [cite: 15, 16]
const activities = [
    { id: 1, task: "Complete Level-1 UI Design", status: "Pending" },
    { id: 2, task: "Study JavaScript Events", status: "Pending" },
    { id: 3, task: "Implement DOM Updates", status: "Pending" },
    { id: 4, task: "Push Code to GitHub", status: "Pending" }
];

const listElement = document.getElementById('activity-list');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');

// 2. Function to Render UI [cite: 19, 24]
function renderActivities() {
    listElement.innerHTML = '';
    let completedCount = 0;

    activities.forEach(item => {
        const li = document.createElement('li');
        if (item.status === "Completed") {
            completedCount++;
            li.classList.add('completed');
        }

        li.innerHTML = `
            <span>${item.task}</span>
            <button onclick="markAsComplete(${item.id})" ${item.status === 'Completed' ? 'disabled' : ''}>
                ${item.status === 'Completed' ? 'Done' : 'Complete'}
            </button>
        `;
        listElement.appendChild(li);
    });

    updateProgress(completedCount);
}

// 3. Logic to Update Status [cite: 18, 21]
function markAsComplete(id) {
    const activity = activities.find(a => a.id === id);
    if (activity) {
        activity.status = "Completed"; // State change
        renderActivities(); // Refresh UI dynamically [cite: 24]
    }
}

// 4. Update Progress Text & Bar [cite: 22, 23]
function updateProgress(count) {
    const total = activities.length;
    progressText.innerText = `${count} out of ${total} activities completed`;
    
    // Calculate percentage for progress bar
    const percentage = (count / total) * 100;
    progressFill.style.width = percentage + "%";
}

// Initial Load
renderActivities();

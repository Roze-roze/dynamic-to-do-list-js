// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new <li> element
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn'); // ✅ using classList.add

        // Add event to remove task when button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(listItem);
        };

        // Append button to the list item, and item to the list
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add click event to Add Task button
    addButton.addEventListener('click', addTask);

    // Add keypress event to input field to allow adding via Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

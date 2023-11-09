addTaskButton.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Create a new task element
    const taskElement = document.createElement('li');
    taskElement.textContent = newTaskInput.value;
  
    // Add the task element to the task list
    taskList.appendChild(taskElement);
  
    // Clear the new task input
    newTaskInput.value = '';
  
    // Add an event listener to the task element to toggle its completed state
    taskElement.addEventListener('click', function() {
      taskElement.classList.toggle('completed');
    });
  });
  addTaskButton.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Create a new task element
    const taskElement = document.createElement('li');
    taskElement.textContent = newTaskInput.value;
  
    // Add the task element to the task list
    taskList.appendChild(taskElement);
  
    // Clear the new task input
    newTaskInput.value = '';
  
    // Add an event listener to the task element to toggle its completed state
    taskElement.addEventListener('click', function() {
      taskElement.classList.toggle('completed');
    });
  });
  
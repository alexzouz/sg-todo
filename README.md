# Vue 3 ToDo List Application

This project is a simple ToDo List application built with Vue 3, utilizing the Options API and Vue Router. It leverages Pinia for state management and Local Storage for persisting data. The application allows users to add, delete, and mark tasks as completed. A side panel is used for viewing task details.

## Features

- **Add Tasks**: Users can add tasks with a title and description.
- **Delete Tasks**: Tasks can be removed from the list.
- **Mark Tasks as Completed**: Users can toggle tasks between completed and active states.
- **Task Details**: Clicking on a task opens a side panel displaying the task's details.
- **Persistence**: Tasks are stored in Local Storage.
- **Automatic Reopening**: Refreshing the page after opening a task will reopen that task.

## Project Setup

```bash
# Install dependencies
npm install

# Serve with hot reload at localhost:3000
npm run dev

# Build for production with minification
npm run build
```

## Usage

### Adding a Task

To add a task, enter the title and description in the provided input fields and click the 'Add Task' button. The task will appear in the list below.

### Viewing Task Details

Click on any task in the list to open the side panel with more details about the task. The list remains visible, and multiple tasks can be opened in sequence.

### Marking a Task as Completed

To mark a task as completed, click the checkbox next to the task. Completed tasks can be toggled back to active by clicking the checkbox again.

### Deleting a Task

To delete a task, click the 'Delete' button next to the task you wish to remove.

## Technical Details

### Technologies Used

- **Vue 3**: Frontend framework using the Options API.
- **Pinia**: State management.
- **Vue Router**: Managing navigation.
- **Local Storage**: Data persistence.

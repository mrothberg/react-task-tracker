import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30 pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30 pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30 pm',
        reminder: false,
    }
  ]) 

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ))
  }

  var tasksComponent;
  if(tasks.length > 0) {
    tasksComponent =
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      />
  } else {
    tasksComponent = 'No Tasks to Show'
  }

  return (
    <div className="container">
      <Header />
      {tasksComponent}
    </div>
  );
}

export default App;

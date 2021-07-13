import React, { useEffect, useState, useCallback} from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);
  const url = 'https://http-hook-default-rtdb.firebaseio.com/tasks.json';

  const transformTask = useCallback((tasksObj) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);

  }, []);

  // const httpData = useHttp({url:url}, transformTask);
  // const {isLoading, error, sendRequest: fetchTasks} = httpData;
  const {isLoading, error, sendRequest: fetchTasks} = useHttp(transformTask);

  // const fetchTasks = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       'https://http-hook-default-rtdb.firebaseio.com/tasks.json'
  //     );

  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }

  //     const data = await response.json();

  //     const loadedTasks = [];

  //     for (const taskKey in data) {
  //       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //     }

  //     setTasks(loadedTasks);
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
   // fetchTasks();
    fetchTasks({url});
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;

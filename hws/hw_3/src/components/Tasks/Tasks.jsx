import React, { useState, useEffect } from "react";

import "./style.sass";

import { API, TASK_STATUS } from "./../../constants/tasks";

import Task from "./../Task/Task";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [tasksToDo, setTasksToDo] = useState([]);
  const [tasksProgress, setTasksProgress] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);

  const getTasks = async () => {
    try {
      const request = await fetch(API),
        response = await request.json();

      setTasks(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    setTasksToDo(tasks.filter((item) => item.status === TASK_STATUS.TODO));
    setTasksProgress(
      tasks.filter((item) => item.status === TASK_STATUS.PROGRESS)
    );
    setTasksDone(tasks.filter((item) => item.status === TASK_STATUS.DONE));
  }, [tasks]);

  const handleTaskProgress = async (item) => {
    try {
      const request = await fetch(API + `/${item.id}`, {
          method: `PUT`,
          body: JSON.stringify({ ...item, status: TASK_STATUS.PROGRESS }),
          headers: {
            "Content-type": "application/json",
          },
        }),
        response = await request.json();

      setTasks((prevState) =>
        prevState.map((element) => {
          if (element.id === response.id) element = response;
          return element;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleTaskToDo = async (item) => {
    try {
      const request = await fetch(API + `/${item.id}`, {
          method: `PUT`,
          body: JSON.stringify({ ...item, status: TASK_STATUS.TODO }),
          headers: {
            "Content-type": "application/json",
          },
        }),
        response = await request.json();

      setTasks((prevState) =>
        prevState.map((element) => {
          if (element.id === response.id) element = response;
          return element;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleTaskDone = async (item) => {
    try {
      const request = await fetch(API + `/${item.id}`, {
          method: `PUT`,
          body: JSON.stringify({ ...item, status: TASK_STATUS.DONE }),
          headers: {
            "Content-type": "application/json",
          },
        }),
        response = await request.json();

      setTasks((prevState) =>
        prevState.map((element) => {
          if (element.id === response.id) element = response;
          return element;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleTaskArchive = async (item) => {
    try {
      await fetch(API + `/${item.id}`, {
        method: `DELETE`,
      });

      setTasks((prevState) =>
        prevState.filter((element) => element.id !== item.id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const TASKS = [
    {
      title: "To Do",
      tasks: tasksToDo,
      btns: [{ title: `In progress`, action: handleTaskProgress }],
    },
    {
      title: "In Progress",
      tasks: tasksProgress,
      btns: [
        { title: `To do`, action: handleTaskToDo },
        { title: `Done`, action: handleTaskDone },
      ],
    },
    {
      title: "Done",
      tasks: tasksDone,
      btns: [{ title: `To archive`, action: handleTaskArchive }],
    },
  ];

  return (
    <div className="board__wrapper">
      {TASKS.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          tasks={item.tasks}
          btns={item.btns}
        />
      ))}
    </div>
  );
}

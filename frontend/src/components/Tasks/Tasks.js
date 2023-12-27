import React, { useState } from "react";
import TaskCard from "./TaskCard";
import AddTask from "../Input/AddTask";
import AddTaskButton from "./AddTaskButton";

const Tasks = ({ name, tasks, bgColor, hoverColor, textColor, color }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="pr-3 w-full">
      {tasks &&
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            bgColor={bgColor}
            textColor={textColor}
            color={color}
            name={task.name}
            startDate={task.startDate}
            endDate={task.endDate}
            status={task.status}
          />
        ))}
      <AddTaskButton
        handleClick={handleClick}
        bgColor={bgColor}
        textColor={textColor}
        color={color}
        hoverColor={hoverColor}
      />
      {show && (
        <AddTask
          bgColor={bgColor}
          textColor={textColor}
          color={color}
          name={name}
          onEdit={false}
          handleClick={handleClick}
        />
      )}
    </div>
  );
};

export default Tasks;

import React, { useState, useEffect, useMemo } from "react";
import Progress from "./Progress";
import { useSelector } from "react-redux";

const Lists = () => {
  const properties = useMemo(() => [
    {
      name: "To Do",
      bgColor: "bg-custom-blue-1",
      textColor: "text-secondary-blue",
      color: "#3659E2",
      hoverColor: "hover:bg-custom-blue-hover",
    },
    {
      name: "In Progress",
      bgColor: "bg-custom-pink",
      textColor: "text-secondary-pink",
      color: "#EE46BC",
      hoverColor: "hover:bg-custom-pink-hover",
    },
    {
      name: "In Review",
      bgColor: "bg-custom-light-blue",
      textColor: "text-secondary-light-blue",
      color: "#3FA1E3",
      hoverColor: "hover:bg-custom-light-blue-hover",
    },
    {
      name: "Completed",
      bgColor: "bg-custom-green",
      textColor: "text-secondary-custom-green",
      color: "#12BB23",
      hoverColor: "hover:bg-custom-green-hover",
    },
  ], []);

  const [filteredTasks, setFilteredTasks] = useState({});

  const projects = useSelector((state) => state.projects.projects);
  const activeProjectId = useSelector((state) => state.projects.activeId);
  const activeProject = projects.find(
    (project) => project.id === activeProjectId
  );

  useEffect(() => {
    const tasksByStatus = {};

    properties.forEach((prop) => {
      tasksByStatus[prop.name] = activeProject
        ? activeProject.tasks.filter((task) => task.status === prop.name)
        : [];
    });

    setFilteredTasks(tasksByStatus);
  }, [projects, activeProjectId, properties, activeProject]);

  return (
    <div className="flex h-screen overflow-hidden">
      {properties.map((props) => (
        <Progress
          key={props.name}
          name={props.name}
          bgColor={props.bgColor}
          textColor={props.textColor}
          hoverColor={props.hoverColor}
          color={props.color}
          tasks={filteredTasks[props.name]}
        />
      ))}
    </div>
  );
};

export default Lists;

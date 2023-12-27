import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleProjectActive } from "../../redux/Projects";

const List = () => {
  const projects = useSelector((state) => state.projects.projects);
  const activeId = useSelector((state) => state.projects.activeId);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(toggleProjectActive(id));
  };
  console.log(projects);
  console.log(activeId);
  return (
    <div
      className={`flex justify-center items-center py-${
        projects.length > 0 ? "6" : ""
      }`}
    >
      <ul className="">
        {projects &&
          projects.length > 0 &&
          projects.map((project) => (
            <li
              key={project.id}
              onClick={() => handleClick(project.id)}
              className={`hover:bg-custom-hover flex w-[180px] my-2 px-2.5 py-2.5 items-center gap-2.5 self-stretch text-base font-normal leading-6 rounded-md cursor-pointer ${
                project.id === activeId ? "bg-custom-hover" : ""
              }`}
            >
              {project.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;

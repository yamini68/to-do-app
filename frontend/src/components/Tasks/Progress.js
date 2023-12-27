import React from "react";
import Dot from "../assests/Dot";
import Tasks from "./Tasks";
import Line from "./../assests/Line";
const List = ({ name, bgColor, hoverColor, textColor, color, tasks }) => {
  return (
    <div className="flex-grow py-3 ml-3 w-full">
      <div
        style={{ width: "fit-content" }}
        className={`h-8 py-1 px-3 justify-center items-center gap-2.5 flex rounded-20 ${bgColor} ${textColor} text-xs font-normal leading-5`}
      >
        <Dot color={color} />
        {name}
      </div>
      <div className="flex justify-between w-full mt-5">
        <Tasks
          name={name}
          tasks={tasks}
          bgColor={bgColor}
          textColor={textColor}
          color={color}
          hoverColor={hoverColor}
        />
        {name !== "Completed" && <Line />}
      </div>
    </div>
  );
};

export default List;

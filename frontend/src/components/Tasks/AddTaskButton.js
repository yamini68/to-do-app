import React from "react";
import Plus from "../assests/Plus";
const AddTaskButton = ({
  handleClick,
  hoverColor,
  bgColor,
  color,
  textColor,
}) => {
  return (
    <div className="flex justify-between w-full " onClick={handleClick}>
      <div className={`w-full cursor-pointer `}>
        <div
          className={`${hoverColor} flex justify-center items-center ${bgColor} w-full h-[32px] rounded-md`}
        >
          <Plus color={color} />
          <div className={`${textColor} text-xs font-normal leading-5`}>
            {" "}
            Add Task
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTaskButton;

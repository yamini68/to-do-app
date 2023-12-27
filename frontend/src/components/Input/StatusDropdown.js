import React, { useState } from "react";
import Drop from "../assests/Drop";
import Arrow from "./../assests/Arrow";

const StatusDropdown = ({ value, onChange, color }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="px-6 py-2.5 w-full"
    >
      <label
        htmlFor="status"
        className="block text-add-task-name text-xs font-normal leading-5"
      >
        Status
      </label>
      <div
        name="status"
        value={value}
        onChange={onChange}
        className="w-full flex h-[44px] py-1 px-3 justify-between items-center self-stretch rounded-md border border-custom-color bg-white"
        id="status"
        onClick={() => setShow((prev) => !prev)}
      >
        {value}
        <Arrow />
      </div>
      {show && (
        <div  onClick={() => setShow((prev) => !prev)} className="flex flex-col w-[620px] rounded-md border border-custom-color mt-1 absolute py-1 px-2.5 bg-white cursor-pointer" >
          {value !== "To Do" && (
            <div
              value="To Do"
              className="flex items-center flex h-10 items-center gap-3 px-4 w-full"
              onClick={() => onChange("To Do")}
            >
              <div className="mr-3">
                <Drop color={"#3659E2"} />
              </div>
              To Do
            </div>
          )}
          {value !== "In Progress" && (
            <div
              value="In Progress"
              className="flex items-center flex h-10 items-center gap-3 px-4 w-full"
              onClick={() => onChange("In Progress")}
            >
              <div className="mr-3">
                <Drop color={"#EE46BC"} wh={true} />
              </div>
              In Progress
            </div>
          )}
          {value !== "In Review" && (
            <div
              value="In Review"
              className="flex items-center flex h-10 items-center gap-3 px-4 w-full"
              onClick={() => onChange("In Review")}
            >
              <div className="mr-3">
                <Drop color={"#3FA1E3"} />
              </div>
              In Review
            </div>
          )}
          {value !== "Completed" && (
            <div
              value="Completed"
              className="flex items-center flex h-10 items-center gap-3 px-4 w-full"
              onClick={() => onChange("Completed")}
            >
              <div className="mr-3">
                <Drop color={"#12BB23"} />
              </div>
              Completed
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StatusDropdown;

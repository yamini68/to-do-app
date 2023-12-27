import React, { useState } from "react";
import AddTask from "../Input/AddTask";
import { format } from "date-fns";
const Card = ({
  name,
  id,
  startDate,
  status,
  endDate,
  color,
  bgColor,
  textColor,
}) => {
  const [show, setShow] = useState(false);
  const formattedStartDate = format(startDate, "dd/MM/yyyy");
  const formattedEndDate = format(endDate, "dd/MM/yyyy");
  const handleClick = () => {
    if (show) setShow(false);
    else setShow(true);
  };
  return (
    <>
      {" "}
      <div
        className="rounded-md mb-6 bg-white shadow-custom flex p-4 w-full flex-col items-start gap-2.5"
        onClick={handleClick}
      >
        <div className="title text-black text-base font-semibold leading-6">
          {name}
        </div>
        <div className="flex flex-start justify-around">
          <div className="start text-custom-gray text-xs font-normal leading-5 ">
            <div>Start date</div>
            <div
              className={`flex h-[24px]  px-2 justify-center items-center rounded-md ${bgColor} ${textColor}`}
            >
              {formattedStartDate}
            </div>
          </div>
          <div className="end text-custom-gray text-xs font-normal leading-5 ml-6">
            <div className="text-xs font-normal leading-5">Deadline</div>
            <div
              className={`flex h-[24px] pl-1  px-2 justify-center items-center rounded-md ${bgColor} ${textColor}`}
            >
              {formattedEndDate}
            </div>
          </div>
        </div>
      </div>
      {show && (
        <AddTask
          onEdit={true}
          name={name}
          start={startDate}
          end={endDate}
          progress={status}
          id={id}
          color={color}
          bgColor={bgColor}
          textColor={textColor}
          handleClick={handleClick}
        />
      )}
    </>
  );
};

export default Card;

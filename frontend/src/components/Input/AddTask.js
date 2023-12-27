import React, { useState } from "react";
import Header from "./Header";
import { addTask, updateTask } from "../../redux/Projects";
import { useDispatch, useSelector } from "react-redux";
import Text from "./Text";
import Date from "./Date";
import StatusDropdown from "./StatusDropdown";
import Buttons from "./Buttons";

const AddTask = ({
  name,
  start,
  end,
  progress,
  bgColor,
  id,
  color,
  onEdit,
  textColor,
  handleClick,
}) => {
  const [taskName, setTaskName] = useState(onEdit ? name : "");
  const [startDate, setStartDate] = useState(onEdit ? start : null);
  const [endDate, setEndDate] = useState(onEdit ? end : null);
  const [status, setStatus] = useState(onEdit ? progress : name);
  const activeProjectId = useSelector((state) => state.projects.activeId);
  const [validation, setValidation] = useState({
    Text: false,
    start: false,
    end: false,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log(status);
    e.preventDefault();
    setValidation({
      Text: !taskName,
      start: !startDate,
      end: !endDate,
    });
    if (taskName && startDate && endDate && status) {
      const formattedTask = {
        name: taskName,
        startDate: startDate,
        endDate: endDate,
        status,
      };
      if (onEdit) {
        dispatch(
          updateTask({
            projectId: activeProjectId,
            taskId: id,
            updatedTask: formattedTask,
          })
        );
      } else {
        dispatch(addTask(formattedTask));
      }
      setTaskName("");
      setStartDate(null);
      setEndDate(null);
      setStatus("");
      handleClick();
    }
  };

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  return (
    <div className="absolute z-50 top-0 right-0 left-0 bottom-0 bg-black bg-opacity-20 flex justify-center items-center">
      <div className="inline-flex flex-col items-start rounded-md w-[670px] shadow-custom">
        <div className="flex flex-col w-full rounded-lg bg-white">
          <Header onEdit={onEdit} handleClick={handleClick} />
          <form className="w-full rounded-lg" onSubmit={handleSubmit}>
            <Text
              value={taskName}
              onChange={handleTaskNameChange}
              validationError={validation.Text}
            />
            <div className="flex">
              <Date
                label="Start Date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                validationError={validation.start}
              />
              <Date
                label="End Date"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                validationError={validation.end}
              />
            </div>
            <StatusDropdown value={status} onChange={handleStatusChange} color={color} />
            <Buttons
              onCancel={handleClick}
              onSubmit={handleSubmit}
              editMode={onEdit}
              textColor={textColor}
              bgColor={bgColor}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;

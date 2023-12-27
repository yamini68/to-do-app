import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "../../redux/Projects";
const AddProject = ({ handleClick }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(null);
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text) {
      dispatch(addProject({ id: "", name: text, tasks: [] }));
      console.log("text is not empty");
      handleClick();
    } else {
      console.log("text is empty");
    }
  };
  return (
    <div className="absolute z-50 top-0 right-0 left-0 bottom-0 bg-black bg-opacity-20 flex justify-center items-center">
      <div className="inline-flex flex-col items-start rounded-md w-[670px] bg-white shadow-custom">
        <div className="flex justify-between w-full px-6 py-2.5 ">
          <div className="text-add-task-color text-base font-normal leading-6">
            Add Project
          </div>
          <div className="cursor-pointer" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.25176 4.25176C4.33137 4.17196 4.42593 4.10864 4.53004 4.06544C4.63416 4.02224 4.74577 4 4.85849 4C4.97121 4 5.08282 4.02224 5.18693 4.06544C5.29104 4.10864 5.38561 4.17196 5.46521 4.25176L10.0002 8.78849L14.5352 4.25176C14.6149 4.17209 14.7095 4.10888 14.8136 4.06576C14.9177 4.02264 15.0293 4.00045 15.142 4.00045C15.2546 4.00045 15.3662 4.02264 15.4703 4.06576C15.5744 4.10888 15.669 4.17209 15.7487 4.25176C15.8284 4.33144 15.8916 4.42603 15.9347 4.53013C15.9778 4.63423 16 4.74581 16 4.85849C16 4.97117 15.9778 5.08274 15.9347 5.18685C15.8916 5.29095 15.8284 5.38554 15.7487 5.46521L11.212 10.0002L15.7487 14.5352C15.8284 14.6149 15.8916 14.7095 15.9347 14.8136C15.9778 14.9177 16 15.0293 16 15.142C16 15.2546 15.9778 15.3662 15.9347 15.4703C15.8916 15.5744 15.8284 15.669 15.7487 15.7487C15.669 15.8284 15.5744 15.8916 15.4703 15.9347C15.3662 15.9778 15.2546 16 15.142 16C15.0293 16 14.9177 15.9778 14.8136 15.9347C14.7095 15.8916 14.6149 15.8284 14.5352 15.7487L10.0002 11.212L5.46521 15.7487C5.38554 15.8284 5.29095 15.8916 5.18685 15.9347C5.08274 15.9778 4.97117 16 4.85849 16C4.74581 16 4.63423 15.9778 4.53013 15.9347C4.42603 15.8916 4.33144 15.8284 4.25176 15.7487C4.17209 15.669 4.10888 15.5744 4.06576 15.4703C4.02264 15.3662 4.00045 15.2546 4.00045 15.142C4.00045 15.0293 4.02264 14.9177 4.06576 14.8136C4.10888 14.7095 4.17209 14.6149 4.25176 14.5352L8.78849 10.0002L4.25176 5.46521C4.17196 5.38561 4.10864 5.29104 4.06544 5.18693C4.02224 5.08282 4 4.97121 4 4.85849C4 4.74577 4.02224 4.63416 4.06544 4.53004C4.10864 4.42593 4.17196 4.33137 4.25176 4.25176Z"
                fill="#97A1B2"
              />
            </svg>
          </div>
        </div>
        <div className="mb-4 w-full px-6 py-2.5">
          <label
            htmlFor="taskName"
            className="block text-add-task-name text-xs font-normal leading-5"
          >
            Name of the Project
          </label>
          <input
            type="text"
            id="taskName"
            name="taskName"
            onChange={handleChangeText}
            className="mt-1 block w-full text-black flex h-[44px] py-1 px-3 justify-between items-center self-stretch rounded-md border border-custom-color bg-white"
            placeholder="Text"
          />
        </div>
        <div className="w-full h-[32px] px-6 pb-6 flex justify-end mb-6">
          <button
            onClick={handleClick}
            className="flex h-[32px] py-2.5 px-2 justify-center items-center gap-1 bg-custom-blue-1 rounded-md text-cancle text-xs font-normal leading-5 mr-2"
          >
            cancle
          </button>
          <button
            onClick={handleSubmit}
            className="flex h-[32px] py-2.5 px-2 justify-center items-center gap-1 rounded-md bg-secondary-blue text-white text-xs font-normal leading-5"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProject;

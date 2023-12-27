import React from "react";

const Buttons = ({ onCancel, onSubmit, editMode, textColor, bgColor }) => (
  <div className="w-full h-[32px] p-6 flex justify-end border-t border-gray-200 my-6">
    <button
      onClick={onCancel}
      className={`flex h-[32px] py-2.5 px-2 justify-center items-center gap-1 ${textColor} rounded-md text-cancle text-xs font-normal leading-5 mr-2`}
    >
      Cancel
    </button>
    <button
      type="submit"
      onClick={onSubmit}
      className={`flex h-[32px] py-2.5 px-2 justify-center items-center gap-1 rounded-md text-white text-xs font-normal leading-5 ${
        bgColor.includes("light-blue")
          ? "bg-secondary-light-blue"
          : bgColor.includes("blue-1")
          ? "bg-secondary-blue"
          : bgColor.includes("green")
          ? "bg-secondary-green"
          : bgColor.includes("pink")
          ? "bg-secondary-pink"
          : ""
      }`}
    >
      {editMode ? "Edit" : "Add"}
    </button>
  </div>
);

export default Buttons;

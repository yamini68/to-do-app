import React from 'react'

const Text = ({ value, onChange, validationError }) => (
    <div className="mb-4 w-full px-6 py-2.5">
      <label htmlFor="taskName" className="block text-add-task-name text-xs font-normal leading-5">
        Name of the task
      </label>
      <input
        type="text"
        id="taskName"
        name="taskName"
        value={value}
        onChange={onChange}
        className="mt-1 block w-full flex h-[44px] py-1 px-3 justify-between items-center self-stretch rounded-md border border-custom-color bg-white"
        placeholder="Text"
      />
      {validationError && <small className="text-custom-red text-xs font-normal leading-5">Please fill the task name</small>}
    </div>
  );
  

export default Text

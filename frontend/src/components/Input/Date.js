import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calender from '../assests/Calender';
const Date = ({ label, selected, onChange, validationError }) => (
    <div className="mb-4 w-full px-6 py-2.5">
      <label htmlFor={label} className="block text-add-task-name text-xs font-normal leading-5">
        {label}
      </label>
      <DatePicker
        selected={selected}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        customInput={<CustomInput />}
      />
      {validationError && <small className="text-custom-red text-xs font-normal leading-5">Please fill the {label.toLowerCase()}</small>}
    </div>
  );
  
  const CustomInput = ({ value, onClick }) => (
    <button
    type='button'
      className="mt-1 block w-full flex h-[44px] py-1 px-3 justify-between items-center self-stretch rounded-md border border-custom-color bg-white text-left"
      onClick={onClick}
    >
      {value || "DD/MM/YYYY"}
      <Calender/>
    </button>
  );
  

export default Date

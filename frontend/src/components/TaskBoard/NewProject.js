import React, { useState } from "react";
import AddProject from "./AddProject";

const NewProject = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="border-t items-center flex justify-center border-gray-200 p-3 text-custom-blue  text-xs font-normal leading-5 cursor-pointer">
      <div
        className="w-[180px] flex items-center"
        onClick={() => setShow((prev) => !prev)}
      >
        <div className="mr-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M6.18573 5.31428V5.81428H6.68573H10.1143C10.1636 5.81428 10.2108 5.83385 10.2456 5.86868C10.2804 5.90351 10.3 5.95074 10.3 6C10.3 6.04925 10.2804 6.09649 10.2456 6.13132C10.2108 6.16614 10.1636 6.18571 10.1143 6.18571H6.68573H6.18573V6.68571V10.1143C6.18573 10.1635 6.16616 10.2108 6.13133 10.2456C6.0965 10.2804 6.04927 10.3 6.00001 10.3C5.95076 10.3 5.90352 10.2804 5.86869 10.2456C5.83386 10.2108 5.8143 10.1635 5.8143 10.1143V6.68571V6.18571H5.3143H1.88573C1.83647 6.18571 1.78923 6.16614 1.75441 6.13132C1.71958 6.09649 1.70001 6.04925 1.70001 6C1.70001 5.95074 1.71958 5.90351 1.75441 5.86868C1.78923 5.83385 1.83647 5.81428 1.88573 5.81428H5.3143H5.8143V5.31428V1.88571C5.8143 1.83646 5.83386 1.78922 5.86869 1.75439C5.90352 1.71956 5.95076 1.7 6.00001 1.7C6.04927 1.7 6.0965 1.71956 6.13133 1.75439C6.16616 1.78922 6.18573 1.83646 6.18573 1.88571V5.31428Z"
              fill="#97A1B2"
              stroke="#1B72C2"
            />
          </svg>
        </div>
        Add New Project
      </div>
      {show && <AddProject handleClick={() => setShow(false)} />}
    </div>
  );
};

export default NewProject;

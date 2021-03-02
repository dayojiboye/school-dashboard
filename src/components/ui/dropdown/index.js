import React from 'react';

import { ChevronDownSvg } from '../../../assets/icons';

const dropdown = ({ btnText, children, ...props }) => {
  return (
    <div className="dropdown_wrapper" {...props}>
      <button>
        <span>
          {children}
          {btnText}
        </span>
        <ChevronDownSvg />
      </button>

      {/* <div className="dropdown_menu">
        <ul>{children}</ul>
      </div> */}
    </div>
  );
};

export default dropdown;

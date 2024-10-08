import React, { forwardRef, HTMLAttributes } from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CustomDateInput = forwardRef<HTMLButtonElement, any>(
  (attributes, ref) => {
    const { value, onClick, className } = attributes;

    return (
      <button className={className} onClick={onClick} ref={ref}>
        {value}
      </button>
    );
  }
);

CustomDateInput.displayName = "CustomDateInput";

interface IProps {
  value: Date;
  setValue: (value: Date | null) => void;
}

const DatePicker = (props: IProps) => {
  const { value, setValue } = props;

  return (
    <div className="flex flex-col">
      <label className="text-white font-medium text-sm mb-1">Date</label>

      <ReactDatePicker
        selected={value}
        onChange={(date) => setValue(date)}
        customInput={
          <CustomDateInput className="h-[44px] bg-pink-700 border border-pink-900 text-white px-3 rounded-xl w-full text-sm text-start" />
        }
      />
    </div>
  );
};

export default DatePicker;

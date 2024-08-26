import React, { useId, forwardRef, ChangeEventHandler } from "react";

interface IProps {
  label: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: string;
}

const CustomInput = forwardRef<HTMLInputElement, IProps>((props, ref) => {
  const { label, placeholder, onChange, type = "text" } = props;
  const identifier = useId();

  return (
    <div className="flex flex-col">
      <label htmlFor={identifier} className="font-medium text-sm mb-1">
        {label}
      </label>

      <input
        ref={ref}
        type={type}
        id={identifier}
        placeholder={placeholder}
        className="bg-input-bg border border-[#E5E9F1] h-[44px] rounded-xl px-3 py-1 placeholder:text-sm"
        onChange={onChange}
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

export default CustomInput;

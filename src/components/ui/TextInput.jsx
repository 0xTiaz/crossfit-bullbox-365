import React from "react";

const TextInput = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  );
};

export default TextInput;

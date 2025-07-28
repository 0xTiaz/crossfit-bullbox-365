import React from "react";

const TextArea = ({
  name,
  value,
  onChange,
  placeholder,
  rows = 5,
  required = false,
}) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className="w-full px-4 py-3 bg-[#1a1a1a] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
    />
  );
};

export default TextArea;

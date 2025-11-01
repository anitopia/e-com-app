import React from "react";

const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      {...props}
      className={`py-2 px-3 rounded-md bordertext-sm font-semibold hover:cursor-pointer 
         text-white ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
};

export default Button;

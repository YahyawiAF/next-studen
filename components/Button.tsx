import React from "react";

type Props = {
  type: "submit" | "reset" | undefined;
  label: string;
  position: string;
  onClick: any;
};

function Button({ label, type, position, onClick = null }: Props) {
  return (
    <div
      className={`flex ${
        position == "left"
          ? "justify-start"
          : position == "right"
          ? "justify-end"
          : "justify-center"
      }`}
    >
      <button
        onClick={onClick}
        className={`px-6 py-2 w-auto bg-[#228e9d] font-bold text-white rounded-lg`}
        type={type}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;

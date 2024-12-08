import React from "react";

function Button({ children }) {
  return <button className="bg-[#0093D0] text-zinc-100 px-2.5 py-2 flex items-center justify-center rounded-lg gap-2">{children}</button>;
}

export default Button;

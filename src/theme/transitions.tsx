import type { JSX } from "react";

export const Transitions = {
  component: (element: JSX.Element) => {
    return (
      <div className="animate-fadeIn transition-all duration-500 ease-in-out">
        {element}
      </div>
    );
  },
};

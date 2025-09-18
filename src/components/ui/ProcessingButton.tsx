import React from "react";

type ProcessingProps = {
  className?: string;
  children?: React.ReactNode;
};

function ProcessingButton({ className, children }: ProcessingProps) {
  return (
    <button
      type="button"
      className={`${className || ""}`}
      disabled
    >
      <div className="flex items-center justify-center gap-2">
        <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-pr-xspd border-4"></div>
        <div>{children}</div>
      </div>
    </button>
  );
}

export default ProcessingButton;

import { Loader } from "lucide-react";
import React from "react";

const loading = () => {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Loader
        className="text-primary w-20 h-20 animate-spin"
        style={{ animationDuration: "2s" }}
      />
    </div>
  );
};

export default loading;

import { LoaderCircle } from "lucide-react";
import type { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <LoaderCircle className="text-blue-500 animate-spin" />
    </div>
  );
};

export default Loader;

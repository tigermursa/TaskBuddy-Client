import useComponentWidth from "../../hooks/useComponentWidth";
import CompleteTask from "../CompleteTask";

const Complete = () => {
  //to make blur when side bar opens
  const { componentWidth, componentRef } = useComponentWidth();
  return (
    <div className={`h-[100vh] ${componentWidth <= 150 ? "blur-phone overflow-hidden" : ""}`}>
      <div ref={componentRef}>
        <CompleteTask />
      </div>
    </div>
  );
};

export default Complete;

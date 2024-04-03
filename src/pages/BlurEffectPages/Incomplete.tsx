import useComponentWidth from "../../hooks/useComponentWidth";
import InCompleteTask from "../InCompleteTask";

const Incomplete = () => {
  //to make blur when side bar opens
  const { componentWidth, componentRef } = useComponentWidth();
  return (
    <div className={`h-[100vh] ${componentWidth <= 150 ? "blur-phone overflow-hidden" : ""}`}>
      <div ref={componentRef}>
        <InCompleteTask />
      </div>
    </div>
  );
};

export default Incomplete;

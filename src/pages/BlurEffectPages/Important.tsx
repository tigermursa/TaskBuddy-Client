import useComponentWidth from "../../hooks/useComponentWidth";
import ImportantTask from "../ImportantTask";

const Important = () => {
  //to make blur when side bar opens
  const { componentWidth, componentRef } = useComponentWidth();
  return (
    <div className={`h-screen ${componentWidth <= 150 ? "blur-phone" : ""}`}>
      <div ref={componentRef}>
        <ImportantTask />
      </div>
    </div>
  );
};

export default Important;

import { JsonView, allExpanded, defaultStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";

const RightPanel = ({ data }) => {
  return (
    <div className="panel">
      <JsonView
        data={data}
        shouldExpandNode={allExpanded}
        style={defaultStyles}
      />
    </div>
  );
};

export default RightPanel;

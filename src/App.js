import { useEffect, useState } from "react";

import { modifiedType, defaultId } from "./config";
import { LeftPanel, RightPanel } from "./components";
import { dataFetch, mswEnable, mswDisable } from "./helpers";

function App() {
  const [data, setData] = useState("");
  const [eventId, setEventId] = useState(defaultId);
  const [fetchType, setFetchType] = useState(modifiedType);
  const [mswStatus, setMswStatus] = useState(false);

  const fetchAction = () => {
    dataFetch(eventId).then((data) => setData(data));
  };

  useEffect(() => {
    localStorage.setItem("mswStatus", mswStatus);
    mswStatus ? mswEnable() : mswDisable();
  }, [mswStatus]);

  useEffect(() => {
    localStorage.setItem("fetchType", fetchType);
  }, [fetchType]);

  return (
    <div className="App">
      <header>
        <h1 className="title">My test dashboard for MSWJS</h1>
      </header>
      <div className="mainContainer">
        <LeftPanel
          eventId={eventId}
          setEventId={setEventId}
          mswStatus={mswStatus}
          setMswStatus={setMswStatus}
          fetchType={fetchType}
          setFetchType={setFetchType}
          fetchAction={fetchAction}
        />
        <RightPanel data={data} />
      </div>
    </div>
  );
}

export default App;

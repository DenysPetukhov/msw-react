import { Input, Switch, Radio } from "antd";

import { modifiedType, fakeType } from "../../config";

const { Search } = Input;

const LeftPanel = ({
  eventId,
  setEventId,
  mswStatus,
  setMswStatus,
  fetchType,
  setFetchType,
  fetchAction,
}) => {
  const inputHandler = (e) => {
    return setEventId(e.target.value);
  };

  const switchHandler = (status) => {
    return setMswStatus(status);
  };

  const radioHandler = (e) => {
    return setFetchType(e.target.value);
  };

  return (
    <div className="panel">
      <div className="">
        <p className="title">EventId</p>
        <div className="container">
          <Search
            enterButton="Search"
            size="large"
            onChange={inputHandler}
            value={eventId}
            onSearch={fetchAction}
          />
        </div>
        <div className="switchContainer">
          <p>Disable MSWJS</p>
          <Switch checked={mswStatus} onChange={switchHandler} />
          <p>Enable MSWJS</p>
        </div>
        {mswStatus && (
          <Radio.Group
            defaultValue={fetchType}
            size="large"
            onChange={radioHandler}
          >
            <Radio.Button className="radio" value={modifiedType}>
              {modifiedType}
            </Radio.Button>
            <Radio.Button className="radio" value={fakeType}>
              {fakeType}
            </Radio.Button>
          </Radio.Group>
        )}
      </div>
    </div>
  );
};

export default LeftPanel;

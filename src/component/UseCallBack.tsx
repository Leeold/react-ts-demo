import React, { useEffect, useState, useCallback } from "react";

function Memo() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState("");
  //useMemo 缓存一个变量
  const callBack = useCallback(() => {
    return count;
  }, [count]);
  return (
    <React.Fragment>
      <h4>{count}</h4>
      <Child callBack={callBack} />
      <div>
        <button onClick={() => setCount(count + 1)}>+c1</button>
        <input
          value={val}
          onChange={(Event) => setVal(Event.target.value)}
          type="text"
        />
      </div>
    </React.Fragment>
  );
}
function Child(IProps: { callBack: any }) {
  const callBack = IProps.callBack;
  const [count, setCount] = useState(() => callBack());
  useEffect(() => {
    setCount(callBack());
  }, [callBack]);
  return <div>{count}</div>;
}
export default Memo;

import React, { useMemo, useState } from "react";

function Memo() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState("");
  //useMemo 缓存一个变量
  const expensive = useMemo(() => {
    console.log("compute");
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count]);
  return (
    <React.Fragment>
      <h4>
        {count}-{val}-{expensive}
      </h4>
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
export default Memo;

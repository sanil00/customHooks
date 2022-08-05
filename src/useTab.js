import { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: " content1"
  },
  {
    tab: "Section 2",
    content: " content2"
  }
];
const content2 = "";
const useTab = (initialValue = 0, content) => {
  const [id, setId] = useState(initialValue);
  if (!content || !Array.isArray(content)) {
    console.log("is not array");
    return { text: 0, setId };
  }
  return {
    text: content[id].tab,
    setId
  };
};

const useNoti = (tmp) => {
  return content[tmp].tab;
};

export const Button = () => {
  const { text, setId } = useTab(0, content);
  const [tmp, setTemp] = useState(0);
  const Noti = useNoti(tmp);
  return (
    <div>
      {content.map((value, index) => (
        <button onClick={console.log(2)}>{value.tab}</button>
      ))}
      {/* <button onClick={() => setTemp(0)}>s</button>
      <button onClick={() => setTemp(1)}>k</button> */}
      {/* <div>{tmp}</div> */}
      <div>{text}</div>
      {/* <div>{Noti}</div> */}
    </div>
  );
};

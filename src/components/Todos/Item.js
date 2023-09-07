import styled from "styled-components";

export default function TodoItem({ item, doneItem, deleteItem }) {
  return (
    <Li>
      <input
        type="checkbox"
        checked={item.done}
        onChange={() => doneItem(item.id)}
      />
      <span
        style={{
          textDecoration: item.done ? "line-through" : "none",
          color: item.done ? "gray" : "black"
        }}
      >
        {item.title}
      </span>
      <i style={{ cursor: "pointer" }} onClick={() => deleteItem(item.id)}></i>
    </Li>
  );
}

const Li = styled.li`
  position: relative;
  height: 30px;
  line-height: 30px;

  font-size: 16px;
  list-style: none;
  text-align: left;

  input {
    margin-right: 10px;
    vertical-align: baseline;
  }

  i {
    position: absolute;
    right: 0;
    top: 50%;

    width: 15px;
    height: 15px;
    background: red;
  }
`;

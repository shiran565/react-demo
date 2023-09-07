import { useState, useRef } from "react";
import styled from "styled-components";

export default function Form({ addItem }) {
  const $form = useRef(null);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    if (!text) {
      return false;
    }
    //call the addItem method of parent component
    addItem(text);
    //clearText after submit
    setText("");
    e.preventDefault();
    return false;
  };

  return (
    <form ref={$form} onSubmit={handleSubmit.bind(this)}>
      <Input
        type="text"
        value={text}
        placeholder="Enter a Task Name"
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

const Input = styled.input`
  padding: 3px;
  width: 100%;
  height: 30px;

  font-size: 18px;
  line-height: 30px;
  border-radius: 3px;
  border: 1px solid gray;
`;

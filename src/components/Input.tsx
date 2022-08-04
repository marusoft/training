import { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Input: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          className="input-box"
          type="text"
          placeholder="type something"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Input;

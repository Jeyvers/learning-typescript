import React from 'react';
import './style.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <div>
      <form action='' className='input'>
        <input type='input' placeholder='Enter a task' className='input-box' />
        <button className='input-submit' type='submit'>
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;

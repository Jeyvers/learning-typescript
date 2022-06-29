import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

// React.FC supports a funcitonal component, React.ReactNode supports all types
const App: React.FC = () => {
  // You use brackets to set the type of the state
  const [todo, setTodo] = useState<string>('');

  return (
    <div className='App'>
      <span className='taskify'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;

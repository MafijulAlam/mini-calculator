import React, { useState } from 'react';
import shortid from 'shortid';
import './App.css';
import History from './components/History.jsx';
import Input from './components/Input';
import Operation from './components/Operation';
const App = () => {
  const init = {
    input1: 0,
    input2: 0,
  };
  const [value, setValue] = useState({ ...init });
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);
  const [restore, setRestore] = useState(null);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleClear = () => {
    setValue({ ...init });
    setResult(0);
  };

  const handleClick = (op) => {
    if (!value.input1 || !value.input2) {
      alert('Enter Valid input');
      return;
    }
    const f = new Function(
      'op',
      `return ${value.input1} ${op} ${value.input2}`
    );
    const operationResult = Number(f(op));
    setResult(operationResult);
    const historyObj = {
      id: shortid.generate(),
      inputs: { ...value },
      result: operationResult,
      operation: op,
      date: new Date(),
    };
    setHistory([...history, historyObj]);
  };

  const handleRestore = (history) => {
    setValue({ ...history.inputs });
    setResult(history.result);
    setRestore(history.id);
  };

  return (
    <div>
      <h1 style={{ color: 'white' }}>Result: {result}</h1>
      <div>
        <Input value={value} handleChange={handleChange} />
      </div>
      <div>
        <Operation handleClear={handleClear} handleClick={handleClick} />
      </div>
      <History
        history={history}
        restore={restore}
        handleRestore={handleRestore}
      />
    </div>
  );
};

export default App;

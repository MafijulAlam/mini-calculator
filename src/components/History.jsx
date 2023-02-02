import React from 'react';

const History = ({ history, handleRestore, restore }) => {
  return (
    <div>
      <div style={{ color: 'white' }}>
        <h2>Operation History</h2>
        {history.length === 0 ? (
          <p>There is no history</p>
        ) : (
          <ul>
            {history?.map((item) => (
              <li key={item.id}>
                <p>
                  Operations: {item.inputs.input1} {item.operation}{' '}
                  {item.inputs.input2}, Result: {item.result}
                </p>
                <small>{item.date.toLocaleDateString()}</small>
                <button
                  onClick={() => handleRestore(item)}
                  disabled={restore !== null && restore === item.id}
                >
                  Restor
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default History;

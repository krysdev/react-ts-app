import { useState } from 'react';

const List: React.FC = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setList([...list, name]);
  };

  return (
    <div>
      <h3>List</h3>
      <ul>
        {list.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={onClick}>ADD name</button>
    </div>
  );
};

export default List;

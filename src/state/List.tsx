import { useState } from 'react';

const List: React.FC = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <h3>List</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button>ADD name</button>
    </div>
  );
};

export default List;

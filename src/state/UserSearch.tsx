import { useState } from 'react';

const people = [
  { person: 'x', age: 20 },
  { person: 'y', age: 30 },
  { person: 'z', age: 40 },
];

const UserSearch: React.FunctionComponent = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{person: string, age: number} | undefined>();
    

  const onClick = () => {
    const weGotHim = people.find((el) => {
      return el.person === name
    });
    setUser(weGotHim)
    console.log(weGotHim)
  };

  return (
    <div>
      Search
      <br />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={onClick}>Search</button>
      <div>
        {user && user.person} {/* if user is truthy then access user.person, otherwise return undefined (nothing displayed) */}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;

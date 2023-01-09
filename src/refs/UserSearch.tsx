import { useState, useRef, useEffect } from 'react';

const people = [
  { person: 'x', age: 20 },
  { person: 'y', age: 30 },
  { person: 'z', age: 40 },
];

const UserSearch: React.FunctionComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null); // when defining REF it has to be 'type of HTML element or null' and  null as a default value
  const [name, setName] = useState('');
  const [user, setUser] = useState<{person: string, age: number} | undefined>();
  
  useEffect(() => {
    if (!inputRef.current){                              // and also a type guard 
      return;
    }

    return inputRef.current.focus();
  }, [])

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
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
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

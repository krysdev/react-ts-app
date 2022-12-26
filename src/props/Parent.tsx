import { ChildAsFC } from './Child';

function Parent() {
  return (
    <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
      TEXT
    </ChildAsFC>
  );
}

export default Parent;

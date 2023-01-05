const EventComponent: React.FunctionComponent = () => {
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return console.log(e);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => { 
    console.log(event.movementX)
  };

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>Drag Me</div>
    </div>
  );
};

export default EventComponent;

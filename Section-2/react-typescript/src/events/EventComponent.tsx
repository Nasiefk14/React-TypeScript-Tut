const EventComponent: React.FC = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e)
    };

    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(e)
    }
    
    return <>
        <input onChange={onChange}/>
        <div draggable onDragStart={onDragStart}>Drag Me!</div>
    </>
};

export default EventComponent;
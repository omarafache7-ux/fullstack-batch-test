//we are passing the props(parametors) to the function component
function todoItem({todoData}){
return(
    <div className="todo-item">
        <input type="checkbox"/>
        <span>{todoData.text}</span>
    </div>
)
}

export default todoItem;
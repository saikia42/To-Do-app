import './todo.css'
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";

const TodoEnv = ({todo,index, deleteTodo, markAsDone}) => {
  return (
    <div className='container2' key={index} style={{color: todo.completed ? 'grey' : 'black', borderColor: todo.completed ? 'grey' : 'black'}}>
      <div className='todos'>
        <div className="title">{todo.title}</div>
        <div className="description">{todo.description}</div>
      </div>
      <div className='icons'>
        <IoCheckmarkDoneSharp onClick={()=>markAsDone(index)} />
        <RiDeleteBin6Fill onClick={()=>deleteTodo(index)} />
      </div>
    </div>
  )
}

export default TodoEnv

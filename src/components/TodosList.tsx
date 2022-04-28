import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector"

const TodosList: React.FC = () => {
   const {todos, loading, error, limit, page} = useTypedSelector(state => state.todo);
   const {fetchTodos, setTodoPage} = useActions(); 
   const  pages = [1, 2, 3, 4, 5];

   useEffect( () => {
    fetchTodos(page, limit);
  }, [page])
  console.log('todos') 
   if(loading){
    return <h1>Downloading....</h1>
  }
  if(error){
    return <h1>{error}</h1>
  }

    return (
        <div> 
          {
            todos.map(todo => <div key={todo.id}>{todo.id} - {todo.title}</div>)
          }
          <div style={{display: "flex"}}>
            {pages.map(p =>
                <div 
                    onClick={() => setTodoPage(p)}
                    style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10}}
                    >
                    {p}
                </div>
            )}
          </div>
        </div>
      )
}

export default TodosList;
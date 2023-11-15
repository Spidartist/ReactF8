import { useRef } from "react"
import { useStore, actions } from "./store"


function App(){

	const inputRef = useRef()

	const [state, dispatch] = useStore()
	const {todos, todoInput} = state

	console.log('todoInput: ', todoInput)

	const handleAdd = () => {
		dispatch(actions.addTodo(todoInput))
		dispatch(actions.setTodoInput(""))
		inputRef.current.focus()
	}


	console.log(todos)

	return (
		<div>
			<input
				ref={inputRef}
				value={todoInput}
				placeholder="Enter todo..."
				onChange={e => {
					dispatch(actions.setTodoInput(e.target.value))
				}}
			/>
			<button onClick={handleAdd}>Add</button>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}
						<span onClick={() => dispatch(actions.deleteTodo(index))}>
							&times;
						</span>
					</li>
					
				))}
			</ul>
		</div>
	)

}

export default App
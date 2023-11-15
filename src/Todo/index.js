import { useReducer, useRef } from 'react'
import reducer, { initState } from './reducer'
import { deleteJob, addJob, setJob } from './actions'
import logger from './logger'

// 1. Init state

// 2. Actions

// 3. Reducer

// 4. Dispatch



function App() {
	const [state, dispatch] = useReducer(logger(reducer), initState)

	const { job, jobs } = state

	const inputRef = useRef()

	const handleSubmit = () => {
		dispatch(addJob(job))
		dispatch(setJob(''))
		inputRef.current.focus()
	}
    return (
        <div style={{padding: '0px 20px'}}>
			<h3>To do</h3>
			<input
				ref={inputRef}
				value={job}
				placeholder='Enter todo...'
				onChange={e => {
					dispatch(setJob(e.target.value))
				}}
			/>
			<button onClick={handleSubmit}>Add</button>
			<ul>
				{jobs.map((job, index) => (
					<li key={index}>{job} 
						<span onClick={() => dispatch(deleteJob(index))}>&times;</span>
					</li>
				))}

			</ul>

        </div>
    )
}

export default App;

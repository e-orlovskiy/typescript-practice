import './App.css'
import type { RootState } from './app/store'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { addTask, editTask, toggleTask } from './features/task/taskSlice'
import ListItem from './ListItem'

function App() {
	const tasks = useSelector((state: RootState) => state.tasks.tasks)
	const dispatch = useDispatch()

	const handleTaskClick = (taskId: string) => {
		dispatch(toggleTask(taskId))
	}

	return (
		<ul>
			{tasks.map(task => (
				<ListItem task={task} onTaskClick={handleTaskClick} />
			))}
		</ul>
	)
}

export default App

import type { ITask } from './types/taskTypes'

interface ListItemProps {
	task: ITask
	onTaskClick: (id: string) => void
}

function ListItem({ task, onTaskClick }: ListItemProps) {
	return (
		<li onClick={() => onTaskClick(task.id)}>
			<span>{task.isDone ? 'V' : ''}</span>
			<span>{task.text}</span>
		</li>
	)
}

export default ListItem

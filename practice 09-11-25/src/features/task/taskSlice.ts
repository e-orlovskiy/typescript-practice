import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ITask } from '../../types/taskTypes'

interface ITaskState {
	tasks: ITask[]
	filter: 'all' | 'active' | 'completed'
}

const initialState: ITaskState = {
	tasks: [
		{ id: 'test1', text: 'задачка 1', isDone: false },
		{ id: 'test2', text: 'задачка 2', isDone: false },
		{ id: 'test3', text: 'задачка 3', isDone: false }
	],
	filter: 'all'
}

export const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		addTask: (state, action: PayloadAction<ITask>) => {
			state.tasks.push(action.payload)
		},
		editTask: (state, action: PayloadAction<{ id: string; text: string }>) => {
			const task = state.tasks.find(task => task.id === action.payload.id)
			if (task) task.text = action.payload.text
		},
		toggleTask: (state, action: PayloadAction<string>) => {
			const task = state.tasks.find(task => task.id === action.payload)
			if (task) task.isDone = !task.isDone
		}
	}
})

export const { addTask, editTask, toggleTask } = taskSlice.actions
export default taskSlice.reducer

'use server'

import { revalidatePath } from 'next/cache'
import db from './db'

// Server action to create a new todo
export const newTodo = async (formData: FormData) => {
    // formData is a standard, so we can use it to get the content of the input
    const todo = await db.todo.create({
        data: {
            content: formData.get('content'),
        },
    })

    // revalidate the todo list, expiring the cache, and show the new result in the UI
    revalidatePath('/todos')
}

export const completeTodo = async (id: string) => {
    await db.todo.update({
        where: { id },
        data: {
            completed: true,
        },
    })

    revalidatePath('/todos')
}
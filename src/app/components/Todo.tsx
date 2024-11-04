'use client'

import { useTransition } from 'react'
import { completeTodo } from '@/app/utils/actions'

const Todo = ({ todo }: { todo: any }) => {
  const [isPending, startTransition] = useTransition()

  return (
    <div
      className={
        'border border-black/20 cursor-pointer flex items-center justify-between rounded-lg p-2 text-sm transition-all duration-300 w-full' +
        (todo.completed ? ' bg-green-100' : '')
      }
      onClick={() => startTransition(() => completeTodo(todo?.id))}
    >
      {isPending && <span className="animate-spin">⌛</span>}
      <span className="text-gray-600">{todo?.completed ? '✅' : '❌'}</span>
      <span
        className={
          'ml-2 text-gray-600' + (todo?.completed ? ' line-through' : '')
        }
      >
        {todo?.content}
      </span>
    </div>
  )
}
export default Todo

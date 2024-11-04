import db from '@/app/utils/db'

import TodoList from '@/app/components/TodoList'

const getData = async () => {
  const todos = await db.todo.findMany()
  return todos
}

export default async function TodosPage() {
  const todos = await getData()

  return (
    <section className="flex w-full flex-col items-center justify-center gap-y-4">
      <TodoList todos={todos} />
    </section>
  )
}

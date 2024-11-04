import Todo from '@/app/components/Todo'

const TodoList = ({ todos }: { todos: any[] }) => {
  return (
    <section className="grid grid-rows-[20px_1fr_20px] h-screen place-items-center my-20">
      <div className="flex w-full flex-col items-center justify-center">
        <ul className="w-full max-w-md space-y-4 flex flex-col">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default TodoList

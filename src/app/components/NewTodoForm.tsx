import { newTodo } from '@/app/utils/actions'

const NewTodoForm = () => {
  return (
    <form
      action={newTodo}
      className="flex w-full flex-col items-center justify-center gap-y-4"
    >
      <h1 className="text-4xl text-black">Add a new todo</h1>
      <input
        name="content"
        type="text"
        placeholder="What needs to be done?"
        className="w-full max-w-96 rounded-lg border-2 border-white bg-transparent py-2 px-4 text-2xl"
      />

      <button
        type="submit"
        className="rounded-lg flex items-center justify-center bg-black px-4 py-2 text-white"
      >
        New Todo
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </form>
  )
}

export default NewTodoForm

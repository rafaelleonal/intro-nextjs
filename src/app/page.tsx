import NewTodoForm from '@/app/components/NewTodoForm'

export default async function Home() {
  return (
    <div className="w-full">
      <main className="flex w-full flex-col items-center justify-center gap-y-4 my-20">
        <NewTodoForm />
      </main>
    </div>
  )
}

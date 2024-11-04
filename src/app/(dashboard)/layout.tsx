import NewTodoForm from '../components/NewTodoForm'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="my-20">
      <section className="flex w-full flex-col items-center justify-center gap-y-4">
        <h1 className="text-4xl text-white">Dashboard</h1>
        <NewTodoForm />
        <hr className="border-white/20" />
        <div className="my-5">{children}</div>
      </section>
    </main>
  )
}

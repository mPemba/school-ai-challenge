export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-4xl font-bold text-gray-900">SchoolAI Challenge</h1>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <input
          className="w-full h-12 px-4 py-2 text-gray-700 my-40 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:border-gray-500"
          type="text"
          placeholder="Ask a question"
        />
      </div>
    </main>
  )
}

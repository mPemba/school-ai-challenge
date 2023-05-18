import { useState } from 'react'
import { useMessages } from '../utils/useQuestions'

const QuestionForm = () => {
  const [content, setContent] = useState('')
  const { addAnswer } = useMessages()

  const handleSubmit = async (e?: any) => {
    e?.preventDefault()
    addAnswer(content)
    setContent('')
  }

  return (
    <form className="relative mx-auto max-w-3xl rounded-t-xl" onSubmit={handleSubmit}>
      <div className=" border-gray-200 h-[130px] rounded-t-xl backdrop-blur border-t border-l border-r border-gray-500/10 dark:border-gray-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 p-5">
        <label htmlFor="content" className="sr-only">
          Your message
        </label>
        <textarea
          name="content"
          placeholder="Ask a question!"
          rows={3}
          value={content}
          autoFocus
          className="w-2/3 h-full resize-none bg-transparent p-2"
          onChange={(e: any) => setContent(e.target.value)}
        />
        <div className="absolute right-8 bottom-10">
          <div className="flex space-x-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default QuestionForm
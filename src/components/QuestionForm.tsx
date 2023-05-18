import { useState } from 'react'
import { useMessages } from '../utils/useQuestions'
import { colors } from '../lib/colors'

const buttonStyles = {
  backgroundColor: colors.darkGreen,
  color: colors.white
}

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
      <div className="border-gray-200 h-[130px] rounded-t-xl backdrop-blur border-t border-l border-r border-gray-500/10 dark:border-gray-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 p-5">
        <label htmlFor="content" className="sr-only">
          Your message
        </label>
        <textarea
          name="content"
          placeholder="Ask a question!"
          rows={3}
          value={content}
          autoFocus
          className="w-2/3 h-full resize-none bg-transparent p-2 outline-none border-none"
          onChange={(e: any) => setContent(e.target.value)}
          data-cy="question-form-text-area"
        />
        <div className="absolute right-8 bottom-10">
          <div className="flex space-x-3">
            <button data-cy="question-form-send-button" style={buttonStyles} className="font-bold py-2 px-4 rounded" type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default QuestionForm

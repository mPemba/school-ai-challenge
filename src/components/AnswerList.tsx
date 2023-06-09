import { useMessages } from '../utils/useQuestions'

const AnswerList = () => {
  const { messages, isLoadingAnswer } = useMessages()

  return (
    <div data-cy="answer-list" className="max-w-3xl mx-auto pt-8 overflow-y-scroll">
      {messages?.map((message, i) => {
        const isUser = message.role === 'user'
        if (message.role === 'system') return null
        return (
          <div
            id={`message-${i}`}
            className={`flex mb-4 fade-up ${isUser ? 'justify-end' : 'justify-start'}`}
            key={message.content}
            data-cy={`answer-list-message-${i}`}
          >
            <div
              style={{ maxWidth: 'calc(100% - 45px)' }}
              className={`group relative px-3 py-2 rounded-lg ${
                isUser
                  ? 'mr-2 bg-gradient-to-br pd-2 from-primary-700 to-primary-600 text-darkGreen'
                  : 'ml-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200'
              }`}
            >
              {message.content.trim()}
            </div>
          </div>
        )
      })}
      {isLoadingAnswer && (
        <div className="flex justify-start mb-4">
          <div className="loader ml-2 p-2.5 px-4 bg-lightGreen-200 dark:bg-gray-800 rounded-full space-x-1.5 flex justify-between items-center relative">
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
            <span className="block w-3 h-3 rounded-full"></span>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnswerList

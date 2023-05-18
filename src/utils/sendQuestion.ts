import { ChatCompletionRequestMessage } from 'openai'

export const sendQuestion = async (messages: ChatCompletionRequestMessage[]) => {
  try {
    const response = await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ messages })
    })

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

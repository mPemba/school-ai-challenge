import QuestionForm from '../components/QuestionForm'
import AnswerList from '../components/AnswerList'
import { NextPage } from 'next'
import { QuestionsProvider } from '../utils/useQuestions'
import Layout from '../components/Layout'

const IndexPage: NextPage = () => {
  return (
    <QuestionsProvider>
      <Layout>
        <AnswerList />
        <div className="fixed bottom-0 right-0 left-0">
          <QuestionForm />
        </div>
      </Layout>
    </QuestionsProvider>
  )
}

export default IndexPage

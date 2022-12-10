import { Form, Layout, Button, Radio } from "antd"
import questions from "../questions"
import '../assets/QuizForm.css'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function QuizForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleQuizSubmit = () => {
    console.log("form", form)
    fetch(`https://practice-final-2-el.web.app/destination`, {
      //  fetch(`http://127.0.0.1:5002/destination`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then((results) => navigate('/results', { state: results }))
      .catch(err => console.error(err))
  }

  const handleForm = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <Form action="submit">
      <Layout.Content style={{ marginTop: 24 }}>
        <div className="quiz-form-main-container">
          {questions.map(question => (
            <div key={question.value} className="form-item-container">
              <div className="question-label">
                {question.label}
              </div>
              <Radio.Group name={question.value} options={question.options} onChange={handleForm} form={form}>
                {question.options.map(option => {
                  return (
                    <Radio value={option.value}>{option.label}</Radio>
                  )
                })}
              </Radio.Group>
            </div>
          ))}
        </div>
      </Layout.Content>
      <div >
        <Button className="button-6" type="primary" htmlType="submit" onClick={handleQuizSubmit}>
          Submit Quiz
        </Button>
      </div>
    </Form>
  )
}
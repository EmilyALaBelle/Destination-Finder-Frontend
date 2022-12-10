import { useNavigate } from "react-router-dom"
import { Form, Input, Layout, Button } from "antd"
import '../assets/Signup.css'

export default function Login({ setUser, setToken, user, token }) {
  const navigate = useNavigate()
  const handleFormSubmit = (values) => {
    console.log('Success:', values)
    // fetch('http://127.0.0.1:5002/signup', {
    fetch('https://practice-final-2-el.web.app/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    })
      .then(response => response.json())
      .then(data => {
        setUser(data.user)
        setToken(data.token)
        navigate('/account')
      })
      .catch(err => console.error(err))
  }
  console.log(user, token)
  return (
    <Layout.Content className="layout">
      <h1 className="signup-header">Signup</h1>
      <Form className="form-box" onFinish={handleFormSubmit} >
        <Form.Item className="email-form" label="Email" name="email" rules={[{
          required: true,
          message: 'Please enter a valid emasil address'
        }]}>
          <Input className="password-input" />
        </Form.Item>
        <Form.Item className="password-form" label="Password" name="password" rules={[{
          required: true,
          message: 'Please enter password'
        }]}>
          <Input.Password className="password-input" />
        </Form.Item>
        <Form.Item>
          <Button className="signup-button" type='primary' htmlType='submit'>Signup</Button>
        </Form.Item>
      </Form>
      <br /><br />
      Already have an account?
      <button onClick={() => navigate('/login')}>Login</button>
    </Layout.Content>
  )
}

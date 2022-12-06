
import { Form, Input, Layout, Button } from "antd"
import { useNavigate } from "react-router-dom"

export default function Login({ setUser, setToken, user, token }) {
  const navigate = useNavigate()
  const handleFormSubmit = (values) => {
    console.log('Success:', values)
    
    //fetch('http://127.0.0.1:5002/login', {
      fetch('https://practice-final-2-el.web.app/login', {
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
    <Layout.Content>
      <h1>Login</h1>
      <Form onFinish={handleFormSubmit} >
        <Form.Item label="Email" name="email" rules={[{
          required: true,
          message: 'Please enter a valid email address'
        }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{
          required: true,
          message: 'Please enter password'
        }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>Login</Button>
        </Form.Item>
      </Form>
    </Layout.Content>
  )
}


// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useContext } from 'react'
// import { UserContext } from '../UserContext'
// // import { Button, Input, Form } from 'antd'


// export default function Login() {
//   const [form, setForm] = useState({})
//   const {setUser, setIsLoggedIn} = useContext(UserContext)
//   const navigate = useNavigate()

//   const handleFormSubmit = (e) => {
//     setIsLoggedIn(true)

//     // stop the page from refreshing
//     e.preventDefault()

//     console.log("submit")
//     fetch(`http://practice-final-2-el.web.app/login`, {
//     //fetch('http://127.0.0.1:5002/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       }, 
//       body: JSON.stringify(form),
//     })
//       .then(res => res.json())
//       .then(data => {
//         localStorage.setItem('userToken', data.token)
//         setUser(data)
//         navigate('/account')
//       })
//       .catch(err => console.error(err))
//   }

//   return (
//     <>
//       <form action='submit' onSubmit={handleFormSubmit} method='post'>
//         <h2>Log in</h2>
//         <label htmlFor=''>Email: </label>
//         <input type='email' onChange={e => setForm({ ...form, email: e.target.value })} />
//         <br />
//         <label htmlFor=''>Password: </label>
//         <input type='password' onChange={e => setForm({ ...form, password: e.target.value })} />
//         <button type='submit'>Login</button>
//       </form>
//       <br /><br />
//       Don't have an account?
//       <button onClick={() => navigate('/signup')}>Sign up</button>
//     </>
//   )
// }
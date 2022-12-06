import { Form, Layout, Button, Input } from "antd"

export default function Account ({user, token, setUser}) {
  const handleAccountUpdate = (values) => {
    console.log("values ->", values)
   // fetch(`http://localhost:5002/update/${user._id}`, {
    fetch(`https://practice-final-2-el.web.app/update/${user._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(values),
    })
    .then(response => response.json())
    .then(setUser)
    .catch(err => console.error(err))
  }
  console.log(user)

  return (
<Layout.Content>
<h1>Account</h1>
<Form 
onFinish={handleAccountUpdate}
initialValues={user}>
  <Form.Item label="First Name:" name="FirstName">
    <Input />
  </Form.Item>
  <br />
  <Form.Item label="Last Name:" name="LastName">
    <Input />
  </Form.Item>
  <br />
  <Form.Item label="Email:" name="email">
    <Input />
  </Form.Item>
  <br />
  <Form.Item>
    <Button type="primary" htmlType="submit">Save</Button>
  </Form.Item>
</Form>
</Layout.Content>
  )
}










// import { useState, useContext } from "react"
// // import { useParams } from "react-router-dom"
// import { UserContext } from "../UserContext"

// export default function Account() {
// const [form, setForm] = useState({})

// const {user, setUser} = useContext(UserContext)

// const handleFormSubmit = (e) => {
//   e.preventDefault()
//   console.log('submitting form')
//    const userToken = localStorage.getItem('userToken')
//   fetch(`http://localhost:5002/update/${user.user._id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': userToken,
//     },
//     body: JSON.stringify(form),
//   })
//   .then(response => response.json())
//   .then(setUser)
//   .catch(alert)
// }
// return (
//   <>
//   <form onSubmit={handleFormSubmit}>
//   <h1>Account</h1>
// <label htmlFor="" >First Name</label>
// <input type="text" onChange={e => setForm({ ...form, FirstName: e.target.value})}/>
// <br /> <br />
// <label htmlFor="">Last Name</label>
// <input  type="text" onChange={e => setForm({ ...form, LastName: e.target.value})}/>
// <br /> <br />
// <label htmlFor="">Email</label>
//   <input  type="text" onChange={e => setForm({ ...form, email: e.target.value})}/>
//   <br /> <br />
//   <button type="submit">Save</button>
//   </form>
//   <br />
//   </>
// )
// }
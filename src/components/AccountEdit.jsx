import { Form, Layout, Button, Input } from "antd"
import '../assets/Account.css'

export default function Account({ user, token, setUser }) {
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
    <Layout.Content className="layout">
      <h1 className="account-header">Account</h1>
      <Form
      className="aform-box"
        onFinish={handleAccountUpdate}
        initialValues={user}>
        <Form.Item className="firstName-form" label="First Name:" name="FirstName">
          <Input className="firstName-input"/>
        </Form.Item>
        <br />
        <Form.Item className="lastName-form" label="Last Name:" name="LastName">
          <Input className="lastName-input"/>
        </Form.Item>
        <br />
        <Form.Item className="aemail-form" label="Email:" name="email">
          <Input className="email-input"/>
        </Form.Item>
        <br />
        <Form.Item>
          <Button className="save-button" type="primary" htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    </Layout.Content>
  )
}

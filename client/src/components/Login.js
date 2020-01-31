import React, { useState, useEffect } from "react"
import axios from "axios"
import { axiosWithAuth } from "../utils/axiosWithAuth"

const Login = props => {
  // Setting up state
  const [credentials, setCredentials] = useState({ username: "", password: "" })

  // Handling Change
  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
    console.log(credentials)
  }

  // POST request
  const login = e => {
    e.preventDefault()
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        console.log(res, "Hi from the POST then")
        localStorage.setItem("token", res.data.payload)
      })
      .catch(err => {
        console.log(err, "Hi from the POST err")
      })
  }

  return (
    <>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </>
  )
}

export default Login

import React, { useState, useEffect } from "react"

const Login = () => {
  // Setting up state
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  // make a post request to retrieve a token from the api

  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <form>
        <input type="text" name="username" valeu="" />
        <input />
      </form>
    </>
  )
}

export default Login

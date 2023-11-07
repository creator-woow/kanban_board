import { Title } from 'shared/ui/Title'

export const LoginPage = () => {
  return (
    <main>
      <Title as="h1">
        Login page
      </Title>
      <form action="http://localhost:5050/login" method="post">
        <label>
          <span>Login</span>
          <input type="text" name="login" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" />
        </label>
        <button type="submit">
          Login
        </button>
      </form>
      registration
      <form action="http://localhost:5050/signup" method="post">
        <label>
          <span>Login</span>
          <input type="text" name="login" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" />
        </label>
        <button type="submit">
          Login
        </button>
      </form>
    </main>
  )
}

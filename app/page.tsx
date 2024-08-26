import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
        <h1>Login</h1>
        <LoginForm />
      </main>
    </>
  );
}

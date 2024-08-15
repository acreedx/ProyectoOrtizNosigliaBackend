import LoginForm from "./components/login-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <h1>Login</h1>
      <LoginForm />
    </main>
  );
}

'use client'
import { FormEvent } from "react";
import { login } from "./service/auth/login.service";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = e.currentTarget
    const email = formData.email.value
    const password = formData.password.value

    const loginData = await login(email, password)
    console.log("🚀 ~ handleSubmit ~ loginData:", loginData)   
    router.push('/views/createAccount')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email: 
          <input
            className="text-black" 
            type="text" 
            name="email" 
          />
        </label>
        <label htmlFor="password">Password: 
          <input
            className="text-black" 
            type="text" 
            name="password" 
          />
        </label>
        <button type="submit">Login</button> 
      </form>
    </main>
  );
}

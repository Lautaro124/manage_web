'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

function CreateAccount() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const amount = (e.target as HTMLFormElement).amount.value;
    console.log(amount);
    router.push('/views/dashboard');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount">Monto de dinero: 
        <input type="number" name="amount" />
      </label>
      <button type="submit">Crear Cuenta</button>
    </form>
  );
}

export default CreateAccount;
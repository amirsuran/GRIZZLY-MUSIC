import React from 'react';

function LoginForm() {
  const handleLogin = (event) => {
    event.preventDefault();
    // handle login logic here
  }

  return (
    <form className='flex  flex-col items-center w-full gap-4' onSubmit={handleLogin}>
      <label className='font-[Inter] text-white' htmlFor="email">Email</label>
      <input className='bg-slate-300	font-[Inter] text-white' type="email" id="email" name="email" required />

      <label className='font-[Inter]  text-white' htmlFor="password">Password</label>
      <input className='bg-slate-300 font-[Inter]  text-white' type="password" id="password" name="password" required />

      <button  className='font-[Inter] text-white' type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
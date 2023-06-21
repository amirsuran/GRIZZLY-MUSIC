import React from 'react';

function RegisterForm() {
  const handleRegister = (event) => {
    event.preventDefault();
    // handle registration logic here
  }

  return (
    <form className='flex  flex-col items-center w-full' onSubmit={handleRegister}>
      <label className='font-[Inter] text-white' htmlFor="name">Name</label>
      <input className='font-[Inter] text-white' type="text" id="name" name="name" required />

      <label className='font-[Inter] text-white' htmlFor="email">Email</label>
      <input className='font-[Inter] text-white' type="email" id="email" name="email" required />

      <label className='font-[Inter] text-white' htmlFor="password">Password</label>
      <input className='font-[Inter] text-white' type="password" id="password" name="password" required />

      <button className='text-white' type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;

import React from 'react';
import { Button } from '../Button/Button';

export const LoginForm: React.FC = () => {
  return (
    <div className="border border-brand-purple/50 rounded-[2.5rem] p-12 bg-white w-full max-w-md shadow-[4px_4px_0px_0px_var(--color-brand-shadow-hover)] mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 tracking-widest uppercase">LOGIN</h2>
      
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label className="font-bold ml-1">Email</label>
          <input 
            type="email" 
            placeholder="usuario@gmail.com"
            className="w-full border border-secondary-bg rounded-xl px-4 py-3 text-center focus:border-brand-purple outline-none transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="font-bold ml-1 text-error">Contraseña</label>
          <input 
            type="password" 
            defaultValue="password123"
            className="w-full border border-danger-bg rounded-xl px-4 py-3 text-center focus:border-error outline-none transition-colors"
          />
        </div>

        <div className="flex justify-center pt-4">
          <Button variant="primary" className="px-12">LOGIN</Button>
        </div>
      </form>
    </div>
  );
};
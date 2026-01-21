import { Button } from '../Button/Button';

export function LoginForm() {
  return (
    <div className="border border-brand-purple/50 rounded-[2.5rem] p-12 bg-white w-full max-w-md shadow-[4px_4px_0px_0px_var(--color-brand-shadow-hover)] mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 tracking-widest uppercase">LOGIN</h2>
      
      <form className="space-y-6">
        <div className="space-y-2">
          <label className="font-bold ml-1">Email</label>
          <input 
            type="email" 
            placeholder="usuario@gmail.com"
            className="w-full border rounded-xl px-4 py-3 text-center outline-none transition-colors border-secondary-bg focus:border-brand-purple"
          />
        </div>

        <div className="space-y-2">
          <label className="font-bold ml-1 text-error">Contraseña</label>
          <input 
            type="password" 
            defaultValue="password123"
            className="w-full border rounded-xl px-4 py-3 text-center outline-none transition-colors border-danger-bg focus:border-error"
          />
        </div>

        <div className="flex justify-center pt-4">
          <Button variant="primary" className="px-12" texto="LOGIN" />
        </div>
      </form>
    </div>
  );
}
import { Button } from '../Button/Button';

const inputBaseClass = "w-full border rounded-xl px-4 py-3 text-center transition-colors";

export function LoginForm() {
  return (
    <div className="border border-botones-trazo/50 rounded-3xl p-12 bg-botones-primario-enfoque w-full max-w-md shadow-[4px_4px_0px_0px_var(--color-botones-sombra-hover)] mx-auto">
      <h2 className="text-2xl font-black text-center mb-10 tracking-widest uppercase">LOGIN</h2>
      
      <form className="space-y-6">
        <div className="space-y-2">
          <label className="font-bold ml-1">Email</label>
          <input 
            type="email" 
            placeholder="usuario@gmail.com"
            className={`${inputBaseClass} border-botones-secundario-secundario focus:border-brand-purple focus:ring-1 focus:ring-brand-purple focus:outline-none`}
          />
        </div>

        <div className="space-y-2">
          <label className="font-bold ml-1 text-error">Contraseña</label>
          <input 
            type="password"
            className={`${inputBaseClass} border-botones-peligro-peligro focus:border-brand-purple focus:ring-1 focus:ring-brand-purple focus:outline-none`}
          />
        </div>

        <div className="flex justify-center pt-4">
          <Button variant="primary" className="px-12" texto="LOGIN" />
        </div>
      </form>
    </div>
  );
}
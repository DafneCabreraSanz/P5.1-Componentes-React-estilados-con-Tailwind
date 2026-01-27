import { Button } from '../Button/Button';

const inputBaseClass = "w-full border rounded-xl px-4 py-3 text-center transition-colors";

export function UserCard() {
  return (
    <div className="bg-botones-primario-enfoque border border-botones-trazo/40 rounded-3xl p-8 shadow-[4px_4px_0px_0px_var(--color-botones-sombra-hover)] flex flex-col md:flex-row items-center gap-8 max-w-sm md:max-w-2xl mx-auto">
      
      <div className="w-32 h-32 rounded-full bg-[#f3ede2] overflow-hidden shrink-0">
        <img
          src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=AI-Girl&radius=50&scale=90"
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center md:items-start space-y-4 w-full">
        <h3 className="text-xl font-bold italic">Nombre</h3>
        
        <div className="w-full">
          <label className="font-bold text-sm mb-1 ml-1">Email</label>
          <input
            type="email"
            placeholder="usuario@gmail.com"
            className={`${inputBaseClass} border-botones-secundario-secundario focus:border-brand-purple focus:ring-1 focus:ring-brand-purple focus:outline-none`}
          />
        </div>

        <Button variant="primary" className="mt-6" texto="Iniciar Sesión" />
      </div>
    </div>
  );
}
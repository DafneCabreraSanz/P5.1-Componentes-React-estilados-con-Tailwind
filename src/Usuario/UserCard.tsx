import React from 'react';
import { Button } from '../Button/Button';

export const UserCard: React.FC = () => {
  return (
    <div className="bg-white border border-brand-purple/40 rounded-3xl p-8 shadow-[4px_4px_0px_0px_var(--color-brand-shadow-hover)] flex flex-col md:flex-row items-center gap-8 max-w-sm md:max-w-2xl mx-auto">
      {/* Avatar */}
      <div className="w-32 h-32 rounded-full bg-[#f3ede2] overflow-hidden shrink-0">
         <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
      </div>

      {/* Info */}
      <div className="flex flex-col items-center md:items-start space-y-4 w-full">
        <h3 className="text-xl font-bold italic">Nombre</h3>
        
        <div className="w-full">
          <label className="font-bold text-sm mb-1 ml-1">Email</label>
          <input
            type="email"
            defaultValue="usuario@gmail.com"
            placeholder="usuario@gmail.com"
            className="w-full border border-secondary-bg rounded-xl px-4 py-3 text-center focus:border-brand-purple outline-none transition-colors"
          />
        </div>

        <Button variant="primary" className="mt-6">BUTTON</Button>
      </div>
    </div>
  );
};
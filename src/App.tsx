import { Navbar } from './Navbar/Navbar';
import { UserCard } from './Usuario/UserCard';
import { LoginForm } from './Login/LoginForm';
import { Button } from './Button/Button';

const hoverShadow = "shadow-[4px_4px_0px_0px_var(--color-brand-shadow-hover)]!";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-black">
      <Navbar />

      <main className="grow container mx-auto px-4 py-12 space-y-20">
        
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-center">
            VARIOS TIPOS DE BOTONES
          </h2>
          <div className="flex flex-wrap justify-center gap-8 p-10 bg-white rounded-3xl border-2 border-dashed border-brand-purple/20">
            
            <div className="flex flex-col gap-4 items-center">
              <span className="text-xs font-bold">Primary</span>
              <Button variant="primary" texto="BUTTON" />
              <Button variant="primary" className={`bg-primary-hover! ${hoverShadow}`} texto="BUTTON" />
              <Button variant="primary" disabled texto="BUTTON" />
            </div>

            <div className="flex flex-col gap-4 items-center">
              <span className="text-xs font-bold">Secondary</span>
              <Button variant="secondary" texto="BUTTON" />
              <Button variant="secondary" className={`bg-secondary-hover! ${hoverShadow}`} texto="BUTTON" />
              <Button variant="secondary" disabled texto="BUTTON" />
            </div>

            <div className="flex flex-col gap-4 items-center">
              <span className="text-xs font-bold">Danger</span>
              <Button variant="danger" texto="BUTTON" />
              <Button variant="danger" className={`bg-danger-hover! ${hoverShadow}`} texto="BUTTON" />
              <Button variant="danger" disabled texto="BUTTON" />
            </div>
          </div>
        </section>

        <section className="space-y-6 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-center">Login Form</h2>
          <LoginForm />
        </section>

        <section className="space-y-6 max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-center">Perfil de Usuario</h2>
          <UserCard />
        </section>

      </main>

      <footer className="py-8 text-center text-gray-400 text-sm">
        &copy; 2026 Dafne Cabrera Sanz Práctica Tailwind CSS - React + TypeScript 
      </footer>
    </div>
  );
}
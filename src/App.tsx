import { Navbar } from './Navbar/Navbar';
import { UserCard } from './Usuario/UserCard';
import { LoginForm } from './Login/LoginForm';
import { Button } from './Button/Button';

export default function App() {
  const hover = {
    primary: 'bg-primary-hover! shadow-[4px_4px_0px_0px_var(--color-brand-shadow-hover)]!',
    secondary: 'bg-secondary-hover! shadow-[4px_4px_0px_0px_var(--color-brand-shadow-hover)]!',
    danger: 'bg-danger-hover! shadow-[4px_4px_0px_0px_var(--color-brand-shadow-hover)]!',
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
      <Navbar />

      <main className="grow container mx-auto px-4 py-12 space-y-20">
        
        <section className="space-y-6">
          <h2 className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
            Estados de Componentes
          </h2>
          <div className="flex flex-wrap justify-center gap-8 p-10 bg-white rounded-3xl border-2 border-dashed border-brand-purple/20">
            
            <div className="flex flex-col gap-4 items-center">
              <span className="text-xs font-bold">Primary</span>
              <Button variant="primary">BUTTON</Button>
              <Button variant="primary" className={hover.primary}>BUTTON</Button>
              <Button variant="primary" disabled>BUTTON</Button>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <span className="text-xs font-bold">Secondary</span>
              <Button variant="secondary">BUTTON</Button>
              <Button variant="secondary" className={hover.secondary}>BUTTON</Button>
              <Button variant="secondary" disabled>BUTTON</Button>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <span className="text-xs font-bold">Danger</span>
              <Button variant="danger">BUTTON</Button>
              <Button variant="danger" className={hover.danger}>BUTTON</Button>
              <Button variant="danger" disabled>BUTTON</Button>
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
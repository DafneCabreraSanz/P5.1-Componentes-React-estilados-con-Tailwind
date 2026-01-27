interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  texto: string;
}

export function Button({ variant = 'primary', className = '', disabled, texto }: ButtonProps) {
  const base = "px-8 py-2 rounded-xl border-2 font-bold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:border-transparent";
  const shadowStyles = "shadow-[4px_4px_0px_0px_var(--color-botones-sombra)] hover:shadow-[4px_4px_0px_0px_var(--color-botones-sombra-hover)] disabled:shadow-none";
  
  const styles = {
    primary: `bg-botones-primario-enfoque border-botones-trazo text-botones-trazo ${shadowStyles} hover:bg-botones-primario-hover disabled:bg-botones-primario-hover`,
    secondary: `bg-botones-secundario-secundario border-botones-trazo text-botones-trazo ${shadowStyles} hover:bg-botones-secundario-hover disabled:bg-botones-secundario-hover`,
    danger: `bg-botones-peligro-peligro border-botones-trazo text-botones-trazo ${shadowStyles} hover:bg-botones-peligro-hover disabled:bg-botones-peligro-hover`
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} disabled={disabled}>
      {texto}
    </button>
  );
}
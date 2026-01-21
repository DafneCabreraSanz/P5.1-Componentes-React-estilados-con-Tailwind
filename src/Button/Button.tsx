interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base = "px-8 py-2 rounded-xl border-2 font-bold transition-all duration-200 outline-none disabled:opacity-40 disabled:cursor-not-allowed disabled:border-transparent";
  
  const styles = {
    primary: "bg-white border-brand-purple text-brand-purple shadow-[4px_4px_0px_0px_var(--color-brand-shadow)] hover:bg-primary-hover hover:shadow-[4px_4px_0px_0px_var(--color-brand-shadow-hover)] disabled:bg-primary-hover disabled:shadow-none focus:ring-4 focus:ring-brand-purple/10",
    secondary: "bg-secondary-bg border-brand-purple text-brand-purple shadow-[4px_4px_0px_0px_var(--color-brand-shadow)] hover:bg-secondary-hover hover:shadow-[4px_4px_0px_0px_var(--color-brand-shadow-hover)] disabled:bg-secondary-hover disabled:shadow-none focus:ring-4 focus:ring-brand-purple/10",
    danger: "bg-danger-bg border-brand-purple text-brand-purple shadow-[4px_4px_0px_0px_var(--color-brand-shadow)] hover:bg-danger-hover hover:shadow-[4px_4px_0px_0px_var(--color-brand-shadow-hover)] disabled:bg-danger-hover disabled:shadow-none focus:ring-4 focus:ring-brand-purple/10"
  };

  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />;
}
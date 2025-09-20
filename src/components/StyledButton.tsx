import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type StyledButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export default function StyledButton({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '', 
  type = 'button',
  disabled = false 
}: StyledButtonProps) {
  const baseClasses = "relative font-['Oswald'] font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#30E0A0] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantClasses = {
    primary: "group bg-gradient-to-r from-[#30E0A0] to-[#28B888] text-black px-8 py-4 text-lg hover:from-[#34E4A4] hover:to-[#2BC08C]",
    secondary: "group bg-transparent border-2 border-[#30E0A0] text-[#30E0A0] px-6 py-3 text-base hover:bg-gradient-to-r hover:from-[#30E0A0] hover:to-[#28B888] hover:text-black",
    ghost: "group relative text-[#EAEAEA] hover:text-[#30E0A0] px-4 py-2 text-base font-medium"
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {(variant === 'primary' || variant === 'secondary') && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#34E4A4] to-[#2BC08C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      )}
      {variant === 'ghost' && (
        <>
          <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-[#30E0A0] transition-all duration-300"></div>
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-[#30E0A0] rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={combinedClasses}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

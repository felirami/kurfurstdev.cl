import { ArchitecturalContainer, GradientTitle } from "./UnifiedContainers";

interface PageHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  className?: string;
}

export default function PageHeader({ 
  subtitle, 
  title, 
  description,
  className = ""
}: PageHeaderProps) {
  return (
    <ArchitecturalContainer className={`text-center mb-8 sm:mb-12 ${className}`}>
      <div className="flex items-center justify-center mb-4">
        <div className="w-16 h-px bg-gradient-to-r from-[#2ECB98] to-[#28B888]"></div>
        <div className="mx-4 text-[#2ECB98] text-sm font-medium tracking-[0.2em] uppercase">
          {subtitle}
        </div>
        <div className="w-16 h-px bg-gradient-to-r from-[#28B888] to-[#2ECB98]"></div>
      </div>
      
      <GradientTitle level={1}>
        {title}
      </GradientTitle>
      
      {description && (
        <p className="section-subtitle max-w-4xl mx-auto">
          {description}
        </p>
      )}
    </ArchitecturalContainer>
  );
}

// src/components/PortfolioGrid.tsx
import { ProyectoData } from "@/types";
import PortfolioCard from "./PortfolioCard";

type Props = {
  proyectos: ProyectoData[];
};

export default function PortfolioGrid({ proyectos }: Props) {
  if (!proyectos || proyectos.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-px bg-[#8A2BE2] mx-auto mb-6"></div>
        <p className="text-[#EAEAEA]/60 text-lg">No hay proyectos para mostrar todavía.</p>
        <div className="w-16 h-px bg-[#8A2BE2] mx-auto mt-6"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {proyectos.map((proyecto, index) => (
        <PortfolioCard key={proyecto._id} proyecto={proyecto} index={index} />
      ))}
    </div>
  );
}
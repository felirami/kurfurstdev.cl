import { ProyectoData } from "@/types";
import PortfolioCard from "./PortfolioCard";
import ArchitecturalContainer from "./ArchitecturalContainer";

type Props = {
  proyectos: ProyectoData[];
};

export default function PortfolioGrid({ proyectos }: Props) {
  if (!proyectos || proyectos.length === 0) {
    return (
      <ArchitecturalContainer className="text-center py-20">
        <p className="text-[#BBBBBB] text-lg">No hay proyectos para mostrar todavía.</p>
      </ArchitecturalContainer>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {proyectos.map((proyecto, index) => (
        <PortfolioCard key={proyecto._id} proyecto={proyecto} />
      ))}
    </div>
  );
}
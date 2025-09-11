// src/components/Footer.tsx

// Recibirá los datos del perfil del negocio como "props"
export default function Footer({ businessProfile }: { businessProfile: any }) {
    const { textoFooter } = businessProfile;
  
    return (
      <footer className="bg-gray-800 text-white">
        <div className="mx-auto max-w-7xl py-8 px-4 text-center">
          <p className="text-sm text-gray-400">{textoFooter}</p>
        </div>
      </footer>
    );
  }
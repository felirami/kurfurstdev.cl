// src/components/Header.tsx
import { urlFor } from "@/lib/sanity.client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  businessProfile: any;
  navigation: any;
}

export default function Header({ businessProfile, navigation }: Props) {
  const { nombreDelNegocio, logo } = businessProfile;
  const navItems = navigation?.items || [];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="flex items-center space-x-2">
          {logo && (
            <div className="relative h-10 w-10">
              <Image
                src={urlFor(logo).url()}
                alt={`Logo de ${nombreDelNegocio || 'logo'}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
          <span className="text-xl font-bold text-gray-800">{nombreDelNegocio}</span>
        </Link>
        <nav className="hidden space-x-6 md:flex">
          {navItems.map((item: any) => (
            <Link key={item._key || item.url} href={item.url || '/'} className="text-gray-600 hover:text-blue-500">
              {item.texto}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
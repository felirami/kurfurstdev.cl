// src/components/sections/ContactSection.tsx
import { ContactSectionData } from "@/types";

type Props = {
  section: ContactSectionData;
};

export default function ContactSection({ section }: Props) {
  const { titulo, subtitulo, formspreeUrl } = section;

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">{titulo}</h2>
          {subtitulo && <p className="mt-4 text-lg text-gray-600">{subtitulo}</p>}
        </div>
        <form action={formspreeUrl} method="POST" className="mt-10 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input type="text" name="name" id="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
          </div>
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-blue-700">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
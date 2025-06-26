import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-purple-600 to-blue-200/80 z-10" />
      <div className="relative z-20 flex items-center justify-center h-full text-white text-3xl font-bold">
        Welcome to KLYRO5
        <p></p>
      </div>
    </div>
  );
}

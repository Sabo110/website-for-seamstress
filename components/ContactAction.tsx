import React from 'react';

interface ContactActionProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  bgColor: string;
  hoverColor: string;
}

export default function ContactAction({ href, icon, text, bgColor, hoverColor }: ContactActionProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center ${bgColor} hover:${hoverColor} text-white font-semibold py-6 px-4 rounded-2xl shadow-lg transition duration-300`}
    >
      <div className="mb-4">{icon}</div>
      <span>{text}</span>
    </a>
  );
}
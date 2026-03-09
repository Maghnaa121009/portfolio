import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Maghnaa Sathish Kumar</h1>
        <ul className="flex space-x-6">
          {['Home', 'About', 'Expertise', 'Tools', 'Education', 'Experience', 'Projects', 'Certifications', 'Organizations', 'Blog', 'Contact'].map((section) => (
            <li key={section}>
              <a href={`#${section.toLowerCase()}`} className="hover:text-blue-400">{section}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

const categories = [
  {
    label: "Mais Assistidos",
    active: true,
    link: "/mais-assistidos",
  },
  {
    label: "Mais Votados",
    active: false,
    link: "/mais-votados",
  },
  {
    label: "Novidades",
    active: false,
    link: "/mais-assistidos",
  },
  {
    label: "Top 10",
    active: false,
    link: "/top-10",
  },
  {
    label: "Generos",
    active: false,
    link: "/genero",
  },
];
export function Navbar() {
  return (
    <nav className="flex bg-[#1c1c1c] border-b border-b-[#333] max-w-6xl mx-auto">
      <ol className="flex gap-8 list-none py-6">
        {categories.map((item) => (
          <li>
            <a
              href={item.link}
              className={`text-sm
                ${
                  item.active
                    ? "text-[#e50914] border-b-2 border-[#e50914] hover:text-[#e50914]"
                    : "text-[#ccc] hover:text-white"
                }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
const categories = [
  { label: "Mais Assistidos", active: true, link: "/Mais Assistidos" },
  { label: "Mais Votados", active: false, link: "/Mais Votados" },
  { label: "Novidades", active: false, link: "/Novidades" },
  { label: "Top 10", active: false, link: "/Top 10" },
  { lable: "Gêneros", active: false, link: "/Gêneros" },
];

export function Navbar() {
  return (
    <nav className="flex bg-[#1c1c1c] border-b border-[#333] max-w-6xl mx-auto">
      <ol className="flex gap-8 list-none py-6">
        {categories.map((item) => (
          <li>
            <a
              href={item.link}
              className={`text-sm ${
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
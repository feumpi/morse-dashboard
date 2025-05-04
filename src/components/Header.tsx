import { House, Zap, LifeBuoy, DollarSign, IconNode } from "lucide-react";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header className="bg-white rounded-lg shadow-sm w-full h-16 flex items-center px-8 justify-between">
      <h1 className="font-bold">MORSE</h1>

      <nav>
        <ul className="flex gap-4 ml-4">
          <NavItem href="/" label="Início" icon={<House />} />
          <NavItem href="/desastres" label="Desastres" icon={<Zap />} />
          <NavItem
            href="/dano-humano"
            label="Dano humano"
            icon={<LifeBuoy />}
          />
          <NavItem
            href="/prejuizo-investimento"
            label="Prejuizo e investimento"
            icon={<DollarSign />}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;

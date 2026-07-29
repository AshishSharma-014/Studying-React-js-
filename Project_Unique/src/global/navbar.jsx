import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-5 px-4">
      <nav className="w-full max-w-7xl rounded-full bg-white/20 backdrop-blur-xl border border-white/20 shadow-lg">

        <div className="flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <a href="/" className="text-2xl font-bold tracking-wide">
            Logo
          </a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-gray-800 font-medium">
            <li className="cursor-pointer hover:text-black transition">
              Home
            </li>
            <li className="cursor-pointer hover:text-black transition">
              About us
            </li>
            <li className="cursor-pointer hover:text-black transition">
              Resources
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-black hover:bg-black hover:text-white transition">
              Toggle
              <ArrowUpRight size={18} />
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-900 transition">
                Login
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] pb-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 pt-4 text-lg font-medium">
            <li className="cursor-pointer">Product</li>
            <li className="cursor-pointer">Solutions</li>
            <li className="cursor-pointer">Resources</li>
            <li className="cursor-pointer">Company</li>
            <li className="cursor-pointer">Pricing</li>
          </ul>

          <div className="flex flex-col gap-4 mt-8 px-6">
            <button className="w-full flex justify-center items-center gap-2 py-3 rounded-full border border-black">
              Contact Me
              <ArrowUpRight size={18} />
            </button>

            <button className="w-full flex justify-center items-center gap-2 py-3 rounded-full bg-black text-white">
              Start Building
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
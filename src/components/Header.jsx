// components/Nav.js
import Logo from "./Logo";
import NavLink from "./NavLink";
import HeaderControls from "./HeaderControls";

export default function Header({className=''}) {
  return (
    <nav className={`relative ${className}  z-50 flex min-h-[64px] items-center justify-between py-1  lg:min-h-[90px] lg:py-4`}>
      <Logo />
      <ul className="hidden gap-x-7 xl:gap-x-10 text-sm font-bold lg:flex">
        <NavLink href="/">Abrelo</NavLink>
        <NavLink href="_yt1-single-2.html">Blog</NavLink>
        <NavLink href="about">About</NavLink>
        <NavLink href="_yt1-single-event.html">Event</NavLink>
        <NavLink href="_yt1-partners.html">Partners</NavLink>
        <NavLink href="contact">Contact</NavLink>
        <NavLink href="_yt1-shop-grid-3.html">Shop</NavLink>
      </ul>
      
      <HeaderControls />

    </nav>
  );
}

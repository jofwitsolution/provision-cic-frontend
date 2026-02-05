import primaryLogo from "@/assets/primary-logo.png";
import { Link, useLocation } from "react-router-dom";
import { navbarRoutes } from "@/lib/routes";
import NavbarMobile from "./NavbarMobile";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathname = useLocation().pathname;

  return (
    <nav className="sticky left-0 top-0 z-50 w-full bg-background border-b">
      <div className="max-width flex h-20 items-center justify-between">
        <Link to="/" className="flex gap-2 items-center">
          <img src={primaryLogo} alt="provision" className="w-25" />
        </Link>

        <div className="flex items-center gap-8 font-medium text-foreground max-md:hidden">
          {navbarRoutes.map((item) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;

            return (
              <Link
                to={item.route}
                key={item.label}
                className={`${isActive ? "font-semibold text-primary" : ""} transition-all hover:text-primary`}
                target={item.route.startsWith("http") ? "_blank" : "_self"}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="max-md:hidden">
          <Link to={"/contact"} className="w-full">
            <Button className="w-full bg-transparent hover:bg-transparent border border-primary-100 hover:border-primary-200 text-primary-100 px-7.5 py-5 rounded-[50px]">
              Contact
            </Button>
          </Link>
        </div>
        <NavbarMobile />
      </div>
    </nav>
  );
};

export default Navbar;

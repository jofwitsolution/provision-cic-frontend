import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navbarRoutes } from "@/lib/routes";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import primaryLogo from "@/assets/primary-logo.png";

const NavContent = () => {
  const pathname = useLocation().pathname;

  return (
    <section className="flex flex-col gap-6 ps-4">
      {navbarRoutes.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <div key={item.label} className="relative w-max">
            <SheetClose asChild>
              <Link
                key={item.label}
                to={item.route}
                className={cn(
                  isActive ? "font-semibold" : "",
                  "leading-[1.41rem] text-foreground"
                )}
              >
                {item.label}
              </Link>
            </SheetClose>
            <div
              className={`${
                isActive ? "visible w-full" : "invisible w-0"
              } absolute top-7.25 border-2 border-primary-100 transition-all duration-500`}
            />
          </div>
        );
      })}
    </section>
  );
};

const NavbarMobile = () => {
  return (
    <Sheet>
      <div className="md:hidden flex items-center gap-6">
        <SheetTrigger className="">
          <Menu />
        </SheetTrigger>
      </div>
      <SheetContent
        side="left"
        className="w-3/4 bg-background opacity-90 text-muted-foreground"
      >
        <SheetHeader>
          <SheetTitle className="sr-only">menu</SheetTitle>
          <SheetDescription className="sr-only">
            description goes here
          </SheetDescription>
          <div className="flex items-center justify-between">
            <Link to={"/"}>
              <img src={primaryLogo} alt="provision" className="w-25" />
            </Link>
          </div>
        </SheetHeader>
        <div className="pt-14">
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
        </div>
        <SheetFooter>
          <Link to={"/contact"} className="w-full">
            <Button className="w-full bg-transparent hover:bg-transparent border border-primary-100 hover:border-primary-200 text-primary-100 px-7.5 py-5 rounded-[50px]">
              Contact
            </Button>
          </Link>
          <Link to={"/referrals"} className="w-full">
            <Button className="w-full bg-primary-100 hover:bg-primary-200 text-background px-7.5 py-5 rounded-[50px] cursor-pointer">
              Refer Someone
            </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;

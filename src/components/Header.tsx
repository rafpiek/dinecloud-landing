"use client"; // Mark this component as a Client Component

import { useScrollToForm } from "@/hooks/useScrollToForm";
import Link from "next/link";

type HeaderProps = {
  showButtons?: boolean;

}
export const Header = ({ showButtons = true }: HeaderProps) => {

  const scrollToForm = useScrollToForm();

    const onMobileNavClick = () => {
      const mobileNav = document.getElementById("nav_mobile_container");
      if (!mobileNav) return;
      if (mobileNav.classList.contains("active")) {
        document.body.classList.remove("nav_mobile");
        mobileNav.classList.remove("active");
      } else {
        document.body.classList.add("nav_mobile");
        mobileNav.classList.add("active");
      }

    }
  return(
    <>
    <header id="header" className="fixed top-0 left-0 w-full transition-all duration-200 ease-in-out px-4 md:px-6 bg-primaryDark h-[64px] z-50">
    <div className="w-full">
        <div className="flex flex-wrap items-center justify-between">
            <div className="w-[30%] md:w-1/2 col-6 flex justify-start items-center h-[64px] p-0">
                <Link id="logo" href="/"></Link>
                {showButtons && (
                <nav id="nav_main" role="navigation">
                    <ul>
                        <li><Link className="btn_navbar_secondary no-underline" href="/download">Pobierz aplikację dla gości</Link></li>
                    </ul>
                </nav>
                )}
            </div>
            <div className="w-[70%] md:w-1/2 col-6 flex justify-end items-center h-[64px] p-0">
                {showButtons && (
                <div id="nav_right">
                    <span className="small_button">Rozpocznij bezpłatny testy!</span>
                    <a className="btn_navbar_primary cursor-pointer xs no-underline" onClick={scrollToForm}>Skontaktuj się</a>
                    <div id="nav_mobile_button" onClick={onMobileNavClick} className="btn_navbar_primary icon no_text"></div>
                </div>
                )}
            </div>
        </div>
    </div>
</header>
<div id="header_pseudo"></div>
<div id="nav_mobile_container">
    <p className="text">DLA RESTAURACJI</p>
    <a className="btn_navbar_primary icon icon_chat_text" onClick={scrollToForm}>Skontaktuj się</a>
    <p className="text mt">DLA GOŚCI</p>
    <a className="btn_navbar_primary icon icon_import">Pobierz aplikację</a>
    </div>
</>
  )
};


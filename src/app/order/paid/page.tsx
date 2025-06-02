"use client";
import { Header } from "@/components/Header";
import iconSuccess from "@/assets/images/icon-success.svg";
import logoDinecloud from "@/assets/images/landing/logo_dinecloud.svg";
import Image from "next/image";

export default function OrderPaidPage() {
  return (
    <>
      <Header showButtons={false} />
      <section id="hero_section" className="h-screen bg-primaryDark flex items-center justify-center">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full text-center">
              <div className="top mb-8">
                <Image className="logo_1 mx-auto mb-8" src={logoDinecloud} alt="DineCloud" width={200} height={50}/>
              </div>
              <div className="middle mb-8">
                <h1 className="header_landing_1 text-lightGreen2 mb-6">
                  PŁATNOŚĆ
                  <span className="block">ZAKOŃCZONA POMYŚLNIE!</span>
                </h1>
                <div className="flex justify-center mb-6">
                  <Image 
                    src={iconSuccess} 
                    alt="Success" 
                    width={80} 
                    height={80}
                    className="success_icon"
                  />
                </div>
                <p className="body_3 text-white mb-4">
                  Twoje zamówienie zostało opłacone. Przygotowanie rozpocznie się wkrótce.
                </p>
                <p className="body_3 text-lightGreen2">
                  Zamknij to okno i sprawdź aplikację, aby śledzić status zamówienia.
                </p>
              </div>
              <div className="bottom">
                <button 
                  className="btn_primary personal"
                  onClick={() => window.close()}
                >
                  Zamknij okno
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
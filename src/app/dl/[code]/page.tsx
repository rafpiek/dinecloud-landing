"use client";
import { Header } from "@/components/Header";
import { DownloadButton } from "@/components/DownloadButton";
import appPromoImage from "@/assets/images/app_promo.png";
import Link from "next/link";
import heroImage from "@/assets/images/landing/hero_client.jpg";
import { APP_STORE_URL, GOOGLE_PLAY_URL, WEB_APP_URL } from "@/lib/constants";
import { useMemo } from "react";

export default function DeepLinkPage() {

  const downloadUrl = useMemo(() => {
    if (navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad")) {
      return APP_STORE_URL;
    }

    return GOOGLE_PLAY_URL;
  }, []);

  return (
    <>
      <Header showButtons={false} />
      <main className="relative">
        <section
          className="pt-[104px] h-screen relative flex flex-col justify-between"
          style={{
            backgroundImage: `url(${heroImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

          <div className="px-4 relative z-20">
            <div className="flex flex-col">
              <h1 className="text-center leading-[1.5] mb-4">
                <span className="text-[50px] font-[400] block text-lightGreen2 uppercase tracking-wide">
                  Z aplikacją
                </span>
                <span className="text-[24px] font-[900] block uppercase">
                  jest szybciej i łatwiej.
                </span>
              </h1>

              <p className="text-[16px] font-[500] leading-[1.5] text-white mb-4 text-center">
                Pobierz aplikację i otrzymuj powiadomienia o statusie dań
                bezpośrednio na telefon.
              </p>

              <div className="flex flex-row justify-between">
                <DownloadButton
                  href={APP_STORE_URL}
                  variant="app-store"
                />
                <DownloadButton
                  href={GOOGLE_PLAY_URL}
                  variant="google-play"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 z-20 relative mb-[48px] px-4">
            <Link
              href={downloadUrl}
              className="flex h-[56px] px-4 justify-center items-center self-stretch rounded-[32px] font-semibold transition-colors bg-gradient-to-r from-[#90D900] to-[#28BF0A] shadow-[0_6px_24px_0_rgba(97,204,20,0.30)]"
            >
              Pobierz aplikację
            </Link>
            <Link
              href={WEB_APP_URL}
              className="w-full py-4 border-[2px] border-solid border-[#E7F7C6] rounded-full text-center font-semibold text-[#E7F7C6] hover:bg-[#E7F7C6] hover:text-black transition-colors flex h-[56px] justify-center items-center"
            >
              Kontynuuj w przeglądarce
            </Link>
          </div>

          <div
            className="absolute bottom-[-20%] w-full h-full bg-cover bg-center bg-no-repeat z-10 opacity-90"
            style={{
              backgroundImage: `url(${appPromoImage.src})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            {/* Additional darker gradient for the bottom image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          </div>
        </section>
      </main>
    </>
  );
}

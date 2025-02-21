import heroImg from "@/assets/images/landing/hero_img.png";
import logo2 from "@/assets/images/landing/logo_appstore.svg";
import logoDinecloud from "@/assets/images/landing/logo_dinecloud.svg";
import logo3 from "@/assets/images/landing/logo_googleplay.svg";
import Image from "next/image";
import { useScrollToForm } from "@/hooks/useScrollToForm";

export const Hero = () => {
    const scrollToForm = useScrollToForm();
  return(
    <section id="hero_section">
    <div className="container">
        <div className="flex flex-wrap">
            <div className="w-full">
                <div className="top">
                    <Image className="logo_1" src={logoDinecloud} alt="DineCloud" width={200} height={50}/>
                </div>
                <div className="middle">
                    <h1 className="header_landing_1 text-lightGreen2">
                        QR MENU
                        <span>I PŁATNOŚCI ONLINE.</span>
                    </h1>
                    <p className="body_3">Składanie zamówień poprzez QR kody na stolikach,<br /> bez udziału kelnera.</p>
                </div>
                <div className="bottom">
                    <a className="btn_primary personal contact_button no-underline" onClick={scrollToForm}>Skontaktuj się</a>
                    <a className="app_url" href="#"><Image className="logo_2" src={logo2} alt="App Store" width={120} height={40} /></a>
                    <a className="app_url" href="#"><Image className="logo_3" src={logo3} alt="Google Play" width={120} height={40} /></a>
                </div>
            </div>
        </div>
    </div>
    <Image id="hero_img" src={heroImg} alt="" width={1200} height={600} />
</section>
  )
};

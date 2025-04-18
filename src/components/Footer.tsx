import logoDinecloud2 from "@/assets/images/landing/logo_dinecloud2.svg";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer id="footer">
    <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="flex flex-wrap md:flex-nowrap">
            <div className="column_1 w-full md:w-1/4">
                <Image className="logo" src={logoDinecloud2} alt="DineCloud" width={150} height={40}/>
                <p className="white">DineCloud sp. z o.o.</p>
                <div>Jodłówka-Wałki 106b<br />33-150 Jodłówka-Wałki<br />Polska</div>
                <div className="email">
                    <a href="mailto:contact@dinecloud.net" className="no-underline">contact@dinecloud.net</a>
                </div>
                <div className="socials">
                    <a className="instagram no-underline" href="#" target="_blank"></a>
                    <a className="facebook no-underline" href="#" target="_blank"></a>
                    <a className="linkedin no-underline" href="#" target="_blank"></a>
                </div>
            </div>
            <div className="column_2 w-full md:w-1/4">
                <h4 className="header_landing_4">Dla restauracji</h4>
                <a className="no-underline" href="#">Skontaktuj się</a>
            </div>
            <div className="column_3 w-full md:w-1/4">
                <h4 className="header_landing_4">Dla gości</h4>
                <a className="no-underline" href="#">Pobierz aplikację</a>
            </div>
            <div className="column_4 w-full md:w-1/4">
                <h4 className="header_landing_4">Poznawaj</h4>
                <a className="no-underline" href="/privacy-policy">Polityka prywatności</a>
                <a className="no-underline" href="/terms-of-use">Regulamin</a>
            </div>
        </div>
        <div className="flex flex-wrap">
            <div className="w-full">
                <p className="copyright_text">&copy; 2024 DineCloud sp. z o.o.<br className="xs" /> KRS: <span>0001048018</span>, NIP: <span>8733291405</span>, REGON: <span>525915687</span>.<br className="xs" /> Wszystkie prawa zastrzeżone.</p>
            </div>
        </div>
    </div>
</footer>
  )
};

import { FC } from 'react';
import Image from 'next/image';
import "@/styles/old_style.css"
import "@/styles/style2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/jquery"
import paymentBlick from "@/assets/images/landing/payment_blik.svg";
import paymentApplepay from "@/assets/images/landing/payment_applepay.svg";
import paymentGooglepay from "@/assets/images/landing/payment_googlepay.svg";
import paymentVisa from "@/assets/images/landing/payment_visa.svg";
import paymentMastercard from "@/assets/images/landing/payment_mastercard.svg";
import heroImg from "@/assets/images/landing/hero_img.png";
import logoDinecloud from "@/assets/images/landing/logo_dinecloud.svg";
import logoDinecloud2 from "@/assets/images/landing/logo_dinecloud2.svg";
import logo2 from "@/assets/images/landing/logo_appstore.svg";
import logo3 from "@/assets/images/landing/logo_googleplay.svg";

export const Landing: FC = () => {
  return(
    <>

<div id="header_pseudo"></div>
<section id="hero_section">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="top">
                    <Image className="logo_1" src={logoDinecloud} alt="DineCloud" width={200} height={50}/>
                </div>
                <div className="middle">
                    <h1 className="header_landing_1">
                        QR MENU
                        <span>I PŁATNOŚCI ONLINE.</span>
                    </h1>
                    <p className="body_3">Składanie zamówień poprzez QR kody na stolikach,<br /> bez udziału kelnera.</p>
                </div>
                <div className="bottom">
                    <a className="btn_primary personal contact_button">Skontaktuj się</a>
                    <a className="app_url" href="#"><Image className="logo_2" src={logo2} alt="App Store" width={120} height={40} /></a>
                    <a className="app_url" href="#"><Image className="logo_3" src={logo3} alt="Google Play" width={120} height={40} /></a>
                </div>
            </div>
        </div>
    </div>
    <Image id="hero_img" src={heroImg} alt="" width={1200} height={600} />
</section>
<main id="main">
    <a className="more">
        <span className="arrow_1"></span>
        <span className="arrow_2"></span>
        <span className="arrow_3"></span>
        <span className="body_4">Dowiedz się więcej</span>
    </a>
    <section id="section_cart_7" className="landing_section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="header_landing_2"><span className="color">KORZYŚCI</span> PO<br/><span className="big">WDROŻENIU</span></h2>
                    <div className="container_tiles">
                        <div className="box_tile lg-3">
                            <h3 className="header_landing_3"><span className="color">PONAD 2X MNIEJ</span>KONWERSJI</h3>
                            <p className="body_4">potrzebnych do obsłużenia gości.</p>
                            <div className="ol mt"><span>1.</span> przynosi menu</div>
                            <div className="ol"><span>2.</span> zbiera zamówienie</div>
                            <div className="ol active"><span>3.</span> przynosi danie</div>
                            <div className="ol"><span>4.</span> przychodzi z rachunkiem</div>
                            <div className="ol active"><span>5.</span> odnosi puste talerze</div>
                        </div>
                        <div className="right">
                            <div className="box_tile lg-2">
                                <h3 className="header_landing_3"><span className="color">4X SZYBSZE</span>ZAMÓWIENIE</h3>
                                <p className="body_4">od momentu zajęcia stolika do podjęcia decyzji i złożenia zamówienia.</p>
                            </div>
                            <div className="box_tile lg-2">
                                <h3 className="header_landing_3"><span className="color">WIĘKSZA</span>ROTACJA KLIENTÓW</h3>
                                <p className="body_4">z powodu szybszego przepływu informacji, szybszego procesu obsługi i krótszego pobytu gości.</p>
                            </div>
                            <div className="box_tile lg-2 mt">
                                <h3 className="header_landing_3"><span className="color">2X WIĘCEJ</span>DOSPRZEDANYCH</h3>
                                <p className="body_4">produktów poza głównymi daniami.</p>
                            </div>
                            <div className="box_tile lg-2 mt">
                                <h3 className="header_landing_3"><span className="color">MNIEJ</span>KOSZTÓW</h3>
                                <p className="body_4">związanych z wypłatami dla kelnerów, aktualizacją menu i/lub kosztem wibracyjnych pager'ów.</p>
                            </div>
                        </div>
                    </div>
                    <div className="toastbox info icon_info_cr_fr3 lg">System jest kompatybilny zarówno z restauracjami z obsługą kelnerską, z restauracjami samoobsługowymi jak i częściami wspólnymi wielu restauracji.</div>
                </div>
            </div>
        </div>
    </section>
    <section id="section_cart_1" className="landing_section">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="landing_img_box">
                        <div id="img_1"></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2 className="header_landing_2"><span className="color">BŁYSKAWICZNE</span><br/><span className="big">ZAMÓWIENIA.</span></h2>
                    <div className="icon_container">
                        <div className="icon_box icon_scan_qr_code">
                            <p className="body_4"><strong>Zamawianie dań przez QR kod</strong></p>
                            <p className="body_4 color">Szybkie, proste, bez udziału kelnera i bez czekania na kelnera. Aplikacja mobilna nie jest wymagana aby złożyć zamówienie.</p>
                        </div>
                        <div className="icon_box wallet ps_box_container">
                            <p className="body_4"><strong>Płatności online</strong></p>
                            <p className="body_4 color">Zapewnij swoim klientom najbezpieczniejsze i najłatwiejsze metody płatności dostępne na rynku.</p>
                            <div className="ps_box">
                                <Image src={paymentBlick} alt="BLIK" width={60} height={30}/>
                                <Image src={paymentApplepay} alt="Apple Pay" width={60} height={30}/>
                                <Image src={paymentGooglepay} alt="Google Pay" width={60} height={30}/>
                                <Image src={paymentVisa} alt="Visa" width={60} height={30}/>
                                <Image src={paymentMastercard} alt="Mastercard" width={60} height={30}/>
                            </div>
                        </div>
                        <div className="icon_box icon_timelapse_25">
                            <p className="body_4"><strong>Powiadomienia o statusie zamówienia</strong></p>
                            <p className="body_4 color">Informuj swoich klientów na jakim etapie przygotowania jest ich danie.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="section_cart_2" className="landing_section">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="landing_img_box">
                        <div id="img_2"></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2 className="header_landing_2"><span className="color">PROSTA</span><br/><span className="big">KOMUNIKACJA.</span></h2>
                    <div className="icon_container">
                        <div className="icon_box icon_info_sq_fr">
                            <p className="body_4"><strong>Zdjęcia potraw i alergeny</strong></p>
                            <p className="body_4 color">Nie marnuj czasu kelnerów na tłumaczenie jak wygląda danie i jakie zawiera składniki.</p>
                        </div>
                        <div className="icon_box icon_briefcase">
                            <p className="body_4"><strong>Przycisk "Wezwij Kelnera"</strong></p>
                            <p className="body_4 color">W razie indywidualnej potrzeby klienci mogą skorzystać z opcji "Wezwij Kelnera".</p>
                        </div>
                        <div className="icon_box icon_translate_01">
                            <p className="body_4"><strong>Wielojęzyczne menu</strong></p>
                            <p className="body_4 color">Wybierz języki menu spośród najpopularniejszych w danym regionie.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="section_cart_8" className="landing_section">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="header_landing_2"><span className="color">INTUICYJNE</span><br/><span className="big">ZARZĄDZANIE.</span></h2>
                    <div className="icon_container">
                        <div className="icon_box icon_eye">
                            <p className="body_4"><strong>Podgląd otwartych zamówień</strong></p>
                            <p className="body_4 color">Twoi kelnerzy będą widzieć wszystkie zamówienia na żywo w jednym miejscu.</p>
                        </div>
                        <div className="icon_box icon_timelapse_25">
                            <p className="body_4"><strong>Zarządzanie statusami dań</strong></p>
                            <p className="body_4 color">Aktualizacja statusu jednym kliknięciem.</p>
                        </div>
                        <div className="icon_box icon_edit">
                            <p className="body_4"><strong>Tworzenie, edycja i podmiana menu</strong></p>
                            <p className="body_4 color">Dodawaj sekcje menu, dania wraz ze zdjęciami, zarządzaj cenami.</p>
                        </div>
                        <div className="icon_box icon_scan_qr_code">
                            <p className="body_4"><strong>Zarządzanie stolikami i QR kodami</strong></p>
                            <p className="body_4 color">Twórz i usuwaj stoliki, przydzielaj do nich odpowiednie QR kody.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="landing_img_box">
                        <div id="img_3"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="section_cart_9" className="landing_section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="header_landing_2"><span className="color">PEŁNA</span><br /><span className="big">KOMPATYBILNOŚĆ.</span></h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="container_tiles bg">
                        <div className="box_tile lg-3 restaurants">
                            <h3 className="header_landing_3">RESTAURACJE</h3>
                        </div>
                        <div className="box_tile lg-3 bars">
                            <h3 className="header_landing_3">BARY</h3>
                        </div>
                        <div className="box_tile lg-3 cafe">
                            <h3 className="header_landing_3">KAWIARNIE</h3>
                        </div>
                        <div className="box_tile lg-3 common">
                            <h3 className="header_landing_3">CZĘŚCI WSPÓLNE</h3>
                        </div>
                        <div className="box_tile lg-3 foodtrucks">
                            <h3 className="header_landing_3">FOOD TRUCKI</h3>
                        </div>
                        <div className="box_tile lg-3 hotels">
                            <h3 className="header_landing_3">HOTELE</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="section_cart_3" className="landing_section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="header_landing_3">PROCES WDROŻENIA</h3>
                    <div className="steps_container">
                        <div className="step_box">
                            <div className="top">
                                <div className="left">1</div>
                                <div className="right">
                                    <div className="step_label">wyślij nam</div>
                                    <div className="step_value">swoje zgłoszenie.</div>
                                </div>
                            </div>
                            <div className="arrows">
                                <span className="arrow_1"></span>
                                <span className="arrow_2"></span>
                                <span className="arrow_3"></span>
                            </div>
                        </div>
                        <div className="step_box">
                            <div className="top">
                                <div className="left">2</div>
                                <div className="right">
                                    <div className="step_label">odezwiemy się i umówimy</div>
                                    <div className="step_value">na prezentację w 48h.</div>
                                </div>
                            </div>
                            <div className="arrows">
                                <span className="arrow_1"></span>
                                <span className="arrow_2"></span>
                                <span className="arrow_3"></span>
                            </div>
                        </div>
                        <div className="step_box active">
                            <div className="top">
                                <div className="left">3</div>
                                <div className="right">
                                    <div className="step_label">podpisz z nami umowę</div>
                                    <div className="step_value">a my wdrożymy.</div>
                                </div>
                            </div>
                            <div className="arrows">
                                <span className="arrow_1"></span>
                                <span className="arrow_2"></span>
                                <span className="arrow_3"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="section_cart_5" className="landing_section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="header_landing_2"><span className="big">FAQ.</span></h2>
                    <ul className="toggle_list">
                        <li className="active">
                            <p className="heading body_4"><strong>Lorem ipsum dolor sit amet?</strong></p>
                            <div className="text body_4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        </li>
                        <li>
                            <p className="heading body_4"><strong>Lorem ipsum dolor sit amet?</strong></p>
                            <div className="text body_4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        </li>
                        <li>
                            <p className="heading body_4"><strong>Lorem ipsum dolor sit amet?</strong></p>
                            <div className="text body_4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        </li>
                        <li>
                            <p className="heading body_4"><strong>Lorem ipsum dolor sit amet?</strong></p>
                            <div className="text body_4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section id="section_10" className="landing_section dark">
        <form id="form_contact" action="#" method="post">
            <div className="container">
                <div className="row top">
                    <div className="col-12 center">
                        <h2 className="header_landing_2">ROZPOCZNIJ<br/><span className="big color">BEZPŁATNE TESTY.</span></h2>
                        <p className="body_4">Zostaw swoje dane, a wrócimy ze szczegółową ofertą<br/> usług i wsparciem tak szybko jak to możliwe.</p>
                    </div>
                </div>
                <div className="row middle">
                    <div className="col-lg-6">
                        <p className="form_group">
                            <input type="text" name="form_name" className="form_input_text" placeholder="nazwa restauracji" />
                            <label>nazwa restauracji</label>
                        </p>
                        <p className="form_group">
                            <input type="text" name="form_city" className="form_input_text" placeholder="miejscowość" />
                            <label>miejscowość</label>
                        </p>
                        <p className="form_group">
                            <input type="text" name="form_email" className="form_input_text" placeholder="email" />
                            <label>email</label>
                        </p>
                        <div className="form_group last">
                            <div className="form_inline form_phone_prefix_box form_select disabled">
                                <div className="form_select_label">+48</div>
                                <ul className="form_select_list">
                                    <li className="selected">+48</li>
                                </ul>
                                <label></label>
                                <input id="form_phone_prefix" name="form_phone_prefix" className="from_select_value" type="hidden" value="+48" />
                            </div>
                            <p className="form_inline form_phone_box">
                                <input type="text" id="form_phone" name="form_phone" className="form_input_text" placeholder="numer telefonu"/>
                                <label>numer telefonu</label>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p className="form_group form_message_box last">
                            <textarea name="form_message" className="form_input_text" placeholder="wiadomość (opcjonalnie)"></textarea>
                            <label>wiadomość (opcjonalnie)</label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 center">
                        <button className="btn_primary personal" type="submit">Wyślij wiadomość</button>
                    </div>
                </div>
            </div>
        </form>
    </section>
</main>
<footer id="footer">
    <div className="container">
        <div className="row">
            <div className="column_1 col-md-3">
                <Image className="logo" src={logoDinecloud2} alt="DineCloud" width={150} height={40}/>
                <p className="white">DineCloud sp. z o.o.</p>
                <div>Marii Dąbrowskiej 24/12<br />33-100 Tarnów<br />Polska</div>
                <div className="email">
                    <a href="mailto:contact@dinecloud.net">contact@dinecloud.net</a>
                </div>
                <div className="socials">
                    <a className="instagram" href="#" target="_blank"></a>
                    <a className="facebook" href="#" target="_blank"></a>
                    <a className="linkedin" href="#" target="_blank"></a>
                </div>
            </div>
            <div className="column_2 col-md-3">
                <h4 className="header_landing_4">Dla restauracji</h4>
                <a href="#">Skontaktuj się</a>
            </div>
            <div className="column_3 col-md-3">
                <h4 className="header_landing_4">Dla gości</h4>
                <a href="#">Pobierz aplikację</a>
            </div>
            <div className="column_4 col-md-3">
                <h4 className="header_landing_4">Poznawaj</h4>
                <a href="#">Polityka prywatności</a>
                <a href="#">Regulamin</a>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <p className="copyright_text">&copy; 2024 DineCloud sp. z o.o.<br className="xs" /> KRS: <span>0001048018</span>, NIP: <span>8733291405</span>, REGON: <span>525915687</span>.<br className="xs" /> Wszystkie prawa zastrzeżone.</p>
            </div>
        </div>
    </div>
</footer>
<div id="nav_mobile_container">
    <p className="text">DLA RESTAURACJI</p>
    <a className="btn_navbar_primary icon icon_chat_text">Skontaktuj się</a>
    <p className="text mt">DLA GOŚCI</p>
    <a className="btn_navbar_primary icon icon_import">Pobierz aplikację</a>
    </div>
    </>
  );
};

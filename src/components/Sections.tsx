import paymentApplepay from "@/assets/images/landing/payment_applepay.svg";
import paymentBlick from "@/assets/images/landing/payment_blik.svg";
import paymentGooglepay from "@/assets/images/landing/payment_googlepay.svg";
import paymentMastercard from "@/assets/images/landing/payment_mastercard.svg";
import paymentVisa from "@/assets/images/landing/payment_visa.svg";
import Image from "next/image";
export const Sections = () => {
  return(
    <>
    <section id="section_cart_7" className="landing_section">
    <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="flex flex-row">
            <div className="w-full">
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
    <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
                <div className="landing_img_box">
                    <div id="img_1"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2">
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
    <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
                <div className="landing_img_box">
                    <div id="img_2"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2">
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
    <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2">
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
            <div className="w-full md:w-1/2">
                <div className="landing_img_box">
                    <div id="img_3"></div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="section_cart_9" className="landing_section">
    <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="flex flex-row">
            <div className="w-full">
                <h2 className="header_landing_2"><span className="color">PEŁNA</span><br /><span className="big">KOMPATYBILNOŚĆ.</span></h2>
            </div>
        </div>
        <div className="flex flex-row">
            <div className="w-full">
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
    <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="flex flex-row">
            <div className="w-full">
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
</>
  )
}
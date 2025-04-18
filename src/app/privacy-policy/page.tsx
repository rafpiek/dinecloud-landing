import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <div id="header_pseudo" className="h-[64px]"></div>
      <main id="main">
        <section className="standard_section static bg-white pt-12 md:pt-16 pb-16 md:pb-24 mb-48">
          <div className="mx-auto w-full max-w-3xl px-4 md:px-6">
            <div className="mb-12">
              <h1 className="header_landing_2">
                POLITYKA PRYWATNOŚCI.
              </h1>
              <p className="body_4 mt-2 text-gray-600">Zapoznaj się z naszą polityką prywatności.</p>
            </div>

            <div className="body_4 text-gray-700">
              <div>
                <h2 className="header_landing_3 mt-8 mb-3">§ 1. Definicje.</h2>
                <ol className="space-y-2">
                  <li>Pojęcia użyte w niniejszym dokumencie mają następujące znaczenie:
                    <ol className="pl-5 mt-2 space-y-1">
                      <li>Administrator – DineCloud Spółka z ograniczoną odpowiedzialnością z siedzibą w Jodłówce-Wałki, Jodłówka-Wałki 106b, 33-150 Jodłówka-Wałki, Polska, wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy dla Krakowa-Nowej Huty w Krakowie, XII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS: 0001048018, REGON: 525915687, NIP: 8733291405, kapitał zakładowy: 5 000,00 zł. Z Administratorem można się skontaktować za pomocą e-maila: <a href="mailto:info@dinecloud.net" className="text-primary hover:underline">info@dinecloud.net</a>.</li>
                      <li>Użytkownik – osoba fizyczna korzystająca z usługi DineCloud w celu złożenia zamówienia i dokonania płatności online w restauracji.</li>
                      <li>Dane osobowe – imię, nazwisko i adres e-mail Użytkownika.</li>
                      <li>RODO – Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE.</li>
                      <li>Usługa – system DineCloud umożliwiający składanie zamówień w restauracjach za pośrednictwem kodów QR umieszczonych na stolikach oraz dokonywanie płatności online za pośrednictwem zewnętrznej bramki płatniczej (<a href="https://www.imoje.pl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">moje [https://www.imoje.pl]</a>).</li>
                    </ol>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="header_landing_3 mt-8 mb-3">§ 2. Postanowienia ogólne.</h2>
                <ol className="space-y-2">
                  <li>Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych zbieranych przez DineCloud w ramach świadczenia Usług.</li>
                  <li>Administrator przetwarza dane osobowe Użytkowników z poszanowaniem przepisów RODO i innych powszechnie obowiązujących przepisów prawa dotyczących ochrony danych osobowych.</li>
                  <li>Podanie danych osobowych jest dobrowolne, lecz niezbędne w celu realizacji Usługi.</li>
                </ol>
              </div>

              <div>
                <h2 className="header_landing_3 mt-8 mb-3">§ 3. Zakres i cel przetwarzania danych osobowych.</h2>
                <ol className="space-y-2">
                  <li>Administrator przetwarza imię, nazwisko oraz adres e-mail Użytkownika.</li>
                  <li>Dane osobowe przetwarzane są w celu:
                  <ol className="pl-5 mt-2 space-y-1">
                    <li>realizacji zamówień złożonych za pośrednictwem systemu DineCloud;</li>
                    <li>wysyłania powiadomień na adres e-mail Użytkownika dotyczących statusu zamówienia, w tym potwierdzenia złożenia zamówienia oraz informacji o gotowości zamówieniu.</li>
                  </ol>
                  </li>
                  <li>Podstawą prawną przetwarzania danych jest art. 6 ust. 1 lit. b RODO – przetwarzanie danych jest niezbędne do wykonania umowy, której stroną jest Użytkownik.</li>
                </ol>
              </div>

              <div>
                <h2 className="header_landing_3 mt-8 mb-3">§ 4. Okres przechowywania danych.</h2>
                <ol className="space-y-2">
                  <li>Aby dokonać zamówienia z DineCloud konieczne jest dokonanie przez Użytkownika następujących czynności:
                  <ol className="pl-5 mt-2 space-y-1">
                    <li>zeskanowania QR kodu w celu otwarcia menu,</li>
                    <li>skompletowanie zamówienia w koszyku,</li>
                    <li>uzupełnienie danych: imię, nazwisko, adres e-mail,</li>
                    <li>zaakceptowanie przez Użytkownika Regulaminu i Polityki Prywatności DineCloud oraz regulaminu i polityki prywatności Bramki płatniczej,</li>
                    <li>wybranie metody płatności (Apple Pay, Google Pay, BLIK) na stronie Bramki płatniczej,</li>
                    <li>dokonanie płatności zgodnie z wybraną metodą.</li>
                  </ol>
                  </li>
                  <li>Po dokonaniu powyższych czynności Użytkownik otrzyma potwierdzenie dokonania zakupu na podany wcześniej Adres e-mail oraz będzie otrzymywał powiadomienia push na telefon o aktualizacji statusu zamówienia.</li>
                </ol>
              </div>

              <div>
                <h2 className="header_landing_3 mt-8 mb-3">§ 5. Prawa Użytkowników.</h2>
                <ol className="space-y-2">
                  <li>Użytkownik ma prawo do:
                  <ol className="pl-5 mt-2 space-y-1">
                    <li>dostępu do swoich danych osobowych;</li>
                    <li>żądania sprostowania swoich danych osobowych;</li>
                    <li>żądania usunięcia swoich danych osobowych;</li>
                    <li>żądania ograniczenia przetwarzania danych osobowych;</li>
                    <li>przenoszenia swoich danych osobowych;</li>
                    <li>wniesienia sprzeciwu wobec przetwarzania danych osobowych;</li>
                    <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, jeśli uzna, że przetwarzanie jego danych osobowych narusza przepisy prawa.</li>
                  </ol>
                  </li>
                  <li>Aby skorzystać ze swoich praw, Użytkownik może skontaktować się z Administratorem za pomocą adresu e-mail: <a href="mailto:info@dinecloud.net" className="text-primary hover:underline">info@dinecloud.net</a>.</li>
                </ol>
              </div>

              <div>
                <h2 className="header_landing_3 mt-8 mb-3">§ 6. Bezpieczeństwo danych osobowych.</h2>
                <ol className="space-y-2">
                  <li>Administrator stosuje odpowiednie środki techniczne i organizacyjne w celu zapewnienia ochrony przetwarzanych danych osobowych.</li>
                  <li>Dostęp do danych osobowych Użytkowników mają jedynie osoby upoważnione przez Administratora i wyłącznie w zakresie niezbędnym do realizacji celów przetwarzania.</li>
                </ol>
              </div>

              <div>
                <h2 className="header_landing_3 mt-8 mb-3">§ 7. Zmiany Polityki Prywatności.</h2>
                <ol className="space-y-2">
                  <li>Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności w przypadku zmiany przepisów prawa, wdrożenia nowych funkcjonalności Usługi lub innych istotnych przyczyn.</li>
                  <li>O wszelkich zmianach Użytkownicy będą informowani poprzez aktualizację treści Polityki Prywatności dostępnej na stronie internetowej DineCloud.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function TermsOfUsePage() {
  return (
    <>
      <Header />
      <div id="header_pseudo" className="h-[64px]"></div>
      <main id="main">
        <section className="standard_section static bg-white pt-12 md:pt-16 pb-16 md:pb-24 mb-48">
          <div className="mx-auto w-full max-w-3xl px-4 md:px-6">
             <div className="mb-12">
               <h1 className="header_landing_2">
                 REGULAMIN.
               </h1>
               <p className="body_4 mt-2 text-gray-600">Zapoznaj się z naszym regulaminem.</p>
            </div>

            <div className="body_4 text-gray-700">
              <div>
                <h2 className="header_landing_3 mt-8 mb-3">§ 1. Definicje.</h2>
                <ol className="space-y-2">
                  <li>Pojęcia użyte w niniejszym Regulaminie mają następujące znaczenie:
                    <ol className="pl-5 mt-2 space-y-1">
                      <li>DineCloud – DineCloud Spółka z ograniczoną odpowiedzialnością z siedzibą w Jodłówce-Wałki, Jodłówka-Wałki 106b, 33-150 Jodłówka-Wałki, Polska, wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy dla Krakowa-Nowej Huty w Krakowie, XII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS: 0001048018, REGON: 525915687, NIP: 8733291405, kapitał zakładowy: 5 000,00 zł.
                      </li>
                      <li>Restauracja – podmiot gospodarczy, który umożliwia Użytkownikom składanie zamówień i dokonywanie płatności za pośrednictwem usługi DineCloud.</li>
                      <li>Bramka płatnicza – usługa bramki płatniczej imoje, której operatorem jest ING Bank Śląski S.A. (z siedzibą w Katowicach, ul. Sokolska 34, 40-086 Katowice), wpisana do Rejestru Przedsiębiorców w Sądzie Rejonowym Katowice-Wschód, Wydział VIII Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS 0000005459, o kapitale zakładowym w kwocie 130 100 000,00 zł oraz kapitale wpłaconym w kwocie 130 100 000,00 zł, NIP 6340135475, umożliwiająca Klientom dokonywanie płatności za zamówione drogą elektroniczną w sklepach internetowych Sprzedawców towary i usługi z wykorzystaniem określonych przez Sprzedawców metod płatności. Skorzystanie z usługi Bramki Płatniczej wymaga zaakceptowania przez Klienta dodatkowego regulaminu.</li>
                      <li>Dane osobowe – imię, nazwisko oraz adres e-mail Użytkownika, przetwarzane przez DineCloud w celu realizacji usługi.</li>
                    </ol>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="header_landing_3 mt-8 mb-3">§ 2. Zakres usługi.</h2>
                <ol className="space-y-2">
                  <li>Usługa DineCloud umożliwia Użytkownikom składanie zamówień i dokonywanie płatności online w Restauracjach.</li>
                  <li>Korzystanie z usługi nie wymaga rejestracji konta przez Użytkownika.</li>
                  <li>Użytkownik przed zrealizowaniem płatności jest zobowiązany podać imię, nazwisko oraz adres e-mail w celu otrzymania powiadomień o statusie zamówienia i danych oraz realizacji płatności.</li>
                  <li>Usługa DineCloud nie ponosi odpowiedzialności za realizację, dostarczenie ani jakość zamówienia – odpowiedzialność za te aspekty spoczywa wyłącznie na Restauracji.</li>
                </ol>
              </div>

              <div>
                <h2 className="header_landing_3 mt-8 mb-3">§ 3. Płatności.</h2>
                <ol className="space-y-2">
                  <li>Płatności w ramach usługi DineCloud są realizowane za pomocą następujących metod:
                    <ol className="pl-5 mt-2 space-y-1">
                      <li>Apple Pay,</li>
                      <li>Google Pay,</li>
                      <li>BLIK.</li>
                    </ol>
                  </li>
                  <li>Obsługa płatności odbywa się za pośrednictwem Bramki Płatniczej imoje. Przed dokonaniem płatności Użytkownik zobowiązany jest zapoznać się z regulaminem Bramki Płatniczej dostępnym na stronie ING Banku Śląskiego.</li>
                  <li>DineCloud nie ponosi odpowiedzialności za prawidłowe wykonanie płatności – odpowiedzialność za ten proces spoczywa na ING Banku Śląskim jako operatorze Bramki Płatniczej.</li>
                </ol>
              </div>

              <div>
                <h2 className="header_landing_3 mt-8 mb-3">§ 4. Dokonanie zamówienia.</h2>
                <ol className="space-y-2">
                  <li>Aby dokonać zamówienia z DineCloud konieczne jest dokonanie przez Użytkownika następujących czynności:
                    <ol className="pl-5 mt-2 space-y-1">
                      <li>zeskanowanie QR kodu w celu otwarcia menu,</li>
                      <li>skompletowanie zamówienia w koszyku,</li>
                      <li>uzupełnienie danych: imię, nazwisko, adres e-mail,</li>
                      <li>zaakceptowanie przez Użytkownika Regulaminu i Polityki Prywatności DineCloud oraz regulaminu i polityki prywatności Bramki płatniczej,</li>
                      <li>wybranie metody płatności (Apple Pay, Google Pay, BLIK) na stronie Bramki płatniczej,</li>
                      <li>dokonanie płatności zgodnie z wybraną metodą.</li>
                    </ol>
                  </li>
                  <li>Po wykonaniu powyższych czynności Użytkownik otrzyma potwierdzenie dokonania zakupu na podany wcześniej adres e-mail oraz będzie otrzymywał powiadomienia push na telefon o aktualizacji statusu zamówienia.</li>
                </ol>
              </div>

              <div>
                <h2 className="header_landing_3 mt-8 mb-3">§ 5. Reklamacje.</h2>
                <ol className="space-y-2">
                  <li>Reklamacje dotyczące realizacji zamówień, jakości jedzenia lub czasu dostawy należy zgłaszać bezpośrednio w Restauracji.</li>
                  <li>Reklamacje dotyczące płatności należy kierować do operatora Bramki Płatniczej.</li>
                </ol>
              </div>

              <div>
                <h2 className="header_landing_3 mt-8 mb-3">§ 6. Odpowiedzialność.</h2>
                <ol className="space-y-2">
                  <li>DineCloud nie jest stroną umów zawieranych pomiędzy Użytkownikiem a Restauracją i nie ponosi odpowiedzialności za usługi świadczone przez Restaurację.</li>
                  <li>DineCloud nie ponosi odpowiedzialności za:
                    <ol className="pl-5 mt-2 space-y-1">
                      <li>autentyczność, rzetelność, poprawność i kompletność danych wprowadzonych przez Użytkownika,</li>
                      <li>szkody wynikające z działania lub zaniechania Restauracji,</li>
                      <li>szkody wynikające z działania Użytkowników naruszających prawa osób trzecich,</li>
                      <li>usterki i błędy działania systemu wynikające z nieprawidłowego użytkowania, nieautoryzowanego dostępu, błędnej konfiguracji urządzeń Użytkownika lub działania złośliwego oprogramowania,</li>
                      <li>niedziałanie systemu wynikające z przyczyn technicznych niezależnych od DineCloud lub siły wyższej.</li>
                    </ol>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="header_landing_3 mt-8 mb-3">§ 7. Rozwiązanie umowy.</h2>
                <ol className="space-y-2">
                  <li>Użytkownik może w dowolnym momencie zażądać usunięcia swoich danych osobowych (imię, nazwisko, adres e-mail) przesyłając wiadomość na adres e-mail: <a href="mailto:info@dinecloud.net" className="text-primary hover:underline">info@dinecloud.net</a>.</li>
                  <li>Usunięcie danych osobowych jest równoznaczne z zakończeniem korzystania z usługi DineCloud.</li>
                </ol>
              </div>

              <div>
                <h2 className="header_landing_3 mt-8 mb-3">§ 8. Postanowienia końcowe.</h2>
                <ol className="space-y-2">
                  <li>Regulamin podlega przepisom prawa polskiego i jest interpretowany zgodnie z nimi.</li>
                  <li>W sprawach nieuregulowanych Regulaminem zastosowanie mają przepisy powszechnie obowiązującego prawa, w szczególności ustawy z dnia 23 kwietnia 1964 r. Kodeks cywilny.</li>
                  <li>Wszelkie spory wynikające z niniejszego Regulaminu będą rozpatrywane przez sąd właściwy miejscowo dla siedziby DineCloud.</li>
                  <li>Regulamin wchodzi w życie z dniem jego opublikowania na stronie internetowej DineCloud.</li>
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

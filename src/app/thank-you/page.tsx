import Link from "next/link";

export default function FreePage() {
  return(
    <section className="standard_section height_100 bg-white">
    <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="flex flex-row">
            <div className="w-full">
                <div className="top">
                    <h1 className="title center">Rozpocznij bezpłatne testy.</h1>
                    <p className="body_3 center">Zostaw dane firmy, a wrócimy ze szczegółową ofertą usług i wsparciem tak szybko jak to możliwe.</p>
                </div>
                <div className="middle">
                    <div className="success_icon"></div>
                   <p className="body_3 color">Wiadomość została pomyślnie wysłana!</p>
                </div>
                <div className="bottom center">
                    <Link className="btn_primary personal" href="/">Gotowe</Link>
                </div>
            </div>
        </div>
    </div>
    <Link className="btn_close icon_close" href="/"></Link>
</section>
  )
}

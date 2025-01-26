import Link from "next/link";

export default function ContactPage() {
  return(
    <section className="standard_section height_100 static bg-white">
    <div className="mx-auto max-w-7xl px-4 md:px-0 ">
        <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="w-full">
                <form id="form_contact" action="#" method="post">
                    <div className="top">
                        <h1 className="title center">Rozpocznij bezpłatne testy.</h1>
                        <p className="body_3 center">Zostaw dane firmy, a wrócimy ze szczegółową ofertą usług i wsparciem tak szybko jak to możliwe. </p>
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="w-full md:w-1/2">
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
                                    <label>Label</label>
                                    <input id="form_phone_prefix" name="form_phone_prefix" className="from_select_value" type="hidden" value="+48" />
                                </div><p className="form_inline form_phone_box">
                                    <input type="text" id="form_phone" name="form_phone" className="form_input_text" placeholder="numer telefonu" />
                                    <label>numer telefonu</label>
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <p className="form_group form_message_box last">
                                <textarea name="form_message" className="form_input_text" placeholder="wiadomość (opcjonalnie)"></textarea>
                                <label>wiadomość (opcjonalnie)</label>
                            </p>
                        </div>
                    </div>
                    <div className="bottom center mt-4">
                        <button className="btn_primary personal">Wyślij wiadomość</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Link className="btn_close icon_close" href="/"></Link>
</section>
  )
}
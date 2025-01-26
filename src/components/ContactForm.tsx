export const ContactForm = () => {
  return(
    <section id="section_10" className="landing_section dark">
    <form id="form_contact" action="#" method="post">
        <div className="container">
            <div className="flex flex-row top">
                <div className="w-full center">
                    <h2 className="header_landing_2">ROZPOCZNIJ<br/><span className="big color">BEZPŁATNE TESTY.</span></h2>
                    <p className="body_4">Zostaw swoje dane, a wrócimy ze szczegółową ofertą<br/> usług i wsparciem tak szybko jak to możliwe.</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row gap-4 middle">
                <div className="w-full md:w-1/2 border-2 border-red-500">
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
                <div className="w-full md:w-1/2">
                    <p className="form_group form_message_box last">
                        <textarea name="form_message" className="form_input_text" placeholder="wiadomość (opcjonalnie)"></textarea>
                        <label>wiadomość (opcjonalnie)</label>
                    </p>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="w-full center">
                    <button className="btn_primary personal" type="submit">Wyślij wiadomość</button>
                </div>
            </div>
        </div>
    </form>
</section>
  )
};
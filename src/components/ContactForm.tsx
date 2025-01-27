import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  restaurantName: z.string().min(1, "Nazwa restauracji jest wymagana"),
  city: z.string().min(1, "Miejscowość jest wymagana"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: z.string().regex(/^\d{9}$/, "Numer telefonu powinien składać się z 9 cyfr"),
  message: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section id="section_10" className="landing_section dark">
      <form id="form_contact" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="flex flex-row top">
            <div className="w-full center">
              <h2 className="header_landing_2">ROZPOCZNIJ<br/><span className="big color">BEZPŁATNE TESTY.</span></h2>
              <p className="body_4">Zostaw swoje dane, a wrócimy ze szczegółową ofertą<br/> usług i wsparciem tak szybko jak to możliwe.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row middle">
            <div className="w-full md:w-1/2">
              <div className="form_group relative mb-6">
                <input 
                  {...register("restaurantName")}
                  type="text" 
                  className="form_input_text" 
                  placeholder="nazwa restauracji" 
                />
                <label>nazwa restauracji</label>
                <div className="absolute -bottom-5 left-0">
                  <ErrorLabel message={errors.restaurantName?.message} />
                </div>
              </div>
              <div className="form_group relative mb-6">
                <input 
                  {...register("city")}
                  type="text"
                  className="form_input_text" 
                  placeholder="miejscowość" 
                />
                <label>miejscowość</label>
                <div className="absolute -bottom-5 left-0">
                  <ErrorLabel message={errors.city?.message} />
                </div>
              </div>
              <div className="form_group relative mb-6">
                <input 
                  {...register("email")}
                  type="email"
                  className="form_input_text" 
                  placeholder="email" 
                />
                <label>email</label>
                <div className="absolute -bottom-5 left-0">
                  <ErrorLabel message={errors.email?.message} />
                </div>
              </div>
              <div className="form_group last relative mb-6">
                <div className="form_inline form_phone_prefix_box form_select disabled">
                  <div className="form_select_label">+48</div>
                  <input type="hidden" value="+48" />
                </div>
                <div className="form_inline form_phone_box">
                  <input 
                    {...register("phone")}
                    type="tel"
                    className="form_input_text"
                    placeholder="numer telefonu"
                  />
                  <label>numer telefonu</label>
                  <div className="absolute -bottom-5 left-0">
                    <ErrorLabel message={errors.phone?.message} />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <p className="form_group form_message_box last">
                <textarea 
                  {...register("message")}
                  className="form_input_text" 
                  placeholder="wiadomość (opcjonalnie)"
                ></textarea>
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
  );
};

const ErrorLabel = ({ message }: { message: string | undefined }) => {
    if (!message) return null;
  return <span className="text-red-500 text-sm font-primary">{message}</span>;
};
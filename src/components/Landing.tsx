
import "@/styles/old_style.css";
import "@/styles/style2.css";
import { FC } from 'react';
import { ContactForm } from "./ContactForm";
import { Faq } from './Faq';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { MoreButton } from './MoreButton';
import { Sections } from "./Sections";

export const Landing: FC = () => {
  return(
    <>


<Hero />
<main id="main">
    <MoreButton />
    <Sections />
    <Faq />
    <ContactForm />
</main>
<Footer />

    </>
  );
};


import "@/styles/old_style.css";
import "@/styles/style2.css";
import Image from 'next/image';
import { FC } from 'react';
import { Faq } from './Faq';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { MoreButton } from './MoreButton';
import { ContactForm } from "./ContactForm";
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

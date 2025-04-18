import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleActive = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Jak wygląda proces wdrożenia?",
      answer: "Po skontaktowaniu się z nami, odezwiemy się w przeciągu 48h a następnie umówimy się na prezentację na żywo w państwa restauracji. Po podpisaniu umowy i skonfigurowaniu konta operatora płatności, dostarczymy QR kody do naklejenia, po czym cały system będzie gotowy do użytku przez klientów."
    },
    {
      question: "Jak długo trwają darmowe testy",
      answer: "Darmowe testy trwają 3 miesiące."
    },
    {
      question: "Czy restauracja ponosi dodatkowe koszty podczas darmowych testów?",
      answer: "Darmowe testy są w pełni darmowe i restauracja nie płaci miesięcznej opłaty za korzystanie z usług, natomiast pokrywa koszty procesowania transakcji u operatora płatności."
    },
    {
      question: "Czy restauracja może zrezygnować z korzystania z usług w każdej chwili?",
      answer: "Dokładne warunki i czas trwania usług ustalane są elastycznie i indywidualnie, oraz przedstawiane są w umowie ogólnych warunków współpracy."
    },
    {
      question: "Czy restauracja może spersonalizować wygląd QR kodów?",
      answer: "Tak, za dodatkową opłatą jest możliwość ręcznej personalizacji QR kodów, tak aby dostosować je do brandingu restauracji."
    }
  ];

  return(
    <section id="section_cart_5" className="landing_section">
      <div className="mx-auto w-full max-w-[1320px] md:px-6">
        <div className="flex flex-wrap">
          <div className="w-full">
            <h2 className="header_landing_2"><span className="big">FAQ.</span></h2>
            <ul className="toggle_list">
              {faqItems.map((item, index) => (
                <li key={index} className={openIndex === index ? 'active' : ''}>
                  <p
                    className="heading body_4 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleActive(index)}
                  >
                    <strong>{item.question}</strong>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: 'inline-block' }}
                    >
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.415 0.294922L6 4.87492L10.585 0.294922L12 1.70492L6 7.70492L0 1.70492L1.415 0.294922Z" fill="currentColor"/>
                      </svg>
                    </motion.span>
                  </p>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="text body_4 pt-2 pb-4">
                           {item.answer}
                        </div>
                      </motion.section>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

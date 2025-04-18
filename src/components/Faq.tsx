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
                        <p className="heading body_4" onClick={() => toggleActive(index)}>
                          <strong>{item.question}</strong>
                        </p>
                        <AnimatePresence initial={false}>
                          {openIndex === index && (
                            <motion.div
                              className="text body_4"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                                transition: {
                                  height: {
                                    duration: 0.3,
                                    ease: "easeOut"
                                  },
                                  opacity: {
                                    duration: 0.2,
                                    delay: 0.1
                                  }
                                }
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                                transition: {
                                  height: {
                                    duration: 0.3,
                                    ease: "easeIn"
                                  },
                                  opacity: {
                                    duration: 0.2
                                  }
                                }
                              }}
                            >
                              <motion.div
                                initial={{ y: -10 }}
                                animate={{ y: 0 }}
                                exit={{ y: -10 }}
                              >
                                {item.answer}
                              </motion.div>
                            </motion.div>
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

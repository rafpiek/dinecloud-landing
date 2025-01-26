import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleActive = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return(
    <section id="section_cart_5" className="landing_section">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h2 className="header_landing_2"><span className="big">FAQ.</span></h2>
                <ul className="toggle_list">
                    {[0, 1, 2, 3].map((index) => (
                      <li key={index} className={openIndex === index ? 'active' : ''}>
                        <p className="heading body_4" onClick={() => toggleActive(index)}>
                          <strong>Lorem ipsum dolor sit amet?</strong>
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
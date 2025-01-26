const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const element = document.querySelector('#form_contact');
const offset = 100;
const elementPosition = element!.getBoundingClientRect().top + window.scrollY;
window.scrollTo({
  top: elementPosition - offset,
  behavior: 'smooth'
});
}

export const useScrollToForm = () => {
  return scrollToForm;
}
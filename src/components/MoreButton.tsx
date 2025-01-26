export const MoreButton = () => {
  const onMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#form_contact');
const offset = 100;
const elementPosition = element!.getBoundingClientRect().top + window.scrollY;
window.scrollTo({
    top: elementPosition - offset,
    behavior: 'smooth'
});
  }
  return(
    <a className="more no-underline" onClick={onMoreClick}>
    <span className="arrow_1"></span>
    <span className="arrow_2"></span>
    <span className="arrow_3"></span>
    <span className="body_4">Dowiedz się więcej</span>
</a>
  )
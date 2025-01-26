import { useScrollToForm } from "@/hooks/useScrollToForm";

export const MoreButton = () => {
  const scrollToForm = useScrollToForm();
  return(
    <a className="more no-underline" onClick={scrollToForm}>
    <span className="arrow_1"></span>
    <span className="arrow_2"></span>
    <span className="arrow_3"></span>
    <span className="body_4">Dowiedz się więcej</span>
</a>
  )
};

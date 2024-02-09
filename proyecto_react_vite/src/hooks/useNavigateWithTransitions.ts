import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";

export const useNavigateWithTransitions = () => {
  const navigate = useNavigate();
  return (href: string) => {
    if (!document.startViewTransition) {
      navigate(href);
    } else {
      document.startViewTransition(() => {
        flushSync(() => {
          navigate(href);
        });
      });
    }
  }
}
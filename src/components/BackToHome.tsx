import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackToHome = () => {
  const navigate = useNavigate();

  const goBack = () => {
    const historyIndex = window.history.state?.idx;
    if (typeof historyIndex === "number" && historyIndex > 0) {
      navigate(-1);
      return;
    }

    navigate("/", { replace: true });
  };

  return (
    <button
      type="button"
      onClick={goBack}
      aria-label="Voltar"
      className="fixed left-4 top-4 z-50 inline-flex h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-foreground/80 transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <ArrowLeft aria-hidden="true" className="h-4 w-4" />
      <span>Voltar</span>
    </button>
  );
};

export default BackToHome;

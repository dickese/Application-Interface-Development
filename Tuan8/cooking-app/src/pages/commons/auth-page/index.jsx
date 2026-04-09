import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthDialog = ({ isOpen, onClose, initialView = "login" }) => {
  const [currentView, setCurrentView] = useState(initialView);

  if (!isOpen) return null;

  const handleSwitchToRegister = () => {
    setCurrentView("register");
  };

  const handleSwitchToLogin = () => {
    setCurrentView("login");
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      {currentView === "login" ? (
        <LoginForm onSwitchToRegister={handleSwitchToRegister} onClose={onClose} />
      ) : (
        <RegisterForm onSwitchToLogin={handleSwitchToLogin} onClose={onClose} />
      )}
    </div>
  );
};

export default AuthDialog;
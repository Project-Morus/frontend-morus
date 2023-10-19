import { useState } from "react";

export function useModal() {
  const [isShowing, setIsShowing] = useState(false);

  const handleModalOpened = () => {
    setIsShowing(true);
  };

  const handleModalClose = () => {
    setIsShowing(false);
  };

  return { isShowing, handleModalOpened, handleModalClose };
}
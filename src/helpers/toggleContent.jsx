export const toggleContent = (index, isOpen, setIsOpen) => {
  return () => setIsOpen(isOpen === index ? null : index);
};

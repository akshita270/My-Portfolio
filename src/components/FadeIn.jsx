export const FadeIn = ({ children, delay = 0, className = "" }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

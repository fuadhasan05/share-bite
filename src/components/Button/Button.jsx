export default function Button({ children, onClick, type = "button", variant = "primary" }) {
  const baseStyle =
    "px-10 py-2 rounded-md text-lg transition";

  const styles = {
    primary: "bg-[#2F855A] text-white hover:bg-[#f7ca18] hover:text-black",
    secondary: "bg-[#f7ca18] text-black hover:bg-[#2F855A] hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

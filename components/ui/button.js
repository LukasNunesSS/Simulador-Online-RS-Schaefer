export function Button({ children, className = "", ...props }) {
  return <button className={`px-4 py-2 rounded font-semibold bg-[#5b3a29] text-white hover:bg-[#3e291d] ${className}`} {...props}>{children}</button>;
}
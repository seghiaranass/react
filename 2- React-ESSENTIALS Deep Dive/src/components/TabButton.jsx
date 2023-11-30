export default function TabButton({ children,isSelected , ...props }) {
  return (
    <li>
      <button {...props}>
        {children}
      </button>
    </li>
  );
}

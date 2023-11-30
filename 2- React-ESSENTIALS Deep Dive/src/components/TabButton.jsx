export default function TabButton({ children,isSelected , ...props }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button {...props}>
        {children}
      </button>
    </li>
  );
}

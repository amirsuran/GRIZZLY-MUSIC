
export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "relative",
      }}
    >
      {children}
    </button>
  );
}

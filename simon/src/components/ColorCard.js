export default function ColorCard({ color, onClick, flash }) {
  return (
    <div
      onClick={onClick}
      className={`colorCard ${color} ${flash ? color + "flash" : ""}`}
    ></div>
  );
}

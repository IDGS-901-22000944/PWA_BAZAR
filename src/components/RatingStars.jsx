export default function RatingStars({ value = 0 }) {
  const full = Math.round(value);
  return (
    <span>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < full ? "⭐" : "☆"}</span>
      ))}
    </span>
  );
}

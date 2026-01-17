export default function ProgressBar({ value, max }) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className="progress">
      <div
        className="progress-fill"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}

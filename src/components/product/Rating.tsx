import React from "react";

interface Props {
  rating?: number;
}

const Rating = ({ rating }: Props) => {
  if (!rating) {
    return;
  }

  const stars = Math.floor(rating);
  return (
    <div
      className="flex items-center gap-1 text-amber-500 text-sm w-min"
      aria-label={`Rating ${rating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden>
          {i < stars ? "★" : "☆"}
        </span>
      ))}
      <span className="ml-2 text-gray-500 font-semibold">
        {rating ? rating.toFixed(1) : "—"}
      </span>
    </div>
  );
};

export default Rating;

// src/components/Rating.jsx
import React from 'react';

export function Rating({ value }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`fas fa-star ${
            star <= value ? 'text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}
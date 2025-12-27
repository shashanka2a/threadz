"use client";

export function TshirtDoodle() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 opacity-30 dark:opacity-20">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* T-shirt outline - doodle style */}
        <path
          d="M 50 60 L 50 80 Q 50 100, 60 110 L 70 120 L 80 130 L 90 140 L 100 145 L 110 140 L 120 130 L 130 120 L 140 110 Q 150 100, 150 80 L 150 60 Q 150 50, 140 45 L 130 40 L 120 35 L 110 30 L 100 28 L 90 30 L 80 35 L 70 40 L 60 45 Q 50 50, 50 60 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-stone-400 dark:text-stone-600"
        />
        
        {/* Sleeve left */}
        <path
          d="M 50 60 Q 40 55, 35 50 Q 30 45, 30 40 Q 30 35, 35 35 Q 40 35, 45 40 Q 50 45, 50 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-stone-400 dark:text-stone-600"
        />
        
        {/* Sleeve right */}
        <path
          d="M 150 60 Q 160 55, 165 50 Q 170 45, 170 40 Q 170 35, 165 35 Q 160 35, 155 40 Q 150 45, 150 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-stone-400 dark:text-stone-600"
        />
        
        {/* Neckline */}
        <path
          d="M 80 35 Q 85 30, 90 28 Q 95 30, 100 32 Q 105 30, 110 28 Q 115 30, 120 35"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-stone-400 dark:text-stone-600"
        />
        
        {/* Decorative lines - doodle style */}
        <path
          d="M 70 90 Q 85 95, 100 90 Q 115 95, 130 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-stone-300 dark:text-stone-700"
        />
        
        <path
          d="M 75 110 Q 85 115, 100 110 Q 115 115, 125 110"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="text-stone-300 dark:text-stone-700"
        />
        
        {/* Small decorative dots */}
        <circle cx="90" cy="100" r="2" fill="currentColor" className="text-stone-300 dark:text-stone-700" />
        <circle cx="110" cy="100" r="2" fill="currentColor" className="text-stone-300 dark:text-stone-700" />
      </svg>
    </div>
  );
}


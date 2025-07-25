import React, { useState } from "react";
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ReviewList({ reviews }) {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews?.slice(0, 2);
  const hasMore = reviews?.length > 2;

  return (
    <section className="w-full bg-white rounded-2xl shadow p-8 mb-8">
      <div className="flex items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mr-4">Reviews</h3>
        <span className="bg-blue-600 text-white text-xs font-semibold rounded px-3 py-1">{reviews?.length || 0}</span>
      </div>
      <ul className="space-y-8">
        {visibleReviews?.map((review, i) => (
          <motion.li
            key={i}
            className="flex gap-4 items-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: 'easeOut' }}
          >
            {/* Avatar */}
            <Image
              src={review.avatar || '/avatar-default.png'}
              alt={review.user}
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover border"
            />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                <div>
                  <span className="font-bold text-lg text-gray-900 mr-2">{review.user}</span>
                  <span className="text-sm text-gray-400 font-medium">{review.subtitle}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 md:mt-0">
                  <span className="text-xs text-gray-400">{review.date}</span>
                  <span className="flex items-center ml-2">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <span key={idx} className="text-yellow-400 text-lg">★</span>
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, idx) => (
                      <span key={idx} className="text-gray-300 text-lg">★</span>
                    ))}
                  </span>
                </div>
              </div>
              <div className="text-gray-600 text-base mt-2 text-justify">
                {review.comment}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            className="text-blue-600 font-semibold flex items-center gap-1 hover:underline"
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll ? 'Show Less' : 'Show All'} <span className="text-lg">⌄</span>
          </button>
        </div>
      )}
    </section>
  );
} 
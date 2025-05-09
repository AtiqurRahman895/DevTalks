import React from 'react';

const useGetRelativeTime = () => {
    const formatRelativeTime = (timestamp) => {
        const now = new Date();
        const created = new Date(timestamp);
        const diffMs = now - created; // Difference in milliseconds
      
        const diffSeconds = Math.floor(diffMs / 1000);
        const diffMinutes = Math.floor(diffSeconds / 60);
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);
        const diffWeeks = Math.floor(diffDays / 7);
        const diffMonths = Math.floor(diffDays / 30); // Approximate: 30 days per month
        const diffYears = Math.floor(diffDays / 365); // Approximate: 365 days per year
      
        // if (diffSeconds < 60) {
        //   return `${diffSeconds} second${diffSeconds === 1 ? '' : 's'} ago`;
        // } else
         if (diffMinutes < 60) {
          return `${diffMinutes} minute${diffMinutes === 1 ? '' : 's'} ago`;
        } else if (diffHours < 24) {
          return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;
        } else if (diffDays < 7) {
          return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
        } else if (diffDays < 30) {
          return `${diffWeeks} week${diffWeeks === 1 ? '' : 's'} ago`;
        } else if (diffDays < 365) {
          return `${diffMonths} month${diffMonths === 1 ? '' : 's'} ago`;
        } else {
          return `${diffYears} year${diffYears === 1 ? '' : 's'} ago`;
        }
      };
    return formatRelativeTime
};

export default useGetRelativeTime;
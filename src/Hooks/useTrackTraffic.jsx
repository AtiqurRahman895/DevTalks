import React from 'react';
import useNormalAxios from './useNormalAxios';

const useTrackTraffic = () => {
    const normalAxios = useNormalAxios()
    const trackTraffic=async()=>{
        try {
            const today = new Date().toISOString().slice(0, 10);
            const lastVisitedDate = localStorage.getItem('last_visited_date');
            let isUnique = false;
        
            if (lastVisitedDate !== today) {
              localStorage.setItem('last_visited_date', today);
              isUnique = true;
            }
            await normalAxios.put('/traffics/updateTraffic', { isUnique });
        
          } catch (error) {
            console.error('Error tracking traffic:', error);
          }
    }
    return trackTraffic;
};

export default useTrackTraffic;
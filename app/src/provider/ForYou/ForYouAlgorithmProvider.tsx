import React, { createContext, useContext, useEffect, useState } from 'react';
import { useGlobalContext } from '../GlobalContextProvider';
import { Product } from '../../utils/Types/product';
import useMarketData from '../../screens/Market/Data/MarketDataHandler';

const ForYouAlgorithmContext = createContext<any>(null);

export const ForYouAlgorithmProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { userData } = useGlobalContext();
  const { filteredData } = useMarketData();
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Algo ira ici
  }, [userData, filteredData]);

  return (
    <ForYouAlgorithmContext.Provider value={{ 
        recommendedProducts 
    }}>
      {children}
    </ForYouAlgorithmContext.Provider>
  );
};

export const useRecommendation = () => {
  const context = useContext(ForYouAlgorithmContext);
  if (!context) {
    throw new Error('useRecommendation must be used within a RecommendationProvider');
  }
  return context;
};

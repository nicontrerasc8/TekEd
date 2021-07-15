import React from 'react'
import { useLoading, ThreeDots } from '@agney/react-loading';

const LoadingContainer = () => {

    const { indicatorEl } = useLoading({
        loading: true,
        indicator: <ThreeDots width="50" className="loading-element"/>,
      });
      
   return (
      <div className="loading-container">
          {indicatorEl}
      </div>
   )
}

export default LoadingContainer
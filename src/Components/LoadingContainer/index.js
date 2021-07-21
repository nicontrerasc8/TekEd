import React from 'react'
import { useState } from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

const color = "#b6fbfb"

const LoadingContainer = () => {
    let [loading, setLoading] = useState(true);
    
      
   return (
      <div className="loading-container">
          <HashLoader color={color} loading={loading} css={override} size={130} />
      </div>
   )
}

export default LoadingContainer
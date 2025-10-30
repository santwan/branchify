import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LoadingAnimation = () => {
  return (
    <div className="h-full w-full flex items-center bg-transparent justify-center">
      <DotLottieReact
        src="/Loading.lottie"
        loop
        autoplay
      />
    </div>
  )
}

export default LoadingAnimation
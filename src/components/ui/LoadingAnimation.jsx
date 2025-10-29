import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="h-full w-full flex items-center bg-transparent justify-center">
      <div role='status' aria-live='polite'>
      <DotLottieReact
        src="/Loading.lottie"
        autoplay
        loop
      />
      </div>
    </div>
  )
}

export default LoadingAnimation
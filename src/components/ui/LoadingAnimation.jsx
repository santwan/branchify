import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="h-full w-full flex items-center bg-transparent justify-center">
      <div role='status' aria-live='polite'>
      <DotLottieReact
        className="transition-opacity duration-700 opacity-80 ease-in-out"
        src="/Loading.lottie"
        autoplay
        loop
        style={{ width: 250, height: 250 }}
      />
      </div>
    </div>
  )
}

export default LoadingAnimation
import React from "react";
import Header from "@/components/home/Header.jsx";
import AnimatedText from "@/components/home/AnimatedText";
import { Button } from "@/components/global/Button";

const Home = () => {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center gap-8">
      <AnimatedText/>
      <Header/>
      <Button  duration="400" >Go to Editor</Button>

    </div>
  )
}

export default Home
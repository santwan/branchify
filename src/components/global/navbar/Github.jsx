import React from "react";
import { Github } from "lucide-react";

const GithubIcon = () => {
  return (
    <a href="https://github.com/santwan/branchify" target="_blank" rel="noopener noreferrer">
      <span className="text-center flex gap-1 items-center">
        <span className="text-lg font-semibold">Github</span>
        <Github size={25}  />
      </span>
    </a>
  )
}
export default GithubIcon
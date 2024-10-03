import React from 'react'

export default function HeroWrapper({children}) {
  return (
    <div className="bg-hero  dark:bg-[#262d34] ">
        {children}
    </div>
  )
}

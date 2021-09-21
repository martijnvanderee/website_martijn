import React, { FunctionComponent } from 'react'
import Link from "next/link";


const InfoCard = () => {
  return (
    <div className="border text-center max-w-sm mx-auto p-2">
      <div className="flex justify-center">
        <svg id="Component_12_5" data-name="Component 12 – 5" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
          <circle id="Ellipse_39" data-name="Ellipse 39" cx="30" cy="30" r="30" fill="#f16d6e" opacity="0.25" />
          <path id="Icon_awesome-mobile-alt" data-name="Icon awesome-mobile-alt" d="M19.125,0H3.375A3.376,3.376,0,0,0,0,3.375v29.25A3.376,3.376,0,0,0,3.375,36h15.75A3.376,3.376,0,0,0,22.5,32.625V3.375A3.376,3.376,0,0,0,19.125,0ZM11.25,33.75A2.25,2.25,0,1,1,13.5,31.5,2.248,2.248,0,0,1,11.25,33.75Zm7.875-7.594a.846.846,0,0,1-.844.844H4.219a.846.846,0,0,1-.844-.844V4.219a.846.846,0,0,1,.844-.844H18.281a.846.846,0,0,1,.844.844Z" transform="translate(19 12)" fill="#f16d6e" />
        </svg>
      </div>



      <h3 className="text-lg font-bold my-4">Mobile-First Design</h3>

      <p>We start building your site for mobile devices first, then we add on to it to make tablet and desktop.</p>


    </div>
  )
}

export default InfoCard;

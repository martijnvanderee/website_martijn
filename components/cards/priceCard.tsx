import React, { FunctionComponent } from 'react'
import Link from "next/link";


const PriceCard = () => {
  return (
    <div className="border">
      <div>Standard</div>

      <div>
        <div>Unlimited Edits</div>
        <div>Includes Hosting</div>
        <div>24/7 Customer Service</div>
        <div>Lifetime Updates</div>
      </div>

      <button>Visit valley</button>

      <div className="bg-green h-1"></div>
    </div>
  )
}

export default PriceCard;

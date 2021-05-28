import React, { FunctionComponent } from 'react'
import Link from "next/link";

//typescript
import { PostData } from "../typescript"

import { formatDate } from "../localFunctions/formatdate"
type postProps = {
  content: PostData,
}

export const PostItem: FunctionComponent<postProps> = ({ content }) => {
  const date: string = formatDate(content.attributes.date)
  const url = content.slug
  return (
    <Link href={`/${url}`} as={`/${url}`}>
      <div className="w-full mb-4 cursor-pointer">
        <div className="flex h-24 border-b border-almostWhite">
          <div className="relative flex-none h-full w-32">
            <img
              src={content.attributes.image}
              alt="title van artikel"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative px-2">
            <span className="text-sm font-thin text-yellow">
              {content.attributes.onderwerp}
            </span>


            <h4 className="text-lg font-medium leading-6">
              {content.attributes.title}
            </h4>
            <div className="absolute bottom-1 text-xs text-grey"> {date}</div>
          </div>
        </div>
      </div>
    </Link>

  )
}

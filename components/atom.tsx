

import React, { FunctionComponent, useState } from 'react'

interface Content {
  title: string, text: string
}

type Atoms10Props = {
  content: Content[]
}

export const Atoms: FunctionComponent<Atoms10Props> = ({ content }) => {
  const [isClicked, setClicked] = useState([true, false, false, false])
  const [isContent, setContent] = useState(content[0])

  const handleClick = (index: number) => {
    const result = [false, false, false, false]
    result[index] = true
    changeContent(result, content)
    setClicked(result)
  }

  const changeContent = (isClicked: boolean[], content: Content[]) => {
    const indexOfContent = isClicked.findIndex((click: boolean) => click)
    setContent(content[indexOfContent])
  }

  return (
    <div className="text-center">
      <AtomsView width={40} isClicked={isClicked} handleClick={handleClick} />
      <ContentView isContent={isContent} />
    </div>
  )
}

type AtomsViewProps = {
  width: number
  handleClick: (index: number) => void
  isClicked: boolean[]
}

export const AtomsView: FunctionComponent<AtomsViewProps> = ({ width, handleClick, isClicked }) => {
  const numberOfAtoms = 4
  const fullWidth = width * (numberOfAtoms - 1)
  const leftMargin = width / 2

  return (
    <div className="relative inline-flex mx-auto">
      <div className={`absolute top-0 bottom-0 m-auto left-${leftMargin} h-0 w-${fullWidth} border border-gray-300 border-dashed inline-block my-auto`}></div>
      <div className="inline-flex">
        <AtomView color="red" width={width} isClicked={isClicked[0]} handleClick={() => handleClick(0)} />
        <AtomView color="green" width={width} isClicked={isClicked[1]} handleClick={() => handleClick(1)} />
        <AtomView color="blue" width={width} isClicked={isClicked[2]} handleClick={() => handleClick(2)} />
        <AtomView color="yellow" width={width} isClicked={isClicked[3]} handleClick={() => handleClick(3)} />
      </div>
    </div>
  )
}

type AtomViewProps = {
  handleClick: () => void
  isClicked: boolean
  color: string
  width: number
}

const AtomView: FunctionComponent<AtomViewProps> = ({ handleClick, isClicked, color, width }) => {
  const classOnClick = isClicked ? `w-${width} h-${width} bg-opacity-25 bg-${color}` : `w-10 h-10 bg-opacity-100 white`

  return (
    <div className={`flex justify-center items-center w-${width} h-${width}`}>
      {/* big globe */}
      <div className={`flex justify-center items-center z-10 rounded-full border border-${color} transition-all duration-500 ${classOnClick}`} onClick={handleClick}>
        {/* small globe */}
        <div className={`w-4 h-4 z-20 bg-${color} rounded-full`}></div>
      </div>
    </div>
  )
}

type ContentViewProps = {
  isContent: Content
}

const ContentView: FunctionComponent<ContentViewProps> = ({ isContent }) => {
  return (
    <div className="w-120 mx-auto">
      <h3 className="font-bold text-3xl mb-4">{isContent.title}</h3>
      <p className="text-lg">{isContent.text}</p>
    </div>
  )
}
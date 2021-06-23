import { useState } from "react"

import { useFetch } from "../../localFunctions/lunrjs"

export const Search = () => {
  const { response, error } = useFetch()

  const [searchResults, setSearchResults]: any = useState(null);
  const [value, setValue]: any = useState("");

  const handleChange = (e: string) => {
    const numberOfResults = 5



  }

  return (<FormInput type={"text"} onChange={handleChange} />)
}

function FormInput(props: any) {
  const [inputType] = useState(props.type)
  const [inputValue, setInputValue] = useState('')

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value
    setInputValue(value);
    if (props.onChange) props.onChange(inputValue)
  }
  return (
    <>
      <input type={inputType} value={inputValue} name="input-form" onChange={handleChange} className="inputclass" />
    </>
  );
}
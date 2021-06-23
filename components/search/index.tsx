import { useState } from "react"

// import { getSearch, useFetch } from "../../localFunctions/lunrjs"



export const Search = () => {
  // const { response, error } = useFetch()

  const [searchResults, setSearchResults]: any = useState(null);
  const [value, setValue]: any = useState("");

  const handleChange = (e: string) => {
    console.log("zoeken1", e)
    const numberOfResults = 5

    // const results = getSearch(response, e, numberOfResults)
    // setSearchResults(results)


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
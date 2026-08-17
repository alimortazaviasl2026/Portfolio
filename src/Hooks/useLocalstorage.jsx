import { useState } from "react"

const getLocalValue = (key , defaultValue) => {
    return localStorage.getItem(key) || defaultValue
}

const useLocalStorage = (key , defaultValue) => {
  const [state , setState] = useState(getLocalValue(key , defaultValue))

  const setValue = (value) => {
    setState(value)
    localStorage.setItem(key,value)
  }

  return [state , setValue]
}

export default useLocalStorage
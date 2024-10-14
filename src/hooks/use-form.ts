import { ChangeEvent, useState } from "react"

export function useForm<T extends Record<string, string>>(initialState: T) {
  const [values, setValues] = useState<T>(initialState)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setValues((prevValues) => ({ ...prevValues, [name]: value }))
  }

  const resetForm = () => setValues(initialState)

  return { values, handleChange, resetForm }
}

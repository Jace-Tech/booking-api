import { useState } from 'react'

const useBoolean = (state = false) => {
  const [bool, setBool] = useState(state)

  const open = () => setBool(true)
  const close = () => setBool(false)
  const toggle = () => setBool(prev => !prev)

  return {bool, open, close, toggle}
}

export default useBoolean
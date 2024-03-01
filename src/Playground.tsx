import { useMemo, useState } from "react"

import Clock from "react-clock"
import 'react-clock/dist/Clock.css';
import { useDebounce, useStringUtils } from "./hooks";

const Playground = () => {
  const [text, setText] = useState('')
  const debouncedValue = useDebounce(text)

  const { getMaxTime } = useStringUtils(debouncedValue)

  const { message, value, success} = useMemo(() => getMaxTime(), [debouncedValue])
  const isConvertionSuccess = useMemo(() => success, [success])
  
  return (
    <>
      {<Clock value={isConvertionSuccess ? value : '00:00'} />}
      <input id="demo_input" onChange={(e) => setText(e.target.value)} value={text} style={{ display: 'block'}}/>
      {isConvertionSuccess ? value : message}
    </>
  )
}

export default Playground

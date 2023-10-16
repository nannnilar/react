import { useState } from "react";
import EffectExample3 from "./useEffect-hook3";

export default function MouseContainer() {
  const[display,setDisplay] = useState(true)

  return(
<>
    <button onClick={() => setDisplay(!display)}>Toggle Display</button>
    {display && <EffectExample3></EffectExample3>}
</>
  )
}
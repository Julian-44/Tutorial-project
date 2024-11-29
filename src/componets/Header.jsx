import { useState } from 'react'
import logo from '/logo-name.svg'


export default function Header() {
  const [ now, setNow] = useState(new Date())

  setInterval(() => setNow(new Date()), 1000)
  
    return (
    <header>
        <img src={logo} alt="Result universite" />
      {/* {<h3>Header</h3>} */}
  
      <span> time is now: {now.toLocaleTimeString()}</span>
    </header>
      )
  }
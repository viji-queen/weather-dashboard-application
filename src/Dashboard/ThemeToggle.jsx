import React from 'react'
import {useDispatch, useSelector}  from 'react-redux'
import { toggleTheme } from '../redux/themeSlice'

function ThemeToggle() {
    const dispatch = useDispatch()
    const theme = useSelector((state)=> state.theme.mode)

    const handleToggle = ()=>{
        dispatch(toggleTheme())
    }
  return (

<label className="switch">
  Hello
<input
  type="checkbox"
  checked={theme === "light"}
  onChange={handleToggle}
/>

<span className="slider round" />
</label>
  )
}

export default ThemeToggle
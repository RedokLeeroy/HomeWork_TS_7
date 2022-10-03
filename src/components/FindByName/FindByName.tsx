import s from "./Input.module.css"
import React, { ChangeEventHandler } from "react"

export const FindByName = ({value, onChange}: {value:string, onChange: ChangeEventHandler}):JSX.Element => {
    return <label className={s.label}> Find Contacts By name: <input className={s.input}
  name="filter"
  value={value}
  onChange={onChange}
/>
</label>
}

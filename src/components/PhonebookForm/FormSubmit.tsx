
import s from "./Button.module.css"
import React from "react"

export const FormSubmit = ({title}: {title:string}) => {
    return <button className={s.button} type="submit">{title}</button>
}

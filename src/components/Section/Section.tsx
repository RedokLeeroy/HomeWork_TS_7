import React from "react"
import { ReactNode } from "react"
import s from "./Section.module.css"

export const Section = ({title, children}: {title: string, children: ReactNode}): JSX.Element => { return <section>
    <h2 className={s.title}>{title}</h2>
    {children}
</section>
}


import React from "react";
import style from "./FormControls.module.css"

export const Textarea = ({input, meta, ...props}) => {
    const syncError = meta.touched && meta.error
    return (
        <div className={style.formControl + " " + (syncError ? style.error : "")}>
            <div>
            <textarea {...input} {...props} />
            </div>
                {syncError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const syncError = meta.touched && meta.error
    return (
        <div className={style.formControl + " " + (syncError ? style.error : "")}>
            <div>
            <input {...input} {...props} />
            </div>
                {syncError && <span>{meta.error}</span>}
        </div>
    )
}
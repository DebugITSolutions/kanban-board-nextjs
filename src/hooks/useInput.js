"use client"
import {useState} from "react";

export const useInput = (defaultState) => {
    const [value, setValue] = useState(defaultState)

    const onChange = (e) => {
        setValue(e.target.value)
    }

    return {
        value, onChange
    }
}
import React from 'react'
import styles from './icon-button.module.css'

interface IconButtonProps {
    SvgIcon: any
    classname?: string
    svgFill?: string
}

const IconButton = ({ SvgIcon, classname, svgFill }: IconButtonProps) => {
    return (
        <button className={`${styles.button} ${classname}`}>
            <SvgIcon style={{ fill: svgFill }} />
        </button>
    )
}

export default IconButton;
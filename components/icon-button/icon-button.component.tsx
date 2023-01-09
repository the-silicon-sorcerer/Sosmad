import React from 'react'
import styles from './icon-button.module.css'

interface IconButtonProps {
    SvgIcon: any
    style?: React.CSSProperties
}

const IconButton = ({ SvgIcon, style }: IconButtonProps) => {
    return (
        <button style={style} className={styles.button}>
            <SvgIcon />
        </button>
    )
}

export default IconButton;
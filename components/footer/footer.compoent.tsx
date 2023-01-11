import IconButton from '../icon-button/icon-button.component';
import styles from './footer.module.css'
import PlusIcon from '../../public/svg/plus.svg'
import HomeIcon from '../../public/svg/home-icon.svg'
import ProfileIcon from '../../public/svg/profile.svg'

const Footer = () => {
    return (
        <div className={styles.main}>
            <IconButton SvgIcon={PlusIcon} classname={styles.plusIcon} svgFill='white' />
            <IconButton SvgIcon={HomeIcon} classname={styles.secondaryIcon} svgFill='white' />
            <IconButton SvgIcon={ProfileIcon} classname={styles.secondaryIcon} svgFill='white' />
        </div>
    )
}

export default Footer;
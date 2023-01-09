import IconButton from '../icon-button/icon-button.component';
import styles from './footer.module.css'
import PlusIcon from '../../public/svg/plus.svg'
import { transferableAbortController } from 'util';

const Footer = () => {
    return (
        <div className={styles.main}>
            <IconButton SvgIcon={PlusIcon}
                style={{
                    backgroundColor: 'var(--accentColor)',
                    height: '75px',
                    width: '75px',
                    position: 'absolute',
                    top: '0px',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'

                }} />
        </div>
    )
}

export default Footer;
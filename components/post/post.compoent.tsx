import Image from 'next/image';
import style from './post.module.css'
import IconButton from '../icon-button/icon-button.component';
import MenuSvg from '../../public/svg/menu.svg'
import { sampleData } from '../../utils/sampleData';

interface PostProps {
    image?: string
}

const Post = ({ image }: PostProps) => {
    return (
        <div className={style.main}>

            <div className={style.header}>
                <div className={style.profileImage}>
                    <Image
                        className={style.image}
                        fill
                        src={sampleData[0].profilePic}
                        alt='' />
                </div>
                <div className={style.profileInfo}>
                    <h2>Username</h2>
                    <h3>Post-time</h3>
                </div>
                <IconButton classname={style.menu} SvgIcon={MenuSvg} />
            </div>
            <div className={style.mainPost}>
                <div className={style.background}>
                    <Image
                        className={style.mainImage}
                        fill
                        src={image!}
                        alt=''
                    />
                </div>
                <div className={style.metaData}>
                </div>
            </div>
        </div>
    )
}

export default Post;
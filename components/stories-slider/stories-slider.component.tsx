import Image from "next/image";
import styles from './stories-slider.module.css'
import { UserData } from "../../utils/sampleData";
import StoryCard from "../story-card/story-card.compoent";

interface StorySliderProps {
    userDataArray: UserData[]
}

const StorySlider = ({ userDataArray }: StorySliderProps) => {
    return (
        <div className={styles.stories}>
            <h2>Stories</h2>
            <div className={styles.storiesContainer}>
                {userDataArray.map((data) => {
                    return <StoryCard key={data.id} userData={data} />
                })}
            </div>
        </div>
    )
}

export default StorySlider;
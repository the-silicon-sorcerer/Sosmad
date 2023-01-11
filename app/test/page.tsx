'use client';

import { useState } from "react";

import Header from "../../components/header/header.component";
import StorySlider from "../../components/stories-slider/stories-slider.component";
import BinarySelector from "../../components/binary-select/binary.select.compoent";
import Post from "../../components/post/post.compoent";

import styles from '../../page-styles/Home.module.css'
import { sampleData } from "../../utils/sampleData";


const HomePage = () => {

    const [selectActive, setSelect] = useState(false)

    const selectorOnClick = (option: string) => {
        if (option === 'Explore') {
            return setSelect(false)
        }
        setSelect(true)
    }
    return (
        <>
            <div className={styles.main}>
                <Header />
                <StorySlider
                    userDataArray={sampleData}
                />
                <BinarySelector
                    optionOne='Explore'
                    optionTwo='Discover'
                    onClickHandle={selectorOnClick}
                    stateValue={selectActive}
                />
                <Post image={sampleData[2].currentStories[0].storyImage} />
                <Post image={sampleData[0].currentStories[0].storyImage} />
                <Post image={sampleData[1].currentStories[0].storyImage} />
            </div>
        </>
    )
}

export default HomePage;
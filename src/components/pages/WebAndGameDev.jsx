import React from "react";
import {CardRight, CardLeft, Card, PageTitle, HardwareReqs, Spacer} from "./components/";

export default function WebAndGameDev() {

    return (
        <>
            <PageTitle>Web {"&&"} Game Dev</PageTitle>

            <Card>

                <CardRight 
                    title="Why learn Web Dev?"
                    content="Learning Web Dev in CSII allows you to create online websites like this one! You will learn HTML, CSS, and JS with no prior experience needed. Having your own website allows you to put whatever you want on it: your achievements, projects. favorite stuffed animals, or even this photo of a cat!"
                    imgURL="assets/cat.png"
                />

                <Spacer distance="4"/>

                <CardLeft
                    content="Web Dev is also a good opportunity to demonstrate to future employers that you are eager to learn! It shows that you can turn newfound knowledge into an actual project. An online portfolio of yourself, that is fully customizable to your liking."
                    imgURL="assets/ethantwu-com.jpg"
                />
            </Card>

            <Card>
                <CardRight
                    title="Why learn Game Dev?"
                    content="Learning Game Dev in CSII allows you to create online games that your friends and family can enjoy! You will enhance your knowledge in JavaScript and Object-Oriented Programming by creating games using JS Frameworks like ThreeJS and PhaserJS. You can even publish your games to Steam or CoolMathGames!"
                    imgURL="assets/cubepvp.jpg"
                />

                <Spacer distance="4" />

                <CardLeft
                    content="You will learn the fundamentals of game development: objects like the scene, camera, lighting, sprites, shaders, and everything that goes into making your favorite games possible! Making your own game will also show interviewers that you are proactive and can turn any idea into a reality."
                    imgURL="assets/greenearthPhoto.jpg"
                />
            </Card>

            <Card>
                <HardwareReqs>It is recommended that you have a personal computer/tablet, but a school laptop is usuable.</HardwareReqs>
            </Card>
        </>
    );
}

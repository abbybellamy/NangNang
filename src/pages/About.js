//import Header from '../components/Header';
import me from '../images/me.png';
import thxpic from '../images/有難う.png';

const About = () => {
    return (    
        <div className = "about">
            <p id = "titleOrigins">NangNang's origins: <br /> </p>

            <div> 

                <br/>This project was made from Feburary to May in 2024 for my senior capstone. <br /><br />

                NangNang got it's name from a brainstorming session with my Japanese professor of the last 
                four years. <br/><br/>
                
                We were talking through some ideas of kanji or witty names. Nothing was really 
                fitting until he asked me what my favorite kanji was, and I had to reply that it was nani(何).
                I say it so much that my friends who don't speak Japanese know nani. He thought it was a 
                very suiting name because I am a naturally very inquisitive person and have asked him 
                why or what a lot in class. <br/><br/>

                We thought that a cute pneumonic way to say it would be repetition since that is a commonly
                used way in Japan to make a word sound cute -- ie "dokidoki" is the sound of a heart beating rapidly.
                Which is when we thought up the name "nani nani" meaning "what what?" <br/><br/> 
                
                It eventually got shortened in a cute way to nan nan and the way that we romanized this was by
                making it "NangNang" which is the name you see currently. <br/><br/>

                It is also a suiting name since this website is supposed to help you be inquisitive and curious about 
                kanji in general and say "but WHAT does that radical mean?"  <br/><br/>

            </div>

            <div className="meImage">
                <img src={me} alt="The picture of me at a Japanese conference" />
            </div>
            <div className = "imageSubtitle">
                In this image I have circled myself. My professor of my 3 years studying Japanese at univeristy 
                is seen standing behind me! This was from a Japanese speech conference at Wake Forest University. 
            </div>


            <div id = "summary">
                    <p id = "titleAboutMe">About me: <br/> <br/></p>
                    <p> 
                        I am a student at Appalachian State University. I am graduated as of May 2024.
                        I created this web-app because I have been studying Japanese for 7 years (not consistently lol),
                        and one thing that I always wanted was a fun interactive way to shuffle through Japanese Kanji 
                        characters. It is easy to lose yourself studying Kanji when you start going deeper into the meaning.
                        <br/><br/>

                        I have dreams to make this website better in regards to the learn function, but a one person team 
                        over the course of 5 months wasn't really feasible for the scale that this project would be
                        if I stuck with my original scope. So as I can either gather individuals or grown my own coding 
                        skill, I will reach that ultimate goal. I hope you will stick around to see that!
                        <br/><br/>
                    </p>
                    <p>
                        Something that we all struggle with as students studying this langauge is how to memorize kanji.
                        Some of us do the classic repetivie writing, some do flashcards, some have apps. But for those of us 
                        that have a low attention span and need something fun to keep our focus these methods
                        aren't the most helpful. Which is when I thought of this website idea. 
                        <br/><br/>
                    </p>
                    <p>
                        To help those people who struggle learning and memorizing and want a fun way to do it! 
                        <br/><br/>
                        I hope this website is just as helpful for you as it is for me. Get lost in the fun!
                        <br/>
                    </p>

            </div>


            <div className='thanks'>
                <div className="thanksImage">
                    <img src={thxpic} alt="Thank you!"/>
                </div>
                <p>
                    I would like to thank a few people for their great help in guiding me, brainstorming with me
                    and ultimately being a great mentor. <br></br>
                    <b>Ito Sensei</b>, thank you for all your instruction since I was a freshman, you have seen me grow up the past 4 years even if you weren't a professor the whole time. 全部がありがとうございます! <br></br>
                    <b>Dr. Hills</b>, thank you for all your guidance along the way and doing so much to help me navigate the waters,
                    I will forever remember your kindness and support for this project! <br></br>
                    <b>Professor Sapphire</b>, thank you for all the react and webDev help, without you I would have shed so many tears over this project!<br></br>
                    <b>My partner</b>, thank you for helping me see the little mistakes I made along the way, and also encouraging me a lot along the way when I thought I couldn't do it!<br></br>
                    <b>FINALLY! A big thanks to my friends</b>, and everyone who gave advice and support and critiques during the time. 
                </p>
            </div>

            <div className='credits'>
                <b>Credits for this project are: </b><br />
                <b>Kanji Alive API</b>  <a href="https://rapidapi.com/kanjialive/api/learn-to-read-and-write-japanese-kanji/">https://rapidapi.com/kanjialive/api/learn-to-read-and-write-japanese-kanji/ </a><br />
                <b>Kanji Writing</b> (for building my dataset) <a href="https://kanji.sljfaq.org/ ">https://kanji.sljfaq.org/ </a> <br />
                Both are under the creative commons liscence.

            </div>

        </div> //main about div 
    );
}
export default About;
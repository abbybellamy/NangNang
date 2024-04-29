import { useState, useEffect } from 'react';
//import Header from '../components/Header';

const Home = () => {
    return ( 
        <div className="home">
            <h2 id = "welcomeMessage"> Welcome</h2>

            <span id = "submessage" >*A place to learn Kanji in a fun and interactive way!* <br/><br/></span>

            <div id = "learns">LEARN</div>
            <div id = "exLearn">
                The LEARN page uses a homemade dataset from yours truly. It currently holds about 50 
                characters. The learn pages has a simple walkthrough of how to use the functionality.
                The logistics of making the website optimized for all screen sizes is quite tedious
                so it is recomended that for the best functionality to use your browser at 150% zoom. 
            </div>

            <div class = "containerDict">  <br/> <br/>  <br/>  <br/> <br/> </div>

            <div id = "dict"> DICTIONARY</div>
            <div id = "exDict">
                The DICTIONARY page is the one that uses kanjiAlive database (see "about" page for credits 
                and links). A lot of the information that the kanji alive database has is shaved off becuase 
                the goal is to get the most important bare bones data to help the user
                get the best straightforward information avaliable.
                To clarify the Learn page also uses this API but has even less info. 
            </div>

            <div class = "containerDict">  <br/> <br/>  <br/>  <br/> <br/> </div>

            <div id = "abouts">
                <b>This website is not optimized for phone and tablet, computer is recommended.
                See the about page for more information on the website and for credits.</b>
            </div >

            <p> <br />HAPPY LEARNING!</p>

        </div>
     );
}
 
export default Home;
import React, {useState} from 'react';
import kanjiText from './kanji.json';
import LearnTut from '../images/LearnpageTut.png';
import LearnTut2 from '../images/LearnpageTut2.png';


console.log(kanjiText);
const Learn = () => {
    var map = new Map();
    initializeSet(map);

    const [formData, setFormData] = useState({
        kanji: ''
    });

    const handleSubmit = (x) => {
        x.preventDefault();
        console.log('Form submitted:', formData);
        helper(formData, map);
    };

    return (    
        <div className = "learnContainer">
             <form onSubmit={handleSubmit}>
                {/* <label htmlFor="kanjiInput"> Enter Kanji : </label> */}
                <div class="label"> Learn Kanji : </div>
                <input
                    type="text"
                    id="kanjiInput"
                    placeholder = "本, 時..."
                    value={formData.kanji}
                    onChange={(e) => setFormData({ kanji: e.target.value })}
                />
                {/* <button id = "kanjiSubmit" type="submit" name = "kanjiSubmit">  
                </button> */}
            </form>
            <div id="learnHelp">
                <img src={LearnTut} alt="The basic tutorial of how to read the learn functionality." />
            </div>
            <div id="learnHelp2">
                <img src={LearnTut2} alt="The basic tutorial of how to use the learn functionality." />
            </div>
            <div id="learnResult">
            </div>
        </div>
    );
}

const initializeSet = (map) => {
    //https://stackoverflow.com/questions/8877666/how-is-a-javascript-hash-map-implemented 
    //hash map ^
    for(var i in kanjiText){
        map.set(i, kanjiText[i]); //set up the hash set from kanji.json
    }
}

const helper = async(formData, map) => {
    let wordDes = ``;
    const submit = formData.kanji;
    //console.log("this is the submit" + submit);
    var element = document.getElementById("learnHelp");
    var style = window.getComputedStyle(element);
    if (style.visibility == "visible") {
        element.style.visibility = "hidden";
    }
    var element = document.getElementById("learnHelp2");
    var style = window.getComputedStyle(element);
    if (style.visibility == "visible") {
        element.style.visibility = "hidden";
    }
    if(map.has(submit)){

        let outputElement = document.getElementById("learnResult");
        let word = map.get(submit);
        //alert(JSON.stringify(res, null, 4));　// checking the type of something from https://stackoverflow.com/questions/1625208/print-content-of-javascript-object
        let freq = word.rank;
        let definition = word.def;
        let position = word.pos;


        let dissectList = word.dissect;
        let dissectListT = [];
        let dissectListA = dissectList.pop();
        let dissectListB = [];
        for (let a in dissectListA){
            dissectListB += dissectListA[a] + " ";
        }
        
        for(var x in word.dissect){
            var listy = word.dissect[x];
            for(var y in listy){
                dissectListT += listy[y] + " ";
            }
            dissectListT += "<br>";
        }  

        if(position == "top"){
            var top = `<p id="radsTop">Dissection Top: ${dissectListT}</p>`;
            var bottom = `<p id="radsBot">Dissection Bottom: ${dissectListB}</p>`;

            wordDes += `<div id = "learnKanji"> ${submit} </div> 
                        <p><b>Interpretation:</b> ${definition}</p>
                        <p><b>Frequency:</b> ${freq}</p> 
                        <div id = "top"></div> ${top}
                        <div id  = "bottom"></div>${bottom} <br />`;

        }
        else{
            var left = `<p id="radsL">Dissection Left: ${dissectListT}</p>`;
            var right = `<p id="radsR">Dissection Right: ${dissectListB}</p>`;

            wordDes += `<div id = "learnKanji"> ${submit} </div> 
                        <p><b>Interpretation:</b> ${definition}</p>
                        <p><b>Frequency:</b> ${freq}</p> 
                        <div id = "left"></div> ${left}
                        <div id  = "right"></div>${right} <br />`;

        }

    //     wordDes += `
    //     <div id = "learnKanji"> ${submit} </div>
    //     <span id = "kanjiContent">
    //         <p>Base: ${base}</p> <br>
    //         <p>Rank: ${freq}</p> <br>
    //         <p>Meaning: ${definition}</p><br>
    //         <p id="rads">Dissection: ${dissectList}</p>
    //     </span>
    //    `;
        ///API CALL TO GET THE BASIC INFO 


        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6a12f8c88cmsh830de894db5186bp10d491jsnfd2c65de1956',
                'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
            }
        };

        const url = 'https://kanjialive-api.p.rapidapi.com/api/public/kanji/'; 
        const uri = url.concat(submit); 
        console.log(url); 

        try {

            const response = await fetch(uri, options);
            const result = await response.json();

            
            if(!response.ok){

                let outputElement = document.getElementById("learnResult");
                let err = "Please type a valid character."
                outputElement.innerHTML = err;
            }


            else{


                //let outputElement = document.getElementById("outputKanji");
                //let kanji = result.ka_utf; //kanji character
                let on = result.onyomi_ja; //chinese reading
                let kun = result.kunyomi_ka_display; // japanese reading
                let examples = result.examples; //words that it is in 
                let related_words = " ";//words that it is in 
                let defintion = result.kanji.meaning.english; //english meaning
                let count = 4;
                for (let word in examples){
                    if(count == 0){
                        break;
                    }
                    //I am putting this if statement in because sometimes the 
                    //use cases of words would start like *kanji it was weird
                    //again no documentation so IDK
                    if(examples[word].japanese.substring(0,1) === "*"){
                        //related_words += examples[word].japanese.substring(1);
                    }
                    else{
                        related_words += "<br> ";
                        related_words += examples[word].japanese;
                        related_words += examples[word].meaning.english;
                    }
                    count--;
                }

                wordDes += `
                    <div id = "apikanji">
                        <br />
                        <p> <b>Dictionary definition:</b> ${defintion}</p>
                        <p> <b>On reading:</b> ${on}</p>
                        <p> <b>Kun reading:</b> ${kun}</p>
                        <p> <b>Words:</b> ${related_words}</p>
                    </div>
                `;
            }


        }

        catch (error) {

            console.error(error);
            let outputElement = document.getElementById("learnResult");
            outputElement.innerHTML = "This kanji is not one of the top 200";


        }
        outputElement.innerHTML = wordDes;
    } 


    else{
        alert("Not in base set of top 200. Try another character.");
    }
}
export default Learn;
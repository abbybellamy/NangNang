//import Header from '../components/Header';
import React, {useState} from 'react';
//Helpful link on hooks and calls https://stackoverflow.com/questions/34424845/adding-script-tag-to-react-jsx


const Dictionary = () => {
    const [formData, setFormData] = useState({
        kanji: ''
    });
    const handleSubmit = (x) => {
        x.preventDefault();
        console.log('Form submitted:', formData);
        process(formData);
    };
    return (    
        <div className="dictionaryContainer">
            <form onSubmit={handleSubmit}>
                <div class="label"> Search Kanji : </div>
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
            <div id="outputKanji">
            </div>
        </div>
    );
}

const process = async(formData) => {
    const submit = formData.kanji;
    const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6a12f8c88cmsh830de894db5186bp10d491jsnfd2c65de1956',
        'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
    }
    };
        const url = 'https://kanjialive-api.p.rapidapi.com/api/public/kanji/'; 
        const uri = url.concat(submit); 
        console.log(url); //const encoded = encodeURI(url);
        try {
            const response = await fetch(uri, options);
            const result = await response.json();
            if(!response.ok){
                let outputElement = document.getElementById("output");
                let err = "Please type a valid character."
                outputElement.innerHTML = err;
            }
            else{

                let outputElement = document.getElementById("outputKanji");
                let kanji = result.ka_utf; //kanji character
                let on = result.onyomi_ja; //chinese reading
                let kun = result.kunyomi_ka_display; // japanese reading
                let examples = result.examples; //words that it is in 
                let related_words = " ";//words that it is in 
                let defintion = result.kanji.meaning.english; //english meaning
                //let strokes = result.kanji.strokes;
                //let hint = result.mn_hint;
                let rad = result.radical.character;
                let radMeaning = result.radical.meaning.english;
                console.log(defintion);

                for (let word in examples){
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
                }
                //Some hints would have this message...maybe because some kanji are ONLY 
                //a radical so I just made it so there is no hint -- may change later 
               //console.log(hint.substring(0,6));
                // if(hint.substring(0,6) === "Please"){
                //     hint = "No hint avaliable for this kanji.";
                // }
                
                let wordDes = ` 
                <div id= "kanji">${kanji}</div>
                <p id= "def">  <b>Meaning:</b> ${defintion}</p>
                <p id= "on"> <b>On reading:</b> ${on}</p>
                <p id= "kun"> <b>Kun reading:</b> ${kun}</p> 
                <p id= "relate"> <b>Words with this character:</b> ${related_words}</p>
                `; //template string
                 // <p id= "hint"> Hint: ${hint}</p> 
                console.log(wordDes);
                outputElement.innerHTML = wordDes;
            }
        }
        catch (error) {
            console.error(error);
            let outputElement = document.getElementById("outputKanji");
            outputElement.innerHTML = "failed";
        }
}

export default Dictionary;

import allQuestions from "./ques.js";

//step2-get value from html into JS

        const restartBtn = document.getElementById("restart1");
        const prevBtn = document.getElementById("prev");
        const nextBtn = document.getElementById("next");
        const submitBtn = document.getElementById("submit");
        let userScore = document.getElementById("user-score");
        const totalBoardScore = document.getElementById("total-score");
        const questionVal = document.getElementById("question-area");
        const option1 = document.getElementById("opt1");
        const option2 = document.getElementById("opt2");
        const option3 = document.getElementById("opt3");
        const option4 = document.getElementById("opt4");
        const optionPress=document.querySelectorAll(".btn-option");
        totalBoardScore.innerHTML=allQuestions.length;

        // Global variable to calulate user score
         userScore.innerHTML = 0;
        //Tracking Counts 
         let count=0;
         const funcCount =() =>{
              return  count=count+1;
        };
 
    // Restart button click to show the question        
            const restart =(event)=>{
                console.log(count);
                event.preventDefault();
                submitBtn.style.display='none';
                questionVal.innerHTML=allQuestions[count].question;
                option1.innerHTML = allQuestions[count].choices[0];
                option2.innerHTML = allQuestions[count].choices[1];
                option3.innerHTML = allQuestions[count].choices[2];
                option4.innerHTML = allQuestions[count].choices[3];
                // const correctResponse=allQuestions[count].correctAnswer;
                restartBtn.style.display='none';
            }
    // Getting value for the answer option user has clicked         
                optionPress.forEach((button) => {
                     button.addEventListener("click",(event)=>{
                        event.preventDefault();
                        const rightResponse=button.innerHTML;
                        console.log(allQuestions[count].correctAnswer);
                        console.log(rightResponse);
                        if (rightResponse==allQuestions[count].correctAnswer)
                        {
                          userScore.innerHTML=Number(userScore.innerHTML)+1;   //Converting the innerHTLm to Num    
                          button.style.backgroundColor='green';
                        } 
                     });
                });
                    
    // Getting value for the NEXT question when NEXT is clicked                        
        const next =(event)=>{
             funcCount (count);
             console.log(count);
             restart(event);
        //   optionPress.style.backgroundColor='blue';

        }

// Putting eventListerner to the buttons and calling functions
        restartBtn.addEventListener("click", restart);
        // prevBtn.addEventListener("click", prev);
        nextBtn.addEventListener("click",next);
        submitBtn.addEventListener("click",submit);












// Function for restart is hiding button submit / previous button
            // const scoring =(score) =>{
            // optionPress.addEventListener("click",(event)=>{
            // const userScore1=optionPress.innerHTML;
            // console.log(userScore1);
            // userScore.innerHTML =userScore1;
            // console.log(allQuestions[0].correctAnswer[0]);
            // if (optionPress == allQuestions[0].correctAnswer[0])
            //         {
            //             userScore = 1;
            //             console.log(userScore);
            //         }    
            //     })
            // }    ;



        //step 4- render a single pokemon on page
// container.innerHTML = createPokemonHtmlCard(pokemonArray[0]);

    // const questionCard =(question) =>{
    //     questionVal.innerHTML = `${questionVal.question[0]}`;
    //     option1.innerHTML = `${questionVal.choice[0]}`;
    //     option2.innerHTML = `${questionVal.choice[1]}`;
    //     option3.innerHTML = `${questionVal.choice[2]}`;
    //     option4.innerHTML = `${questionVal.choice[3]}`;
    // };    
    // const para = `${pokemon.name} #(${pokemon.id}) is a ${pokemon.types[0][1]}`;
    // console.log (para);
    //    return `
    //   <div class="pokemon-card">
    //       <img class ="pokemon-card__sprite" src=${pokemon.sprite}>
    //       <h2 class ="pokemon-card__name">${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}</h2>
    //       <p class="pokemon-card__types">${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)} (#${pokemon.id}) is a ${pokemon.types.join(" & ")} type pokemon.</p>
        
    //   `



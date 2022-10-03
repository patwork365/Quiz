import allQuestions from "./ques.js";

//step2-get value from html into JS

        const restartBtn = document.getElementById("restart1");
        const prevBtn = document.getElementById("prev");
        const nextBtn = document.getElementById("next");
        const submitBtn = document.getElementById("submit");
        const userScore = document.getElementById("user-score");
        const totalBoardScore = document.getElementById("total-score");
        const questionVal = document.getElementById("question-area");
        const option1 = document.getElementById("opt1");
        const option2 = document.getElementById("opt2");
        const option3 = document.getElementById("opt3");
        const option4 = document.getElementById("opt4");
        totalBoardScore.innerHTML=allQuestions.length;
        // Global variable to calulate user score
        
        
            
// Function for restart is hiding button submit / previous button
    const restart =(event) =>
    {
        event.preventDefault();
         prevBtn.style.display = 'none';
        // for (i=0; i<=totalBoardScore;i++){
            questionVal.innerHTML=allQuestions[0].question;
            option1.innerHTML = questionVal[0].choice[0];
        // }
    };
    // option1.innerHTML=(`${allQuestions.choices[0]}`);
    // console.log(option1.innerHTML);
//step 4- render a single pokemon on page
// container.innerHTML = createPokemonHtmlCard(pokemonArray[0]);

    const questionCard =(question) =>{
        questionVal.innerHTML = `${questionVal.question[0]}`;
        option1.innerHTML = `${questionVal.choice[0]}`;
        option2.innerHTML = `${questionVal.choice[1]}`;
        option3.innerHTML = `${questionVal.choice[2]}`;
        option4.innerHTML = `${questionVal.choice[3]}`;
    };    
                            // const para = `${pokemon.name} #(${pokemon.id}) is a ${pokemon.types[0][1]}`;
                            // console.log (para);
                            //    return `
                            //   <div class="pokemon-card">
                            //       <img class ="pokemon-card__sprite" src=${pokemon.sprite}>
                            //       <h2 class ="pokemon-card__name">${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}</h2>
                            //       <p class="pokemon-card__types">${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)} (#${pokemon.id}) is a ${pokemon.types.join(" & ")} type pokemon.</p>
                                
                            //   `

// Putting eventListerner to the buttons and calling functions
        restartBtn.addEventListener("click", restart);
        nextBtn.addEventListener("click",questionCard);
        prevBtn.addEventListener("click", prev);
        // nextBtn.addEventListener("click",next);
        submitBtn.addEventListener("click",submit);




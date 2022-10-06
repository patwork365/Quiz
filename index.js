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

// Declare global variable and hide butttons
         userScore.innerHTML = 0;
         let submitScore= Number(userScore.innerHTML);
         submitBtn.style.visibility='hidden';    
         nextBtn.style.visibility='hidden'; 
         let a=0;
        //  const a = Math.floor(Math.random() * (10 - 1)) + 1;
        //  console.log (a);

       //Tracking Counts in function, for all question
         let count=0;
         const funcCount =() =>{
              return  count=count+1;
                };
 
        //Function Submit
        const funcSubmit =()=>{  
                optionPress.forEach((button) => {   
                    button.style.visibility='hidden';      //Revert all Option to hide
                 });
                submitBtn.style.visibility='hidden';       //Hide Submit button
                restartBtn.style.visibility='visible';
                restartBtn.addEventListener("click", restart);
                nextBtn.style.visibility='hidden'; 
                count=0;
                // if (text.length>0){
                //         console.log (text.length);
                //         questionVal.innerHTML = `Sorry Timer is up :( Your GRAND SCORE  is : ${submitScore}`;
                // } else {
                questionVal.innerHTML = `Congratulations  :)  Your GRAND SCORE  is  : ${submitScore}`;
                // };
                userScore.innerHTML = "0";  // making userboard on screen to zero
        }      
//Random Number - Not working
                const funcRandoms = ()=>{ 
                // console.log (` ${a}`);
                  a= (Math.floor(Math.random() * (5 - 1)) + 1);
                  return a;
                }

// Start button click to show the question        
        const restart =(event)=>{
                
                optionPress.forEach((button) => {   
                        button.style.visibility='visible';      //Revert all Option to appear
                });
                nextBtn.style.visibility='visible';
                
                if (count==allQuestions.length){
                        nextBtn.classList.add("hide");
                        console.log("Checking count is not equal");
                        
                        // funcSubmit();
                }else{
                        
                        // console.log("Checking count < questions length");
                        event.preventDefault();
                        submitBtn.style.visibility='hidden';       //Hide Submit button
                        restartBtn.style.visibility='hidden';      //Hide Start button 
                        questionVal.innerHTML=allQuestions[count].question;
                        option1.innerHTML = allQuestions[count].choices[0];
                        option2.innerHTML = allQuestions[count].choices[1];
                        option3.innerHTML = allQuestions[count].choices[2];
                        option4.innerHTML = allQuestions[count].choices[3];
                        
                } 
        }
// Getting value for the answer option user has clicked         
        optionPress.forEach((button) => {
                button.addEventListener("click",(event)=>{
                        event.preventDefault();
                        // funcRandoms();
                        const rightResponse=button.innerHTML;       // passing value to variable to chck click answer agaist array.response
                        if (rightResponse==allQuestions[count].correctAnswer)
                        {
                          userScore.innerHTML=Number(userScore.innerHTML)+1;   //Converting the innerHTLm to Num    
                          button.style.backgroundColor='green';       //Change correctResponse button color to green
                          
                        } 
                });
        });
                    
// Getting value for the NEXT question when NEXT is clicked                        
        const next =(event)=>{
                optionPress.forEach((button) => {   
                    button.style.backgroundColor='blue';      //Revert all Option color to blue
                });
                if (count == (allQuestions.length-1)){
                        submitBtn.style.visibility='visible';
                        nextBtn.style.visibility='hidden'; 
                        submitScore= Number(userScore.innerHTML);
                        userScore.innerHTML = 0;

                        funcSubmit();
                } else {
                        funcCount (count);
                        restart(event);
                };
        }
     

// Putting eventListerner to the buttons and calling functions
        restartBtn.addEventListener("click", restart);
        nextBtn.addEventListener("click",next);
        submitBtn.addEventListener("click",submit);

//Adding timeOut for 30 second
        setTimeout(function(){
                submitScore= Number(userScore.innerHTML);
                funcSubmit()
                // let text = "Sorry 30 second timer is up"
               }, 30000); //30 second timer 
        // let text = "Sorry 30 second timer is up"
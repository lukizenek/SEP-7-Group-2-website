const quizData = [
    {
        question: "1.Do you identify as...",
        a: "Female",
        b: "Male", 
        c: "Non-binary", 
        d: "Other",
        e: "Prefer not to say",
        correct: "a", 
    },

    {
        question: "2.What did you like to play with as a kid",
        a: "Video Games",
        b: "Playdough",
        c: "Explore outdoors",
        d: "Home experiments",
        e: "Lego bricks",
        correct: "a", 
    },
    
    {
        question: "3.What topics did you like best at school",
        a: "Physics",
        b: "Biology",
        c: "Computer Science", 
        d: "Economics",
        e: "Music",
        correct: "c", 
    }, 

    {
        question: "4.What do you like to do on the weekend?",
        a: "Cook a new recipe",
        b: "Spend time outdoors",
        c: "Read up on crypto",
        d: "Rebuild electronics", 
        e: "Read a book",
        correct: "d", 
    }, 

    {
        question: "5.Which of these activities sounds the most fun?",
        a: "Create an app that opens the door for you",
        b: "Design a future city", 
        c: "Create an ice cream that doesnt melt",
        d: "Improve everyday life for humans",
        e: "Design a new sofa",
        correct: "a",  
    },

    {
        question: "6.How would you describe yourself?",
        a: "I am driven and passionate",
        b: "I am a hands on learner", 
        c: "I am environmentally conscious", 
        d: "I am adventurous", 
        e: "I am nerdy",
        correct: "e", 
        
    },
]; 

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const resultBtn = document.getElementById('result')

let currentQuiz = 0
let score = 0 


loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}


resultBtn.addEventListener ('click', () => {
    const answer = getSelected()
    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }
        console.log(score)
        console.log(quizData[currentQuiz].correct)
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>Your best match is ${score}/${quizData.length} software engineering</h2>
            <p>You got Software Engineer! 
            Software engineers use their knowledge of science and technology to design, 
            implement and test computer programs. Software engineers can work on anything from designing 
            applications-like the ones on your phone-to developing the systems that run a device or control a network. 
            Check out VIAs software engineering program </p> 
            <button onclick="location.href='https://en.via.dk/programmes/bachelor/software-technology-engineering'"> Read more about it here </button>
            <button onclick="location.reload()">Reload and try again</button></>
            `
      

        }
    }
})



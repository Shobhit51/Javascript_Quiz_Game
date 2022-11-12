
const quizDB = [
    {
        question: "Q1.Which of the following Javascript cannot do?",

        a: "Javascript can react to events.",

        b: "Javascript can manipulate HTML elements",

        c: "Javascript can be use to validate data.",

        d: "None of the above",

        ans: "A4",
    },
    {
        question: "Q2. Which of the foloowing can read and render HTML web pages?",

        a: "Server",

        b: "Web browser",

        c: "API",

        d: "XML",

        ans: "A2",
    },
    {
        question: "Q3. Why are the variables used in Javascript ?",

        a: "Varying randomly",

        b: "Used as header files",

        c: "To store data and other values",

        d: "None of the above",

        ans: "A3",
    },
    {
        question: "Q4.Which of the following is not a HTML tag?",

        a: "<input>",

        b: "<textarea>",

        c: "<p>",

        d: "<select>.",

        ans: "A4",
    },
    {
        question: "Q5.A website is a --------- Cookie?",

        a: "Volatile",

        b: "Transient",

        c: "In-transient",

        d: "Non-volatile",

        ans: "A2",
    },
    {
        question: "Q6. Which of the following function of String object returns the calling string value converted to upper case?",

        a: "toLocaleUpperCase()",

        b: "toUpperCase()",

        c: "toString()",

        D: "substring()",

        ans: "A2",
    },
    {
        question: "Q7.Which of the following attribute defines the relationship between the current document and url?",

        a: "URL",

        b: "REL",

        c: "BOTH ",

        d: "NONE",

        ans: "A2",
    },
    {
        question: "Q8.What are the types of list available in html?",

        a: "Ordered,unordered lists",

        b: "Named,unnamed lists",

        c: "Number list",

        d: "Alphabetical list",

        ans: "A1",
    },
    {
        question: "Q9. Which of the object removes the first element from an array and returns that element?",

        a: "reverse()",

        b: "shift()",

        c: "slice()",

        d: "some()",

        ans: "A2",
    },
    {
        question: "Q10. What is DOM?.",

        a: "A coding style",
        b: "Specification",
        c: "Parser",
        d: "None",

        ans: "A3",
    },
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');



const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#Score');



let questionCount = 0;
let myscore = 0;


const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = quizDB[questionCount].question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }

    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        myscore++;
    };

    questionCount++;

    deselectAll();
    if (questionCount < quizDB.length) {
        loadQuestion();
    } 
    else {
        Score.innerHTML = `
          <h2> You scored ${myscore}/${quizDB.length} </h2>
          <button class = "btn" onclick="location.reload()">Play Again</button>
          `;

        Score.classList.remove('scoreResult');
    }
});
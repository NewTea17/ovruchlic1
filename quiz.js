//Створили массив з питаннями і відповідями
const DATA = [
    {
        questions : 'Чому Ви відвідуєте наш ліцей?',

        answers : [
            {
                id : '1',
                value : 'Сам не знаю чому',
                correct : true,

            },
            {
                id : '2',
                value : 'В ліцеї я здобуваю знання',
                correct : false,
                
            },
            {
                id : '3',
                value : 'Щоб поспілкуватись з однолітками і друзями',
                correct : false,
                
            },
            {
                id : '4',
                value : 'Батьки змушують',
                correct : false,
                
            },
        ]
    },
    {
        questions : 'Вам подобається відвідувати наш ліцей?',

        answers : [
            {
                id : '5',
                value : 'Так звичайно',
                correct : false,

            },
            {
                id : '6',
                value : 'Так, чому б ні',
                correct : false,
                
            },
            {
                id : '7',
                value : 'Ні',
                correct : true,
                
            },
            {
                id : '8',
                value : 'Категорично ні',
                correct : false,
                
            },
        ]
    },
    {
        questions : 'Чи користуєтеся ви e-щоденником?',

        answers : [
            {
                id : '9',
                value : 'Так, звичайно',
                correct : false,

            },
            {
                id : '10',
                value : 'Досить часто',
                correct : false,
                
            },
            {
                id : '11',
                value : 'Інколи',
                correct : false,
                
            },
            {
                id : '11',
                value : 'Взагалі не користуюсь',
                correct : true,
                
            },
        ]
    },
    {
        questions : 'Яку форму навчання ви б хотіли під час війни?',

        answers : [
            {
                id : '12',
                value : 'Онлайн',
                correct : false,

            },
            {
                id : '13',
                value : 'Офлайн',
                correct : false,
                
            },
            {
                id : '14',
                value : 'Змішане навчання',
                correct : false,
                
            },
            {
                id : '15',
                value : 'Взагалі не ходить в школу',
                correct : true,
           
            },
            ]
        },
        {
            questions : 'Дякую за те, що пройшли опитування',   
            answers : [
                
                ]        
        },
    ];

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');

const renderQuestions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers.map((answer)  =>  `
            <li>
                <label>
                    <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                    ${answer.value}
                </label>
            </li>
        `)
        .join(' ');

    questions.innerHTML = `
    <div class="questions-item">
        <div class="question-item-question">${DATA[index].questions}</div>
        <ul class="question-item-answers">${renderAnswers()}</ul>
    </div>
    `;
};

const renderResults= () =>{
    let content = '';
    
    const getClassname = (answer, questionIndex) => {
        let classname = ' ';

        if (!answer.correct && answer.id === localResults[questionIndex]) {
            classname = 'answer--invalid';
        } else if (answer.correct) { 
            classname = 'answer--valid';
        }

        return classname;
    };

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
        .map((answer) => `<li class="${getClassname(answer, questionIndex)}">${answer.value}</li>`).join(' ');
    results.innerHTML = content;
};

const renderIndicator = (currentStep) =>{
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
    //Логіка відповіді
    if(event.target.classList.contains('answer-input')){
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;
    }
});

quiz.addEventListener('click', (event) =>{
    //Вперед або спочатку
    if(event.target.classList.contains('btn-next')){
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;

        if(DATA.length === nextQuestionIndex){
            //Перехід до результата
            renderResults();
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hidden'); 
            results.classList.add('indicator--visiable'); 
            btnNext.classList.add('btn-next--hidden'); 
            btnRestart.classList.add('btn-restart--visiable'); 

        } else {
            //Перехід до наступного питання
            renderQuestions(nextQuestionIndex)
        }

        btnNext.disabled = true;
    }
    if(event.target.classList.contains('btn-restart')){
        localResults = {};
        results.innerHTML = ' ';

        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hidden'); 
        results.classList.remove('indicator--visiable'); 
        btnNext.classList.remove('btn-next--hidden'); 
        btnRestart.classList.remove('btn-restart--visiable'); 

        renderQuestions(0);
    }
});

renderQuestions(0);
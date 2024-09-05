
let username = "";
let score = 0;
let currentQuestionIndex = 0;
const totalQuestions = 5;
const questions = generateQuestions();
let userResponses = [];

// Formulaire pour entrer le nom de l'utilisateur
document.getElementById('user-form').addEventListener('submit', function(e) {
    e.preventDefault();
    username = document.getElementById('username').value;
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    showQuestion();
});

// Génération d'une question
function generateQuestions() {
    return [
        { question: "Quel est le masque de sous-réseau pour un réseau /24 ?", answer: "255.255.255.0" },
        { question: "Quel est l'adresse IP de diffusion d'un réseau 192.168.1.0/24 ?", answer: "192.168.1.255" },
        { question: "Combien d'hôtes un réseau /30 peut-il avoir ?", answer: "2" },
        // Ajoutez d'autres questions ici...
    ];
}

// Afficher la question actuelle
function showQuestion() {
    if (currentQuestionIndex < totalQuestions) {
        document.getElementById('question').textContent = questions[currentQuestionIndex].question;
    } else {
        endQuiz();
    }
}

// Vérification de la réponse et mise à jour du score
document.getElementById('submit-answer').addEventListener('click', function() {
    const userAnswer = document.getElementById('answer').value;
    const correctAnswer = questions[currentQuestionIndex].answer;

    userResponses.push({ question: questions[currentQuestionIndex].question, userAnswer: userAnswer, correctAnswer: correctAnswer });

    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    document.getElementById('answer').value = '';
    showQuestion();
});

// Fin du quiz
function endQuiz() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
    document.getElementById('score').textContent = `Score final: ${score}/${totalQuestions}`;
    let responseList = "";
    userResponses.forEach(response => {
        responseList += `<p>${response.question}<br>Votre réponse: ${response.userAnswer}<br>Bonne réponse: ${response.correctAnswer}</p>`;
    });
    document.getElementById('responses').innerHTML = responseList;

    saveResult();
}

// Fonction pour sauvegarder le résultat
function saveResult() {
    let data = JSON.parse(localStorage.getItem('quizResults')) || [];
    data.push({ username: username, score: score, responses: userResponses });
    localStorage.setItem('quizResults', JSON.stringify(data));
}
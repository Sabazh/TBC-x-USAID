let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');
const slider = document.querySelector('.slider');
const bullets = document.querySelectorAll('.bullet');
const answers = document.querySelectorAll('.answer');
var arrowElement = document.querySelector('.question-arrow')

let currentIndex = 0;

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

function updateSlider() {
    const newTransformValue = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + newTransformValue + ')';
    updateBulletStates();
}

function updateBulletStates() {
    bullets.forEach((bullet, index) => {
        bullet.classList.toggle('active', index === currentIndex);
    });
}

function changeSlide(index) {
    currentIndex = index;
    updateSlider();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % bullets.length;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + bullets.length) % bullets.length;
    updateSlider();
}
setInterval(nextSlide, 5000);


answers.forEach(answer => {
    answer.style.display = 'none';
});

function toggleAnswer(questionNumber) {
    var answerElement = document.getElementById('answer' + questionNumber);
    answerElement.style.display = (answerElement.style.display === 'block') ? 'none' : 'block';
    arrowElement.style.transform = (answerElement.style.display === 'block') ? 'rotate(180deg)' : 'rotate(0deg)';
    for (var i = 1; i <= 3; i++) {
        if (i !== questionNumber) {
            document.getElementById('answer' + i).style.display = 'none';
        }
    }
}

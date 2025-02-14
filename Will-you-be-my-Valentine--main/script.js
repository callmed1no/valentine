const messages = [
    "beneran gamau?",
    "bener nihh??",
    "pikirin lagi dehh?",
    "ayolahh...",
    "sumpahh kamu harus pikirin lagi!",
    "kamu jawab gamau,aku sedih sih...",
    "pokoknya bakal sedih banget...",
    "sedih banget banget banget...",
    "huh, yasudah kalau gamau jawab...",
    "pi boong, aku cuma bercanda hehe ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
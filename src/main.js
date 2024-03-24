let activeWordIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const words = Array.from(document.querySelectorAll('#circle-text .word'));
    setupClickableWords(words);
    setupNavigationButtons(words);
    updateInterfaceForWord(words[0].dataset.word, words);
});

function setupClickableWords(words) {
    words.forEach((wordElement, index) => {
        wordElement.addEventListener('click', () => {
            activeWordIndex = index;
            const word = wordElement.dataset.word;
            updateInterfaceForWord(word, words);
        });
    });
}

function setupNavigationButtons(words) {
    const prevButton = document.querySelector('.slider-icon-prev').closest('button');
    const nextButton = document.querySelector('.slider-icon-next').closest('button');

    prevButton.addEventListener('click', () => navigate(-1, words));
    nextButton.addEventListener('click', () => navigate(1, words));
}

function navigate(direction, words) {
    activeWordIndex = (activeWordIndex + direction + words.length) % words.length;
    const newWord = words[activeWordIndex].dataset.word;
    updateInterfaceForWord(newWord, words);
    
}

function updateInterfaceForWord(word, words) {
    updateMainImagesDisplay(word);
    updateMainTitle(word);
    updateActiveWord(word, words);
    updateAdditionalImagesDisplay(word);
    updateColors(word);
}

function updateActiveWord(word, words) {
    words.forEach(wordElement => {
        if (wordElement.dataset.word === word) {
            wordElement.classList.add('active-word');
            wordElement.classList.add('active'); 
        } else {
            wordElement.classList.remove('active-word');
            wordElement.classList.remove('active');
        }
    });
}



function updateMainImagesDisplay(word) {
    document.querySelectorAll('.main_image_item .mainImage').forEach(img => {
        img.style.display = img.dataset.word === word ? 'block' : 'none';
    });
}

function updateMainTitle(word) {
    const mainTitle = document.querySelector('.main_title'); 
    if (!mainTitle) return;
    let titleText = `Чімі з ${word.toLowerCase()} присипкою`; // Загальний випадок
    switch(word) {
        case "Кокос":
            titleText = "Чімі з кокосовою присипкою";
            break;
        case "Кориця":
            titleText = "Чімі з присипкою кориця";
            break;
        case "Горіх":
            titleText = "Чімі з горіховою присипкою";
            break;
        case "Цукор":
            titleText = "Чімі з цукровою присипкою";
            break;
        case "Вафля":
            titleText = "Чімі з вафельною присипкою";
            break;
        case "Орео":
            titleText = "Чімі з присипкою орео";
            break;
        case "Нонпарель":
            titleText = "Чімі з присипкою нонпарель";
            break;
        case "Печиво":
            titleText = "Чімі з присипкою печиво";
            break;
    }
    mainTitle.textContent = titleText;
}




function updateAdditionalImagesDisplay(word) {
    const imagesContainerId = imagesContainerIdMapping[word];
    const imagesContainer = document.getElementById(imagesContainerId);
    if (imagesContainer) {
        document.querySelectorAll('.additional-images').forEach(container => {
            container.classList.add('hidden');
        });
        imagesContainer.classList.remove('hidden');
    }
}

const imagesContainerIdMapping = {
    "Кокос": "coconutImages",
    "Кориця": "cinnamonImages",
    "Горіх": "nutImages",
    "Цукор": "sugarImages",
    "Вафля": "waffleImages",
    "Орео": "oreoImages",
    "Нонпарель": "nonparelImages",
    "Печиво": "cookieImages",
};

function updateColors(word) {
    console.log(`Спроба оновлення кольорів для слова: ${word}`); // Перевірка виклику функції

    const colors = wordToColors[word];
    if (colors) {
        console.log(`Кольори знайдено: bg = ${colors.bg}, circle = ${colors.circle}`); // Перевірка знайдених кольорів

        const root = document.documentElement;
        root.style.setProperty('--current-bg', `var(${colors.bg})`);
        root.style.setProperty('--current-circle', `var(${colors.circle})`);

        console.log('Кольори оновлено'); // Підтвердження оновлення
    } else {
        console.error(`Кольори для слова "${word}" не знайдено.`);
    }
}

const wordToColors = {
    "Кокос": { bg: "--coconut-bg", circle: "--coconut-circle" },
    "Кориця": { bg: "--cinnamon-bg", circle: "--cinnamon-circle" },
    
    "Горіх": {bg: "--nut-bg", circle: "--nut-circle"},
    "Цукор": { bg: "--sugar-bg", circle: "--sugar-circle" },
    
    "Вафля": {bg: "--waffle-bg", circle: "--waffle-circle"},
    "Орео": { bg: "--oreo-bg", circle: "--oreo-circle" },
    
    "Нонпарель": {bg: "--nonparel-bg", circle: "--nonparel-circle"},
    "Печиво": {bg: "--cookie-bg", circle: "--cookie-circle"},
};

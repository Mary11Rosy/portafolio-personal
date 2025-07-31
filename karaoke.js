function playSong(file) {
    const audio = new Audio(file);
    audio.play();
}

function showLyrics(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error('Error al cargar la letra:', error);
        });
}

let isLyricsVisible = false;

function showLyrics() {
    const lyricsDisplay = document.getElementById('lyricsDisplay');
    const lyrics = `
    You're so well-spoken, have control when
You walk into the room, you show them
You're outside smokin', your skin is glowin'
You're like an angel, out of this world
I love your confidence you strike
`;

    if (!isLyricsVisible) {
        lyricsDisplay.innerText = lyrics;
    } else {
        lyricsDisplay.innerText = '';
    }
    
    isLyricsVisible = !isLyricsVisible; // Cambia el estado de visibilidad
}


function playSong(file) {
    const audio = new Audio(file);
    audio.play();
}

function toggleLyrics(element) {
    const lyricsDisplay = element.nextElementSibling; // Obtiene el div de letras

    // Alterna la visibilidad del div de letras
    if (lyricsDisplay.style.display === "none" || lyricsDisplay.style.display === "") {
        lyricsDisplay.style.display = "block"; // Muestra las letras
    } else {
        lyricsDisplay.style.display = "none"; // Oculta las letras
    }
}

function playSong(file) {
    const audio = new Audio(file);
    audio.play();
}

function toggleLyrics(button) {
    const lyricsDisplay = button.nextElementSibling; // Obtiene el div de letras correspondiente

    // Alterna la visibilidad del div de letras
    if (lyricsDisplay.style.display === "none" || lyricsDisplay.style.display === "") {
        lyricsDisplay.style.display = "block"; // Muestra las letras
    } else {
        lyricsDisplay.style.display = "none"; // Oculta las letras
    }
}

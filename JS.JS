
document.addEventListener("DOMContentLoaded", () => {
    
    
    const form = document.getElementById("contact-form");
    const response = document.getElementById("response");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 

            const name = document.getElementById("name").value;
            response.textContent = `¡Gracias, ${name}! Tu mensaje ha sido enviado.`;
            form.reset();
        });
    }
    const hobbyItems = document.querySelectorAll(".hobby-item");
    const phraseDisplay = document.getElementById("phrase-display");

    if (hobbyItems.length > 0 && phraseDisplay) {
        hobbyItems.forEach(item => {
            item.addEventListener("click", () => {
                const phrase = item.getAttribute("data-phrase");
                phraseDisplay.textContent = phrase;
            });
        });
    }

});

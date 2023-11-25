document.addEventListener("DOMContentLoaded", function () {
    const lyrics = [
        "Kissing, I hope they caught us",
        "Whether they like or not",
        "I wanna show you off",
        "I wanna show you off",
        "I wanna brag about it",
        "I wanna tie the knot",
        "I wanna show you off"

    ];

    const delay = 33; 
    const lyricsElement = document.getElementById("lyrics");

    async function displayLyrics() {
        for (const line of lyrics) {
            for (const char of line) {
                lyricsElement.textContent += char;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }

            lyricsElement.innerHTML += "<br>";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));

            lyricsElement.innerHTML = "";

            await new Promise((resolve) => setTimeout(resolve, delay * 10));
        }
    }

    displayLyrics();
});



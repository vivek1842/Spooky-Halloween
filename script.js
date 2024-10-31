// Function to fetch real-time weather
async function fetchWeather() {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=auto:ip`);
        const data = await response.json();
        document.getElementById('weather-data').innerText = `It's currently ${data.current.temp_c}°C and ${data.current.condition.text}`;
    } catch (error) {
        document.getElementById('weather-data').innerText = 'Weather data unavailable.';
        console.error("Error fetching weather:", error);
    }
}

// Function to fetch a random Halloween trivia
async function fetchTrivia() {
    try {
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        const data = await response.json();
        document.getElementById('trivia-data').innerText = data.text;
    } catch (error) {
        document.getElementById('trivia-data').innerText = 'No trivia available.';
        console.error("Error fetching trivia:", error);
    }
}

// Spooky sound effect
const spookySound = new Audio('https://www.myinstants.com/media/sounds/creepy-noise.mp3');
document.getElementById('spooky-sound-btn').addEventListener('click', () => {
    spookySound.play();
    spookySound.loop = true;
});

// Initial function calls
fetchWeather();
fetchTrivia();

const jokeButton = document.getElementById("generate-joke");
const jokeText = document.getElementById("joke");

const getJoke = async () => {
  try {
    // Fetching joke from JokeAPI
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single');
    const data = await response.json();

    // If there's a joke, update the UI
    if (data.joke) {
      jokeText.textContent = data.joke;
    } else {
      jokeText.textContent = "Sorry, couldn't find a joke. Try again!";
    }
  } catch (error) {
    jokeText.textContent = "life il Joker-aga irukum unnaku?Joke Etharku? ";
  }
};

jokeButton.addEventListener("click", getJoke);

// Initial joke load
getJoke();

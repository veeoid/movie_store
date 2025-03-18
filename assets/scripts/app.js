const startAddMovieButton = document.querySelector("header button");
const addMovieModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");

const modalActions = addMovieModal.querySelector(".modal__actions");
const cancelAddMovieButton = modalActions.children[0];
const confirmAddMovieButton = modalActions.children[1];

const userInputs = addMovieModal.querySelectorAll("input");

const movieList = document.getElementById("movie-list");

const movies = [];

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = "";
  }
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const backDropClickHandler = () => {
  toggleBackdrop();
};

const cancelAddMovie = () => {
  toggleMovieModal();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if (
    !titleValue.trim() ||
    !imageValue.trim() ||
    !ratingValue.trim() ||
    parseInt(ratingValue) < 1 ||
    parseInt(ratingValue) > 5
  ) {
    alert("Invalid Input");
  }
  const newMovie = {
    title: titleValue,
    image: imageValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", cancelAddMovie);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
confirmAddMovieButton.addEventListener("click", addMovieHandler);

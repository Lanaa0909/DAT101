"use strict";

const VehicleBrands = [
  { id: 101, name: "Aston Martin" },
  { id: 102, name: "Bentley" },
  { id: 103, name: "Alfa Romeo" },
  { id: 104, name: "Ferrari" },
  { id: 105, name: "Subaru" },
  { id: 106, name: "Porsche" },
  { id: 107, name: "Tesla" },
  { id: 108, name: "Toyota" },
  { id: 109, name: "Renault" },
  { id: 110, name: "Peugeot" },
  { id: 111, name: "Suzuki" },
  { id: 112, name: "Mitsubishi" },
  { id: 113, name: "Nissan" },
];

const FemaleNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const FilmCategories = [
  "Action", "Adventure", "Animation", "Biography", "Comedy", "Crime",
  "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "History",
  "Horror", "Music", "Musical", "Mystery", "Romance", "Sci-Fi",
  "Short", "Sport", "Superhero", "Thriller", "War", "Western"
];


document.addEventListener('DOMContentLoaded', () => {
  const calculateButton = document.querySelector('#cmbTask1Calculate');
  calculateButton?.addEventListener('click', () => {
    const height = parseFloat(document.querySelector('#txtRectHeight').value);
    const width = parseFloat(document.querySelector('#txtRectWidth').value);
    const output = document.querySelector('#txtTask1Output');
    
    const circumference = (height + width) * 2;
    const surfaceArea = height * width;
    
    output.innerHTML = `Omkrets: ${circumference} &nbsp; Areal: ${surfaceArea}`;
  });

  
  let wordCollection = [];
  const wordInput = document.querySelector('#txtTask2Word');
  const wordOutput = document.querySelector('#txtTask2Output');

  wordInput?.addEventListener('keyup', (e) => {
    if (e.key !== 'Enter') return;
    
    const newWords = wordInput.value.trim().split(/\s+/);
    wordCollection = [...wordCollection, ...newWords];
    wordInput.value = '';
    
    wordOutput.innerHTML = `Number of words: ${wordCollection.length}<br>${wordCollection.join(' ')}`;
  });

  
  const checkAnswerBtn = document.querySelector('#cmbTask3CheckAnswer');
  const checkOutput = document.querySelector('#txtTask3Output');
  
  checkAnswerBtn?.addEventListener('click', () => {
    const selectedBoxes = Array.from(document.querySelectorAll('input[name="chkTask3"]:checked'));
    const result = selectedBoxes.map(box => 
      `Du har valgt nummer ${box.value}.<br />`
    ).join('');
    
    checkOutput.innerHTML = result;
  });

  const carContainer = document.querySelector('#divTask4Cars');
  const carOutput = document.querySelector('#txtTask4Output');

  if (carContainer) {
    const carHTML = VehicleBrands.map(({ id, name }) => `
      <div>
        <input type="radio" id="vehicle${id}" name="radioCar" value="${id}">
        <label for="vehicle${id}">${name}</label>
        <br>
      </div>
    `).join('');
    
    carContainer.innerHTML = carHTML;
    
    carContainer.addEventListener('change', (e) => {
      if (e.target.type === 'radio') {
        const selectedVehicle = VehicleBrands.find(car => car.id == e.target.value);
        carOutput.innerHTML = `Cool! you have chosen a: ${selectedVehicle.name}`;
      }
    });
  }

  
  const animalSelect = document.querySelector('#selectTask5Animals');
  const animalOutput = document.querySelector('#txtTask5Output');

  animalSelect?.addEventListener('change', () => {
    const selected = animalSelect.options[animalSelect.selectedIndex];
    animalOutput.innerHTML = `You have chosen: ${selected.text}`;
  });

 
  const nameSelect = document.querySelector('#selectTask6Girls');
  const nameOutput = document.querySelector('#txtTask6Output');

  if (nameSelect) {
    nameSelect.innerHTML = FemaleNames.map(name => 
      `<option value="${name}">${name}</option>`
    ).join('');

    nameSelect.addEventListener('change', () => {
      nameOutput.innerHTML = `You have summoned: ${nameSelect.value}`;
    });
  }

  
  const movieForm = {
    genre: document.querySelector('#selectMovieGenre'),
    addButton: document.querySelector('#cmbAddMovie'),
    table: document.querySelector('#tblMovies tbody')
  };

  if (movieForm.genre) {
    movieForm.genre.innerHTML = FilmCategories.map(genre =>
      `<option value="${genre}">${genre}</option>`
    ).join('');
  }

  movieForm.addButton?.addEventListener('click', () => {
    const movieData = {
      title: document.querySelector('#txtMovieTitle').value.trim(),
      genre: movieForm.genre.value,
      director: document.querySelector('#txtMovieDirector').value.trim(),
      rating: document.querySelector('#txtMovieRate').value.trim()
    };

    if (!Object.values(movieData).every(Boolean)) {
      alert("Please fill in all fields.");
      return;
    }

    const row = movieForm.table.insertRow();
    row.innerHTML = `
      <td>${movieForm.table.rows.length + 1}</td>
      <td>${movieData.title}</td>
      <td>${movieData.genre}</td>
      <td>${movieData.director}</td>
      <td>${movieData.rating}</td>
    `;

    
    document.querySelector('#txtMovieTitle').value = '';
    document.querySelector('#txtMovieDirector').value = '';
    document.querySelector('#txtMovieRate').value = '5';
  });
});
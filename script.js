const APILINK = "http://www.omdbapi.com/?i=tt3896198&apikey=de6eb54d";
const SEARCHAPI = "http://www.omdbapi.com/?s=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

function returnMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      if (data.Search) {
        console.log(data.Search);
        let currentRow = null;

        data.Search.forEach((element, index) => {
          if (index % 5 === 0) {
            currentRow = document.createElement("div");
            currentRow.setAttribute("class", "row");
            main.appendChild(currentRow);
          }

          const div_column = document.createElement("div");
          div_column.setAttribute("class", "column");
          const div_card = document.createElement("div");
          div_card.setAttribute("class", "card");
          const image = document.createElement("img");
          image.setAttribute("class", "thumbnail");
          image.setAttribute("id", "image");
          const title = document.createElement("h3");
          title.setAttribute("id", "title");

          title.innerHTML = `${element.Title}`;
          image.src = element.Poster;

          div_card.appendChild(image);
          div_card.appendChild(title);
          div_column.appendChild(div_card);
          currentRow.appendChild(div_column);
        });
      } else if (data.Title) {
      }
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem + "&apikey=de6eb54d");
    search.value = "";
  }
});

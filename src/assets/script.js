const petsData = [
    {
      name: "Purrsloud",
      species: "Cat",
      favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
      birthYear: 2016,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      name: "Barksalot",
      species: "Dog",
      birthYear: 2008,
      photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      name: "Meowsalot",
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2012,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
  ];
  
  
  
  $( document ).ready(function() {
    var data;
    $.get('books.json', function(d) {
      data = JSON.parse(d);
    });
    console.log(data);
    document.getElementById("app").innerHTML = `
    <h1 class="app-title">Pets (${petsData.length} results)</h1>
    <p><strong>Pet Name:</strong> ${petsData[0].name}`;
  });
  
  
  
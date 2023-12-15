const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];
function search(str) {
  str.toLocaleLowerCase();
  let results = [];
  // iterate thru array to see if it contains string
  fruits.forEach((fruit) => {
    // handle to lowercase
    if (fruit.toLocaleLowerCase().includes(str.toLocaleLowerCase())) {
      // push to the results
      //   check if array does not have that result yet
      //   limit num of display with 10
      if (!results.includes(fruit) && str !== "" && results.length < 10) {
        results.push(fruit);
      }
    }
  });

  // iterate thru array to
  // clear suggestions li whenever a new key
  suggestions.innerHTML = "";
  //   call showSuggestions
  showSuggestions(results, str);
  return results;
}

function searchHandler(e) {
  // get the value fro the search bar
  let inputValue = e.target.value;

  // call search
  search(inputValue);
}

function showSuggestions(results, inputVal) {
  //   iterate thru array and show on screen
  results.forEach((result) => {
    suggestions.innerHTML += `
	<li>${result}</li>
	`;
  });
}

function useSuggestion(e) {
  // TODO
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);

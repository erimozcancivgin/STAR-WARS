import { UI } from "./ui.js";
import { Request } from "./request.js";
const ui = new UI();
const request = new Request();



// const aside = document.querySelector(".aside-body")

// Setup module
// ------------------------------


const swapi = (function () {
  const asideBody = document.querySelector(".js-home-worlds")
  const asideButton = document.querySelector(".js-aside-button")
  const asideWrapper = document.querySelector(".js-aside-wrapper")
  const containerBody = document.querySelector(".js-container-body")
  const containerCard = document.querySelector(".js-container")
  const filter = document.querySelector(".js-search-input")
  // Setup module components
  //


  const _eventListeners = function () {
    asideButton.addEventListener("click", _toggleSideMenu)
    filter.addEventListener("keyup", _filterCharacters)


  }
  const _filterCharacters = function (e) {
    const filterValue = e.target.value.toLowerCase()
    const listItems = document.querySelectorAll(".js-characters")
    listItems.forEach(function (listItem) {
      const text = listItem.textContent.toLowerCase()
      if (text.indexOf(filterValue) === -1) {
        listItem.setAttribute("style", "display : none")
      }
      else {
        listItem.setAttribute("style", "display : block")
      }
    })
  }


  const _toggleSideMenu = function () {

    if (asideWrapper.classList.contains('active')) {
      asideWrapper.classList.remove("active")
    }
    else {
      asideWrapper.classList.add("active")
    }
    _blurBackground()
  }

  const _blurBackground = function () {
    if (asideWrapper.classList.contains('active')) {
      containerCard.classList.add("passive")
    }

    else {
      containerCard.classList.remove("passive")
    }

  }

  // Hover Effect
  const _getPlanets = function () {
    request.get("http://localhost:3000/homeWorlds").then((results) => {

      ui.setPlanetsUI(results, asideBody);


    })
  };
  const _getCharacters = function () {
    request.get("http://localhost:3000/results").then((results) => {
      ui.setCharactersUI(results, containerBody)
    })
  }


  //
  // Return objects assigned to module
  //

  return {
    init: function () {
      _eventListeners()
      _getPlanets();
      _getCharacters();
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  swapi.init();
});

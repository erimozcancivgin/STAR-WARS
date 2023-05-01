export class UI {

  setPlanetsUI(homeWorlds, aside) {
    homeWorlds.forEach(homeWorld => {
      aside.innerHTML +=
        `<li class="home-names">
      ${homeWorld.worldName}
  </li>`
    });
  }
  setCharactersUI(character, containerBody) {
    character.forEach(results => {
      containerBody.innerHTML +=
        `<li class="characters js-characters"> 
        <span class="character-name"> ${results.name} </span> 
        <span> Height: ${results.height}</span> 
        <span> Mass: ${results.mass}</span> 
        <span> Hair Color: ${results.hair_color}</span> 
        <span> Skin Color: ${results.skin_color}</span> 
        <span> Eye Color: ${results.eye_color}</span> 
        <span> Birth Year: ${results.birth_year}</span> 
        <span> Gender: ${results.gender}</span> 
        <span> Homeworld: ${results.homeworld}</span>
        </li>
        `
      if (character === 1) {
        containerBody.style.display == 'flex'
      }
    })
  }


}



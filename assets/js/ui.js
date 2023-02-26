export class UI {

  setTodo(element, item) {
    element.innerHTML = ""
    item.forEach(item => {
      element.innerHTML += `
    <ul>
    <li>${item.first_name}</li>
    <li>${item.last_name}</li>
    <li>${item.age}</li>
    <li>${item.gender}</li>
    <li>
        <button type="button"> delete</button>
        <button type="button"> update</button>
    </li>
</ul>`
    });



  }
}
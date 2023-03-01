export class UI {

  setTodo(element, item) {
    element.html("")
    item.forEach(item => {
      element.append(`
                  <ul>
                  <li data-first-name="${item.first_name}">${item.first_name}</li>
                  <li data-last-name="${item.last_name}">${item.last_name}</li>
                  <li data-age="${item.age}">${item.age}</li>
                  <li data-gender="${item.gender}">${item.gender}</li>
                  <li>
                      <button type="button" data-id="${item.id}" class="js-remove-todo"> delete</button>
                      <button type="button" data-id="${item.id}" class = "js-update-todo"> update</button>
                  </li>
              </ul>`
      )
    });
  }
  resetNewTodoModalUI(){
    $('[name="first_name"]').val("")
    $('[name="last_name"]').val("")
    $('[name="age"]').val("")
    $('[name="gender"]').val("")
    $(".js-add-todo-modal").removeClass("active")


  }



}
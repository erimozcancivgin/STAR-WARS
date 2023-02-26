import { UI } from "./ui.js";
import { Request } from "./request.js";
const request = new Request();
const ui = new UI();

// Setup module
// ------------------------------

const ecommerceBasic = (function () {
  const addTodoModalTrigger = document.querySelector(".js-add-todo-button");
  const newTodoModal = document.querySelector(".js-add-todo-modal")
  const addNewTodo = document.querySelector(".js-new-todo")
  const listBody = document.querySelector(".js-list-body")
  //
  // Setup module components
  //

  // Hover Effect
  const _eventListeners = function () {
    addTodoModalTrigger.addEventListener("click", _triggerNewTodoModal)
    newTodoModal.addEventListener("click", _closeNewTodoModal)
    addNewTodo.addEventListener("submit", _addNewTodoFromModal)


  };

  const _triggerNewTodoModal = function () {
    newTodoModal.classList.add("active")

  }
  const _closeNewTodoModal = function (e) {
    console.log(e.target.classList.contains(".js-add-todo-modal"));
    if (e.target === this) {
      newTodoModal.classList.remove("active")
    }
  }
  const _addNewTodoFromModal = function (e) {
    e.preventDefault()
    request.delete("http://localhost:3000/todoList/2").then((data) => {
      console.log(data);
    })
    let formValues = {}
    // const newTodoForm = this
    // formValues.first_name = newTodoForm.querySelector('[name="first_name"]').value
    // formValues.last_name = newTodoForm.querySelector('[name="last_name"]').value
    // formValues.age = newTodoForm.querySelector('[name="age"]').value
    // formValues.gender = newTodoForm.querySelector('[name="gender"]').value
    if (formValues.first_name && formValues.last_name && formValues.age && formValues.gender) {
    }

  }
  const _getTodos = function () {
    request.get("http://localhost:3000/todoList").then((data) => {
      ui.setTodo(listBody, data)
      
    })

  }

  //
  // Return objects assigned to module
  //

  return {
    init: function () {
      _eventListeners();
      console.log(request);
      _getTodos()
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  ecommerceBasic.init();
});

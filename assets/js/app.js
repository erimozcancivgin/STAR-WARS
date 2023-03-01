import { UI } from "./ui.js";
const ui = new UI();

// Setup module
// ------------------------------

const ecommerceBasic = (function () {
  const url = "http://localhost:3000/todoList/"
  //
  // Setup module components
  //

  // Hover Effect
  const _eventListeners = function () {
    $(document).on("click", ".js-add-todo-button", _triggerNewTodoModal)
    $(document).on("click", ".js-add-todo-modal", _closeNewTodoModal)
    $(document).on("submit", ".js-new-todo", _addNewTodoFromModal)
    $(document).on("click", ".js-remove-todo", _removeTodoFromList)
    $(document).on("click", ".js-update-todo", _editTodoFromList)
    $(document).on('keydown', function (event) {
      if (event.key == "Escape" || event.key == 27) {
        $(".js-add-todo-modal").removeClass("active")
          ;
      }
    });

  };
  const _removeTodoFromList = function () {
    console.log("asdgy"); $.ajax({
      url: url + $(this).attr("data-id"),
      type: "DELETE",
      dataType: "json",
      success: function (data) {
        _getTodos()
      }
    });
  }

  const _editTodoFromList = function () {
    const firstName = $(this).closest("ul").find("[data-first-name]")
    const lastName = $(this).closest("ul").find("[data-last-name]")
    const age = $(this).closest("ul").find("[data-age]")
    const gender = $(this).closest("ul").find("[data-gender]")
    console.log(firstName.attr("data-first-name"));

    $(".js-new-todo").attr("data-id", $(this).attr("data-id"))
    $('[name="first_name"]').val(firstName.attr("data-first-name"))
    $('[name="last_name"]').val(lastName.attr("data-last-name"))
    $('[name="age"]').val(age.attr("data-age"))
    $('[name="gender"]').val(gender.attr("data-gender"))
    $(".js-add-todo-modal").addClass("active")
    $(".js-add-new-todo").addClass("update")
  }


  const _triggerNewTodoModal = function () {
    $(".js-add-todo-modal").addClass("active")
    $(".js-add-new-todo").removeClass("update")
  }

  const _closeNewTodoModal = function (e) {
    if (e.target === this) {
      $(".js-add-todo-modal").removeClass("active")
    }
  }

  const _addNewTodoFromModal = function (e) {
    e.preventDefault()

    let formValues = {}
    formValues.first_name = $(this).find('[name="first_name"]').val()
    formValues.last_name = $(this).find('[name="last_name"]').val()
    formValues.age = $(this).find('[name="age"]').val()
    formValues.gender = $(this).find('[name="gender"]').val()
    if (formValues.first_name && formValues.last_name && formValues.age && formValues.gender) {
      if ($(".js-add-new-todo").hasClass("update")) {
        $.ajax({
          url: url + $(this).attr("data-id"),
          type: "PUT",
          data: formValues,
          dataType: "json",
          success: function (data) {
            _getTodos()
          }
        });
      }
      else {
        $.ajax({
          url: url,
          type: "POST",
          data: formValues,
          dataType: "json",
          success: function (data) {
            _getTodos()
          }
        });
      }

    }

  }


  const _getTodos = function () {
    // $.get(URL,callback)
    ui.resetNewTodoModalUI()
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json",
      success: function (data) {
        ui.setTodo($(".js-list-body"), data);
      }
    });
  }

  //
  // Return objects assigned to module
  //

  return {
    init: function () {
      _eventListeners();
      _getTodos()
    },
  };
})();

// Initialize module
// ------------------------------

document.addEventListener("DOMContentLoaded", function () {
  ecommerceBasic.init();
});

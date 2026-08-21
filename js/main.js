(function () {
  const form = document.getElementById("add-form");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");
  const emptyMessage = document.getElementById("empty-message");
  const formHint = document.getElementById("form-hint");

  function updateEmptyState() {
    const hasItems = list.children.length > 0;
    emptyMessage.hidden = hasItems;
  }

  function hideHint() {
    formHint.hidden = true;
  }

  function showHint() {
    formHint.hidden = false;
  }

  function addTodo(text) {
    const item = document.createElement("li");
    item.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-check";
    checkbox.setAttribute("aria-label", "완료 표시");

    const label = document.createElement("span");
    label.className = "todo-text";
    label.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "todo-delete";
    deleteButton.textContent = "삭제";

    checkbox.addEventListener("change", function () {
      item.classList.toggle("is-completed", checkbox.checked);
    });

    deleteButton.addEventListener("click", function () {
      item.remove();
      updateEmptyState();
    });

    item.appendChild(checkbox);
    item.appendChild(label);
    item.appendChild(deleteButton);
    list.appendChild(item);
    updateEmptyState();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = input.value.trim();
    if (!text) {
      showHint();
      input.focus();
      return;
    }

    hideHint();
    addTodo(text);
    input.value = "";
    input.focus();
  });

  input.addEventListener("input", hideHint);

  updateEmptyState();
})();

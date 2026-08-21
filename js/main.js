(function () {
  const STORAGE_KEY = "todo-app-items";

  const form = document.getElementById("add-form");
  const input = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");
  const emptyMessage = document.getElementById("empty-message");
  const formHint = document.getElementById("form-hint");

  let todos = loadTodos();

  function loadTodos() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return [];
      }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        return [];
      }
      return parsed
        .filter(function (item) {
          return item && typeof item.text === "string";
        })
        .map(function (item) {
          return {
            id: item.id || String(Date.now()) + Math.random().toString(16).slice(2),
            text: item.text,
            completed: Boolean(item.completed),
          };
        });
    } catch (error) {
      return [];
    }
  }

  function saveTodos() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }

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

  function createTodoElement(todo) {
    const item = document.createElement("li");
    item.className = "todo-item";
    if (todo.completed) {
      item.classList.add("is-completed");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-check";
    checkbox.checked = todo.completed;
    checkbox.setAttribute("aria-label", "완료 표시");

    const label = document.createElement("span");
    label.className = "todo-text";
    label.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "todo-delete";
    deleteButton.textContent = "삭제";

    checkbox.addEventListener("change", function () {
      todo.completed = checkbox.checked;
      item.classList.toggle("is-completed", checkbox.checked);
      saveTodos();
    });

    deleteButton.addEventListener("click", function () {
      todos = todos.filter(function (entry) {
        return entry.id !== todo.id;
      });
      item.remove();
      saveTodos();
      updateEmptyState();
    });

    item.appendChild(checkbox);
    item.appendChild(label);
    item.appendChild(deleteButton);
    return item;
  }

  function renderTodos() {
    list.innerHTML = "";
    todos.forEach(function (todo) {
      list.appendChild(createTodoElement(todo));
    });
    updateEmptyState();
  }

  function addTodo(text) {
    const todo = {
      id: String(Date.now()) + Math.random().toString(16).slice(2),
      text: text,
      completed: false,
    };
    todos.push(todo);
    list.appendChild(createTodoElement(todo));
    saveTodos();
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

  renderTodos();
})();

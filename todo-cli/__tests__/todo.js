const todoList = require("../todo");
const todos = todoList();

describe("TodoList Test Suite", () => {
    beforeAll(() => {
        const testTodo = {
            title: "Test Todo",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA"),
        };
        todos.add(testTodo);
    });

    test("Should add a new Todo", () => {
        const initialTodoCount = todos.all.length;
        todos.add({
            title: "Test Todo",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA"),
        });

        expect(todos.all.length).toBe(initialTodoCount + 1);
    });

    test("Mark a todo as complete", () => {
        todos.add({
            title: "Overdue Todo",
            completed: false,
            dueDate: new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString("en-CA"),
        });

        expect(todos.overdue().length).toBe(todos.all.length + 1);
    });

    test("List of todos due today", () => {
        const initialDueTodayCount = todos.dueToday().length;
        todos.add({
            title: "dueToday Todo",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA"),
        });

        expect(todos.dueToday().length).toBe(initialDueTodayCount + 1);
    });

    test("List of todos due later", () => {
        const initialDueLaterCount = todos.dueLater().length;
        todos.add({
            title: "UnderDue Todo",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA"),
        });

        expect(todos.dueLater().length).toBe(initialDueLaterCount + 1);
    });
});

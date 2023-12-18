@@ -1,60 +1,60 @@
/* eslint-disable space-in-parens */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable padded-blocks */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add } = todoList();

describe("todoList", () => {
const todos = todoList();

describe("TodoList Test Suite", () => {
    beforeAll(() => {
        const today = new Date();
        const oneDay = 60 * 60 * 24 * 1000; //referred to discord forum for this line of code
        add({
            title: "Test todo",
        todos.add({
            title: "Test Todo",
            completed: false,
            dueDate: new Date(today.getTime() - 1 * oneDay).toLocaleDateString(
                "en-CA"
            ),
            dueDate: new Date().toLocaleDateString("en-CA"),
        });
        add({
            title: "Test todo2",
    });
    test("Should add new Todo", () => {
        const todoItemsCount = todos.all.length;
        todos.add({
            title: "Test Todo",
            completed: false,
            dueDate: new Date(today.getTime() + 1 * oneDay).toLocaleDateString(
                "en-CA"
            ),
            dueDate: new Date().toLocaleDateString("en-CA"),
        });
        add({
            title: "Test todo3",
        expect(todos.all.length).toBe(todoItemsCount + 1);
    });
    test("todo as complete", () => {
        expect(todos.all[0].completed).toBe(false);
        todos.markAsComplete(0);
        expect(todos.all[0].completed).toBe(true);
    });
    test("list of overdue todos", () => {
        const l = todos.overdue().length;
        todos.add({
            title: "Overdue Todo",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA"),
            dueDate: new Date(
                new Date().setDate(new Date().getDate() - 1),
            ).toLocaleDateString("en-CA"),
        });
        expect(todos.overdue().length).toBe(l + 1);
    });
    test("Should add new todo", () => {
        const todoItemsCount = all.length;
        add({
            title: "Test todo",

    test("list of todos due today", () => {
        const l = todos.dueToday().length;
        todos.add({
            title: "dueToday Todo",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA"),
        });
        expect(all.length).toBe(todoItemsCount + 1);
    });
    test(" todo as complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
        expect(todos.dueToday().length).toBe(l + 1);
    });

    test(" list of overdue todos", () => {
        expect(todoList().overdue()).toEqual([]);
    });
    test(" list of todos due today", () => {
        expect(todoList().dueToday()).toEqual([]);
    });
    test(" list of todos due later", () => {
        expect(todoList().dueLater()).toEqual([]);
    test("list of todos due later", () => {
        const l = todos.dueLater.length;
        todos.add({
            title: "UnderDue Todo",
            completed: false,
            dueDate: new Date(
                new Date().setDate(new Date().getDate() + 1),
            ).toLocaleDateString("en-CA"),
        });
        expect(todos.dueLater().length).toBe(l + 1);
    });
});

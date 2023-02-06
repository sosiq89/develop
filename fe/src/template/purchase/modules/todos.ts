import React, { useState} from "react";
import styled from "styled-components";
import { combineReducers } from "redux";
import { ActionType, createAction, createReducer } from "typesafe-actions";

export type Todo = {
    id: number;
    text: string;
    done: boolean;
}

export type TodosState = Todo[];

const ADDTODO = 'todo/ADDTODO';
const DELETETODO = 'todo/DELETETODO';
let nextId = 1;

export const addTodo = createAction(ADDTODO, (text:string) => ({
    id: nextId++,
    text: text,
}))<Todo>();

export const deleteTodo = createAction(DELETETODO)<number>();

const actions = { addTodo, deleteTodo };
type TodosAction = ActionType<typeof actions>;

const initialState: TodosState = [];

const todos = createReducer<TodosState, TodosAction>(initialState, {
    [ADDTODO]: (state, action) =>
        state.concat({
            ...action.payload,
            done: false,
        }),

    [DELETETODO]: (state, {payload: id}) => state.filter((todo) => todo.id !== id),
});

export default todos;
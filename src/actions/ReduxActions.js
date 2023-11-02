import * as types from '../constants/PostTypes';

export const addPost = (title, content) => ({
    type: types.ADD_TEST,
    title,
    content
});

export const editPost = (id) => ({
    type: types.EDIT_TEST,
    id
});

export const updatePost = (id, newTitle, newContent) => ({
    type: types.UPDATE_TEST,
    id,
    newTitle,
    newContent
});

export const deletePost = (id) => ({
    type: types.DELETE_TEST,
    id: id
});

import { ADD_TEST, EDIT_TEST, UPDATE_TEST, DELETE_TEST } from '../constants/PostTypes';

const postReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TEST:
            return [
                {
                    id: (state.length === 0) ? 0 : state[0].id + 1,
                    title: action.title,
                    content: action.content,
                    editing: false
                },
                ...state
            ];

        case DELETE_TEST:
            return state.filter((post) => post.id !== action.id);

        case EDIT_TEST:
            return state.map((post) => post.id === action.id
                ? { ...post, editing: !post.editing }
                : post);

        case UPDATE_TEST:
            return state.map((post) => {
                if (post.id === action.id) {
                    return {
                        ...post,
                        title: action.newTitle,
                        content: action.newContent,
                        editing: !post.editing
                    }
                } else {
                    return post;
                }
            });
            
        default: 
            return state;
    }
}

export default postReducer;

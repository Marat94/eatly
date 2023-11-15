import { combineReducers } from 'redux';
import users from './users';
import category from './category';
import hero from './hero'
import dish from './dish'

export default combineReducers({
    users,
    category,
    hero,
    dish
});
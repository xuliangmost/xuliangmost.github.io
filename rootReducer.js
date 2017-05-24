import {combineReducers} from 'redux';
import user from '../conference/src/reducers/user';
import conference from '../conference/src/reducers/conference';
import addMeeting from '../conference/src/reducers/addMeeting'
import loginReducer from '../reducer/login-reducer'
const rootReducer = combineReducers({
  user,
  conference,
  addMeeting,
  loginReducer
});
export default rootReducer;

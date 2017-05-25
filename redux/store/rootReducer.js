import {combineReducers} from 'redux';
import user from '../conference/src/reducers/user';
import conference from '../conference/src/reducers/conference';
import addMeeting from '../conference/src/reducers/addMeeting'
import login from '../login/LoginReducer'
const rootReducer = combineReducers({
  login,
  user,
  conference,
  addMeeting,
});
export default rootReducer;

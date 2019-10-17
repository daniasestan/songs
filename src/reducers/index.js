import { combineReducers } from "redux";

const songsReducer = () => {
   return [
       { title: "Don't Stop Believin'", duration: '4:11'},
       { title: "C.R.E.A.M.", duration: '4:01'},
       { title: "Amber", duration: '3:29'},
       { title: "Wanna Be a Baller", duration: '5:56'}
   ] 
 };

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    
    return selectedSong;
};


export default combineReducers({
   songs: songsReducer,
   selectedSong: selectedSongReducer 
});
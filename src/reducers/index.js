import { combineReducers } from 'redux';

export const songsReducer = () => {
	return [
		{
			title: 'Gold', 
			duration: '3:45',
		},
		{
			title: 'Dissolve',
			duration: '3:56',
		},
		{
			title: 'Sweet Hibiscus Tea',
			duration: '2:50',
		},
		{
			title: 'Outlaw Baby',
			duration: '3:50',
		},
	];
};

export const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});

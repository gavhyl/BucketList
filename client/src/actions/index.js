//Action Cnstant Names
const SELECT_BAND = 'SELECT_BAND';

export function selectBand(band){
	console.log('you have selected:', band.name);
	return {
		type: SELECT_BAND,
		payload: band
	};
}

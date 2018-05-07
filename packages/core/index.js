import 'react';
import 'react-redux';
import 'redux-saga';


const wukong = function(){
	const hola = function(){
		console.info('hola, I am wukong!');
	}
	return {
		hola
	}
}

export default wukong();

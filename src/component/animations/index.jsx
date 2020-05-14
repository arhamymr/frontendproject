import anime from 'animejs/lib/anime.es.js';


export const animationMenu =  () => {
	anime({
		targets: '.menu',
		duration: 1000,
		keyframes: [
			{translateX: 100}],
	})
}

// cursor 
export const animateExpandCursor = (expand) => {
	anime({
		targets: '.cursor',
		duration: 1000,
		scale: expand,
		borderRadius: "50%"
	})
}

export const customCursor = () => {
	const cursor = document.querySelector('.cursor');
	const link = document.querySelectorAll('a');

	document.addEventListener('mousemove', (e) => {
		cursor.style.top = `${e.pageY - (cursor.clientHeight/2)}px`;
		cursor.style.left = `${e.pageX - (cursor.clientWidth/2)}px`;
	})

	link.forEach( item => {
		item.addEventListener('mouseover', () => {
		animateExpandCursor(5)
		})
		item.addEventListener('mouseout', () => {
			animateExpandCursor(1)
		})

	})
}

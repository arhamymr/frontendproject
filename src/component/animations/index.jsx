import anime from 'animejs/lib/anime.es.js';
import gsap from "gsap"

// cursor 

export const animateExpandCursor = (expand, left) => {
	gsap.to(".cursor",.1, { scale: expand })
	gsap.to(".dot", .1, { left: left - 200 })
}


const mousemove = (top, left) => {
	gsap.to(".cursor", 1, {top, left})
	gsap.to(".dot", 1.1, {top, left})
}


export const customCursor = () => {
	const cursor = document.querySelector('.cursor');
	const link = document.querySelectorAll('a');
	const expand = document.querySelectorAll('.expand')
	const linkmerge = [ ...link, ...expand ]
	let top = 0
	let left = 0
	
	document.addEventListener("click", () => {
		const tl = gsap.timeline()
		tl.to(".dot", .2, {scale: 20, opacity: 0})
		tl.fromTo(".dot",.2, {opacity: 0, scale: 20},{scale: 1, opacity: 1})
	})
	document.addEventListener('mousemove', (e) => {
		top = `${e.pageY - (cursor.clientHeight/2)}px`;
		left = `${e.pageX - (cursor.clientWidth/2)}px`;
		mousemove(top, left)
	})

	linkmerge.forEach( item => {
		item.addEventListener('mouseover', () => {
		animateExpandCursor(5, left)
		})
		item.addEventListener('mouseout', () => {
			animateExpandCursor(1, left)
		})

	})
}

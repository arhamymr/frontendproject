import anime from 'animejs/lib/anime.es.js';
import gsap from "gsap"
import MouseSpeed from "./speed"

// cursor 
export const animateExpandCursor = (expand, left) => {
	gsap.to(".cursor",.1, { scale: expand })
	gsap.to(".dot", .1, { left: left - 200 })
}


const getAngle = (cursor, e) => {
	let boxCenter=[
		cursor.offsetLeft+cursor.clientWidth/2,
		cursor.offsetTop+cursor.clientHeight/2];
	let angle = Math.atan2(e.pageX - boxCenter[0], - (e.pageY - boxCenter[1]) )*(180/Math.PI);      
	return angle
}

const mouse = new MouseSpeed()
mouse.init()

function mousemove(top, left, cursor,e){
	gsap.fromTo(".cursor", 1, {rotate: `${getAngle(cursor, e)}deg`, width: `${25 - mouse.distance}px`},{width: "25px", top, left})
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
		tl.to(".dot", .1, {scale: 20, opacity: 0})
		tl.to(".dot",.1, {opacity: .5})
		tl.to(".dot", .1, {scale: 1, opacity: 1})
	})
	document.addEventListener('mousemove', (e) => {
		top = `${e.pageY - (cursor.clientHeight/2)}px`;
		left = `${e.pageX - (cursor.clientWidth/2)}px`;
		mousemove(top, left, cursor, e)
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

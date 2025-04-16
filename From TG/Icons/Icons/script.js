let select = s => document.querySelector(s),
  selectAll = s =>  document.querySelectorAll(s),
		mainSVG = select('#mainSVG'),
		bg = select('#bg'),
		allIconButtons = gsap.utils.toArray('.icon'),
		allRects = gsap.utils.toArray('.icon rect'),
		allIcons = gsap.utils.toArray('.icon path'),
		colorArr = [
			{bg: '#FFCC02', accent:'#F6BB02'},
			{bg: '#22CC88', accent:'#21B77A'},
			{bg: '#0099FF', accent:'#018AE6'},
			{bg: '#FF3366', accent:'#C0284D'},
			{bg: '#8849D4', accent:'#6F2DBD'},
		]

gsap.set('svg', {
	visibility: 'visible'
})
gsap.set(allIcons, {
	transformOrigin: '50% 50%'
})
gsap.from(allIconButtons, {
	delay: 0.5,
	duration: 0.75,	
	transformOrigin: '50% 50%',
	scale: 0,
	stagger: {
		each: 0.04
	},
	ease: 'elastic(0.4, 0.4)'
})
function clickIcon (e) {

	let tl = gsap.timeline({
		defaults: {
			ease: 'elastic(0.4, 0.4)'
		}
	});	
	
	let iconId = Number(e.currentTarget.getAttribute('data-iconId'));

	//you didn't click an icon
	if(iconId === -1) {
		tl.to('body', {
			backgroundColor:'#b3b3b3'
		})
		.to(allIcons, {
			fill:'#b3b3b3',
			scale: 1,
			x: 0
		}, 0)
		.to(allIconButtons, {
			x: 0
		}, 0)
	.to(allRects, {
			attr: {
				width: 50
			},
			fill: '#FFF',
			x: 0
		}, 0)	
	.to('#bg', {
		fill: '#b3b3b3'
	}, 0)		
		
		return
	}

	let rect = e.currentTarget.querySelector('rect');
	let icon = e.currentTarget.querySelector('path');

	tl.to(allIconButtons, {
		x: (i) => {
			return (i <= iconId) ? 0 : 50
		}
	})
	.to(allRects, {
		attr: {
			width: (i) => {
				return (i === iconId) ? 100 : 50
			}
		},
		fill: (i) => {
			return (i === iconId) ? colorArr[iconId].accent : '#FFF'
		}		
	}, 0)
	.to(allIcons, {
		x: (i) => {
			return (i === iconId) ? 25 : 0
		},
		fill: (i) => {
			return (i === iconId) ? '#FFF' : '#b3b3b3'
		},
		scale: (i) => {
			return (i === iconId) ? 1.35 : 1
		}
	}, 0)
	.to('body', {
		backgroundColor: colorArr[iconId].bg
	}, 0)
	.to('#bg', {
		fill: colorArr[iconId].bg
	}, 0)

}

allIconButtons.forEach((target, i) => {
	target.setAttribute('data-iconId', i);
	target.addEventListener('click', clickIcon)
})
bg.setAttribute('data-iconId', -1);
bg.addEventListener('click',clickIcon)
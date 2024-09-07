// window.addEventListener('scroll',function(){
// 	let left =document.querySelector('.left')
// 	let right =document.querySelector('.right')
// 	left.style.left=scrollY+"px"
// 	left.style.top=scrollY+"px"
// 	right.style.right=scrollY+"px"
// 	right.style.top=scrollY+"px"
// 	// console.log(scrollY)
// })


// // document.addEventListener('DOMContentLoaded',()=>{
// 	// document.querySelector('prompt').innerHTML=prompt('siapa namamu?')
// // })
// document.getElementById('modalButton').addEventListener('click',()=>{
// 	document.getElementById('modal').classList.toggle('modal')
// })
// function rumus(age,bb) {
// 	// let zScore = (age / 2 + 4) ;
// 	// let bbi = bb - zScore
// 	// return bbi 
// 	// if (bbi <= 2) {return "kurus"} else { return "normal"}
// 	// let bbi = (bb +9)/2
// 	// let zScore = bb - bbi
// 	let bbi = ((age/12)*2)+5.63
// 	let zScore =bb - bbi
// 	return zScore
// }
// function bbPeru(age,bb) {
// 	let bbi = (age/2)+3.77
// 	let zScore = bb - bbi
// 	return zScore
// }
// // function bbPerT(bb,tb) {
// // 	let zScore= (tb-100) - ((tb-100)*(10/100))
// // 	let bbi = bb - zScore
// // 	// if (bbi <= 2) {return "kurus"}
// // 		return zScore
// // }
// // function bmi(bb,tb) {
// // 	// let conv = tb / 100
// // 	let quad = tb **2
// // 	let bmi = bb / quad
// // 	let zScore = bb-bmi
// // 		// if (zScore <= 2) {return "kurus"}
// // 	// return "normal"
// // 	return zScore
// // }

// // console.log(rumus(57,12.8))
// console.log(bbPeru(10, 8.9))
// // console.log(bmi(12,0.834))


// let slideshow = document.querySelectorAll('.slides')
// // console.log(slideshow)
// slideshow.forEach(slide=>console.log(slide))




// __________________________________________________________________________________
// membuat slideshow:
// 1. ambil object dan looping
// 2. berikan class pada object (1.left 2.middle 3.right)
// 3. ubah class pada object


const items = document.querySelectorAll('.carousel-item');

function slide() {
	const left = document.querySelector('.left')
	const mid = document.querySelector('.mid')
	const right = document.querySelector('.right')
	const hide = document.querySelector('.hide')
	left.className='carousel-item hide'
	hide.className='carousel-item right'
	right.className='carousel-item mid'
	mid.className='carousel-item left'	
}
const slideInterval = setInterval(slide,10000)
// items.addEventListener('mouseover').clearInterval(slideInterval)
// [...items].map((v,i,a)=>{
// 	a[i].style.border="3px solid black"
// })
// setInterval(()=>{
// 	let i =0;
// 	for (let x in items){
// 		i += x
// 	}
//     console.log(i)
// },5000)
// 	let i = 0
// let intervalId = setInterval(()=>{
// 	items[i].className='carousel-item mid';
// 	if (i === items.length - 1) {clearInterval(intervalId)}
// 		i++
// },3000)






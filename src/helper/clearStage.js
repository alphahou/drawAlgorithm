import draw from './draw.js'
const clearStage=()=>{
	draw(0,0,0,true)
	let pre=document.querySelector('#presentation')
	document.body.removeChild(pre)
	pre = document.createElement('div')
	pre.id='presentation'
	document.body.appendChild(pre)
}
export default clearStage
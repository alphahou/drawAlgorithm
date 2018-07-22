let cnt = 0

function draw(array, x = -1, y = -1, clear = false) {
	if(clear){
		cnt=0
		return
	}
	cnt++
    let presentation = document.querySelector('#presentation'),
        canvas = document.createElement('canvas'),
        count = document.createElement('div'),
        ctx = canvas.getContext('2d'),
        l = array.length,
        gap = 10,
        w = 7
    canvas.setAttribute('height', '200')
    canvas.setAttribute('width', '' + l * 10)
    canvas.style.display = 'block'
    canvas.style.margin = 'auto'
    count.innerText = cnt
    count.style.textAlign = 'center'
    for (let i = 0; i < l; i++) {
        if (i != x && i != y) {
            ctx.fillStyle = 'pink'
        } else {
            ctx.fillStyle = 'black'
        }
        ctx.fillRect(0 + gap * i, 200, w, -array[i] * 100)
    }
    presentation.appendChild(canvas)
    presentation.appendChild(count)
}

export default draw
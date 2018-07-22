import draw from './draw.js'
function exch(array,a,b){
			var temp=array[a]
			array[a]=array[b]
			array[b]=temp
			draw(array,a,b)
		}
export default exch
import draw from './draw'
function createRandArray(length){
			let array=[]
			while(length>0){
				array.push(Math.random())
				length--
			}
			draw(array)
			return array
		}
export default createRandArray
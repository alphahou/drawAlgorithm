import draw from '../helper/draw.js'

// This insert sort is dedicated for merge-sort
function insertSort(array, lo, hi) {
    let l = array.length,
        temp = 0
    for (let i = lo; i <= hi; i++) {
        temp = array[i]
        // the reason to use temp is that we never
        // insert untill it is bigger than some value
        // before it.
        for (let j = i; j > lo; j--) {
            // Here, we are looking for the first ordered
            if (temp < array[j - 1]) {
                array[j] = array[j - 1]
                draw(array, j)
                if (j == 1) {
                    array[0] = temp
                }
            } else if (temp > array[j - 1]) {
                array[j] = temp
                draw(array, i)
                break
            }
        }
    }
}
export default insertSort
import exch from '../helper/exch.js'
import draw from '../helper/draw.js'
import createRandArray from '../helper/randArray.js'
function sort(array) {
    let h = 1,
        l = array.length

    while (h < l / 3) {
        h = h * 3 + 1
    }
    while (h >= 1) {
        for (let i = h; i < l; i++) {
            for (let j = i; j >= h && (array[j] < array[j - h]); j -= h) {
                exch(array, j, j - h)
            }

        }
        h = Math.floor(h / 3)
    }
}
function main(len) {
    var arr = createRandArray(len)
    sort(arr, 0, len - 1)
    draw(arr)
}
export default main

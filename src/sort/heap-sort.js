import exch from '../helper/exch.js'
import draw from '../helper/draw.js'
import createRandArray from '../helper/randArray.js'

function sink(array, i, len) {

    while (2 * i + 1 <= len) {
        var j = 2 * i + 1
        if (j < len && array[j] < array[j + 1]) { //因为j成为子堆中较大的那个
            j++
        }
        if (array[j] < array[i]) { //所以这里只需要判断i是否大于j
            break
        }
        exch(array, i, j)
        i = j
    }
}

function sort(array) {
    var l = array.length - 1
    for (var i = Math.floor(l / 2); i > -1; i--) {
        sink(array, i, l)
    }
    while (l > 0) {
        exch(array, 0, l--)
        sink(array, 0, l)
    }
}

function main(len) {
    var arr = createRandArray(len)
    sort(arr)
    draw(arr)
}
export default main
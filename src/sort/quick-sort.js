import exch from '../helper/exch.js'
import draw from '../helper/draw.js'
import createRandArray from '../helper/randArray.js'
function largest(array) {
    let l = array.length,
        temp = array[0],
        index = 0
    for (let i = 1; i < l; i++) {
        if (array[i] > temp) {
            temp = array[i]
            index = i
        }
        if (index != (l - 1)) {
            exch(array, index, l - 1)
        }
    }
}
function partition(array, lo, hi) {
    let i = lo,
        j = hi + 1,
        v = array[lo]
    while (true) {
        while (array[++i] < v) {
        }
        // Since we pre deal with the array, we do not need to worry that i is larger than len
        while (array[--j] > v) {
        }
        if (i >= j) {
            break
        }
        exch(array, i, j)
    }
    exch(array, j, lo)
    return j
}
function sort(array, lo, hi) {
    if (hi <= lo) { //小于某个数值时可以使用插入排序
        return
    }
    let j = partition(array, lo, hi)
    sort(array, lo, j - 1)
    sort(array, j + 1, hi)
}

function main(len) {
    let arr = createRandArray(len)
    largest(arr) 
    // pre deal with the array, so we do not need to inspect if out of boundary
    sort(arr, 0, len - 1)
    draw(arr)
}
export default main

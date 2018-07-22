import exch from '../helper/exch.js'
import draw from '../helper/draw.js'
import createRandArray from '../helper/randArray.js'
import insertSort from './insertSort.js'
import merge from '../helper/merge.js'

// There is some bug with merge method
function sort(array, lo, hi) {
    if ((hi - lo) <= 8) {
        insertSort(array, lo, hi)
        return
    }
    let mid = Math.floor(lo + (hi - lo) / 2)
    sort(array, lo, mid)
    sort(array, mid + 1, hi)
    if (array[mid] <= array[mid + 1]) {
        return
    }
    merge(array, lo, mid, hi,[])
}


function main(len) {
    let arr = createRandArray(len)
    sort(arr, 0, len - 1)
}

export default main

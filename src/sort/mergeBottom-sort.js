import exch from '../helper/exch.js'
import draw from '../helper/draw.js'
import createRandArray from '../helper/randArray.js'
import insertSort from './insertSort.js'
import merge from '../helper/merge.js'
/*  
This algorithm will first divide the array into
small groups by given scale, and then use insert
sort to sort them. Since insert sort is very efficient
when the array is small, we need to keep divided groups
small. Then we merge them.
*/

function sort(array) {


    let l = array.length,
        smallInsert = 6,
        group = Math.floor(l / smallInsert),
        equal = l % smallInsert,
        start = 0,
        end = 0
    for (let i = 0; i < group; i++) {
        start = smallInsert * i
        end = start + smallInsert - 1
        insertSort(array, start, end)
    }
    if (equal) { // if equal, then there is some number not included in group
        insertSort(array, group * smallInsert, l - 1)
    }
    for (let sz = smallInsert; sz < l; sz += sz) {
        for (let lo = 0; lo < l - sz; lo += sz + sz) {
            if (array[lo + sz - 1] > array[lo + sz]) {
                // If this is true, then we need to merge, otherwise, it is already ordered.
                merge(array, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, l - 1), [])
            }
        }
    }
}


function main(len) {
    let arr = createRandArray(len)
    console.log(len)
    sort(arr, 0, len - 1)
}

export default main
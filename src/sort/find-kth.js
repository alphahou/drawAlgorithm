import exch from '../helper/exch.js'
import createRandArray from '../helper/randArray.js'

// This function takes an array and k as inputs,
// it will return the kth smallest value of the array.
// Through draw method, we can observe how many times
// it needs to find the kth value.

const findKth = (array, k) => {
	k--
	if(k>array.length){
		return null
	}
    function partition(array, lo, hi) {
        var i = lo,
            j = hi + 1,
            v = array[lo]
        while (true) {
            while (array[++i] < v) {
            }
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
    var lo = 0,
        hi = array.length - 1
    while (hi > lo) {
        var j = partition(array, lo, hi)
        if (j == k) {
            return array[k]
        }
        if (j < k) {
            lo = j + 1
        }
        if (j > k) {
            hi = j - 1
        }
    }
    return array[k]
}
function main(len, k) {
    let arr = createRandArray(len)
    return findKth(arr, k)
}
export default main


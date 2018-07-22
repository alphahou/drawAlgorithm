import exch from '../helper/exch.js'
import draw from '../helper/draw.js'
import createRandArray from '../helper/randArray.js'

function sort(array, lo, hi) {
    if (hi <= lo) {
        return
    }
    let i = lo + 1,
        lt = lo,
        v = array[lo], //这里的v最后会成为中间的重复段
        gt = hi
    while (i <= gt) {
        let current = array[i]
        if (current < v) {
            exch(array, i++, lt++) //这里相当于把中间重复段右移，i加入左边
        } else if (current > v) {
            exch(array, i, gt--)
        } else {
            i++
        }
    }
    sort(array, lo, lt - 1)
    sort(array, gt + 1, hi)
}

function main(len) {
    let arr = createRandArray(len)
    sort(arr, 0, len - 1)
    draw(arr)
}
export default main
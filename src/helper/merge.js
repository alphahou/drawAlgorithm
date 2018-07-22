import draw from './draw.js'

function merge(array, lo, mid, hi, copy) {
    let y = mid + 1,
        x = lo
    for (let i = lo; i <= hi; i++) {
        copy[i] = array[i]
    }
    for (let i = lo; i <= hi; i++) {
        if (x > mid) {
            array[i] = copy[y++]
        } else if (y > hi) {
            array[i] = copy[x++]
        } else if (copy[x] > copy[y]) {
            array[i] = copy[y++]
        } else {
            array[i] = copy[x++]
        }
        draw(array, i)
    }
}
export default merge
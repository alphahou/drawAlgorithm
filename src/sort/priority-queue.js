
import draw from '../helper/draw.js'
import createRandArray from '../helper/randArray.js'

class MaxPQ {
    constructor(max) {
        this.maxLen = max
        this.queue = []
        this.n = 0
    }
    insert(v) {
        this.queue[++this.n] = v
        this.swim(this.n)
    }
    delMax() {
        var max = this.queue[1]
        this.exch(1, this.n--)
        this.queue[this.n + 1] = null
        this.sink(1)
        return max
    }
    isEmpty() {
        return this.n == 0
    }
    size() {
        return this.n
    }
    exch(a, b) {
        draw(this.queue, a, b)
        var temp = this.queue[a]
        this.queue[a] = this.queue[b]
        this.queue[b] = temp
    }
    swim(n) {
        var x
        while (n > 1 && this.queue[n] > this.queue[x = Math.floor(n / 2)]) {
            this.exch(n, x)
            n = x
        }
    }
    sink(n) {
        while (2 * n <= this.n) {
            var j = 2 * n
            if (j < this.n && this.queue[j] < this.queue[j + 1]) {
                j++
            }
            if (this.queue[j] < this.queue[n]) {
                break
            }
            this.exch(j, n)
            n = j
        }
    }
}


function main(len) {
    let arr = createRandArray(len),
        max = 5,
        maxQue = [],
        pq = new MaxPQ(max)
    while (len) {
        pq.insert(arr[--len])
        if (pq.size() > max) {
            pq.delMax()
        }
    }
    while (!pq.isEmpty()) {
        maxQue.push(pq.delMax())
    }
    draw(maxQue)
}
export default main
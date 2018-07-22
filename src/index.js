import findKth from './sort/find-kth.js'
import heapSort from './sort/heap-sort.js'
import mergeBottom from './sort/mergeBottom-sort.js'
import mergeTop from './sort/mergeTop-sort.js'
import priorityQueue from './sort/priority-queue.js'
import quick3ways from './sort/quick-3ways.js'
import quickSort from './sort/quick-sort.js'
import shellSort from "./sort/shell's-sort.js"
import bst from './search/bst.js'
import rbt from './search/red-black-tree.js'
import clearStage from './helper/clearStage.js'

const select = document.querySelector('select')
let len = 20
const value=document.querySelector('#value')
const lenInput=document.querySelector('#len')
const method = select.value
const methods = {
    findKth,
    heapSort,
    mergeBottom,
    mergeTop,
    priorityQueue,
    quick3ways,
    quickSort,
    shellSort,
    bst,
    rbt
}


const switchMethod = e => {
    clearStage()
    methods[e.target.value](len, 5)
}

lenInput.addEventListener('input', e => {
    clearStage()
    len = lenInput.value
    value.innerHTML=len
    methods[select.value](len, 5)
})
select.addEventListener('change', switchMethod)
methods[method](len, 5)
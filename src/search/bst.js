
function drawNode(ctx, node, x, y, a, b) {
    let p = x > a ? 7 : -7
    ctx.beginPath()
    ctx.moveTo(a + p, b + 7)
    ctx.lineTo(x - p, y - 7)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(x, y, 10, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.font = "10px serif"
    ctx.fillText(node.key, x - 5, y + 3)
}
function draw1(ctx, node, x, y, a, b, n) {
    if (node == null) {
        return
    }
    let cell = 20
    if (n > 0) {
        cell = n * cell
    }
    n--
    draw1(ctx, node.left, x - cell, y + cell, x, y, n)
    drawNode(ctx, node, x, y, a, b)
    draw1(ctx, node.right, x + cell, y + cell, x, y, n)
}
function draw(bst) {
    let presentation = document.querySelector('#presentation'),
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        n = bst.size(bst.root),
        h = bst.height()
    canvas.setAttribute('height', '' + (h * 40+100))
    canvas.setAttribute('width', '' + 1000)
    canvas.style.display = 'block'
    canvas.style.margin = '100 auto'
    draw1(ctx, bst.root, 500, 10, 500 + 13, 10 - 13, 4)
    presentation.appendChild(canvas)
}
class Node {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.N = 1
        this.left = null
        this.right = null
    }
}
class BST {
    constructor(node) {
        this.root = node
    }
    size(n) {
        return n == null ? 0 : n.N
    }
    get(key) {
        return this.search(key, this.root)
    }
    search(key, node) {
        // if(node==null){
        // 	return null
        // }
        // if(n.key>key){
        // 	this.search(key,n.left)
        // }
        // else if(n.key<key){
        // 	this.search(key,n.right)
        // }
        // else {
        // 	return n.val
        // }
        while (node != null) {
            if (node.key > key) {
                node = node.left
            } else if (node.key < key) {
                node = node.right
            } else {
                return node.val
            }
        }
        return null
    }
    put(key, val) {
        this.root = this.putt(this.root, key, val)
    }
    putt(node, key, val) {
        if (node == null) {
            return new Node(key, val) //没有该节点
        }
        if (key > node.key) {
            node.right = this.putt(node.right, key, val)
        } else if (key < node.key) {
            node.left = this.putt(node.left, key, val)
        } else {
            node.val = val //有该节点，更新
        }
        node.N = this.size(node.left) + this.size(node.right) + 1 //返回后会执行这段代码，依次从新添加节点的根节点开始增加N
        return node
    }
    min() {
        return this.min1(this.root)
    }
    min1(node) {
        if (node.left != null) {
            return this.min1(node.left)
        }
        return node
    }
    select(k) {
        return this.select1(this.root, k).key
    }
    select1(node, k) {
        if (node == null) {
            return null
        }
        var t = this.size(node.left)
        if (k < t) {
            return this.select1(node.left, k)
        } else if (k > t) {
            return this.select1(node.right, k - t - 1)
        } else {
            return node
        }
    }
    rank(key) {
        return this.rank1(this.root, key)
    }
    rank1(node, key) {
        if (node == null) {
            return null
        }
        if (node.key > key) {
            return rank1(node.left, key)
        } else if (node.key < key) {
            return this.size(node.left) + 1 + this.rank1(node.right, key)
        } else {
            return this.size(node.left)
        }
    }
    floor(key) {
        let f = this.floor1(this.root, key)
        return f ? f.key : null
    }
    floor1(node, key) {
        if (node == null) {
            return null
        }
        let k = node.key
        if (key < k) {
            return this.floor1(node.left, key)
        } else if (key == k) {
            return node
        } else {
            let right = this.floor1(node.right, key)
            return right || node
        }
    }
    height() {
        return this.height1(this.root)
    }
    height1(node) {
        if (node == null) {
            return null
        }
        let left = this.height1(node.left)
        let right = this.height1(node.right)
        let h = left > right ? left + 1 : right + 1
        return h
    }
    delMin() {
        this.root = this.delMin1(this.root)
    }
    delMin1(node) {
        if (node.left == null) {
            return node.right
        }
        node.left = this.delMin1(node.left)
        node.N--
        return node
    }
    delete(key) {
        this.root = this.delete1(this.root, key)
    }
    delete1(node, key) {
        if (node == null) {
            return null
        }
        if (node.key > key) {
            node.left = this.delete1(node.left, key)
        } else if (node.key < key) {
            node.right = this.delete1(node.right, key)
        } else {
            if (node.left == null) {
                return node.right
            }
            if (node.right == null) {
                return node.left
            }
            let x = node
            node = this.min1(x.right)
            node.right = this.delMin1(x.right)
            node.left = x.left
        }
        node.N = this.size(node.right) + this.size(node.left) + 1
        return node
    }
    print() {
        this.print1(this.root)
    }
    print1(node) {
        if (node == null) {
            return
        }
        this.print1(node.left)
        console.log(node.key)
        this.print1(node.right)
    }

    keys(lo, hi) {
        let arr = []
        this.keys1(this.root, arr, lo, hi)
        return arr
    }
    keys1(node, arr, lo, hi) {
        if (node == null) {
            return
        }
        let key = node.key
        if (key < lo) {
            this.keys1(node.right, arr, lo, hi)
        }
        if (hi >= key && key >= lo) {
            arr.push(node.key)
        }
        if (key > hi) {
            this.keys1(node.left, arr, lo, hi)
        }
    }
}
function createRandomBst(len) {
    let root = new Node(Math.floor(Math.random() * 100), 'd')
    let bst = new BST(root)
    for (let i = 0; i < len; i++) {
        bst.put(Math.floor(Math.random() * 100), 'a')
    }
    return bst
}
function main(len) {
    let bst = createRandomBst(len-	1)
    draw(bst)
    bst.print()
}
export default main

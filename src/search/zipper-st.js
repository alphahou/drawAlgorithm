<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script>
		class Node{
			constructor(key,val,m,hash){
				this.val=val
				this.key=key
				this.next=null
				this.hash
			}
			get(key){
				if(key!=this.key&&this.next!=null){
					return this.next.get(key)
				}
				else {
					return null
				}
				return this.val
			}
		}
		class Zpst{
			constructor(m){
				this.st=[]
				this.M=m

			}
			put(key,val){
				var hash=this.hashCode(key)
				var node =new Node(key,val,this.M,hash)
				var place=this.st[hash]
				if(place==null){
					this.st[hash]=node
				}
				else {
					while(place.next!=null){
						place=place.next
					}
					place.next=node
				}
			}
			hashCode(key){
				var hash=key%this.M
				return hash
			}
			get(key){
				var index=this.hashCode(key)
				return this.st[index].get(key)
			}
			delete(key){
				var index=this.hashCode(key)
				var node=this.st[index]
				if(node.key==key){
					this.st[index]=node.next
				}
				else {
					while(node.next!=null&&node.next.key!=key){
					node=node.next
					}
					if(node.next!=null&&node.next.next!=null)
					node.next=node.next.next
				}

			}
		}
		var zpst=new Zpst(5)
		zpst.put(0,'a')
		zpst.put(5,'b')
		zpst.put(10,'c')
		zpst.delete(5)
		console.log(zpst.get(5))
	</script>
</body>
</html>
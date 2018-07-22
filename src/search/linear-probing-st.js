<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script>
		class Node{
			constructor(key,val){
				this.val=val
				this.key=key
				this.hash
			}
		}
		class Lpst{
			constructor(m){
				this.st=[]
				this.M=m

			}
			put(key,val){
				var hash=this.hashCode(key)
				var node =new Node(key,val)
				if(this.st[hash]==null){
					this.st[hash]=node
				}
				else {
					while(this.st[(++hash)%this.M]!=null){
					}
					this.st[hash]=node
				}
				this.st[hash].hash=hash
			}
			hashCode(key){
				var hash=key%this.M
				return hash
			}
			get(key){
				var index=this.hashCode(key)
				for(var i=index;this.st[i]!=null;i=(i+1)%this.M){
					if(this.st[i].key==key){
						return this.st[i].val
					}
				}
				return null
			}
			delete(key){
				var index=this.hashCode(key)
				while(this.st[index].key!=key){
					index=(index+1)%this.M
				}
				this.st[index]=null
				index=(index+1)%this.M
				while(this.st[index]!=null&&this.st[index].hash!=this.hashCode(this.st[index].key)){
					this.st[index-1]=this.st[index]
					this.st[index]=null
					index=(index+1)%this.M
				}
			}
		}
		var zpst=new Lpst(5)
		zpst.put(0,'a')
		zpst.put(5,'b')
		zpst.put(10,'c')
		zpst.delete(5)
		console.log(zpst.get(5))
	</script>
</body>
</html>
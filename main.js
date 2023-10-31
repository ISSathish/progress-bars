const progressbar=document.getElementById("bar")
const loadingmsg=document.getElementById("loading")
let barwidth=0;
const download=()=>{
	barwidth++;
	progressbar.style.width=`${barwidth}%`
	setTimeout(()=>{
		loadingmsg.innerHTML=(barwidth===100) ? `${barwidth}%completed` : `${barwidth}%progress`
	},1000)
}

setTimeout(()=>{
	let intervalId=setInterval(()=>{
		if(barwidth===100){
			clearInterval(intervalId)
		}
		else{
			download()
		}
	},100)
},2000)

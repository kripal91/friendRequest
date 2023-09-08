const btn=document.querySelector("button");
const popp= document.querySelector("h2");
var flag=0;
btn.addEventListener("click",function(){
    if(flag==0){
      popp.innerHTML="Friends";
      popp.style.color="green";
      btn.innerHTML="Remove Friend";
      flag=1;
    }
    else
    {
      popp.innerHTML="Stranger";
      popp.style.color="red";
      btn.innerHTML="Add Friend";
        flag=0;
    }
})
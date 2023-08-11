// alert("ffnf");

var querybtn=document.querySelector("#querybtn");
querybtn.onclick=()=>{
    // alert("q")
    var subject=document.querySelector("#subject");
    var topic=document.querySelector("#topic");
    if(subject.value!="" && topic.value!=""){

        addDiscussbox(subject.value,topic.value);
        subject.value="";
        topic.value="";
    }
    else{
        alert("something is empty!!")
    }
}
var discussbox=document.getElementById("discussbox");
function addDiscussbox(subjectval,topicval){
    // discussbox.innerHTML+=subject+" "+topic;
    var divbox=document.createElement("div");
    var h3=document.createElement("h3");
    var p=document.createElement("p");
    var hr=document.createElement("hr");
    h3.innerHTML=subjectval;
    p.innerHTML=topicval;
    divbox.appendChild(h3);
    divbox.appendChild(p);
    divbox.appendChild(hr);
    discussbox.appendChild(divbox);

}

discussbox.onclick=(event)=>{
    var parentdiv=event.target.parentElement;
    var childele=parentdiv.children;
    //alert(childele[0]);
    var titletext=childele[0].innerText;
    var myquerytext=childele[1].innerText;
    //alert(title+query);
    //showing query
    var title=document.getElementById("title");
    var myquery=document.getElementById("myquery");
    
    title.innerHTML=titletext;
    myquery.innerHTML=myquerytext;
    var querybox=document.getElementById("querybox");
    querybox.style.display="none";
    var responsebox=document.getElementById("responsebox");
    responsebox.style.display="block";

      


}
var resbtn=document.getElementById("resbtn");
resbtn.onclick=()=>{
    var addresponse=document.getElementById("addresponse");
    var resdiv=document.createElement("div");
    var h3=document.createElement("h3");
    var p=document.createElement("p");  
    var hr=document.createElement("hr");  
    var name=document.getElementById("writer").value;
    var writertext=document.getElementById("writertext").value;
     h3.innerHTML=name;
     p.innerHTML=writertext;
     resdiv.appendChild(h3);
     resdiv.appendChild(p);
     resdiv.appendChild(hr);
     addresponse.append(resdiv);
     addresponse.style.padding="10px";
     resdiv.style.padding="8px 5px";
    //  resdiv.style.margin="8px 2px";
     resdiv.style.backgroundColor="grey";
     document.getElementById("writer").value="";
     document.getElementById("writertext").value="";
}
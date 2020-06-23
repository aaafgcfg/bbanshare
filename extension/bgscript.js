
let serveraddresscurrent=null;

chrome.runtime.onMessage.addListener((msg,sendr)=>{
    let parsed=JSON.parse(msg);
    if(parsed.question!=null && parsed.answer!=null){
        if(serveraddresscurrent==null){
            alert("SERVER ADDRESS IS UNKNOWN. PLEASE SET IT.")  
		}else{
            // TODO: send  
		}
    }else if(parsed.addres!=null){
        serveraddresscurrent=parsed.addres;
        
	}
    //alert(msg);
}) 
/*

*/

let serveraddresscurrent=null;

chrome.runtime.onMessage.addListener((msg,sendr)=>{
    let parsed=JSON.parse(msg);
    if(parsed.question!=null && parsed.answer!=null){
        if(serveraddresscurrent==null || serveraddresscurrent==''){
            alert("SERVER ADDRESS IS UNKNOWN. PLEASE SET IT.")  
		}else{
            let promise = fetch(serveraddresscurrent, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(msg)
            })
		}
    }else if(parsed.addres!=null){
        serveraddresscurrent=parsed.addres;
	}
    //alert(msg);
}) 
/*

*/
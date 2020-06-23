
let serveraddresscurrent=null;

chrome.runtime.onMessage.addListener((msg,sendr)=>{
    let parsed=JSON.parse(msg);
    if(parsed.question!=null && parsed.answer!=null){
        
    }else if(parsed.addres!=null){
        serveraddresscurrent=parsed.addres;
        
	}
    alert(msg);
}) 
/*
sendr:
{
"id":"dbbhkgeamopnlakbhbkkopalkedhhnfc",
"url":"file:///C:/Users/Mishail/source/repos/Solution1/test/%D0%9F%D1%80%D0%BE%D0%B9%D1%82%D0%B8%20%D1%82%D0%B5%D1%81%D1%82_%20%D0%A2%D0%A2%D0%9A_3%20%E2%80%93%20%D0%98%D0%9D%D0%9E%D0%A1%D0%A2%D0%A0%D0%90%D0%9D%D0%9D%D0%AB%D0%99%20%D0%AF%D0%97%D0%AB%D0%9A_1%20%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80%20(%D0%B4%D0%BB%D1%8F%20....html",
"origin":"file://",
"frameId":0,
"tab":{
    "active":true,
    "audible":false,
    "autoDiscardable":true,
    "discarded":false,
    "favIconUrl":"https://bb.kai.ru:8443/ui/bb-icon2.ico",
    "height":663,
    "highlighted":true,
    "id":79,
    "incognito":false,
    "index":7,
    "mutedInfo":{"muted":false},
    "pinned":false,
    "selected":true,
    "status":"complete",
    "title":"Пройти тест: ТТК_3 – ИНОСТРАННЫЙ ЯЗЫК_1 семестр (для ...",
    "url":"file:///C:/Users/Mishail/source/repos/Solution1/test/%D0%9F%D1%80%D0%BE%D0%B9%D1%82%D0%B8%20%D1%82%D0%B5%D1%81%D1%82_%20%D0%A2%D0%A2%D0%9A_3%20%E2%80%93%20%D0%98%D0%9D%D0%9E%D0%A1%D0%A2%D0%A0%D0%90%D0%9D%D0%9D%D0%AB%D0%99%20%D0%AF%D0%97%D0%AB%D0%9A_1%20%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80%20(%D0%B4%D0%BB%D1%8F%20....html",
    "width":1366,
    "windowId":1}
}
*/
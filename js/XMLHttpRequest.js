function GET_XMLHTTPRequest()
{var request;try{request=new ActiveXObject("Microsoft.XMLHTTP");}catch(ex1){try{request=new ActiveXObject("Msxml2.XMLHTTP");}catch(ex2){request=null;}}
if(!request&&typeof XMLHttpRequest!="undefined"){request=new XMLHttpRequest();}
return request;}
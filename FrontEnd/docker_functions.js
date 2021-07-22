var HOST_IP = "192.168.43.243";
var filepath = "cgi-bin/docker-kubernetes-webapp/Docker-Functions/";
function Cont_Img_List()
{
    var filename = "cont_img_list";
    var url = "http://"+ HOST_IP  +"/" +filepath+filename;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send();
    var output = xhr.responseText;
    document.getElementById("onscreen_output").innerHTML=output;
}
function Launch_New_Cont()
{
    var filename = "launch_new_cont";
    var container_name = document.getElementsByName("new_container_name")[0].value;
    var container_image = document.getElementsByName("new_container_image")[0].value;
    var url = "http://" + HOST_IP + "/" + filepath + filename + "?" + "container_name=" + container_name + "&" + "container_image=" + container_image;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send();
    var output = xhr.responseText;
    document.getElementById("onscreen_output").innerHTML=output;
}
function Running_Cont_List()
{
    var filename = "running_cont_list";
    var url = "http://"+ HOST_IP  +"/" +filepath+filename;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send();
    var output = xhr.responseText;
    document.getElementById("onscreen_output").innerHTML=output;
}
function Stopped_Cont_List()
{
    var filename = "stopped_cont_list";
    var url = "http://"+ HOST_IP  +"/" +filepath+filename;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send();
    var output = xhr.responseText;
    document.getElementById("onscreen_output").innerHTML=output;
}
function Stop_Running_Cont()
{
    var filename = "stop_running_cont";
    container_name = document.getElementsByName("running_container_name")[0].value;
    var url = "http://" + HOST_IP + "/" + filepath + filename + "?" + "container_name=" + container_name;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send();
    var output = xhr.responseText;
    document.getElementById("onscreen_output").innerHTML=output;
}
function Remove_Cont()
{
    var filename = "remove_cont";
    container_name = document.getElementsByName("remove_container_name")[0].value;
    var url = "http://" + HOST_IP + "/" + filepath + filename + "?" + "container_name=" + container_name;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send();
    var output = xhr.responseText;
    document.getElementById("onscreen_output").innerHTML=output;
}
function Remove_Img()
{
    var filename = "remove_img";
    image_name = document.getElementsByName("remove_container_name")[0].value;
    var url = "http://" + HOST_IP + "/" + filepath + filename + "?" + "image_name=" + image_name;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send();
    var output = xhr.responseText;
    document.getElementById("onscreen_output").innerHTML=output;
}
function Remove_All_Cont()
{
    var filename = "remove_all_cont";
    var url = "http://"+ HOST_IP  +"/" +filepath+filename;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send();
    var output = xhr.responseText;
    document.getElementById("onscreen_output").innerHTML=output;
}
function Remove_All_Img()
{
    var filename = "remove_all_img";
    var url = "http://"+ HOST_IP  +"/" +filepath+filename;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send();
    var output = xhr.responseText;
    document.getElementById("onscreen_output").innerHTML=output;
}
function Exec_Command()
{
    var filename = "exec_command";
    container_name = document.getElementsByName("temp_container_name")[0].value;
    container_image = document.getElementsByName("temp_container_image")[0].value;
    command = document.getElementsByName("temp_container_command")[0].value;
    var url = "http://" + HOST_IP + "/" + filepath + filename + "?" + "container_name=" + container_name + "&" + "container_image=" + container_image + "&" + "command=" + command ;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send();
    var output = xhr.responseText;
    document.getElementById("onscreen_output").innerHTML=output;
}



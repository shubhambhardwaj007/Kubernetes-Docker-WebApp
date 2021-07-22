var HOST_IP = "192.168.43.243";
var filepath = "cgi-bin/docker-kubernetes-webapp/Kubernetes-Functions/";
function Active_Pod_List()
{
    var filename = "active_pod_list";
    var namespace_name = document.getElementsByName("namespace_name")[0].value;
    var url = "http://" + HOST_IP + "/" + filepath + filename + "?" + "namespace_name=" + namespace_name;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send();
    var output = xhr.responseText;
    document.getElementById("onscreen_output").innerHTML=output;
}
function Launch_New_Pod()
{
    var filename = "launch_new_pod";
    var pod_name = document.getElementsByName("new_pod_name")[0].value;
    var pod_image = document.getElementsByName("new_pod_image")[0].value;
    var pod_namespace = document.getElementsByName("new_pod_namespace")[0].value;
    var url = "http://" + HOST_IP + "/" + filepath + filename + "?" + "pod_name=" + pod_name + "&" + "pod_image=" + pod_image + "&" + "pod_namespace=" + pod_namespace;
    var xhr = new XMLHttpRequest();
    xhr.open("GET",url,false);
    xhr.send();
    var output = xhr.responseText;
    document.getElementById("onscreen_output").innerHTML=output;
}
function Stop_Running_Pod()
{
    var filename = "stop_running_cont";
    pod_name = document.getElementsByName("running_pod_name")[0].value;
    pod_namespace = document.getElementsByName("new_pod_namespace")[0].value;
    var url = "http://" + HOST_IP + "/" + filepath + filename + "?" + "pod_name=" + pod_name + "&" + "pod_namespace=" + pod_namespace;
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



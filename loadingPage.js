document.write(`
    <div id = "loading" style="position:fixed; top:0; left: 0; width:100vw; height:100vh; z-index:99999; background-color:black;">
        <h1 style="position:absolute; top:50%; left:50%; transform: translate(-50%,-50%); margin:0; color:white; font-family: 'Roboto', sans-serif; font-weight:bold; font-size:20vh;">Loading..</h1>
    </div>
`);
document.body.setAttribute("style", "margin:0;")
function removeLoading(){
    document.body.removeChild(document.getElementById('loading'));
}
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    removeLoading();
  }
}
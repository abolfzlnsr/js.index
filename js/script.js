function turnon(){
    document.getElementById('myimage').src='pic_bulbon.gif'
    document.getElementById('turnoff').style.display='block'
    document.getElementById('turnon').style.display='none'
}
function turnoff(){
    document.getElementById('myimage').src='pic_bulboff.gif'
    document.getElementById('turnoff').style.display='none'
    document.getElementById('turnon').style.display='block'
}
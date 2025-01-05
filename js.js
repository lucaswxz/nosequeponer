yesBtn.addEventListener("mouseover",function(){
    const randomX = parseInt(Math.random()*1000);
    const randomY = parseInt(Math.random()*1000);
    yesBtn.style.setProperty("top",randomY+"%");
    yesBtn.style.setProperty("left",randomX+"%");
    yesBtn.style.setProperty("transform",`translate(-${randomX}%,-${randomY}%)`);
})
noBtn.addEventListener("click", function(){
    alert("Lo lamento profundamente si mis palabras fueron hirientes, te prometo que voy a ser más consciente de mis palabras y que te trataré con el respeto que mereces. Me pareces una chica increíble , ojalá puedas perdonarme.");
})
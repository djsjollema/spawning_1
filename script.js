window.addEventListener("load",function(){ 
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    function animate(){
        //context.clearRect(0,0,800,800);
        window.requestAnimationFrame(animate);
        if(Math.random()<0.1){
            var temp = Object.create(Alien);
            temp.init();
            temp.x = Math.floor(Math.random()*800);
            temp.draw(context);
        }
    };
    animate();
})

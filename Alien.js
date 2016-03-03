var Alien = {
    self: this,
    x: 0,
    y: 0,
    src: "aliens.png",
    init: function () {
        this.x = Math.floor(Math.random() * 800);
        this.y = Math.floor(Math.random() * 800);
    },
    draw: function (context) {
        var img = new Image();
        img.src = this.src;

        img.addEventListener("load", function () {
            //self.x = Math.random() * 800;
            //self.y = Math.random() * 800;
            console.log(img, self.x, self.y);
            context.drawImage(img, self.x, self.y);
        })
    }
}
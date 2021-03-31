class Circl{
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    Render(){
        let ctx = document.getElementById("cavas").getContext("2d");
        let circl = new Circl(this.x, this.y, this.radius, this.color);
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(circl.x, circl.y, circl.radius, 0, 2 * Math.PI);
        ctx.fill()
    }
}
let circl = new Circl(10,10,100,"#000000" );
circl.Render()
// let c = document.getElementById("myCanvas");
// let ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();
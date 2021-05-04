
function randInt(from,to){
    return Math.round(from+Math.random()*(to-from))

}


let ball ={
// 4 properties
    size:100,
    color:"black",
    x: randInt(1,innerWidth-100),
    y:randInt(1,innerHeight-100),
    speedX:randInt(-15,15),
    speedY:randInt(-15,15),
    //methods
    render:function (){
        return `
        <div style= 
            "width:${this.size}px;
            height:${this.size}px;
            border-radius:${this.size}px;
            background-color:${this.color};
            position:absolute;
            left:${this.x}px;
            top:${this.y}px;" >
        </div>`
        
    },
    renderInside:function (container){
        container.innerHTML=this.render()
    },

    move: function(){
        if (this.x+this.size>=innerWidth || 
            this.x<=0){
            this.speedX*=-0.95 //reflect the speed
        }

        this.x+=this.speedX //increment x of this object 

        if (this.y+this.size>=innerHeight){
            this.speedY*=-0.6
        }
        if (this.y<=0)   {
            this.speedY*=-0.9 //reflect the speed
        }

        this.y+=this.speedY //increment x of this object 
    },

    animate: function(){
        // REMIND -'WHO IS THIS'
        let thisObject=this
        setInterval( function(){
             thisObject.move()
             thisObject.renderInside(container)
        },30 )
    }
}

ball.animate()



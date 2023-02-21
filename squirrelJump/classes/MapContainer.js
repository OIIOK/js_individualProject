class MapContainer extends GameObject{
    constructor(container, src, x, y, width, height, velX, velY){
        super(container, src, x, y, width, height, velX, velY) ;
    } 

        tick() {
            this.x += this.velX;
            this.y += this.velY;
            this.div.style.height = parseFloat(this.div.style.height)-this.velY+'px';
        }

}
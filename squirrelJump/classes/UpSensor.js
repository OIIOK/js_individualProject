class UpSensor extends Sensor {
    constructor(container, src, x, y, width, height, velX, velY) {
        super(container, src, x, y, width, height, velX, velY);
    }


    //충돌 감지하여 움직임 막기(=y축 위치 조정 통해)
    hitCheck() {
        for (let i = 0; i < standArray.length; i++) {
            if (collisionCheck(this, standArray[i])) {
                //닿으면 위쪽에서 2px 떨어지게함(=지나가지 못하게함)
                squirrel.y = (standArray[i].y + standArray[i].height + 2);
            }
        }
    }


    tick() {
        //센서 위치 조정
        this.x = squirrel.x + 8;
        this.y = squirrel.y + 8;

        //this.fall=false 점프로 올라갈 때는 충돌체크하지 않기
        if (squirrel.fall == false && squirrel.velY >= 0) {
            this.hitCheck();
        }
    }
}
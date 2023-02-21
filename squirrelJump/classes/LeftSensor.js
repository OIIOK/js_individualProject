class LeftSensor extends Sensor {
    constructor(container, src, x, y, width, height, velX, velY) {
        super(container, src, x, y, width, height, velX, velY);
    }


    //충돌 감지하여 움직임 막기(=x축 위치 조정 통해)
    hitCheck() {
        for (let i = 0; i< standArray.length; i++) {
            if (collisionCheck(this, standArray[i])) {
                //닿으면 왼쪽에서 2px 떨어지게함(지나가지 못하게함)
                squirrel.x = (standArray[i].x + standArray[i].width + 2);
            }
        }
    }


    tick() {
        //센서 위치 조정
        this.x = squirrel.x + 8;
        this.y = squirrel.y + 8;

        //조건 충족 시 충돌체크하기
        //this.fall=false 점프로 올라갈 때
        //squirrel.velY>=0 떨어질 때, 멈춰있을 때(해야지)
        //=> 상시 할 예정
        // if (squirrel.fall && squirrel.velY >= 0) {
        //     this.hitCheck();
        // }=> 부자연스러워서 체크하지 않기로 함
    }
}
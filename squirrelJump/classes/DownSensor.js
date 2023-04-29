class DownSensor extends Sensor {
    constructor(container, src, x, y, width, height, velX, velY) {
        super(container, src, x, y, width, height, velX, velY);
    }


    //충돌 감지하여 움직임 막기(=y축 위치 조정 통해)
    hitCheck() {
        for (let i = 0; i < standArray.length; i++) {
            let result = collisionCheck(this, standArray[i]);
            if (result && squirrel.fall) {  //닿았을 때, 점프로 올라갈 때
                startAction(STAND);
                squirrel.velY = 0;
                squirrel.fall = true;   //떨어질 때로 만들어 줌
                //닿으면 아래쪽에서 센서높이만큼 떨어지게함(=지나가지 못하게함)
                squirrel.y = (standArray[i].y - squirrel.height - this.height);
            }
        }
    }


    tick() {
        //센서 위치 조정
        this.x = squirrel.x + 8;
        this.y = squirrel.y + squirrel.height;

        //조건 충족 시 충돌체크하기
        //this.fall=false 점프로 올라갈 때
        //squirrel.velY>=0 떨어질 때, 멈춰있을 때(해야지)
        //=> 상시 할 예정
        if (squirrel.fall && squirrel.velY >= 0) {
            this.hitCheck();
        }
    }
}
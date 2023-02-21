//다람쥐 정의하기
class Squirrel extends GameObject {
    //보기 쉽기 위해 테두리 잠깐 주자
    constructor(container, src, x, y, width, height, velX, velY) {
        super(container, src, x, y, width, height, velX, velY)
        // this.div.style.border = "0.5px solid white";

        this.g = 0.35;    //가속도 주기 위한 중력값
        this.fall = true; //점프에 조건주기 위한 논리값

        //this.touch = false; //접촉에 조건주기 위한 논리값
        this.actionIndex0 = 0;
        this.actionIndex1 = 0;
        this.actionIndex2 = 0;
        this.actionIndex3 = 0;
        this.actionstop;
        this.actionFlag = false;
        this.actionType = STAND;

        this.actionArray = [
            ["squirrel(stand)-1.png", "squirrel(stand)-2.png", "squirrel(stand)-3.png", "squirrel(stand)-4.png"],
            ["squirrel(walk)-1.png", "squirrel(walk)-2.png", "squirrel(walk)-3.png", "squirrel(walk)-4.png"],
            ["squirrel(jump)-1.png", "squirrel(jump)-2.png", "squirrel(jump)-3.png", "squirrel(jump)-4.png"],
            ["squirrel(fall)-1.png", "squirrel(fall)-2.png", "squirrel(fall)-3.png", "squirrel(fall)-4.png", "squirrel(fall)-5.png", "squirrel(fall)-6.png"]
        ];
    }



    action() {
        if (this.actionFlag) {
            this.div.style.backgroundImage = "url(\"../images/squirrel/" + this.actionArray[this.actionType][this.actionIndex0] + "\")";
            this.actionIndex0++;
            if (this.actionIndex0 >= this.actionArray[this.actionType].length) {
                this.actionFlag = false;
                this.actionIndex0 = 0;
            }
            console.log(this.actionIndex0);
        }
        console.log("액션 대기중 ", this.actionType);
        this.actionstop = setTimeout(() => {
            this.action();
        }, 80);
    }

    tick() {
        //가속도 주기
        this.velY += this.g;





        //점프 조건문 정상화하기
        if (this.velY > 0) {
            this.fall = true;
            //jump() 함수에서 this.fall=true는 못 뛸 때(기본셋팅값) / false는 뛸 수 있을 때임
            //startAction(FALL);  
        }
            

        


        //아이템 접촉 확인하기
        for (let a = 0; a < itemArray.length; a++) {
            for (let i = 0; i < itemArray[a].length; i++) {
                let result = collisionCheck(this, itemArray[a][i]);//아이템 어딘가와 충돌했을때 true
                if (result) {
                    this.container.removeChild(itemArray[a][i].div);
                    if (a == 0) {// 충돌한 아이템이 사과라면
                        score += 1;
                    }
                    if (a == 1) {// 충돌한  아이템이 똥이라면
                        score -= 5;
                    }
                    if (a == 2) {// 충돌한  아이템이 도토리라면
                        score += 10;
                        alert("성공했어!!!   "+score +"일 치의 식량을 모았다!!!" );
                    }
                    itemArray[a].splice(i, 1);
                }
            }
        }


        this.x += this.velX;
        this.y += this.velY;
   
        //stage는 주인공과 반대방향으로 내린다 
        /*
        mapContainer.x-=this.velX;  
        mapContainer.y-=this.velY;
        mapContainer.render();
        console.log(this.velX);
        */


                //블럭에 올리기
        //블럭에 각각 물리력 주기 위해 sensor 클래스들로 조건문 옮김
        /*
        for (let j = 0; j < map.length; j++) {
            for (let i = 0; i < map[j].length; i++) {
                if (map[j][i] == 1 || map[j][i] == 2) {
                    let result = collisionCheck(this, blockArray[j][i]);
                    //console.log(result);

                    if (result && this.fall) {
                        this.velY = 0;
                        this.y = blockArray[j][i].y - this.height;
                    }
                }
            }
        }
        */

    }
}
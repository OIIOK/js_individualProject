//게임의 최상위 객체 정의하기
class GameObject{
    //생성자 메소드 선언
    constructor(container, src, x, y, width, height, velX, velY) {
        //멤버변수 선언
        this.container = container;
        this.src = src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = velX;
        this.velY = velY;

  
        //div 생성
        this.div = document.createElement("div");
        this.div.style.position = "absolute";
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height + "px";
        this.div.style.backgroundSize = "contain";
        this.container.appendChild(this.div);

        //src가 존재할 경우 이미지 생성
        if(this.src !="" || this.src.length<1 ){ 
            this.useImage();
        }
    }
    
    
    //이미지 생성 메소드 선언
    useImage(){
        this.div.style.backgroundImage = "url(\""+this.src+"\")";

    }
    

    //움직임 메소드 선언
    tick() {
        this.x += this.velX;
        this.y += this.velY;
    }


    //출력 메소드 선언
    render() {
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }
}
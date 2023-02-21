class Info {
    //생성자 메소드 선언
    constructor(container, x, y, width, height, target) {
        //멤버변수 선언
        this.container = container;
        this.x = x;
        this.y = y;
        this.widht = width;
        this.height = height;
        this.target = target;


        //div 생성
        this.p1 = document.createElement('p');
        this.p1.innerText = "오른 높이 : " + parseInt(((3100 - this.y) / (3100 - this.target)) * 100) + "%";
        this.p2 = document.createElement('p');
        this.p2.innerText = "모은 식량 : " + score + "일치";
        //this.p3 = document.createElement('p');
        //this.p3.innerText = "걸린시간" + score;

        this.div = document.createElement('div');
        this.div.style.position = 'absolute';
        this.div.style.left = this.x + 'px';
        this.div.style.top = this.y + 'px';
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.border = "2px solid red";
        this.div.style.backgroundColor = "white";
        this.div.style.borderRadius = 10 + "px";
        this.div.style.fontWeight = "bold";

        this.div.appendChild(this.p1);
        this.div.appendChild(this.p2);
        //this.div.appendChild(this.p3);
        this.container.appendChild(this.div);
    }

    tick(velY) {
        this.y = velY;
    }

    render() {
        this.div.style.top = this.y + 'px';
    }
    
    textUpdate() {
        this.p1.innerText = "오른 높이 : " + parseInt(((3100 - this.y) / (3100 - this.target)) * 100) + "%";
        this.p2.innerText = "모은 식량 : " + score + "일치";
    }
}
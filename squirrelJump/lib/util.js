// 랜덤값 계산 함수
// Math.random(); 0~1미만의 소수점들
function getRandom(n) {
    return parseInt(Math.random() * n);
}


// 범위가 있는 랜덤값 계산 함수
// 기본값이 0~/1니까
//5~7을 구하고 싶다면 앞에는 5, 뒤에는 3(-1+5=7)이 되어야 함
function getRandomWithRange(min, max) {
    var result = min + parseInt(Math.random() * (max - min + 1));
    return result;
}


//충돌체크 함수/(움직일 대상, 비교대상) (ex 총알, 적군)
function collisionCheck(me, you) {
    // 북서쪽 감지 : 
    // box1 x좌표 + width > box2 x좌표   &&  box1 y좌표 + height > box2 y좌표
    //console.log(you);
    //console.log(you.x);
    let result1 = (me.x + me.width) >= (you.x) && (me.y + me.height) >= (you.y); //원래 if문 안에 있었는데 길어서 빼줌

    // 북동쪽 감지 : 
    // box1 x좌표 < box2 x좌표 + width   &&   box1 y좌표 + height > box2 y좌표
    let result2 = (me.x) <= (you.x + you.width) && (me.y + me.height) >= (you.y);

    // 남서쪽 감지 :
    // box1 x좌표 + width > box2 x좌표   &&   box1 y좌표 < box2 y좌표 + height
    let result3 = (me.x + me.width) >= (you.x) && (me.y) <= (you.y + you.height);

    // 남동쪽 감지 : 
    // box1 x좌표 < box2 x좌표 width   &&   box1 y좌표 < box2 y좌표 + height
    let result4 = (me.x) <= (you.x + you.width) && (me.y) <= (you.y + you.height);

    return result1 && result2 && result3 && result4;
    //true인지 false인지 판단해서 결과값으로 가져감
}


//날짜를 두자리 수로 처리하는 함수(문자열 처리)
//n이 10보다 작으면, 앞에 '0' 문자열을 부착함
function getDateString(n) {
    let str = n;
    if (n < 10) {
        str = "0" + str;
    }
    return str;
}
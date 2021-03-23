function Shape(x, y) {
  this.name = 'Shape';
  this.move(x, y);
}

Shape.create = function (x, y) {
  return new Shape(x, y);
};

Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

Shape.prototype.area = function (x, y) {
  return 0;
};

var s = new Shape(0, 0);
s.area(); // 0이 나오겠지.

//////////////////////////// 변형 //////////////////////////////
class Shape {
  static create(x, y) {
    return new Shape(x, y);
  } // static 선언
  name = 'Shape';
  contructor(x, y) {
    // 내부 함수 move 호출
    this.move(x, y);
  }
  move(x, y) {
    // move 함수 생성
    this.x = x;
    tihs.y = y;
  }
  area() {
    // 내부함수 area 생성
    return 0;
  }
}
var s = new Shape(0, 0);
s.area(); // 0이 나오겠지.


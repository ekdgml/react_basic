// ���ø� ���ڿ� �����ϱ�
var cart = { nae: '����', price: 1500 };
var getTotal = function (cart) {
  return cart.price + '��';
};

var myCart = '��ٱ��Ͽ� ' + cart.name + '�� �ֽ��ϴ�. �� �ݾ��� ' + getTotal(cart) + ' �Դϴ�.';

var getTotal2 = function (cart) {
  return `${cart.price}��`;
};

var myCart2 = `��ٱ��Ͽ� ${cart.name}�� �ֽ��ϴ�. �� �ݾ��� ${getTotal2(cart)} �Դϴ�.`;
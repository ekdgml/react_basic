function parse(qs) {
  var queryString = qs.substr(1);
  var chunks = qs.split('&');
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0];
    var value = Number.isNaN(parts[1]) ? parts[1] : Number(parts[1]);
    result[key] = value;
  }

  return result;
}

////////////////// 변형 /////////////////////
// 가변변수 사용(foreach)
function parse2(qs) {
  const queryString2 = qs.substr(1);
  const chunks2 = queryString2.split('&');
  let result2 = {};
  chunks2.forEach((chunks2) => {
    const [key2, value2] = chunks2.split('=');
    result[key2] = value2;
  });

  return result2;
}

// 불변변수만 사용(map)
function parse3(qs) {
  const queryString3 = qs.substr(1);
  const chunks3 = queryString3.split('&');
  const result3 = chunks3.map((chunks3) => {
    const [key3, value3] = chunks3.split('=');
    return { key: key, value: value };
  });

  return result3;
}

// reduce 사용
function parse4(qs) {
  const queryString4 = qs.substr(1);
  const chunks4 = queryString4.split('&');
  return (
    chunks4
      .map((chunks4) => {
        const [key4, value4] = chunks4.split('=');
        return { key, value };
      })
      // ->배열로 나온 값을
      .reduce((result4, item) => {
        result4[item.key] = item.value;
        return result4;
      }, {})
  );
  // ->객체로 return 해준다.
}

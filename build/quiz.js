var soccer = 0;
var basketball = 0;
var tennis = 0;
var golf = 0;
function result() {
  var values = [];
  values.push(document.forms["sport"]["favourite"].value);
  values.push(document.forms["sport"]["personality"].value);
  values.push(document.forms["sport"]["place"].value);
  values.push(document.forms["sport"]["time"].value);
  values.push(document.forms["sport"]["sport"].value);
  values.push(document.forms["sport"]["statement"].value);
  for (var i = 0; i < values.length; i++) {
    switch (values[i]) {
      case "1":
        soccer += 10;
        break;
      case "2":
        basketball += 10;
        break;
      case "3":
        tennis += 10;
        break;
      case "4":
        golf += 10;
        break;
    }
  }
  //window.location.href = "result.html";
  window.location = "result.html?form/val1="+soccer+"&form/val2="+basketball+"&form/val3="+tennis+"&form/val4="+golf;

}

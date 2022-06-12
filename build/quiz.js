var soccer = 0;
var basketball = 0;
var tennis = 0;
var golf = 0;
function result() {
  var values = [];
  //document.getElementById("uniqueID").value;
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

function draw_graph(v1,v2,v3,v4) {
  var element = document.getElementById("myChart");
  element.width = "400";
  element.height = "200";
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'polarArea',
    data: {
      datasets: [{
        label: "Survey_Chart",
        backgroundColor: ["#086375", "#1dd3b0","#affc41", "#b2ff9e"],
        data: [
          v1,v2,v3,v4
        ]
      },
      ],
      labels: [
        'soccer',
        'basketball',
        'tennis',
        'golf'
      ]
    },
    options: {
      title: {
        display: false,
        text: 'Chart'
      },
      events: [],
      animation: false,
    }
  });
}

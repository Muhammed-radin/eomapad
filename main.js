//let date = new Date()
//let topBarTime = document.getElementById('time')
//let currentDate = date.getFullYear()+" "+date.getMonth()+1+" "+date.getHours()+" "+date.getSeconds()
setInterval(
  function() {
    let date = new Date()
    let topBarTime = document.getElementById('time')
    let currentDate = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds()

    topBarTime.innerHTML = currentDate
    // console.log(date)
  }, 100)
setInterval(() => {
  window.addEventListener('load', () => {
    if (navigator.onLine) {
      //document.getElementById('refresh').innerHTML = '<span id="network-dec" style="color: greenyellow;">online</span><i class="material-icons rfsh" id="refresh">refresh</i>'
      //var detector = "onLine"
    } else {
      //var detector = "offline"
      // document.getElementById('refresh').innerHTML = '<span id="network-dec" style="color: #FF2E2E;">offline</span><i class="material-icons rfsh" id="refresh">refresh</i>'
    }
    //console.log(detector)

    /**-------***--------**/
    document.getElementById('refresh').innerHTML = '<i class="material-icons rfsh" id="refresh" onclick="refresh(event)">refresh</i>'
  })
}, 100)

function loaded() {
  document.getElementById('refresh').innerHTML = '<i class="material-icons rfsh" id="refresh" onclick="refresh(event)">refresh</i>'
  document.getElementById('preloader').style.display = "none"
}

function refresh(e) {
  document.getElementById('refresh').innerHTML = '<i class="material-icons rfsh w3-spin" id="refresh" onclick="refresh(event)">refresh</i>'
  window.location.reload()
}

let btnLft = $('#left-btn-csn')

let line = setInterval(function() {

  var lines = $('textarea').val().split('\n');
  for (var i = 0; i < lines.length; i++) { //code here using lines[i] which will give you each line 

    //console.log(i)
  }

  for (var j = 1; j < i; j++) {
    //document.getElementById('bg-ln').innerHTML = ''
   // $(a).append(`$("#bg-ln").append('<p>' + j + '</p>')`)
   // var a = $("#bg-ln").append('<p>' + j + '</p>')
  }
}, 1000)
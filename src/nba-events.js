
(function () {
  console.log('nbaImpOk')
})(); 




/* CLICK ACTION */

function nbaActionsClick(arg) {
  // alert(arg);
  // document.getElementsByClassName('nba-container')[0].style.display = 'none';
  document.getElementsByClassName('nba-container')[0].style.cursor = 'wait';
  
  var url = arg;
  console.log(url)
  
  /* POST CLICK ACTION BACK TO OFFERHUB */
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4) {
      if(XHR.status == 200) {
        console.log('POST CLICK SUCCESS!');
      } else {
        console.log('ERROR')
      }
    }
  }

  XHR.open('POST', url);
  XHR.send();
}



/* REJECT ACTION */

function nbaActionsReject(arg) {
  // alert(arg);
  document.getElementsByClassName('nba-container')[0].style.display = 'none';

  var url = arg;
  console.log(url)
  
  /* POST REJECT ACTION BACK TO OFFERHUB */
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if(XHR.readyState == 4) {
      if(XHR.status == 200) {
        console.log('POST REJECT SUCCESS!');
      } else {
        console.log('ERROR')
      }
    }
  }

  XHR.open('POST', url);
  XHR.send();
}



/* LATER ACTION */

function nbaActionsLater(arg) {
  // alert(arg);
  document.getElementsByClassName('nba-container')[0].style.display = 'none';
}

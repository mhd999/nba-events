(function () {
  console.log('NBA-CDN IMPORTED OK')
})();

function nbaActionsClick(arg) {
  alert(arg);
  // document.getElementsByClassName('nba-container')[0].style.display = 'none';
  
//   var host = 'http://localhost:8080'; 
//   var url = '/api/interaction/e3ef5c0e-6c1e-4c39-9b3e-b5b5b8f72cce/click';

//   var XHR = new XMLHttpRequest();

//   XHR.onreadystatechange = function() {
//     if(XHR.readyState == 4) {
//       if(XHR.status == 200) {
//         // console.log('SUCCESS!');
//       } else {
//         console.log('ERROR')
//       }
//     }
//   }

//   XHR.open('POST', host + url);
//   XHR.send();
}

function nbaActionsReject(arg) {
  alert(arg);
  // document.getElementsByClassName('nba-container')[0].style.display = 'none';
}

function nbaActionsLater(arg) {
  alert(arg);
  // document.getElementsByClassName('nba-container')[0].style.display = 'none';
}


// XTRA FUNCTIONS

function nbaRedirectToAllSubscriptions(arg) {
  //alert(arg);
  window.location.assign('https://nettbutikk.telia.no/mobilabonnement/smart')
}

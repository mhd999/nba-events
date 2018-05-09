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





// XTRA SUBCRICTION OFFER FUNCTIONS

function nbaRedirectToAllSubscriptions(arg) {
  // alert(arg);
  // window.location.assign('https://beta.telia.no/')
}

function nbaBoxExpanding(arg) {  
  var getSubscriptionExpandBox = document.getElementsByClassName('box--expandable')[0];
  var getNbaGrid = document.getElementsByClassName('nba-content__grid')[0];
  // alert ('EXPANDING')

  getSubscriptionExpandBox.classList.add('box--is-expanded');
  getSubscriptionExpandBox.removeAttribute('onclick');
  getNbaGrid.setAttribute("style", "display: block;");
}

function nbaBoxCollapsing(arg) {
  var getSubscriptionExpandBox = document.getElementsByClassName('box--expandable')[0];
  var getSubscriptionCollapseBox = document.getElementsByClassName('box__close-expanded-info')[0];
  var getNbaGrid = document.getElementsByClassName('nba-content__grid')[0];
  // alert('COLLAPSING');

  getSubscriptionExpandBox.classList.remove('box--is-expanded');
  getNbaGrid.removeAttribute("style", "display: block;");
  setTimeout(() => {
    getSubscriptionExpandBox.setAttribute('onclick', 'nbaBoxExpanding()');
  }, 500);
}

(function () {
  console.log('NBA-CDN IMPORTED OK')
})();





/* CLICK ACTION */

function nbaActionsClick(arg) {
  alert(arg);
  // document.getElementsByClassName('nba-container')[0].style.display = 'none';
  
  var url = arg;
  
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
  alert(arg);
  // document.getElementsByClassName('nba-container')[0].style.display = 'none';

  var url = arg;
  console.log(url)
  
  /* POST REJECT ACTION BACK TO OFFERHUB */
  // var XHR = new XMLHttpRequest();

  // XHR.onreadystatechange = function() {
  //   if(XHR.readyState == 4) {
  //     if(XHR.status == 200) {
  //       console.log('POST CLICK SUCCESS!');
  //     } else {
  //       console.log('ERROR')
  //     }
  //   }
  // }

  // XHR.open('POST', url);
  // XHR.send();
}



/* LATER ACTION */

function nbaActionsLater(arg) {
  alert(arg);
  document.getElementsByClassName('nba-container')[0].style.display = 'none';
}



/*--------------------------------------------------------------------*/



// XTRA SUBCRICTION OFFER FUNCTIONS

function nbaRedirectToSubscription(url) {
  // alert(arg);
  window.location.assign(url)
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

(function () {
  console.log('NBA-CDN IMPORTED OK')
})();

function nbaActionsClick(arg) {
  alert(arg);
  // document.getElementsByClassName('nba-container')[0].style.display = 'none';
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

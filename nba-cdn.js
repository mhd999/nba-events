function alertMSG() {
  alert('WORKS!');
}

function actionPanelOk() {
  alert('Supert, nå slipper du å se denne meldingen mer :)');
  console.log(document.getElementsByClassName('nba-container'))
  // document.getElementsByClassName('nba-container')[0].style.display = 'none';
}

function actionPanelLater(arg) {
  alert(arg);
  // document.getElementsByClassName('nba-container')[0].style.display = 'none';
}
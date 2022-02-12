
let mainGrid = new Grid( MAIN_GRID);
mainGrid.drawGrid(MAIN_GRID.gridWidth);
mainGrid.mouseClicked();
mainGrid.clearGridBtn()

let kickGrid = new Grid(KICK_GRID);
kickGrid.drawGrid(KICK_GRID.gridWidth);
kickGrid.mouseClicked();
kickGrid.clearGridBtn()

showValueTempo();
setTempo();
resetTempo();
playPause();
recordBtn();

updateSequencer(MAIN_GRID);
updateSequencer(KICK_GRID);


class Grid{
    constructor(value) {
        this.grid = value;
    }

    getGrid(){
        return document.querySelector(this.grid.idGrid);
    }

    drawGrid(value) {
        let gridHTML = '';
        for (let i = 0; i < this.grid.gridHeight ; i++) {
            gridHTML+=` <div class='row' >`;

            for (let j = 0 ; j < value  ; j++) {
                gridHTML+=`<div data-row="${j}" data-col="${i}" class="cell"></div>`;
            }

            gridHTML+='</div>';
        }
        gridHTML+='</div>';

        this.getGrid().innerHTML = gridHTML;
    }

    mouseClicked(){
        this.getGrid().addEventListener('click', target=>{

            target.path[0].classList.toggle('on');
            target.path[0].classList.toggle(`${SYNTH_CONFIG.colors[target.target.dataset.col]}`);

            this.grid.synths[0].triggerAttackRelease(this.grid.pitches[target.target.dataset.col], '8n');
        })
    }

    getRows(){
        return document.querySelectorAll(`${this.grid.idGrid} > .row`);
    }

    checkIsOn(elt){
        if (elt.classList.contains('on')){
            return true;
        }
    }


    clearGridBtn() {
        document.querySelector(".clear").addEventListener('click',()=>{
            document.querySelectorAll('.cell').forEach(div => {
                if (this.checkIsOn(div)) {
                    div.classList.remove('on');
                    div.classList.remove(`${SYNTH_CONFIG.colors[div.dataset.col]}`);
                }
            })
        })
    }

    getCell(){
        return document.querySelectorAll(`${this.grid.idGrid} > div > .cell`);
    }

    ///changer le nom
    getDataCol(value){

        for (let i = 0; i < this.getCell().length; i++){
            if(this.getCell()[i].dataset.row == value){
                this.getCell()[i].classList.add('bisque');

                if (i>0 ){
                    this.getCell()[i-1].classList.remove('bisque')
                }

                if (i == 0 && this.getCell()[this.getCell().length-1].classList[1] == 'bisque') {
                    this.getCell()[this.getCell().length-1].classList.remove('bisque')
                }
            }
        }
    }


}

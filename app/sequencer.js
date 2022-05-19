const gain = new Tone.Gain(0.2);
gain.toDestination();
let index = 0;
let index2 = 0;
let playing = false;
let recording = false;

function synthType(config, value){
    config.synths.forEach(synth=>{
        synth.oscillator.type = value;
        synth.connect(gain);
        synth.connect(dest);
    })
}
function  getSynthTypeSelected(){
    return document.getElementById("synth-selected").value;
}
function newSynthType(config){
    document.getElementById('type').addEventListener('click', ()=>{
        synthType(config, getSynthTypeSelected());
    })
}
function synths(config){
    return config.synths;
}
function notes(config){
    return config.pitches;
}
function rows(config){
    return config.getRows();
}
function showValueTempo(){
    document.getElementById('value').innerHTML = "bpm : " + document.getElementById("tempo").value;
}
function setTempo(){
    document.querySelector(".tempo").addEventListener('change', ()=>{
        Tone.Transport.bpm.value = document.getElementById("tempo").value;
        this.showValueTempo();
    });
}
function resetTempo(){
    document.querySelector(".reset-bpm").addEventListener('click', ()=>{
        Tone.Transport.bpm.value = 120;
        document.getElementById("tempo").value= 120
        this.showValueTempo();
    });
}
function startMelody(){
    playing = true;
    Tone.Transport.start();
}
function stopMelody(){
    playing = false;
    Tone.Transport.stop();
}
function playPause(){
    document.querySelector(".playpauseBtn").addEventListener('click', ()=>{
        if (playing === false){
            startMelody();
            document.querySelector(".playpauseBtn").innerHTML="stop";
        } else {
            stopMelody();
            document.querySelector(".playpauseBtn").innerHTML="start";
        }})
}
function updateSequencer(config){
    synthType(config, SYNTH_CONFIG.oscillator);
    newSynthType(config);
}

Tone.Transport.scheduleRepeat(time=>{
    let step = index % MAIN_GRID.gridWidth;

    for (let i=0; i< mainGrid.getRows().length; i++){
        let synth = synths(MAIN_GRID)[i],
            note = notes(MAIN_GRID)[i],
            $row = rows(mainGrid)[i],
            $input = $row.querySelector(`div:nth-child( ${step + 1} )`);

        if ( $input.classList.contains('on')){
            synth.triggerAttackRelease(note, '8n', time);
        }
    }
    mainGrid.getDataCol(step);
    index++;
}, SYNTH_CONFIG.interval);

Tone.Transport.scheduleRepeat(time =>{
    let step2 = index2 % KICK_GRID.gridWidth;

    for (let i=0; i< kickGrid.getRows().length; i++){
        let synth = synths(KICK_GRID)[i],
            note = notes(KICK_GRID)[i],
            $row = rows(kickGrid)[i],
            $input = $row.querySelector(`div:nth-child( ${step2 + 1} )`);

        if ( $input.classList.contains('on')){
            synth.triggerAttackRelease(note, '8n', time);
        }
    }
    kickGrid.getDataCol(step2);

    index2++;
}, SYNTH_CONFIG.interval);

console.clear();

const chunks= [];

const audio = document.querySelector('audio');
const actx  = Tone.context;
const dest  = actx.createMediaStreamDestination();
const recorder = new MediaRecorder(dest.stream);


recorder.ondataavailable = evt => chunks.push(evt.data);
recorder.onstop = () => {
    let blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
    audio.src = URL.createObjectURL(blob);
};

function startRecording(){
    recording = true;
    recorder.start();
}
function stopRecording(){
    recording = false;
    recorder.stop();
}

function recordBtn(){
    document.querySelector(".record").addEventListener('click', ()=>{
        if (recording === false && playing==true){
            document.querySelector("body > div:nth-child(7) > div > button").innerText = "recording";
            console.log('recording')
            startRecording();
        } else
        {
            document.querySelector("body > div:nth-child(7) > div > button").innerText = "record"
            console.log('stop recording')
            stopRecording()
        }})
}
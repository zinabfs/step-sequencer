const SYNTH_CONFIG = {
    gain: 0.04,
    oscillator: 'sine2',
    interval: '8n',
    colors: ['purple','blue','turquoise','green','yellow','orange','pink','purple','blue','turquoise','green','yellow','orange','pink'],

};

const MAIN_GRID = {
    synths: [
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
        new Tone.Synth(),
    ],
    idGrid: '#grid',
    gridHeight: 14,
    gridWidth: 12,
    pitches: ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'],
    oscillator: 'sine',
    synthtype: new Tone.Synth()
};

const KICK_GRID = {
    synths: [
        new Tone.MembraneSynth(),
        new Tone.MembraneSynth(),
        new Tone.MembraneSynth(),
    ],
    idGrid: '#kick',
    gridHeight: 3,
    gridWidth: 12,
    pitches: ['C1', 'B2', 'E5'],
    oscillator: 'sine',
    synthtype: new Tone.MembraneSynth()
};


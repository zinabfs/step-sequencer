const SYNTH_CONFIG = {
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
    gridWidth: 16,
    pitches: [
        'B4',
        'A4',
        'G4',
        'F4',
        'E4',
        'D4',
        'C4',
        'B3',
        'A3',
        'G3',
        'F3',
        'E3',
        'D3',
        'C3'
    ],
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
    gridWidth: 16,
    pitches: [
        'C1',
        'B2',
        'E5'
    ],
    oscillator: 'sine',
    synthtype: new Tone.MembraneSynth()
};



window.cloud = new CloudSaver();
window.applicationID = 69;
const lineTypes = [
    {
      name:'regular',
      title:'Self-replicating',
      color: '#EB5757',
      rep: true,
      width: 2
    }, {
      name:'flip',
      title:'Vertical Flip + Replicate',
      color: '#2F80ED',
      rep: true,
      width: 2
    }, {
      name:'invert',
      title:'Horizontal Flip + Replicate',
      color: '#F2994A',
      rep: true,
      width: 2
    }, {
      name:'inverflip',
      title:'Vertical + Horizontal Flip + Replicate',
      color: '#9B51E0',
      rep: true,
      width: 2
  },{
      name:'passive',
      title:'Passive Replication',
      color: '#27AE60',
      rep: false,
      width: 2
    }
    ,{
      name:'invisible',
      title:'Invisible',
      color: '#bdbdbd',
      rep: false,
      width: 1
    }
  ];
const StdSeeds = {
    '3crosses': {
      fullname: 'Three Crosses',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 3,
      seed: [
        [260.0, 180.0, 0],
        [280.0, 220.0, 6],
        [260.0, 120.0, 6],
        [260.0, 20.0, 4],
        [380.0, 20.0, 4],
        [380.0, 120.0, 4],
        [480.0, 120.0, 4],
        [480.0, 220.0, 4],
        [380.0, 220.0, 4],
        [380.0, 300.0, 4],
        [380.0, 320.0, 4],
        [260.0, 320.0, 4],
        [260.0, 220.0, 4],
        [160.0, 220.0, 4],
        [160.0, 120.0, 4],
        [260.0, 120.0, 4],
        [300.0, 180.0, 6],
        [340.0, 180.0, 0],
        [380.0, 180.0, 6],
      ],
    },
    'baila': {
      fullname: 'Ba-ila',
      thickness: 2.0,
      thicknessType: 1,
      itNumber: 3,
      seed: [
        [210.0, 284.0, 0],
        [210.0, 187.07369995117188, 6],
        [210.0, 200.80044555664062, 4],
        [216.86341857910156, 221.39060974121094, 4],
        [223.726806640625, 235.117431640625, 0],
        [237.4535369873047, 248.84420776367188, 0],
        [251.1803436279297, 262.5709533691406, 0],
        [278.6339111328125, 269.434326171875, 0],
        [312.9508361816406, 276.2977294921875, 0],
        [354.13116455078125, 276.2977294921875, 0],
        [395.3115234375, 269.434326171875, 0],
        [429.6284484863281, 248.84420776367188, 0],
        [457.0820617675781, 215.213623046875, 0],
        [469.4361877441406, 171.97422790527344, 0],
        [469.4361877441406, 122.55779266357422, 0],
        [450.9050598144531, 85.49552154541016, 0],
        [420.01971435546875, 60.787296295166016, 0],
        [389.1344909667969, 48.43317794799805, 0],
        [358.2492370605469, 42.25618362426758, 0],
        [327.36395263671875, 42.25618362426758, 0],
        [296.47869873046875, 48.43317794799805, 0],
        [271.7704772949219, 60.787296295166016, 0],
        [253.23934936523438, 73.14141845703125, 0],
        [234.7082061767578, 85.49552154541016, 0],
        [222.3541259765625, 97.8495864868164, 0],
        [216.1770477294922, 110.2037124633789, 0],
        [210.0, 128.73486328125, 4],
        [210.0, 139.0299072265625, 4],
        [374.7213439941406, 180.21029663085938, 6],
        [374.7213439941406, 118.43974304199219, 0],
        [210.0, 32.34235382080078, 6],
      ],
    },
    'blanket': {
      fullname: 'Fulani Blanket',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 3,
      seed: [
        [240.0, 160.0, 0],
        [170.0, 160.0, 6],
        [130.0, 220.0, 4],
        [90.0, 160.0, 4],
        [130.0, 100.0, 4],
        [170.0, 160.0, 4],
        [50.0, 100.0, 6],
        [10.0, 160.0, 4],
        [50.0, 220.0, 4],
        [90.0, 160.0, 4],
        [50.0, 100.0, 4],
        [280.0, 120.0, 6],
        [330.0, 120.0, 0],
        [280.0, 200.0, 6],
        [330.0, 200.0, 0],
        [430.0, 160.0, 6],
        [470.0, 220.0, 4],
        [510.0, 160.0, 4],
        [550.0, 220.0, 4],
        [590.0, 160.0, 4],
        [550.0, 100.0, 4],
        [510.0, 160.0, 4],
        [470.0, 100.0, 4],
        [430.0, 160.0, 4],
        [360.0, 160.0, 6],
      ],
    },
    'bullhorn': {
      fullname: 'Ghanian Bull Horn',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 4,
      seed: [
        [220.0, 200.0, 0],
        [255.0, 170.0, 6],
        [270.0, 180.0, 4],
        [296.0, 198.0, 4],
        [300.0, 206.0, 4],
        [298.0, 219.0, 4],
        [291.0, 230.0, 4],
        [277.0, 234.0, 4],
        [265.0, 232.0, 4],
        [254.0, 229.0, 4],
        [242.0, 221.0, 4],
        [228.0, 208.0, 4],
        [222.0, 200.0, 4],
        [215.0, 183.0, 4],
        [210.0, 170.0, 4],
        [209.0, 154.0, 4],
        [244.0, 156.0, 0],
        [255.0, 170.0, 4],
        [220.0, 200.0, 6],
        [258.0, 171.0, 6],
      ],
    },
    'cantorpaper': {
      fullname: 'Cantor Paper',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 3,
      seed: [
        [220.0, 161.0, 0],
        [240.0, 81.0, 6],
        [260.0, 81.0, 6],
        [320.0, 81.0, 0],
        [340.0, 81.0, 6],
        [240.0, 81.0, 4],
        [360.0, 161.0, 6],
        [220.0, 161.0, 4],
        [260.0, 241.0, 6],
        [320.0, 241.0, 0],
        [340.0, 241.0, 6],
        [240.0, 241.0, 4],
        [360.0, 161.0, 6],
      ],
    },
    'carpet': {
      fullname: 'Sierpinski Carpet',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 3,
      seed: [
        [200.0, 300.0, 0],
        [238.58258056640625, 197.11302185058594, 6],
        [238.58258056640625, 94.22604370117188, 4],
        [341.4696044921875, 94.22604370117188, 4],
        [341.4696044921875, 197.11302185058594, 4],
        [238.58258056640625, 197.11302185058594, 4],
        [252.06201171875, 194.14932250976562, 6],
        [238.58258056640625, 197.11302185058594, 6],
        [238.58258056640625, 158.53041076660156, 0],
        [238.58258056640625, 132.80865478515625, 6],
        [238.58258056640625, 94.22604370117188, 0],
        [277.16522216796875, 94.22604370117188, 0],
        [302.8869934082031, 94.22604370117188, 6],
        [341.4696044921875, 94.22604370117188, 0],
        [341.4696044921875, 132.80865478515625, 0],
        [341.4696044921875, 158.53041076660156, 6],
        [341.4696044921875, 197.11302185058594, 0],
        [302.8869934082031, 197.11302185058594, 0],
        [277.16522216796875, 197.11302185058594, 6],
        [238.58258056640625, 197.11302185058594, 0],
        [380.0522155761719, 300.0, 6],
      ],
    },
    'chaetophora': {
      fullname: 'Chaetophora',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 5,
      seed: [
        [249.0, 322.0, 0],
        [254.1637420654297, 319.21954345703125, 6],
        [264.9272766113281, 245.37684631347656, 4],
        [243.8362274169922, 319.21954345703125, 6],
        [252.0132598876953, 246.23777770996094, 4],
        [255.02651977539062, 244.9463653564453, 6],
        [236.23672485351562, 184.3251953125, 1],
        [207.3065948486328, 245.58892822265625, 6],
        [261.4835510253906, 245.37684631347656, 6],
        [286.0102233886719, 194.520263671875, 0],
        [309.412841796875, 245.58892822265625, 6],
        [258.3596496582031, 245.58892822265625, 6],
      ],
    },
    'cnegative': {
      fullname: 'Negative Feedback',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 1,
      seed: [
        [340.0, 80.0, 0],
        [320.0, 80.0, 0],
        [300.0, 80.0, 0],
        [280.0, 80.0, 0],
        [260.0, 80.0, 0],
        [240.0, 100.0, 0],
        [240.0, 120.0, 0],
        [240.0, 140.0, 0],
        [240.0, 160.0, 0],
        [240.0, 180.0, 0],
        [240.0, 200.0, 0],
        [240.0, 220.0, 0],
        [260.0, 240.0, 0],
        [280.0, 240.0, 0],
        [300.0, 240.0, 0],
        [320.0, 240.0, 0],
        [340.0, 240.0, 0],
      ],
    },
    'cpositive': {
      fullname: 'Positive Feedback',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 1,
      seed: [
        [340.0, 100.0, 0],
        [240.0, 160.0, 0],
        [340.0, 240.0, 0],
      ],
    },
    'davincitree2': {
      fullname: 'Davinci Tree +2',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 2,
      seed: [
        [240.0, 320.0, 0],
        [240.0, 320.0, 6],
        [240.0, 230.0, 4],
        [260.0, 210.0, 0],
        [270.0, 210.0, 4],
        [290.0, 230.0, 0],
        [290.0, 320.0, 4],
        [290.0, 320.0, 6],
      ],
    },
    'davincitree3': {
      fullname: 'Davinci Tree +3',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 2,
      seed: [
        [240.0, 320.0, 0],
        [240.0, 320.0, 6],
        [240.0, 230.0, 4],
        [253.0, 211.0, 0],
        [277.0, 211.0, 0],
        [290.0, 230.0, 0],
        [290.0, 320.0, 4],
        [290.0, 320.0, 6],
      ],
    },
    'davincitree4': {
      fullname: 'Davinci Tree +4',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 2,
      seed: [
        [240.0, 320.0, 0],
        [240.0, 320.0, 6],
        [240.0, 232.24789428710938, 4],
        [246.3679962158203, 213.5637969970703, 0],
        [264.8714294433594, 206.16534423828125, 0],
        [283.6661376953125, 214.4735107421875, 0],
        [288.75115966796875, 232.24789428710938, 0],
        [288.75115966796875, 320.0, 4],
        [288.75115966796875, 320.0, 6],
      ],
    },
    'dendrite': {
      fullname: 'Dendrite',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 4,
      seed: [
        [260.0, 288.0, 0],
        [260.0, 240.0, 4],
        [300.0, 200.0, 6],
        [260.0, 240.0, 6],
        [260.0, 200.0, 1],
        [260.0, 186.0, 1],
        [236.0, 228.0, 6],
        [183.0, 270.0, 6],
        [227.0, 220.0, 6],
        [260.0, 240.0, 4],
        [236.85000610351562, 170.38999938964844, 6],
        [209.30999755859375, 228.70999145507812, 6],
        [260.0, 240.0, 6],
        [280.0, 231.0, 4],
        [300.0, 220.0, 0],
        [306.510009765625, 228.70999145507812, 6],
        [380.0, 240.0, 6],
        [260.0, 240.0, 6],
      ],
    },
    'ethiopian': {
      fullname: 'Ethiopian Cross 1',
      thickness: 4.0,
      thicknessType: 0,
      itNumber: 3,
      seed: [
        [460.0, 181.0, 0],
        [260.0, 181.0, 6],
        [340.0, 101.0, 0],
        [340.0, 61.0, 0],
        [340.0, 101.0, 6],
        [420.0, 181.0, 0],
        [460.0, 181.0, 0],
        [420.0, 181.0, 6],
        [340.0, 261.0, 0],
        [340.0, 301.0, 0],
        [340.0, 261.0, 6],
        [260.0, 181.0, 0],
        [220.0, 181.0, 0],
        [220.0, 181.0, 6],
      ],
    },
    'ethiopian2': {
      fullname: 'Ethiopian Cross 2',
      thickness: 4.0,
      thicknessType: 0,
      itNumber: 3,
      seed: [
        [461.0, 160.0, 0],
        [261.0, 161.0, 6],
        [341.0, 81.0, 0],
        [341.0, 20.0, 0],
        [341.0, 81.0, 6],
        [421.0, 161.0, 0],
        [481.0, 161.0, 0],
        [421.0, 161.0, 6],
        [341.0, 241.0, 0],
        [341.0, 300.0, 0],
        [341.0, 241.0, 6],
        [261.0, 161.0, 0],
        [200.0, 161.0, 0],
        [221.0, 160.0, 6],
      ],
    },
    'fern': {
      fullname: 'Fern',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 9,
      seed: [
        [100.0, 238.0, 0],
        [100.0, 238.0, 6],
        [200.0, 158.0, 4],
        [280.0, 38.0, 0],
        [200.0, 158.0, 6],
        [500.0, 138.0, 0],
        [200.0, 158.0, 6],
        [340.0, 278.0, 0],
        [500.0, 138.0, 6],
      ],
    },
    'fractalspirals': {
      fullname: 'Fractal Spirals',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 9,
      seed: [
        [280.0, 280.0, 0],
        [180.0, 280.0, 6],
        [180.0, 180.0, 4],
        [260.0, 180.0, 6],
        [320.0, 100.0, 6],
        [360.0, 180.0, 0],
        [320.0, 180.0, 6],
        [260.0, 180.0, 6],
      ],
    },
    'goldenrec': {
      fullname: 'Golden Rectangle',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 8,
      seed: [
        [304.0, 174.0, 0],
        [304.0, 174.0, 6],
        [304.0, 156.4929656982422, 4],
        [328.07220458984375, 156.4929656982422, 4],
        [328.07220458984375, 174.0, 4],
        [304.0, 174.0, 0],
        [304.0, 156.4929656982422, 6],
      ],
    },
    'kitwe': {
      fullname: 'Kitwe',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 3,
      seed: [
        [261.0, 240.0, 0],
        [241.0, 200.0, 6],
        [261.0, 160.0, 0],
        [321.0, 160.0, 4],
        [341.0, 200.0, 0],
        [321.0, 240.0, 4],
        [261.0, 240.0, 4],
        [241.0, 200.0, 4],
        [269.44482421875, 202.2428436279297, 6],
        [321.0, 240.0, 6],
      ],
    },
    'koch': {
      fullname: 'Koch Curve',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 1,
      seed: [
        [60.0, 280.0, 0],
        [200.0, 280.0, 0],
        [320.0, 140.0, 0],
        [440.0, 280.0, 0],
        [580.0, 280.0, 0],
      ],
    },
    'kochsmall': {
      fullname: 'Small Koch Curve',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 1,
      seed: [
        [180.5, 240.5, 0],
        [260.5, 240.5, 0],
        [320.5, 160.5, 0],
        [380.5, 240.5, 0],
        [460.5, 240.5, 0],
      ],
    },
    'logone': {
      fullname: 'Logone',
      thickness: 4.0,
      thicknessType: 0,
      itNumber: 3,
      seed: [
        [380.0, 300.0, 0],
        [180.0, 300.0, 6],
        [180.0, 200.0, 4],
        [180.0, 100.0, 2],
        [180.0, 60.0, 4],
        [280.0, 60.0, 4],
        [380.0, 60.0, 2],
        [380.0, 120.0, 4],
        [380.0, 220.0, 2],
        [380.0, 300.0, 4],
        [320.0, 300.0, 4],
        [220.0, 300.0, 2],
        [180.0, 300.0, 4],
        [180.0, 300.0, 6],
      ],
    },
    'lungs': {
      fullname: 'Human Lungs',
      thickness: 8.0,
      thicknessType: 1,
      itNumber: 8,
      seed: [
        [320.0, 90.0, 0],
        [320.0, 190.0, 4],
        [250.0, 200.0, 0],
        [320.0, 190.0, 6],
        [380.0, 200.0, 0],
        [320.0, 190.0, 6],
      ],
    },
    'mokoulek': {
      fullname: 'Mokoulek',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 4,
      seed: [
        [420.0, 120.0, 0],
        [400.0, 120.0, 6],
        [380.0, 140.0, 4],
        [360.0, 180.0, 4],
        [360.0, 220.0, 4],
        [380.0, 260.0, 4],
        [400.0, 280.0, 4],
        [440.0, 300.0, 4],
        [480.0, 300.0, 4],
        [520.0, 280.0, 4],
        [540.0, 260.0, 4],
        [560.0, 220.0, 4],
        [560.0, 180.0, 4],
        [540.0, 140.0, 4],
        [520.0, 120.0, 4],
        [480.0, 100.0, 4],
        [440.0, 100.0, 4],
        [400.0, 120.0, 4],
        [420.0, 160.0, 6],
        [400.0, 180.0, 1],
        [400.0, 220.0, 6],
        [420.0, 240.0, 1],
        [480.0, 260.0, 6],
        [500.0, 240.0, 1],
        [520.0, 220.0, 6],
        [520.0, 200.0, 1],
        [520.0, 180.0, 6],
        [520.0, 160.0, 1],
        [480.0, 160.0, 6],
        [460.0, 160.0, 1],
        [440.0, 180.0, 6],
        [440.0, 200.0, 1],
        [440.0, 220.0, 6],
        [460.0, 220.0, 1],
        [480.0, 220.0, 6],
        [480.0, 200.0, 1],
        [240.0, 220.0, 6],
        [260.0, 100.0, 0],
        [240.0, 100.0, 6],
      ],
    },
    'nankani': {
      fullname: 'Nankani',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 5,
      seed: [
        [421.0, 101.0, 0],
        [350.9679870605469, 54.74000549316406, 6],
        [337.84600830078125, 67.86199951171875, 4],
        [324.7239990234375, 94.10599517822266, 4],
        [324.7239990234375, 120.35000610351562, 4],
        [337.84600830078125, 146.593994140625, 4],
        [350.9679870605469, 159.71600341796875, 4],
        [377.2120361328125, 172.8380126953125, 4],
        [403.45599365234375, 172.8380126953125, 4],
        [429.70001220703125, 159.71600341796875, 4],
        [442.822021484375, 146.593994140625, 4],
        [455.94403076171875, 120.35000610351562, 4],
        [455.94403076171875, 94.10599517822266, 4],
        [442.822021484375, 67.86199951171875, 4],
        [429.70001220703125, 54.74000549316406, 4],
        [403.45599365234375, 41.618003845214844, 4],
        [377.2120361328125, 41.618003845214844, 4],
        [350.9679870605469, 54.74000549316406, 4],
        [272.0, 82.0, 6],
        [263.0, 170.0, 0],
        [211.0, 121.97000122070312, 6],
        [329.0, 173.0, 6],
      ],
    },
    'neuron': {
      fullname: 'Neuron',
      thickness: 5.0,
      thicknessType: 1,
      itNumber: 3,
      seed: [
        [308.0, 269.0, 0],
        [282.0, 227.0, 4],
        [245.0, 153.0, 4],
        [195.0, 154.0, 0],
        [314.0, 173.0, 6],
        [320.0, 110.0, 0],
        [266.0, 194.0, 6],
        [266.0, 144.0, 0],
        [282.0, 227.0, 6],
        [316.0, 174.0, 4],
        [369.0, 178.0, 0],
        [192.0, 157.0, 6],
        [309.0, 271.0, 6],
        [307.0, 278.0, 4],
        [312.0, 281.0, 4],
        [313.0, 276.0, 4],
        [307.0, 269.0, 4],
        [264.0, 190.0, 6],
        [213.0, 243.0, 0],
        [242.0, 152.0, 6],
        [202.0, 108.0, 0],
        [142.0, 107.0, 6],
        [242.0, 147.0, 6],
      ],
    },
    'queenanne': {
      fullname: 'Queen Anne\'s Lace',
      thickness: 2.0,
      thicknessType: 1,
      itNumber: 5,
      seed: [
        [260.0, 320.0, 0],
        [270.0, 310.0, 4],
        [280.0, 290.0, 4],
        [280.0, 260.0, 4],
        [270.0, 240.0, 4],
        [260.0, 220.0, 4],
        [220.0, 200.0, 1],
        [170.0, 170.0, 6],
        [190.0, 160.0, 6],
        [260.0, 220.0, 6],
        [240.0, 180.0, 1],
        [360.0, 140.0, 6],
        [260.0, 220.0, 6],
        [280.0, 180.0, 0],
        [140.0, 130.0, 6],
        [180.0, 280.0, 6],
        [180.0, 220.0, 6],
        [260.0, 220.0, 6],
        [300.0, 200.0, 0],
        [306.510009765625, 228.70999145507812, 6],
        [260.0, 220.0, 6],
      ],
    },
    'riverbasin': {
      fullname: 'River Basin',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 8,
      seed: [
        [76.0, 260.0, 0],
        [76.0, 260.0, 6],
        [270.0, 260.0, 0],
        [288.2153015136719, 24.205242156982422, 0],
        [300.0, 260.0, 0],
        [547.5895385742188, 260.0, 0],
        [547.5895385742188, 260.0, 6],
      ],
    },
    'sierpinski': {
      fullname: 'Sierpinski Triangle',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 5,
      seed: [
        [398.0, 260.0, 0],
        [200.0, 260.0, 6],
        [398.0, 260.0, 4],
        [299.989990234375, 81.80000305175781, 4],
        [348.5, 170.89999389648438, 6],
        [249.5, 170.89999389648438, 0],
        [299.0, 260.0, 4],
        [348.5, 170.89999389648438, 4],
        [398.0, 260.0, 6],
        [299.0, 260.0, 0],
        [299.0, 260.0, 6],
        [200.0, 260.0, 0],
        [200.0, 260.0, 6],
        [299.989990234375, 81.80000305175781, 4],
        [200.0, 260.0, 6],
      ],
    },
    'sprout': {
      fullname: 'Sprout',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 9,
      "seed": [
        [260.5, 320.5, 0],
        [260.5, 180.5, 4],
        [340.5, 120.5, 0],
        [320.5, 180.5, 6],
        [260.5, 180.5, 6]
      ],
    },
    'turbulence': {
      fullname: 'Turbulence',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 9,
      seed: [
        [293.0, 99.0, 0],
        [356.0, 107.0999984741211, 6],
        [235.12611389160156, 87.42520141601562, 0],
        [177.2521514892578, 99.0, 6],
        [154.1025848388672, 133.72434997558594, 6],
        [177.2521514892578, 168.44869995117188, 0],
      ],
    },
    'villi': {
      fullname: 'Intestinal Villi',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 2,
      seed: [
        [80.0, 180.0, 0],
        [120.0, 180.0, 0],
        [150.0, 160.0, 0],
        [160.0, 120.0, 0],
        [170.0, 80.0, 0],
        [180.0, 60.0, 0],
        [200.0, 60.0, 0],
        [220.0, 70.0, 0],
        [230.0, 90.0, 0],
        [230.0, 110.0, 0],
        [240.0, 140.0, 0],
        [250.0, 160.0, 0],
        [270.0, 180.0, 0],
        [300.0, 180.0, 0],
        [310.0, 160.0, 0],
        [310.0, 130.0, 0],
        [320.0, 100.0, 0],
        [340.0, 90.0, 0],
        [360.0, 100.0, 0],
        [370.0, 120.0, 0],
        [380.0, 140.0, 0],
        [390.0, 160.0, 0],
        [400.0, 170.0, 0],
        [430.0, 180.0, 0],
        [460.0, 170.0, 0],
        [470.0, 130.0, 0],
        [480.0, 110.0, 0],
        [490.0, 110.0, 0],
        [500.0, 120.0, 0],
        [510.0, 140.0, 0],
        [510.0, 160.0, 0],
        [520.0, 170.0, 0],
        [540.0, 180.0, 0],
      ],
    },
    'sharkfin': {
      fullname: 'Shark Fin',
      seed: [
        [200.0, 260.0, 0],
        [280.0, 260.0, 0],
        [380.0, 200.0, 4],
        [380.0, 260.0, 4],
        [460.0, 260.0, 4],
      ],
    },
  };
const toggle_e = function(elem){
  if( elem.style.display == 'none' ) elem.style.display = 'block';
  else elem.style.display = 'none';
}
//initMethod:
//0 - new version
//1 - oldversion, init from stdSeed
//2 - oldversion, init from json file
class Fractal {
    constructor( seed = [], initMethod = 0) {
        this.name = "";
        this.seed = [];
        this.baseline = [];
        this.baseDeltaX, this.baseDeltaY, this.sqbaseLen;
        this.ctx = "";
        this.dim = -1;
        switch (initMethod) {
          case 0: this.init();break;
          case 1: this.setSeedByName(seed);break;
          case 2: this.initFromFile(seed,baseline);break;
        }
    }
    clearPts(){
      this.seed = [];
      this.baseline = [];
    }
    clearCanvas(){
      this.ctx.clearRect(0, 0, this.ctx.canvas.clientWidth, this.ctx.canvas.clientHeight);
    }
    init(){}
    setSeedByName(name){
      let seed = StdSeeds[name].seed;
      this.initFromSeed(seed);
    }
    initFromSeed(seed){
      let len = seed.length;
      if( len < 2 ) return;
      let list = [];
      let pretype = seed[0][2];
      for( let i = 1 ; i < len ; i++ ){
        let pt = seed[i-1];
        let type = seed[i][2] ;
        if(type==6 && pretype==6){continue;}
        list.push([ (0.5 + pt[0]) << 0, (0.5 + pt[1]) << 0, type ]);
        pretype = type;
      }
      let pt = seed[seed.length-1];
      list.push([ (0.5 + pt[0]) << 0, (0.5 + pt[1]) << 0, 6 ]);
      list[list.length-1][2] = 6;
      this.seed = list;
      this.baseline = [0,list.length-1];
      this.setup_baseline();
    }
    initFromFile(seed, baseline){
      this.seed = seed;
      this.baseline = baseline;
      this.setup_baseline();
    }  
    roundPt(pt){
      return [ (0.5 + pt[0]) << 0 , (0.5 + pt[1]) << 0 ];
    }
    sqlineLen(pt1,pt2){
      let x=pt1[0]-pt2[0];
      let y=pt1[1]-pt2[1];
      return x**2 + y**2;
    }
    searchPt(pt){
      let pos = this.roundPt(pt);
      if(this.seed.length < 2) return -1;
      let index = -1;
      for(let i=0; i < this.seed.length; i++){
        let item = this.seed[i];
        if( item[0]==pos[0] && item[1]==pos[1] ){
          index = i; break;
        }
      }
      return index;
    }
    setup_baseline(){
      let b1= this.seed[this.baseline[0]];
      let b2= this.seed[this.baseline[1]];
      this.baseDeltaX = b1[0] - b2[0];
      this.baseDeltaY = b1[1] - b2[1];
      this.sqbaseLen = this.baseDeltaX**2 + this.baseDeltaY**2;
    }
    drawSeed(ctx, isInitiating = false) {
      this.ctx = ctx;
      this.clearCanvas();
      if(this.seed.length < 1) return;
      if(!isInitiating){
        if(this.baseline.length < 1) this.baseline = [0, this.seed.length-1];
        this.drawBaseline();
      }

      let preType = 6;
      ctx.save();
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
      for( let i = 0 ; i < this.seed.length ; i++ ){
        let pt = this.seed[i];
        let type = pt[2];
        if( (type | 0) != type ){//for circles
          let color = lineTypes[type | 0].color;
          let n = ((type-(type | 0))*100)|0;
          this.drawcircle(pt,this.seed[i+1],n,color);
          this.drawline(pt,this.seed[i+1],color,1,[1,4]);
          preType = 6;
          i++; continue;
        }
        if( preType != 6 ) ctx.lineTo( pt[0] , pt[1] );
        if( type != preType && preType != 6 ) ctx.stroke();
        if( type != preType && type != 6) {
          ctx.strokeStyle = lineTypes[type].color;
          ctx.beginPath();
          ctx.moveTo(pt[0],pt[1]);
        }
        preType = type;
      }
      ctx.restore();
      this.drawPts(isInitiating);
    }
    drawBaseline() {
      let pt1 = this.seed[this.baseline[0]];
      let pt2 = this.seed[this.baseline[1]];
      this.drawline(pt1,pt2,"#999",2,[12,8]);
    }
    drawline(pt1,pt2,color="black", width=1, dash=[]){
      if(this.isOutofView(pt1) && this.isOutofView(pt2)) {
        return;//if line is out of view, don't draw
      }
      this.ctx.save();
      this.ctx.strokeStyle = color;
      this.ctx.lineWidth = width;
      this.ctx.lineCap = 'round';
      this.ctx.setLineDash(dash);
      this.ctx.beginPath();
      this.ctx.moveTo(pt1[0], pt1[1]);
      this.ctx.lineTo(pt2[0], pt2[1]);
      this.ctx.stroke();
      this.ctx.restore();
    }
    drawPts(isInitiating = false) {
      let ctx = this.ctx;
      ctx.save();
      ctx.beginPath();
      this.seed.forEach(pt => {
          ctx.moveTo(pt[0], pt[1]);
          ctx.arc(pt[0], pt[1], 2, 0, Math.PI * 2, true);
      });
      ctx.fill();
      if(!isInitiating){
        let b0 = this.seed[this.baseline[0]];
        let b1 = this.seed[this.baseline[1]];
        let w = 4;
        ctx.fillStyle = 'rgba(0, 0, 0,.16)';
        ctx.fillRect(b0[0]-w, b0[1]-w, w << 1, w << 1);
        ctx.fillRect(b1[0]-w, b1[1]-w, w << 1, w << 1);
      }
      ctx.restore();
    }
    drawcircle(center, start, n, color = "black", width = 1){
      if( n!=8 && n!=16 && n!=-1 ) return;
      if( n == -1 && type < 4) return;
      
      let cos = Math.cos(2 * Math.PI / n);
      let sin = Math.sin(2 * Math.PI / n);
      let x0 = start[0] - center[0];
      let y0 = start[1] - center[1];
      
      let ctx = this.ctx;
      ctx.save();
      ctx.beginPath();
      let r = Math.sqrt(this.sqlineLen(center,start));
      if( n == -1 ){
        ctx.arc(center[0], center[1], r, 0, 2 * Math.PI);
      } else {
        ctx.moveTo(start[0],start[1]);
        for(let i = 1 ; i < n ; i++ ){
          let x = x0*cos - y0*sin;
          let y = x0*cos + y0*sin;
          let pt = [ (x+center[0]+0.5) << 0, (y+center[1]+0.5) << 0];
          ctx.lineTo( pt[0] , pt[1]);
          x0 = x;
          y0 = y;
        }
        ctx.closePath();
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.stroke();
      ctx.restore();
    }
    getCirclePt(center, start, n){
      if( n < 0 ) return;
      let pts = [];
      pts.push(start);
      let cos = Math.cos(2 * Math.PI / n);
      let sin = Math.sin(2 * Math.PI / n);
      let x0 = start[0] - center[0];
      let y0 = start[1] - center[1];
      for(let i = 1 ; i < n ; i++ ){
        let x = x0*cos - y0*sin;
        let y = x0*cos + y0*sin;
        let pt = [ (x+center[0]+0.5) << 0, (y+center[1]+0.5) << 0];
        pts.push( pt );
        x0 = x;
        y0 = y;
      }
      return pts;
    }
    //iteration
    drawIter(ctx, level) {
      this.ctx = ctx;
      this.clearCanvas();
      this.setup_baseline();
      if(this.seed <= 1) return;
      let pt1 = this.seed[this.baseline[0]];
      let pt2 = this.seed[this.baseline[1]];
      //move and line
      this.basedraw(pt1,pt2,false,level,1);
      // this.basedraw(pt1,pt2,false,1,1);
    }
    basedraw(b1,b2,hflip,level,lineWidth){
      let color = 'black';
      let segLen = this.sqlineLen(b1,b2);
      let d_segX = b1[0] - b2[0];
      let d_segY = b1[1] - b2[1];
      let d_baseX = this.baseDeltaX;
      let d_baseY = this.baseDeltaY;
      let base0 = this.seed[this.baseline[0]];
      let base1= this.seed[this.baseline[1]]; 
      if( segLen < 4.0){ //if segment too short, return
        this.ctx.beginPath();
        this.ctx.moveTo(b1[0], b1[1]);
        this.ctx.lineTo(b2[0], b2[1]);
        this.ctx.stroke();
        return;
      }
      //factors
      let h = hflip ? -1 : 1;
      let a = (d_baseX * d_segX + h * d_baseY * d_segY) / this.sqbaseLen;
      let b = (d_baseY * d_segX - h * d_baseX * d_segY) / this.sqbaseLen;
      let tx = b1[0] - a * base0[0] - b * base0[1];
      
      let c = (d_baseX * d_segY - h * d_baseY * d_segX) / this.sqbaseLen;
      let d = (d_baseY * d_segY + h * d_baseX * d_segX) / this.sqbaseLen;
      let ty = b1[1] - c * base0[0] - d * base0[1];

      //loop through all lines
      let start = [];
      start[0] = a*this.seed[0][0] + b*this.seed[0][1] +tx;
      start[1] = c*this.seed[0][0] + d*this.seed[0][1] +ty;
      
      for( let i = 1; i < this.seed.length ; i++ ){
        let end = [];
        end[0] = a*this.seed[i][0] + b*this.seed[i][1] +tx;
        end[1] = c*this.seed[i][0] + d*this.seed[i][1] +ty;
        let type = this.seed[i-1][2];
        if( type < 5 ){
          if( level == 1 || ( type | 0 ) == 4 ){
            if( ( type | 0 ) != type ){//for circles
              let n = (( type - ( type | 0 ) )*100)|0 ;
              this.drawcircle(start, end, n, color, lineWidth);
              i++;
            } else {
              this.ctx.beginPath();
              this.ctx.moveTo(start[0], start[1]);
              this.ctx.lineTo(end[0], end[1]);
              this.ctx.stroke();
            }
          } else if( type < 4 ){
            if( ( type | 0 ) != type ){//for circles
              let center = start;
              let vertix = end;
              let n = (( type - ( type | 0 ) )*100)|0;
              let cos = Math.cos(2 * Math.PI / n);
              let sin = Math.sin(2 * Math.PI / n);
              let x0 = vertix[0] - center[0];
              let y0 = vertix[1] - center[1];
              for(let i = 1 ; i < n ; i++ ){
                let x = x0*cos - y0*sin;
                let y = x0*cos + y0*sin;
                let pt1 = [ (x0+center[0]+0.5) << 0, (y0+center[1]+0.5) << 0];
                let pt2 = [ (x+center[0]+0.5) << 0, (y+center[1]+0.5) << 0];
                this.basedraw(pt1,pt2,hflip,level-1,lineWidth);
                x0 = x;
                y0 = y;
              }
              let pt = [ (x0+center[0]+0.5) << 0, (y0+center[1]+0.5) << 0];
              this.basedraw(pt, vertix, hflip,level-1,lineWidth);
            } else {
              this.basedraw(start,end,hflip,level-1,lineWidth);
            }
          }
        }
        start = end;
      }
    }
    checkDim(dim,baseLen){
      let sum = 0.0;
      let len = this.seed.length-1;
      for( let i = 0; i < len; i++){
        let type = this.seed[i][2];
        if( type < 4 ){
          let segLen = Math.sqrt(this.sqlineLen( this.seed[i], this.seed[i+1] ));
          if( ( type | 0 ) != type ){//for circle
            let n = (( type - ( type | 0 ) )*100)|0;
            segLen = 2*segLen*Math.sin(Math.PI/n);
            sum += n*segLen**dim;
            i++;
          }
          else sum += segLen**dim;
        }
      }
      sum /= baseLen**dim;
      return sum;
    }
    getDim(){
      if (this.seed.length < 2) return 0.0;

      let base0 = this.baseline[0];
      let base1 = this.baseline[1];
      let baseLen = Math.sqrt(this.sqlineLen( this.seed[base0], this.seed[base1] ));
      if (baseLen < 1.0) return -1.0;

      let replSum = 0.0;
      let nonrepl = 0.0;
      for( let i = 0; i < this.seed.length-1 ; i++){
        let type = this.seed[i][2];
        if( type < 4 ){
          let segLen = Math.sqrt(this.sqlineLen( this.seed[i], this.seed[i+1] ));
          if( ( type | 0 ) != type ){//for circle
            let n = (( type - ( type | 0 ) )*100)|0;
            segLen = n*2*segLen*Math.sin(Math.PI/n);
            i++;
          }
          replSum += segLen;
        } else if( (type|0) == 4 ){// Visible but non-replicating
          nonrepl += 1;
        }
      }
     
      replSum /= baseLen;
      if( nonrepl > 0.0 && replSum < 1.0 ) return 1.0;
      if( nonrepl == 0.0 && replSum == 0.0 ) return 0.0;
        
      let lo = 0.0;
      let hi = 2.0;
      if (this.checkDim(lo,baseLen) < 1.0 || this.checkDim(hi,baseLen) > 1.0) return -1.0;
      
      let tmp;
      while ((hi - lo) > 0.0005) {
        let mid = (lo + hi) / 2;
        tmp = this.checkDim(mid,baseLen);
        if (tmp >= 1.0) {
          lo = mid;
        } else {
          hi = mid;
        }
      }
      return ((0.5 + (lo + hi) * 500.0) << 0) / 1000.0;
    }
    checkLevelMax(){
      let repl = 0;
      let pass = 0;
      let limit = 20;
      let longest = 1;
      for(let i = 1; i < this.seed.length; i++){
        let segLen = this.sqlineLen(this.seed[i], this.seed[i-1]);
        let type = this.seed[i-1][2];
        let n = 1;
        if( (type|0) != type){// for circles
          n = ((type-(type|0))*100)|0;
          segLen *= 2*Math.sin( Math.PI / n );
        } 
        if( segLen > longest ) longest = segLen;
        if( type < 4 ) repl += n;
        else if( (type|0) == 4 ) pass += n;
      }
      if( longest > this.sqbaseLen ) {//for positive feedback
        // let max = (6-Math.log10(this.sqbaseLen))/Math.log10(longest/this.sqlineLen);
        // console.log(max);
        // return (0.5 + max) << 0;
      }
      else if( repl < 2 ) return limit;
      let levelMax = (9.5-Math.log10(1 + pass/(repl-1)))/Math.log10(repl);
      levelMax = (0.5 + levelMax) << 0;
      
      levelMax = Math.max(levelMax,9);
      return levelMax;
    }
    //seed changing methods
    addPt(pos, connect = '', type = 6, n, undo = false){
      if(undo){
        this.deletePt(n); return true;
      }
      let pt = this.roundPt(pos);
      let index = -1;
      if( connect.length < 1 ){
        pt.push(6);
        this.seed.push(pt);
        index = this.seed.length - 1;
        return index;
      } 
      let lineStart = (connect == 0 || this.seed[connect-1][2] == 6) && this.seed[connect][2] != 6;
      let range = lineStart? connect-1: connect;
      if(this.baseline[0] > range) this.baseline[0]++;
      if(this.baseline[1] > range) this.baseline[1]++;

      let pt1 = this.seed[connect].slice(0,2);;
      let pt2 = pos.slice(0,2);
      index = connect + 1;
      if(lineStart){
        pt1 = pos.slice(0,2);
        pt2 = this.seed[connect].slice(0,2);
        index = connect;
      }

      if(type!=6){
        pt1.push(type);
        pt2.push(this.seed[connect][2]);
      } else {
        pt1.push(this.seed[connect][2]);
        pt2.push(this.seed[connect][2]);
      }
      this.seed.splice(connect, 1, pt1, pt2);

      let arg = [pos, connect, type, index, undo];
      return arg;
    }
    insertPt(pt,index, type){
      this.seed.splice(index,0,pt);
      if( pt[2] != type && pt[2] == 6){
        this.seed[index-1][2] = type; 
      }
      if(this.baseline[0] >= index) this.baseline[0]++;
      if(this.baseline[1] >= index) this.baseline[1]++;
    }
    deletePt(n, original = [], type, undo = false){
      if(undo){ 
        this.insertPt(original, n, type);
        return true;
      }

      if( n < 0 || n > (this.seed.length - 1) ) return false;
      if( n == this.baseline[0] || n == this.baseline[1] ) return false;

      let pt = this.seed[n];
      let segtype = pt[2];
      if( segtype == 6 ) {
        this.seed.splice(n,1);
        if(this.seed[n-1]) {
          segtype = this.seed[n-1][2];
          this.seed[n-1][2] = 6;}
      } else {
        this.seed.splice(n,1);
      }

      //set baseline
      if( n < this.baseline[0] ) this.baseline[0] --;
      if( n < this.baseline[1] ) this.baseline[1] --;

      let arg = [n, pt, segtype, undo];
      return arg;
    }
    movePt(n, toPt, original = [], undo = false){
      let pt = this.seed[n];
      let target = undo? original: toPt;
      let pos = [];
      pos.push(( 0.5 + target[0] ) << 0);
      pos.push(( 0.5 + target[1] ) << 0);
      
      original = pt.slice(0,2);

      if( (pt[2]|0) != pt[2] ){//for shape center
        let follower = this.seed[n+1];
        let x = follower[0] + pos[0] - pt[0];
        let y = follower[1] + pos[1] - pt[1];
        this.seed[n+1][0] = x;
        this.seed[n+1][1] = y;
      }
      this.seed[n][0] = pos[0];
      this.seed[n][1] = pos[1];

      let arg = [n, toPt, original, undo];
      return arg;
    }
    setLnType(n,type, original = '', undo = false){
      let preType = this.seed[n][2];
      let toType = undo? original : type;
      if( (preType|0) != preType ){//for circle
        this.seed[n][2] += toType - (preType|0);
      } else {
        this.seed[n][2] = toType;
      }
      
      let arg = [n, type, (preType|0), undo];
      return arg;
    }
    breakcircle(index, ct, st, undo = false){
      if(index == this.seed.length-1) return false;
      
      if(undo){
        st[2] = 6;
        let n = (( ct[2] - ( ct[2] | 0 ) )*100)|0;
        this.seed.splice(index,n+1,ct,st);
        return true;
      }

      let center = this.seed[index];
      let start = this.seed[index+1];
      let type = center[2];
      let n = (( type - ( type | 0 ) )*100)|0;
      type = type | 0;
      let cos = Math.cos(2 * Math.PI / n);
      let sin = Math.sin(2 * Math.PI / n);
      let x0 = start[0] - center[0];
      let y0 = start[1] - center[1];
      this.seed.splice(index,1);
      this.seed[index][2] = type;//start
      for(let i = 1 ; i < n ; i++ ){
        let x = x0*cos - y0*sin;
        let y = x0*cos + y0*sin;
        let pt = [ (x+center[0]+0.5) << 0, (y+center[1]+0.5) << 0, type ];
        this.seed.splice( index + i, 0, pt );
        x0 = x;
        y0 = y;
      }
      this.seed.splice( index + n, 0, [ start[0], start[1], 6 ] );
      console.log([center,start]);
      if( n < this.baseline[0] ) this.baseline[0] += n-1;
      if( n < this.baseline[1] ) this.baseline[1] += n-1;

      let arg = [index, center, start, undo];
      return arg;
    }
    scale(f = 1,undo = false){// scale center is the center of baseline
      if(f <= 0 || f == 1) return false;
      let factor = undo? 1/f : f;
      let b0 = this.seed[this.baseline[0]];
      let b1 = this.seed[this.baseline[1]];
      let x0 = (b0[0] + b1[0]) / 2;
      let y0 = (b0[1] + b1[1]) / 2;
      // don't allow baseline to be too short
      if( factor < 1 ){
        if(this.sqlineLen(b0,b1) < 4) return false;
      }
      // don't allow baseline going out of bounds completely
      if( factor > 1 ){
        let b_xmax = (Math.max(b0[0],b1[0])-x0)*factor + x0;
        let b_xmin = (Math.min(b0[0],b1[0])-x0)*factor + x0;
        let b_ymax = (Math.max(b0[1],b1[1])-y0)*factor + y0;
        let b_ymin = (Math.min(b0[1],b1[1])-y0)*factor + y0;
        if(b_xmax > this.ctx.canvas.width 
          && b_ymax > this.ctx.canvas.height 
          && b_xmin < 0 && b_ymin < 0) {
            return false;
          }
      }
      this.seed.forEach(item => {
        item[0] = ((item[0]-x0)*factor + x0 + 0.5) << 0;
        item[1] = ((item[1]-y0)*factor + y0 + 0.5) << 0;
      });
      
      let arg = [f,undo];
      return arg;
    }
    move(deltaX,deltaY,undo = false){
      let dx = undo? -deltaX : deltaX;
      let dy = undo? -deltaY : deltaY;
      let b0 = this.seed[this.baseline[0]];
      let b1 = this.seed[this.baseline[1]];
      let new_b0 = [ b0[0]+dx, b0[1]+dy ];
      let new_b1 = [ b1[0]+dx, b1[1]+dy ];
      if( this.isOutofView(new_b0) && this.isOutofView(new_b1) ) {
          return false;
        }
      this.seed.forEach(item=>{
        item[0]+=dx;
        item[1]+=dy;
      });
     
      let arg = [ deltaX, deltaY, undo];
      return arg;
    }
    //selection
    selectPt(pos, editingbase = false, givenList = []){
      let range = 3.0;
      let n = -1;
      let list = this.seed;
      if(list.length < 1) return -1;
      if( givenList.length > 0 ) list = givenList;
      list.forEach((pt,index) => {
        if( Math.abs(pt[0]-pos[0]) <= range && Math.abs(pt[1]-pos[1]) <= range ){
          n = index; return;
        }
      });
      return n;
    }
    selectLn(pos){
      let range = 10.0;
      let n = -1;
      if( this.seed.length < 2 ) return n;
      for( let i = 0 ; i < this.seed.length - 1 ; i++ ) {
        let pt = this.seed[i];
        if( pt[2] == 6 ) continue;
        let d =99;
        if( (pt[2]|0) !== pt[2]){//for circles
          d = this.distanceCirclePt( pt, this.seed[i+1], (pt[2]-(pt[2] | 0))*100, pos );
        } else {
          d = this.distanceLnPt( pt, this.seed[i+1], pos );
        }
        if( d < range ) return i;
      }
      return n;
    }
    distanceLnPt(ln1,ln2,pt){ // return distance square
      let d = 99;
      let dot = (pt[0]-ln1[0])*(ln2[0]-ln1[0])+ (pt[1]-ln1[1])*(ln2[1]-ln1[1]);
      let L0 = this.sqlineLen(ln1,ln2);
      if( dot > 0 && dot < L0 ){
        let L1 = this.sqlineLen(ln1, pt);
        d = L1*(1-(dot**2/(L1*L0)));
      }
      return d;
    }
    distanceCirclePt( center, start, n, pt){
      let r = this.sqlineLen(center, start);
      let L = this.sqlineLen(center, pt); 
      return L - r;
    }
    isLineStart(n){
      if( n==0 || n==this.seed.length-1 
        || this.seed[n-1][2]==6 || this.seed[n][2]==6){
        return true;
      }
      return false;
    }
    isOutofView(pt){
      let canvas = this.ctx.canvas;
      return pt[0] < 0 || pt[1] < 0 || pt[0] > canvas.width || pt[1] > canvas.height;
    }
    isCircleCenter(n){
      if(n < 0 || n >= this.seed.length) return false;
      let type = this.seed[n][2];
      return ( type | 0 ) != type;
    }
    highlightPt(n){
      let ctx = this.ctx;
      let pt = this.seed[n];
      ctx.save();
      ctx.fillStyle = 'rgba(66, 102, 245,.3)';
      ctx.beginPath();
      ctx.moveTo(pt[0], pt[1]);
      ctx.arc(pt[0], pt[1], 8, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.restore();
    }
}
/** Class for switching between modes
@param {div} mainDiv - The div in which you're drawing
@param {div} toolNum - The number of said division
@param {int} askWidth - The div width requested
@param {int} askHeight - The div height requested
*/
class SeedIterator{
  constructor(index, fractal, width = 600, height = 480, level = 1){
    //properties
    this.index = index;
    this.fractal = fractal;
    this.width = Math.max(600, width);
    this.height = Math.max(480, height);
    this.level = level;
    this.levelMax = 1;
    this.thickness = 1;
    this.thinner = false;
    //elements
    this.canvas, this.ctx;
    this.ctrlPanel, this.levelBtns;
    this.layout();
    this.setDimInfo();
  }
  layout(){
    this.setup_canvas();
    this.setup_ctrlPanel();
    this.setup_levelBtns();
    this.setup_dimInfo();
  }
  enableMode(){
    this.canvas.style.display = 'block';
    this.ctrlPanel.style.display = 'flex';
    this.fractal.setup_baseline();
    this.setLevelMax();
    this.setLevel(this.level,true);
    this.setDimInfo();
  }
  disableMode(){
    this.canvas.style.display = 'none';
    this.ctrlPanel.style.display = 'none';
  }
  setLevel(level, init = false){
    //draw fractal
    let newlevel = Math.min(level, this.levelMax);
    this.fractal.drawIter(this.ctx, newlevel);
    //highlight level btn
    let btns = this.levelBtns.children;
    let len = btns.length;
    if(level == this.level && (!init)) return;
    if(!init) {
      let oldBtnNum = Math.min(this.level, len) - 1;
      btns[oldBtnNum].classList.remove('active-iter');
    }
    let newBtnNum = Math.min(level, len) - 1;
    btns[newBtnNum].classList.add('active-iter');
    this.level = newlevel;
  }
  setup_canvas(){
    let elem = document.createElement('canvas');
    elem.id = 'ft-drawing-canvas-' + this.index;
    elem.className = 'canvas';
    elem.width = this.width;
    elem.height = this.height;
    this.canvas = elem;
    this.ctx = elem.getContext('2d');
  }
  setup_ctrlPanel(){
    let elem = document.createElement('div');
    elem.id = 'ft-drawing-ctrls-' + this.index;
    elem.className = 'ctrlPanel';
    this.ctrlPanel = elem;
  }
  setup_levelBtns(){
    let elem = document.createElement('div');
    elem.className = 'levelButtons';
    for (let i = 1; i <= 9; i++) {
      let btn = document.createElement('button');
      btn.className = i < 9 ? 'btn btn-iter':'btn btn-iter btn-iter-inf';
      btn.innerHTML = i < 9 ? 'Iter ' + i : '&infin; Inf';
      btn.id = this.index + btn.innerHTML;
      btn.addEventListener('click', function(inum) {
        let level = inum < 9 ? inum : 20;
        this.setLevel(level);
      }.bind(this, i));
      elem.appendChild(btn);
    }
    this.levelBtns = elem;
    this.ctrlPanel.appendChild(elem);
  }
  setup_dimInfo(){
    let elem = document.createElement('div');
    elem.style.marginLeft = '2em';
    let dim = this.dim == -1 ? '--' : this.dim;
    elem.innerHTML = "Dim = ";
    let span = document.createElement('span');
    span.innerHTML = dim;
    this.dimInfo = span;
    elem.appendChild(span);
    this.ctrlPanel.appendChild(elem);
  }
  setDimInfo(){
    let dim = this.fractal.getDim();
    this.dimInfo.innerHTML = dim==-1? "-" : dim;
  }
  setLevelMax(){
    this.levelMax = this.fractal.checkLevelMax();
  }
};
class SeedEditor{
  constructor(index, fractal, width = 600, height = 480, seedlist, seedName){
    //properties
    this.index = index;
    this.fractal = fractal;
    this.width = Math.max(600, width);
    this.height = Math.max(480, height);
    this.gridSize = 20;
    this.seedlist = seedlist;
    this.seedName = seedName;
    this.mousePos = [];
    this.rawPos = [];
    this.status = 0;
    this.segType = 4;
    this.repType = this.segType < 4? this.segtype : 0;
    this.selectedPt = -1;
    this.anchorPt = -1;
    this.circleSeg = 8;
    this.isInitiating = false;
    this.stackUndo = [];
    this.stackRedo = [];
    this.modes = {
      SELECT: 0, ADD: 1, DELETE: 2, PAINT: 3,  SHAPE: 4
    }
    this.tools = [ 
      { mode:"SELECT",name:"select",  title:"select & move points"},
      { mode:"ADD",   name:"addpt",   title:"draw new points & lines"},
      { mode:"DELETE",name:"deletept",title:"delete points"},
      { mode:"PAINT", name:"paint",   title:"apply color to segments"},
      { mode:"SHAPE", name:"circle",  title:"draw a circle"}
    ];
    this.instructions = {
      select_circle:'You can press "b" to break the circle into segments',};
    this.modetxt = ["move pt", "edit baseline", "add pt"]
    //elements
    this.canvas, this.bgctx, this.workctx,this.scaleMove;
    this.ctrlPanel;
    this.seedSel, this.modeSel, this.toolBar, this.segTypeSel, this.snapBox;
    this.repTypeBtn, this.segTypeBtn = [];
    this.undoBtn, this.redoBtn;
    this.message;
    this.layout();
    this.setSegType(this.segType,true);
    this.setMode(this.status,true);
    // this.drawBackground();
    this.interactions();
  }
  layout(){
    this.setup_canvas();
    this.setup_bottomPanel();
    
    this.setup_ctrlPanel();
    //inside ctrlPanel
    this.setup_seedPicker();
    this.setup_toolBar();
    this.setup_segTypeSel();
    this.setup_undo();
    this.setup_snapCheckbox();
    this.setup_message();
  }
  enableMode(){
    this.canvas.style.display = 'block';
    this.ctrlPanel.style.display = 'flex';
    this.fractal.ctx = this.workctx;
    this.fractal.drawSeed(this.workctx);
    this.setSegType(this.segType);
    this.setMode(this.modes.SELECT);
    this.anchorPt = -1;
    this.selectedPt = -1;
  }
  disableMode(){
    if(this.selectedPt!=-1) {
      this.fractal.deletePt(this.selectedPt);
    }
    this.canvas.style.display = 'none';
    this.ctrlPanel.style.display = 'none';
    this.fractal.drawSeed(this.workctx);
    this.anchorPt = -1;
    this.selectedPt = -1;
  }
  setup_canvas(){
    let elem = document.createElement('div');

    let canvas1 = document.createElement('canvas');
    canvas1.id = 'ft-editing-bgcanvas-' + this.index;
    canvas1.className = 'canvas';
    canvas1.width = this.width;
    canvas1.height = this.height;
    canvas1.style['z-index'] = 1;
    canvas1.style.position = 'absolute';
    canvas1.style.left = '0';
    canvas1.style.top = '0';

    let canvas2 = document.createElement('canvas');
    canvas2.id = 'ft-editing-workcanvas-' + this.index;
    canvas2.className = 'canvas';
    canvas2.width = this.width;
    canvas2.height = this.height;
    canvas2.style['z-index'] = 2;
    
    elem.appendChild(canvas1);
    elem.appendChild(canvas2);
    this.canvas = elem;
    this.bgctx = canvas1.getContext('2d');
    this.workctx = canvas2.getContext('2d');
  }
  setup_ctrlPanel(){
    let elem = document.createElement('div');
    elem.id = 'ft-editing-ctrlPanel-' + this.index;
    elem.className = 'ctrlPanel';
    this.ctrlPanel = elem;
  }
  setup_seedPicker(){
    let elem = document.createElement('div');
    elem.className = 'seedPicker';
    elem.style.marginRight = '2em';

    let select = document.createElement('select');
    select.id = 'seedSel'+this.index;
    
    let label = document.createElement('label');
    label.innerHTML = 'Seed:';
    label.htmlFor = select.id;

    let option = new Option("Custom", "create", true);
    select.appendChild(option);
    this.seedlist.forEach(name => {
      let option = new Option(StdSeeds[name].fullname, name);
      select.appendChild(option);
    });
    //init default value
    if(this.seedName.length > 0 && (this.seedlist.includes(this.seedName))) {
      select.value =  this.seedName;
    }
    //set behaviour
    select.onchange = function(e){
      this.setSeed(e.target.value,'name');
    }.bind(this);

    elem.appendChild(label);
    elem.appendChild(select);
    this.seedSel = select;
    this.ctrlPanel.appendChild(elem);
  }
  setup_toolBar(){
    let elem = document.createElement('div');
    this.tools.forEach(item => {
      let btn = document.createElement('button');
      btn.className = "btn btn-default btn-tool";
      btn.title = item.title;
      let icon = document.createElement('img');
      icon.width = "24";
      icon.style.opacity = ".54";
      icon.src = "tool_" + item.name +".svg";
      btn.appendChild(icon);
      if(item.mode == 'ADD' || item.mode == 'PAINT'){
        btn.style.position = 'relative';
        let color = document.createElement('div');
        color.className = ('color-selected');
        btn.appendChild(color);
      }
      else if(item.mode == 'SHAPE'){
        btn.style.position = 'relative';
        let select = this.setup_circleSel();
        btn.appendChild(select);
      }
      btn.onclick = function(mode){
        this.setMode(mode);
      }.bind(this,this.modes[item.mode]);
      elem.appendChild(btn);
    });
    this.toolBar = elem;
    this.ctrlPanel.appendChild(this.toolBar);
  }
  setup_segTypeSel(){
    let elem = document.createElement('div');
    elem.className = "segTypeSel";
    
    //the dropdown panel
    let repBtns = document.createElement('div');
    repBtns.className = 'repSel-list';
    repBtns.style.display = 'none';
    
    let otherBtns = document.createElement('span');
    lineTypes.forEach( (item,index)=> {
      let btn = document.createElement('button');
      let icon = document.createElement('div');
      icon.className = 'icon-color';
      icon.style.backgroundColor = item.color;
      btn.appendChild(icon);
      btn.className = "btn btn-default";
      btn.title = item.title;
      btn.onclick = function(type){
        this.setSegType(type);
      }.bind(this,index);

      if(item.rep){
        let span = document.createElement('span');
        span.innerText = item.title;
        btn.appendChild(span);
        repBtns.appendChild(btn);
      } else {
        otherBtns.appendChild(btn);
      }
      
      this.segTypeBtn.push(btn);
    });

    //the dropdown selection
    let repSel = this.setup_segTypeDropdown();
    repSel.appendChild(repBtns);
    elem.appendChild(repSel);
    elem.appendChild(otherBtns);
    this.segTypeSel = elem;
    this.ctrlPanel.appendChild(elem);
  }
  setup_segTypeDropdown(){
    //dropdown
    let elem = document.createElement('span');
    //dropdown - replication btn
    let btnColor = document.createElement('button');
    btnColor.className = 'btn btn-default';
    let iconColor = document.createElement('div');
    iconColor.className = 'icon-color repType';
    iconColor.style.backgroundColor = lineTypes[this.repType].color;
    btnColor.appendChild(iconColor);
    btnColor.title = lineTypes[this.repType].title;
    btnColor.onclick = (e)=>{
      this.setSegType(this.repType);
    }
    //dropdown - toggle list
    let btnDrop = document.createElement('button');
    btnDrop.className = 'btn btn-default';
    let iconDrop = document.createElement('img');
    iconDrop.width = 24;
    iconDrop.src = 'icon_arrow_down.svg';
    btnDrop.appendChild(iconDrop);
    btnDrop.title = "more replication types"
    btnDrop.onclick = (e)=>{
      let elem = e.currentTarget.parentElement.querySelector('.repSel-list');
      toggle_e(elem);
    };
    //layout
    this.repTypeBtn = btnColor;
    elem.appendChild(btnColor);
    elem.appendChild(btnDrop);
    return elem;
  }
  close_segDropdown(){
    let panel = this.segTypeSel.querySelector('.repSel-list');
    panel.style.display= 'none';
  }
  setup_circleSel(){
    let elem = document.createElement('div');
    elem.className = 'circleSel';
    elem.style.display = 'none';
    let select = document.createElement('select');
    let label = document.createElement('label');
    let opts = [
      {txt: '8',value: 8},
      {txt: '16',value: 16},
    ];
    select.id = 'circle-select-' + this.index;
    label.innerHTML = 'Seg#: ';
    label.htmlFor = select.id;
    opts.forEach(item => {
      let option = document.createElement('option');
      option.innerHTML = item.txt;
      option.value = item.value;
      select.appendChild(option);
    });
    select.onchange = (e)=>{
      this.circleSeg = e.target.value;
    };
    elem.appendChild(label);
    elem.appendChild(select);
    this.circleSel = elem;
    return elem;
  }
  setup_undo(){
    let elem = document.createElement('div');
    //undo
    let btn_undo = document.createElement('button');
    btn_undo.className = "btn btn-default btn-tool";
    btn_undo.title = "undo";
    let icon_undo = document.createElement('img');
    icon_undo.width = "24";
    icon_undo.style.opacity = ".54";
    icon_undo.src = "tool_undo.svg";
    btn_undo.appendChild(icon_undo);
    
    btn_undo.onclick = ()=>{
      this.undo();
    };
    //redo
    let btn_redo = document.createElement('button');
    btn_redo.className = "btn btn-default btn-tool";
    btn_redo.title = "redo";
    let icon_redo = document.createElement('img');
    icon_redo.width = "24";
    icon_redo.style.opacity = ".54";
    icon_redo.src = "tool_redo.svg";
    btn_redo.appendChild(icon_redo);
    
    btn_redo.onclick = ()=>{
      this.redo();
    };
    elem.appendChild(btn_undo);
    elem.appendChild(btn_redo);

    if(this.stackUndo.length == 0) btn_undo.disabled = true;
    if(this.stackRedo.length == 0) btn_redo.disabled = true;

    this.undoBtn = btn_undo;
    this.redoBtn = btn_redo;
    this.ctrlPanel.appendChild(elem);
  }
  setup_snapCheckbox(){
    let elem = document.createElement('div');
    elem.className = "snapCheckbox checkbox";
    elem.style.position = 'absolute';
    elem.style.right = '1em';
    elem.style.top = '4.5em';
    elem.style['z-index'] = 99;
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = false;
    input.id = 'snap'+ this.index;
    input.onchange = (e) => {
      if(e.target.checked) this.drawBackground();
      else this.clearBackground();
    };

    let label = document.createElement('label');
    label.htmlFor = input.id;
    label.innerHTML = 'Snap to grid';
    
    elem.appendChild(input);
    elem.appendChild(label);
    this.snapBox = input;
    this.ctrlPanel.appendChild(elem);
  }
  setup_bottomPanel(){
    let elem = document.createElement('div');
    elem.className = 'scaleMoveBtns';
    let child1 = this.setup_scaleBtns();
    let child2 = this.setup_compassBtns();
    elem.appendChild(child1);
    elem.appendChild(child2);
    this.canvas.appendChild(elem);
  }
  setup_scaleBtns(){
    let elem = document.createElement('div');
    elem.className = 'scaleBtns';
    let up = document.createElement('button');
    up.innerHTML = 'Expand';
    up.className = 'btn btn-default';
    up.onclick = ()=>{
      this.snapBox.checked = false;
      let arg = this.fractal.scale(1.1);
      if(arg!=false){
        this.addCommand(this.fractal.scale, arg);
        this.fractal.drawSeed(this.workctx);
      }
    };
    let down = document.createElement('button');
    down.innerHTML = 'Shrink';
    down.className = 'btn btn-default';
    down.onclick = ()=>{
      this.snapBox.checked = false;
      let arg = this.fractal.scale(0.9);
      if(arg!=false){
        this.addCommand(this.fractal.scale, arg);
        this.fractal.drawSeed(this.workctx);
      }
    };
    elem.appendChild(down);
    elem.appendChild(up);
    return elem;
  }
  setup_compassBtns(){
    let elem = document.createElement('div');
    elem.className = 'compass';
    let step = 20;
    let compass = [
      {name:'up',   content:'&uarr;',title:'Move Up',   dx: 0,  dy:-step},
      {name:'left', content:'&larr;',title:'Move Left', dx:-step, dy: 0 },
      {name:'down', content:'&darr;',title:'Move Down', dx: 0,  dy: step},
      {name:'right',content:'&rarr;',title:'Move Right',dx: step, dy: 0 }
    ];
    compass.forEach(item=>{
      let btn = document.createElement('button');
      btn.innerHTML = item.content;
      btn.title = item.title;
      btn.className = 'btn btn-default';
      btn.onclick = ()=>{
        let arg = this.fractal.move(item.dx,item.dy);
        if( arg != false ) {
          this.addCommand(this.fractal.move, arg);
          this.fractal.drawSeed(this.workctx);
        }
      };
      elem.appendChild(btn);
    });
    return elem;
  }
  setup_message(){
    let elem = document.createElement('div');
    elem.className = "message";
    elem.style.display = "none";
    let span = document.createElement('span');
    span.className = "message-text"
    let icon = document.createElement('img');
    icon.src = "icons/close.svg";
    icon.width = 14;
    icon.style.marginLeft = '1em';
    icon.onclick = (e)=>{
      e.target.parentElement.style.display = 'none';
    };
    
    elem.appendChild(span);
    elem.appendChild(icon);
    this.message = elem;
    this.ctrlPanel.appendChild(elem);
  }
  setMode(mode, init = false){
    if( mode == this.status && !init) return;
    if( this.isInitiating && mode!=this.modes.ADD) return;
    if(!init){//clear old highlight
      let btn = this.toolBar.querySelectorAll('button')[this.status];
      if(this.status == this.modes.SHAPE) this.circleSel.style.display = 'none';
      btn.classList.remove('active-edit');
      btn.querySelector('img').style.opacity = '.54';
      if(btn.querySelector('.color-selected')){
        btn.querySelector('.color-selected').style.backgroundColor = 'transparent';
      }
    }
    
    let btn = this.toolBar.querySelectorAll('button')[mode];
    btn.classList.add('active-edit');
    btn.querySelector('img').style.opacity = '1.0';
    if(btn.querySelector('.color-selected')){
      btn.querySelector('.color-selected').style.backgroundColor = lineTypes[this.segType].color;
    }
    if(mode == this.modes.SHAPE) this.circleSel.style.display = 'block';
    //disable segType selection for DELETE&SELECT mode
    let flag = mode == this.modes.DELETE || mode == this.modes.SELECT;
    this.segTypeSel.querySelectorAll('button').forEach(btn=>{
      btn.disabled = flag;
    });
    
    this.status = mode;
    if(this.selectedPt!=-1) {
      this.fractal.deletePt(this.selectedPt);
      this.fractal.drawSeed(this.workctx);
    }
    this.selectedPt = -1;
    this.anchorPt = -1;
  }
  clearBackground(){
    this.bgctx.clearRect(0, 0, this.bgctx.canvas.clientWidth, this.bgctx.canvas.clientHeight);
  }
  drawBackground(type = 2){
    let ctx = this.bgctx;
    let cell = this.gridSize;
    let lineWidth = 1;
    let count_x = Math.floor(ctx.canvas.width / cell);
    let count_y = Math.floor(ctx.canvas.height / cell);
    ctx.save();
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    if(type == 1){//style: grid points
      let a = lineWidth / 2;
      let w = 3;
      for (let x = 1; x < count_x ; x++) {
        for (let y = 1; y < count_y; y++) {
          ctx.moveTo(x * cell - w, y * cell + a);
          ctx.lineTo(x * cell + w + lineWidth, y * cell + a);
          ctx.moveTo(x * cell + a, y * cell - w);
          ctx.lineTo(x * cell + a, y * cell + w + lineWidth);
        }
      }
    } else if(type == 2){
      let width = ctx.canvas.width;
      let height = ctx.canvas.height;
      for(let i = 1; i < count_y; i++) {
        ctx.moveTo( 0 , i * cell);
        ctx.lineTo( width, i * cell);
      }
      for(let i = 1; i < count_x; i++) {
        ctx.moveTo( i * cell, 0);
        ctx.lineTo( i * cell, height);
      }
    }
    ctx.stroke();
    ctx.restore();
  }
  interactions(){
    let canvas = this.workctx.canvas;
    canvas.onmousemove = this.handleMouseMove.bind(this);
    canvas.onclick = this.handleClick.bind(this);
    canvas.onmouseup;
    canvas.onmousedown;
    document.addEventListener('keydown',this.handleKeyDown.bind(this));
    canvas.addEventListener('dblclick',this.handleDblclick.bind(this));
  }
  handleMouseMove(e){
    if( this.status == this.modes.SELECT && this.selectedPt != -1){
      this.getMousePos(e);
      let arg = this.fractal.movePt(this.selectedPt,this.mousePos);
      this.fractal.drawSeed(this.workctx);
      this.fractal.highlightPt(this.selectedPt);
      this.addCommand(this.fractal.movePt, arg);
    } 
    else if(this.status == this.modes.ADD && this.anchorPt != -1){
      this.getMousePos(e);
      if(this.selectedPt == -1){
        let pos = [this.mousePos[0]+1,this.mousePos[1]+1]
        let anchor = this.anchorPt;
        let arg = this.fractal.addPt(pos, anchor, this.segType);
        let index = arg[3];
        
        if( index != -1 ){
          this.selectedPt = index;
          this.fractal.drawSeed(this.workctx, this.isInitiating);
          this.addCommand(this.fractal.addPt, arg);
        } else {
          console.log('add failed');
          this.anchorPt = -1;
        }
      }
      else {
        let arg = this.fractal.movePt(this.selectedPt,this.mousePos);
        this.addCommand(this.fractal.movePt, arg);
        this.fractal.drawSeed(this.workctx, this.isInitiating);
        this.fractal.highlightPt(this.selectedPt);
      }
     
    } else if(this.status == this.modes.SHAPE && this.anchorPt != -1){
      this.getMousePos(e);
      if(this.selectedPt == -1){
        let pos = [this.mousePos[0]+1,this.mousePos[1]+1];
        let type =  this.segType + this.circleSeg*0.01;
        let arg = this.fractal.addPt(pos, this.anchorPt, type);
        let index = arg[3];
        if( index != -1 ){
          this.selectedPt = index;
          this.addCommand(this.fractal.addPt, arg);
          this.fractal.drawSeed(this.workctx, this.isInitiating);
        } else {
          this.fractal.deletePt(this.anchorPt);
          this.anchorPt = -1;
        }
      }
      else {
        let arg = this.fractal.movePt(this.selectedPt,this.mousePos);
        this.addCommand(this.fractal.movePt, arg);
        this.fractal.drawSeed(this.workctx, this.isInitiating);
        this.fractal.highlightPt(this.selectedPt);
      }
    }
    
  }
  handleClick(e){
    this.getMousePos(e);
    if(this.status == this.modes.SELECT || this.status == this.modes.BASE){//MODE-MOVE: move pts, click to select pt
      let editingbase = this.status == this.modes.BASE; 
      if(this.selectedPt == -1) {  //pick up pt
        let n = this.fractal.selectPt(this.rawPos, editingbase);
        this.selectedPt = n;
        if(n != -1 && this.fractal.isCircleCenter(n)){//select circle center
          this.message.querySelector('.message-text').innerHTML = this.instructions.select_circle;
          this.message.style.display = 'block';
        } else if(this.message.style.display == 'block') {
          this.message.querySelector('.message-text').innerHTML = "";
          this.message.style.display = 'none';
        }
      } else { //drop pt
        this.selectedPt = -1; 
        this.fractal.drawSeed(this.workctx); //clear highlight
        if(this.message.style.display == 'block') {
          this.message.querySelector('.message-text').innerHTML = "";
          this.message.style.display = 'none';
        }
        return;
      }
    } else if(this.status == this.modes.PAINT){ // MODE-PAINT: set line types
      let n = this.fractal.selectLn(this.rawPos);
      if(n != -1) {
        let arg = this.fractal.setLnType(n,this.segType);
        this.fractal.drawSeed(this.workctx);
        this.addCommand(this.fractal.setLnType, arg);
      } 
      return;
    } else if(this.status == this.modes.ADD){ //MODE-ADD: add pts, click to add/delete pt
      if(this.anchorPt == -1){
        let pt = this.fractal.selectPt(this.mousePos);
        let ln = this.fractal.selectLn(this.mousePos);
        if( pt != -1 && this.fractal.isLineStart(pt) ){ //start from existing pts
          this.anchorPt = pt;
        } else if( ln != -1 ){ // add pt to existing line
          let arg = this.fractal.addPt(this.mousePos,ln);
          if(arg!=false){
            this.addCommand(this.fractal.addPt, arg);
            this.fractal.drawSeed(this.workctx);
          }
          
        } else { // start new lines
          let index = this.fractal.addPt(this.mousePos,'',6);
          this.anchorPt = index;
          this.fractal.drawSeed(this.workctx, this.isInitiating);

          let arg = [this.mousePos,'',6, index, false];
          this.addCommand(this.fractal.addPt, arg);
        } 
      } else { //add on to new line
        let index = this.selectedPt;
        this.anchorPt = index;
        if(index == -1 && this.isInitiating) this.isInitiating = false;
        this.fractal.drawSeed(this.workctx, this.isInitiating);
      }
      this.selectedPt = -1;
    } else if(this.status == this.modes.DELETE){ //MODE-DELETE: delete existing pts, click to select & delete
      let pt = this.fractal.selectPt(this.rawPos);
      if(pt != -1 ){
        let arg = this.fractal.deletePt(pt);
        if( arg != false ) {
          this.addCommand(this.fractal.deletePt, arg);
        }
        this.fractal.drawSeed(this.workctx);
        this.selectedPt = -1;
      }
    } else if(this.status == this.modes.SHAPE){ //MODE-SHAPE: add circles to seed
      if(this.anchorPt == -1){ // set circle center
        let index = this.fractal.addPt(this.mousePos);
        this.anchorPt = index;
        let arg = [this.mousePos, '', 6, index, false];
        this.addCommand(this.fractal.addPt, arg);
      } else { // end draw
        this.fractal.drawSeed(this.workctx);
        this.anchorPt = -1;
        this.selectedPt = -1; 
      }
    }
  }
  handleKeyDown(e) {
    if (event.isComposing || event.keyCode === 229) {
      return;//ignore composition keydown events
    }
    if(this.status == this.modes.SELECT && this.selectedPt != -1){//press delete/backspace to delete pt
      if(e.key == "Backspace" || e.key == "Delete") {
        let arg = this.fractal.deletePt(this.selectedPt);
        if(arg!=false) {
          this.addCommand(this.fractal.deletePt, arg);
          this.fractal.drawSeed(this.workctx);
          this.selectedPt = -1;
        }
      }
      if(e.key == "b" || e.key == "B") {
        let n = this.selectedPt;
        if(this.fractal.isCircleCenter(n)) {
          let arg = this.fractal.breakcircle(n);
          if(arg!= false){
            this.addCommand(this.fractal.breakcircle, arg);
            this.fractal.drawSeed(this.workctx);
            this.selectedPt = -1;
          }
        }
      }
    } else if(this.status == this.modes.ADD && this.selectedPt != -1){
      if(e.code == "Escape" || e.code == "Space") {
        this.fractal.deletePt(this.selectedPt);
        if(!this.isInitiating) this.stackUndo.pop();
        if(this.isInitiating) {
          this.isInitiating = false;
        }
        this.fractal.drawSeed(this.workctx, this.isInitiating);
        this.anchorPt = -1;
        this.selectedPt = -1;
      }
    } 
  }
  handleDblclick(e) {
    if(this.status == this.modes.SELECT && this.selectedPt == -1){
      //double click on line to add pt to it
      this.getMousePos(e);
      let n = this.fractal.selectLn(this.rawPos);
      if(n != -1) {
        let arg = this.fractal.addPt(this.mousePos,n);
        this.addCommand(this.fractal.addPt, arg);
        this.fractal.drawSeed(this.workctx, this.isInitiating);
      } 
    } else if(this.status == this.modes.ADD && this.selectedPt != -1){
      //double click to end drawing
      if(this.isInitiating) {
        this.isInitiating = false;
      }
      this.fractal.drawSeed(this.workctx, this.isInitiating);
      this.anchorPt = -1;
      this.selectedPt = -1;
    }
  }
  setSeed(seed, method){
    if(method == 'name') {
      this.fractal.clearPts();
      this.clearStack();
      if(seed in StdSeeds) {
        this.setMode(this.modes.SELECT);
        this.fractal.setSeedByName(seed);
      } else if(seed == 'create') {
        this.setMode(this.modes.ADD);
        this.isInitiating = true;
      }
      this.fractal.drawSeed(this.workctx, this.isInitiating);
      return;
    }
  }
  setSegType(type,init = false){
    this.close_segDropdown();
    if(!init && type == this.segType) return;
    if(!lineTypes[type].rep){
      this.repTypeBtn.classList.remove('active-type');
    } else if(this.repType != this.segType){
      this.repTypeBtn.classList.add('active-type');
    }
    if(!init && type != this.repType && lineTypes[type].rep){//new rep type
      let n = this.repType;
      this.segTypeBtn[n].classList.remove('active-type');
      this.repTypeBtn.querySelector('div').style.backgroundColor = lineTypes[type].color;
      this.repTypeBtn.title = lineTypes[type].title;
      this.repType = type;
    }
    
    if(!init && this.segType > 3){
      let n = this.segType;
      let oldbtn = this.segTypeBtn[n];
      oldbtn.classList.remove('active-type');
    }

    this.segType = type;
    let newbtn = this.segTypeBtn[this.segType];
    newbtn.classList.add('active-type');
    if(init && this.segType != this.repType){
      this.segTypeBtn[this.repType].classList.add('active-type');
    }

    let tool = this.toolBar.querySelectorAll('button')[this.status];
    if(tool.querySelector('.color-selected')){
      tool.querySelector('.color-selected').style.backgroundColor = lineTypes[this.segType].color;
    }
    
  }
  getMousePos(e){
    let workrect = this.workctx.canvas.getBoundingClientRect();
    let x = e.clientX - workrect.left;
    let y = e.clientY - workrect.top;
    this.rawPos = [ x, y];
    if(this.snapBox.checked) {
      let cell = this.gridSize;
      x = cell * ((0.5 + x/cell) << 0);
      y = cell * ((0.5 + y/cell) << 0);
    }
    this.mousePos = [ x, y ];
  }
  //undo redo commands
  clearStack(){
    this.stackUndo = [];
    this.stackRedo = [];
    this.undoBtn.disabled = true;
    this.redoBtn.disabled = true;
  }
  addCommand(func, arg){
    if(this.isInitiating) return;
    let depth = 20;
    let command = {method:func, arg:arg};
    if(this.stackUndo.length > 0){
      let top = this.stackUndo.pop();
      if(top.method == func)
        if(func == this.fractal.movePt && top.arg[0] == arg[0]){
          command.arg[2] = top.arg[2];
        } else if(func == this.fractal.move) {
          command.arg[0] += top.arg[0];
          command.arg[1] += top.arg[1];
        } else if(func == this.fractal.scale) {
          command.arg[0] *= top.arg[0];
        } else {
          this.stackUndo.push(top);
        }
      else if(top.method == this.fractal.addPt 
        && func == this.fractal.movePt && top.arg[3] == arg[0]
        && this.status != this.modes.SELECT){
          top.arg[0] = arg[1];
          command = top;
      }
      else this.stackUndo.push(top);
    }
    this.stackUndo.push(command);
    
    if(this.undoBtn.disabled) this.undoBtn.disabled = false;
    if(this.stackUndo.length > depth) this.stackUndo.shift();
    if(this.stackRedo.length > 0){ 
      this.stackRedo = [];
      this.redoBtn.disabled = true;
    }
  }
  undo(){
    if(this.stackUndo.length==0) return;
    let command = this.stackUndo.pop();
    let arg = command.arg;
    this.stackRedo.push(command);
    if(!arg.pop()) arg.push(true);
    command.method.apply(this.fractal, command.arg);
    this.fractal.drawSeed(this.workctx);

    if(this.redoBtn.disabled) this.redoBtn.disabled = false;
    if(this.stackUndo.length == 0) this.undoBtn.disabled = true;
  }
  redo(){
    if(this.stackRedo.length == 0) return;
    let command = this.stackRedo.pop();
    let arg = command.arg;
    this.stackUndo.push(command);
    if(arg.pop()) arg.push(false);
    command.method.apply(this.fractal, command.arg);
    this.fractal.drawSeed(this.workctx);

    if(this.undoBtn.disabled) this.undoBtn.disabled = false;
    if(this.stackRedo.length == 0) this.redoBtn.disabled = true;
  }
};
class Software {
  constructor(root, index) {
    //properties
    this.main = root;
    this.params = root.dataset;
    this.index = index;
    this.modes = [];
    this.currentMode = 0;//0 for edit mode
    this.width = 800;
    this.height = 600;
    this.seedlist = ['koch','sprout','tree'];
    this.seed = 'koch';
    this.level = 1;
    //element
    this.modeSel, this.loadSave, this.ctrlPanelDiv, this.canvasDiv, this.helpPanel;
    this.editCanvas, this.iterCanvas;
    this.handleParams();
    this.fractal = new Fractal(this.seed,1);
    this.iterator = new SeedIterator(this.index, this.fractal, this.width, this.height, this.level);
    this.editor = new SeedEditor(this.index, this.fractal, this.width, this.height, this.seedlist, this.seed);
    this.iterator.disableMode();
    this.editor.disableMode();
    this.layout();
  }
  handleParams(){
    if(this.params.width!=undefined) this.width = Math.max(800, this.params.width);
    if(this.params.height!=undefined) this.height = Math.max(600, this.params.height);
    if(this.params.level!=undefined) this.level = this.params.level;
    if(this.params.seedlist!=undefined) this.seedlist = this.params.seedlist.split(',');
    if (this.params.seed!=undefined) {
      try {
        function error(data) {
          console.log(data);
        }
        let myself = this;
        if (Number.isInteger(Number(this.params.seed))) {
          cloud.loadProject(myself.params.seed, myself.load.bind(myself), error);
        } else {
          this.seed = this.params.seed;
          function testQueryStringExist(queryKey) {
            var field = queryKey || 'q';
            var url = window.location.href;
            if(url.indexOf('?' + field + '=') != -1)
                return true;
            else if(url.indexOf('&' + field + '=') != -1)
                return true;
            return false
          }
          function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
          }
          let queryKeyword = 'project';
          if (testQueryStringExist(queryKeyword)) {
            let projNum = getParameterByName(queryKeyword);
            try {
              if (Number.isInteger(Number(projNum))) {
                cloud.loadProject(projNum, myself.load.bind(myself), error);
              }
            } catch (err) {
              // pass
            }
          }
          else {
            try {
              if (Number.isInteger(Number(config.project.id))) {
                cloud.loadProject(config.project.id, myself.load.bind(myself), error);
              }
            }
            catch (err) {
              // config is not defined
            }
          }
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    if(this.params.mode!=undefined && (this.params.mode.toLowerCase()=='draw')) this.currentMode = 1;
  }
  layout(){
    this.setup_loadSave();
    this.setup_modeSel();
    this.setup_ctrlPanelDiv();
    this.setup_canvasDiv();
    // this.setup_helpPanel();
  }
  setup_loadSave(){
    let elem =  document.createElement('div');
    elem.className = 'loadSave';    
    // load files
    let selectFile = document.createElement('input');
    selectFile.type = 'file';
    selectFile.id = 'selectFile';
    selectFile.accept = '.json';
    selectFile.onchange = (e) => {
      this.loadLocally(e);
    };
    // load files from cloud
    let loadFromCloud = document.createElement('button');
    loadFromCloud.className = 'btn btn-default';
    loadFromCloud.innerHTML = 'Load From Cloud';
    loadFromCloud.onclick = (e) => {
      this.loadRemotely(e);
    };
    // save to cloud
    let saveToCloud = document.createElement('button');
    saveToCloud.className = 'btn btn-default';
    saveToCloud.innerHTML = 'Save To Cloud';
    saveToCloud.onclick = (e) => {
      this.saveRemotely(e);
    };
    // save files
    let save = document.createElement('button');
    save.className = 'btn btn-default';
    save.innerHTML = 'Save To File';
    save.onclick = (e) => {
      this.saveLocally(e);
    };

    elem.appendChild(selectFile);
    elem.appendChild(loadFromCloud);
    elem.appendChild(saveToCloud);
    elem.appendChild(save);

    this.main.appendChild(elem);
  }
  setup_modeSel(){
    let elem = document.createElement('div');
    elem.id = 'ft-modesel-' + this.index;
    elem.className = 'modeSelDiv';
    this.modeSel = elem;
    this.addMode("edit",this.editor);
    this.addMode("iterate",this.iterator);
    this.setMode(this.currentMode, true);
    this.main.appendChild(elem);
  }
  setup_ctrlPanelDiv(){
    let elem = document.createElement('div');
    elem.id = 'ft-ctrlpanel-' + this.index;
    elem.className = 'ctrlPanelDiv';
    elem.appendChild(this.iterator.ctrlPanel);
    elem.appendChild(this.editor.ctrlPanel);
    this.ctrlPanelDiv = elem;
    this.main.appendChild(elem);
  }
  setup_canvasDiv(){
    let elem = document.createElement('div');
    elem.id = 'ft-canvases-' + this.index;
    elem.className = 'canvasDiv';
    elem.appendChild(this.iterator.canvas);
    elem.appendChild(this.editor.canvas);
    this.canvasDiv = elem;
    this.main.appendChild(elem);
  }
  setup_helpPanel(){
    let link = document.createElement('a');
    link.innerHTML = "Help";
    link.style.marginLeft = "1em";
    link.onclick = function() {
      toggle_e(this.helpPanel);
    }.bind(this);

    let panel = document.createElement('div');
    panel.className = "tutor help-panel";
    panel.innerHTML = '<h3>Instructions</h3>\
    <ul>\
        <li><strong>Change mode - </strong>Click "Edit Mode" to enter the edit mode.</li>\
        <li><strong>Change line color - </strong>Select a color at the top then click on the line you wish to change.</li>\
        <li><strong>Move a node - </strong>Single click a node to move it around and click again to place it, or click and hold on a node and drag it to the place you want.</li>\
        <li><strong>Insert a node - </strong>Double click on a line between nodes to insert a new node.</li>\
        <li><strong>Delete a node - </strong>Click a node and press Delete/Backspace Key.</li>\
    </ul>';
    let icon = document.createElement('img');
    icon.src = 'icons/close.svg';
    icon.className = 'icon-close';
    icon.onclick = function(){
      this.helpPanel.style.display = "none";
    }.bind(this);

    panel.appendChild(icon);
    this.modeSel.appendChild(link);
    this.helpPanel = panel;
    this.main.appendChild(panel);
  }
  addMode(name, modeInstance){
    let elem = document.createElement('button');
    elem.innerHTML = (name + " mode").replace(/(^\w|\s\w)/g, m => m.toUpperCase());//cap first letter
    elem.id = name+"Mode"+this.index;
    elem.className = 'btn btn-mode';
    elem.onclick = function(modeNum) {
      this.setMode(modeNum);
    }.bind(this, this.modes.length);
    this.modes.push(modeInstance);
    this.modeSel.appendChild(elem);
  }
  setMode(num, init = false){
    if(init || num != this.currentMode){
      if(!init) {
        let n = this.currentMode;
        this.modes[n].disableMode();
        this.modeSel.children[n].classList.remove('active-mode');
      } 
      this.modes[num].enableMode();
      this.modeSel.children[num].classList.add('active-mode');
      this.currentMode = num;
    }
  }
  //load & save
  loadLocally(evt){
    let file = evt.target.files[0];
    if (!file.name.toLowerCase().endsWith('.json')) {
      console.log('bad file type');
      return;
    }
    let reader = new FileReader();
    let myself = this;
    reader.onload = myself.load.bind(myself);
  
    reader.readAsText(file);
  }
  load(input){
    try {
      if(input.target.result) input = input.target.result;
    }
    catch (err) {
  
    }
    let data = JSON.parse(input);
    this.fractal.initFromSeed(data.seed);
    this.fractal.drawSeed(this.editor.workctx,true);
    this.iterator.setDrawWidth(data.thickness);
    this.editor.disableMode();
    this.iterator.enableMode();
    this.thicknessType = data.thicknessType;
    if (this.thicknessType == 1) {
      document.getElementById('thicknessBox' + this.instanceNum).checked = true;
    } else {
      document.getElementById('thicknessBox' + this.instanceNum).checked = false;
    }
    document.getElementById('EditMode' + this.instanceNum).click();
    document.getElementById('IterateMode' + this.instanceNum).click();
    if (data.itNumber < 9) {
      document.getElementById(this.instanceNum + 'Iter ' + data.itNumber).click();
    } else {
      document.getElementById(this.instanceNum + '~Inf').click();
    }
  }
  loadRemotely(evt){
    let myself = this;
    cloud.getUser(isLoggedIn, failedLoggedIn);
    let attemptedLogin = false;
  
    function isLoggedIn(data) {
      if (data.id) {
        getProjectData(data);
      } else if (!attemptedLogin) {
        attemptedLogin = true;
        cloud.loginPopup(isLoggedIn, failedLoggedIn);
      } else {
        alert('Bad Username or Password');
      }
    }
  
    function failedLoggedIn(data) {
      console.log(data);
      alert('Error logging in');
    }
  
    function getProjectData(data) {
      cloud.listProject(data.id, displayList, error)
    }
  
    function notLoggedIn() {
      cloud.loginPopup(getProjectData, failedLoggedIn);
    }
  
    function failedLoggedIn(data) {
      console.log(data);
      alert('Failed To Log In');
    }
  
    function displayList(data) {
      var dialogDiv = $('#projectListDialog');
      dialogDiv.dialog('destroy');
      projectList = document.getElementById('projectList');
      while (projectList.firstChild) {
        projectList.removeChild(projectList.firstChild);
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].application == applicationID) {
          let listItem = document.createElement('li');
          listItem.class = 'ui-widget-content';
          listItem.innerHTML = data[i].name;
          listItem.option = data[i].id;
          projectList.appendChild(listItem);
        }
      }
      $('#projectList').selectable();
      dialogDiv.dialog({
        modal: true,
        buttons: [{
            text: "Open",
            class: 'Green',
            click: function() {
              $(this).dialog("close");
              selected = projectList.getElementsByClassName('ui-selected');
              if (selected[0]) {
                cloud.loadProject(selected[0].option, myself.load.bind(myself), error);
              }
            }
          },
          {
            text: "Cancel",
            class: 'Red',
            click: function() {
              $(this).dialog("close");
            }
          }
        ]
      });
    }
  
    function error(data) {
      console.log(data);
      alert('Failed To Get Project');
    }
    
  }
  saveLocally(){
    let def = this.fractal.name.length>0? this.fractal.length:'<name goes here>';
    let name = prompt('Please enter the name of the pattern', def);
    if (name === null) {
      return;
    } 
    this.fractal.name = name;
    let data = {
      'fullname': name,
      'seed': this.fractal.seed,
      'baseline': this.fractal.baseline,
      'itNumber': this.iterator.level,
      'thickness': Number(this.iterator.thickness),
      'thicknessType': this.iterator.thicknessType,
    };
    let blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    });
    saveAs(blob, name + '.json', false);
  }
  saveRemotely(){
      cloud.getUser(isLoggedIn, failedLoggedIn)
      let myself = this;
      let name = null;
      let saveData = null;
      let attemptedLogin = false;
    
      function isLoggedIn(data) {
        if (data.id) {
          startSaving();
        } else if (!attemptedLogin) {
          attemptedLogin = true;
          cloud.loginPopup(isLoggedIn, failedLoggedIn);
        } else {
          alert('Bad Username or Password');
        }
      }
    
      function failedLoggedIn(data) {
        console.log(data);
        alert('Error logging in');
      }
    
      function startSaving() {
        name = prompt('Please enter the name of the pattern',
          '<name goes here>');
        if (!name) return;
        saveData = {
          'fullname': name,
          'seed': myself.seed,
          'itNumber': myself.currLevels,
          'thickness': Number(myself.drawThickness.value),
          'thicknessType': myself.thicknessType,
        };
        myself.canvas.toBlob(saveImg)
      }
    
      function saveImg(blob) {
        let formData = new FormData();
        formData.append('file', blob);
        cloud.saveFile(formData, savedImage, error);
      }
    
      function savedImage(data) {
        myself.cloudImg = data.id
        saveSeed();
      }
    
      function error(data) {
        console.log(data);
        alert('Failed Saving File To Cloud');
      }
    
      function saveSeed() {
        let blob = new Blob([JSON.stringify(saveData, null, 2)], {
          type: 'application/json',
        });
        let formData = new FormData();
        formData.append('file', blob);
        cloud.saveFile(formData, savedSeed, error);
      }
    
      function savedSeed(data) {
        myself.cloudSeed = data.id
        createProject();
      }
    
      function createProject(data) {
        cloud.createProject(name, window.applicationID, myself.cloudSeed,
          myself.cloudImg, createdProject, error);
      }
    
      function createdProject(data) {
        myself.cloudproject = data.id
        alert('Success');
      }
  }
}
let fractaltoolInstances = null;
/** Starts the fractal tool on load. */
function fractalToolInit() {
  let tools = document.querySelectorAll('.fractaltool');
  fractaltoolInstances = [];
  for (let i = 0; i < tools.length; i++) {
    fractaltoolInstances[i] = new Software(tools[i], i);
  }
}

 //onload
window.addEventListener('load', function(evt) {
  fractalToolInit();
});

CloudSaver.prototype.loginPopup = function(callBack, errorCallBack) {
  this.getCSRFToken();
  let dialogDiv = $('#loginDialog');
  dialogDiv.dialog('destroy');
  dialogDiv.dialog({
    modal: true,
    buttons: [{
        text: "Submit",
        class: 'Green',
        click: function() {
          $(this).dialog("close");
          let username = document.getElementsByName('username')[0].value;
          let password = document.getElementsByName('password')[0].value;
          if (!username || !password) {
            errorCallBack('Didn\'t log in');
            return;
          }
          cloud.login(username, password, function(data) {
              cloud.getUser(callBack, errorCallBack);
            },
            errorCallBack
          );
        }
      },
      {
        text: "Cancel",
        class: 'Red',
        click: function() {
          $(this).dialog("close");
          errorCallBack('Didn\'t log in');
        }
      }
    ]
  });
};
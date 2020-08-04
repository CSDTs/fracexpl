
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
        [280.0, 220.0, 5],
        [260.0, 120.0, 5],
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
        [300.0, 180.0, 5],
        [340.0, 180.0, 0],
        [380.0, 180.0, 5],
      ],
    },
    'baila': {
      fullname: 'Ba-ila',
      thickness: 2.0,
      thicknessType: 1,
      itNumber: 3,
      seed: [
        [210.0, 284.0, 0],
        [210.0, 187.07369995117188, 5],
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
        [374.7213439941406, 180.21029663085938, 5],
        [374.7213439941406, 118.43974304199219, 0],
        [210.0, 32.34235382080078, 5],
      ],
    },
    'blanket': {
      fullname: 'Fulani Blanket',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 3,
      seed: [
        [240.0, 160.0, 0],
        [170.0, 160.0, 5],
        [130.0, 220.0, 4],
        [90.0, 160.0, 4],
        [130.0, 100.0, 4],
        [170.0, 160.0, 4],
        [50.0, 100.0, 5],
        [10.0, 160.0, 4],
        [50.0, 220.0, 4],
        [90.0, 160.0, 4],
        [50.0, 100.0, 4],
        [280.0, 120.0, 5],
        [330.0, 120.0, 0],
        [280.0, 200.0, 5],
        [330.0, 200.0, 0],
        [430.0, 160.0, 5],
        [470.0, 220.0, 4],
        [510.0, 160.0, 4],
        [550.0, 220.0, 4],
        [590.0, 160.0, 4],
        [550.0, 100.0, 4],
        [510.0, 160.0, 4],
        [470.0, 100.0, 4],
        [430.0, 160.0, 4],
        [360.0, 160.0, 5],
      ],
    },
    'bullhorn': {
      fullname: 'Ghanian Bull Horn',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 4,
      seed: [
        [220.0, 200.0, 0],
        [255.0, 170.0, 5],
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
        [220.0, 200.0, 5],
        [258.0, 171.0, 5],
      ],
    },
    'cantorpaper': {
      fullname: 'Cantor Paper',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 3,
      seed: [
        [220.0, 161.0, 0],
        [240.0, 81.0, 5],
        [260.0, 81.0, 5],
        [320.0, 81.0, 0],
        [340.0, 81.0, 5],
        [240.0, 81.0, 4],
        [360.0, 161.0, 5],
        [220.0, 161.0, 4],
        [260.0, 241.0, 5],
        [320.0, 241.0, 0],
        [340.0, 241.0, 5],
        [240.0, 241.0, 4],
        [360.0, 161.0, 5],
      ],
    },
    'carpet': {
      fullname: 'Sierpinski Carpet',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 3,
      seed: [
        [200.0, 300.0, 0],
        [238.58258056640625, 197.11302185058594, 5],
        [238.58258056640625, 94.22604370117188, 4],
        [341.4696044921875, 94.22604370117188, 4],
        [341.4696044921875, 197.11302185058594, 4],
        [238.58258056640625, 197.11302185058594, 4],
        [252.06201171875, 194.14932250976562, 5],
        [238.58258056640625, 197.11302185058594, 5],
        [238.58258056640625, 158.53041076660156, 0],
        [238.58258056640625, 132.80865478515625, 5],
        [238.58258056640625, 94.22604370117188, 0],
        [277.16522216796875, 94.22604370117188, 0],
        [302.8869934082031, 94.22604370117188, 5],
        [341.4696044921875, 94.22604370117188, 0],
        [341.4696044921875, 132.80865478515625, 0],
        [341.4696044921875, 158.53041076660156, 5],
        [341.4696044921875, 197.11302185058594, 0],
        [302.8869934082031, 197.11302185058594, 0],
        [277.16522216796875, 197.11302185058594, 5],
        [238.58258056640625, 197.11302185058594, 0],
        [380.0522155761719, 300.0, 5],
      ],
    },
    'chaetophora': {
      fullname: 'Chaetophora',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 5,
      seed: [
        [249.0, 322.0, 0],
        [254.1637420654297, 319.21954345703125, 5],
        [264.9272766113281, 245.37684631347656, 4],
        [243.8362274169922, 319.21954345703125, 5],
        [252.0132598876953, 246.23777770996094, 4],
        [255.02651977539062, 244.9463653564453, 5],
        [236.23672485351562, 184.3251953125, 1],
        [207.3065948486328, 245.58892822265625, 5],
        [261.4835510253906, 245.37684631347656, 5],
        [286.0102233886719, 194.520263671875, 0],
        [309.412841796875, 245.58892822265625, 5],
        [258.3596496582031, 245.58892822265625, 5],
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
        [240.0, 320.0, 5],
        [240.0, 230.0, 4],
        [260.0, 210.0, 0],
        [270.0, 210.0, 4],
        [290.0, 230.0, 0],
        [290.0, 320.0, 4],
        [290.0, 320.0, 5],
      ],
    },
    'davincitree3': {
      fullname: 'Davinci Tree +3',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 2,
      seed: [
        [240.0, 320.0, 0],
        [240.0, 320.0, 5],
        [240.0, 230.0, 4],
        [253.0, 211.0, 0],
        [277.0, 211.0, 0],
        [290.0, 230.0, 0],
        [290.0, 320.0, 4],
        [290.0, 320.0, 5],
      ],
    },
    'davincitree4': {
      fullname: 'Davinci Tree +4',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 2,
      seed: [
        [240.0, 320.0, 0],
        [240.0, 320.0, 5],
        [240.0, 232.24789428710938, 4],
        [246.3679962158203, 213.5637969970703, 0],
        [264.8714294433594, 206.16534423828125, 0],
        [283.6661376953125, 214.4735107421875, 0],
        [288.75115966796875, 232.24789428710938, 0],
        [288.75115966796875, 320.0, 4],
        [288.75115966796875, 320.0, 5],
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
        [300.0, 200.0, 5],
        [260.0, 240.0, 5],
        [260.0, 200.0, 1],
        [260.0, 186.0, 1],
        [236.0, 228.0, 5],
        [183.0, 270.0, 5],
        [227.0, 220.0, 5],
        [260.0, 240.0, 4],
        [236.85000610351562, 170.38999938964844, 5],
        [209.30999755859375, 228.70999145507812, 5],
        [260.0, 240.0, 5],
        [280.0, 231.0, 4],
        [300.0, 220.0, 0],
        [306.510009765625, 228.70999145507812, 5],
        [380.0, 240.0, 5],
        [260.0, 240.0, 5],
      ],
    },
    'ethiopian': {
      fullname: 'Ethiopian Cross 1',
      thickness: 4.0,
      thicknessType: 0,
      itNumber: 3,
      seed: [
        [460.0, 181.0, 0],
        [260.0, 181.0, 5],
        [340.0, 101.0, 0],
        [340.0, 61.0, 0],
        [340.0, 101.0, 5],
        [420.0, 181.0, 0],
        [460.0, 181.0, 0],
        [420.0, 181.0, 5],
        [340.0, 261.0, 0],
        [340.0, 301.0, 0],
        [340.0, 261.0, 5],
        [260.0, 181.0, 0],
        [220.0, 181.0, 0],
        [220.0, 181.0, 5],
      ],
    },
    'ethiopian2': {
      fullname: 'Ethiopian Cross 2',
      thickness: 4.0,
      thicknessType: 0,
      itNumber: 3,
      seed: [
        [461.0, 160.0, 0],
        [261.0, 161.0, 5],
        [341.0, 81.0, 0],
        [341.0, 20.0, 0],
        [341.0, 81.0, 5],
        [421.0, 161.0, 0],
        [481.0, 161.0, 0],
        [421.0, 161.0, 5],
        [341.0, 241.0, 0],
        [341.0, 300.0, 0],
        [341.0, 241.0, 5],
        [261.0, 161.0, 0],
        [200.0, 161.0, 0],
        [221.0, 160.0, 5],
      ],
    },
    'fern': {
      fullname: 'Fern',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 9,
      seed: [
        [100.0, 238.0, 0],
        [100.0, 238.0, 5],
        [200.0, 158.0, 4],
        [280.0, 38.0, 0],
        [200.0, 158.0, 5],
        [500.0, 138.0, 0],
        [200.0, 158.0, 5],
        [340.0, 278.0, 0],
        [500.0, 138.0, 5],
      ],
    },
    'fractalspirals': {
      fullname: 'Fractal Spirals',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 9,
      seed: [
        [280.0, 280.0, 0],
        [180.0, 280.0, 5],
        [180.0, 180.0, 4],
        [260.0, 180.0, 5],
        [320.0, 100.0, 5],
        [360.0, 180.0, 0],
        [320.0, 180.0, 5],
        [260.0, 180.0, 5],
      ],
    },
    'goldenrec': {
      fullname: 'Golden Rectangle',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 8,
      seed: [
        [304.0, 174.0, 0],
        [304.0, 174.0, 5],
        [304.0, 156.4929656982422, 4],
        [328.07220458984375, 156.4929656982422, 4],
        [328.07220458984375, 174.0, 4],
        [304.0, 174.0, 0],
        [304.0, 156.4929656982422, 5],
      ],
    },
    'kitwe': {
      fullname: 'Kitwe',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 3,
      seed: [
        [261.0, 240.0, 0],
        [241.0, 200.0, 5],
        [261.0, 160.0, 0],
        [321.0, 160.0, 4],
        [341.0, 200.0, 0],
        [321.0, 240.0, 4],
        [261.0, 240.0, 4],
        [241.0, 200.0, 4],
        [269.44482421875, 202.2428436279297, 5],
        [321.0, 240.0, 5],
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
        [180.0, 300.0, 5],
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
        [180.0, 300.0, 5],
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
        [320.0, 190.0, 5],
        [380.0, 200.0, 0],
        [320.0, 190.0, 5],
      ],
    },
    'mokoulek': {
      fullname: 'Mokoulek',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 4,
      seed: [
        [420.0, 120.0, 0],
        [400.0, 120.0, 5],
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
        [420.0, 160.0, 5],
        [400.0, 180.0, 1],
        [400.0, 220.0, 5],
        [420.0, 240.0, 1],
        [480.0, 260.0, 5],
        [500.0, 240.0, 1],
        [520.0, 220.0, 5],
        [520.0, 200.0, 1],
        [520.0, 180.0, 5],
        [520.0, 160.0, 1],
        [480.0, 160.0, 5],
        [460.0, 160.0, 1],
        [440.0, 180.0, 5],
        [440.0, 200.0, 1],
        [440.0, 220.0, 5],
        [460.0, 220.0, 1],
        [480.0, 220.0, 5],
        [480.0, 200.0, 1],
        [240.0, 220.0, 5],
        [260.0, 100.0, 0],
        [240.0, 100.0, 5],
      ],
    },
    'nankani': {
      fullname: 'Nankani',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 5,
      seed: [
        [421.0, 101.0, 0],
        [350.9679870605469, 54.74000549316406, 5],
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
        [272.0, 82.0, 5],
        [263.0, 170.0, 0],
        [211.0, 121.97000122070312, 5],
        [329.0, 173.0, 5],
      ],
    },
    'negative': {
      fullname: 'Negative',
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
        [314.0, 173.0, 5],
        [320.0, 110.0, 0],
        [266.0, 194.0, 5],
        [266.0, 144.0, 0],
        [282.0, 227.0, 5],
        [316.0, 174.0, 4],
        [369.0, 178.0, 0],
        [192.0, 157.0, 5],
        [309.0, 271.0, 5],
        [307.0, 278.0, 4],
        [312.0, 281.0, 4],
        [313.0, 276.0, 4],
        [307.0, 269.0, 4],
        [264.0, 190.0, 5],
        [213.0, 243.0, 0],
        [242.0, 152.0, 5],
        [202.0, 108.0, 0],
        [142.0, 107.0, 5],
        [242.0, 147.0, 5],
      ],
    },
    'positive': {
      fullname: 'Positive',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 1,
      seed: [
        [320.0, 100.0, 0],
        [220.0, 160.0, 0],
        [320.0, 220.0, 0],
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
        [170.0, 170.0, 5],
        [190.0, 160.0, 5],
        [260.0, 220.0, 5],
        [240.0, 180.0, 1],
        [360.0, 140.0, 5],
        [260.0, 220.0, 5],
        [280.0, 180.0, 0],
        [140.0, 130.0, 5],
        [180.0, 280.0, 5],
        [180.0, 220.0, 5],
        [260.0, 220.0, 5],
        [300.0, 200.0, 0],
        [306.510009765625, 228.70999145507812, 5],
        [260.0, 220.0, 5],
      ],
    },
    'riverbasin': {
      fullname: 'River Basin',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 8,
      seed: [
        [76.0, 260.0, 0],
        [76.0, 260.0, 5],
        [270.0, 260.0, 0],
        [288.2153015136719, 24.205242156982422, 0],
        [300.0, 260.0, 0],
        [547.5895385742188, 260.0, 0],
        [547.5895385742188, 260.0, 5],
      ],
    },
    'sierpinski': {
      fullname: 'Sierpinski Triangle',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 5,
      seed: [
        [398.0, 260.0, 0],
        [200.0, 260.0, 5],
        [398.0, 260.0, 4],
        [299.989990234375, 81.80000305175781, 4],
        [348.5, 170.89999389648438, 5],
        [249.5, 170.89999389648438, 0],
        [299.0, 260.0, 4],
        [348.5, 170.89999389648438, 4],
        [398.0, 260.0, 5],
        [299.0, 260.0, 0],
        [299.0, 260.0, 5],
        [200.0, 260.0, 0],
        [200.0, 260.0, 5],
        [299.989990234375, 81.80000305175781, 4],
        [200.0, 260.0, 5],
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
        [320.5, 180.5, 5],
        [260.5, 180.5, 5]
      ],
    },
    'turbulence': {
      fullname: 'Turbulence',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 9,
      seed: [
        [293.0, 99.0, 0],
        [356.0, 107.0999984741211, 5],
        [235.12611389160156, 87.42520141601562, 0],
        [177.2521514892578, 99.0, 5],
        [154.1025848388672, 133.72434997558594, 5],
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
    constructor( seed = [], initMethod = 0, b1 = [300,240], b2 = [500,240]) {
        this.name = "";
        this.seed = seed;
        this.pts = []; //pointlist
        this.adj = []; //adjacent lists
        this.baseline = [b1,b2];
        this.baseDeltaX, this.baseDeltaY, this.sqrbaseLen;
        this.ctx = "";
        this.dim = 0;
        switch (initMethod) {
          case 0: this.init();break;
          case 1: this.initFromSeed(this.seed);break;
          case 2: this.initFromFile();break;
        }
    }
    clearPts(){
      this.name = "";
      this.pts = [];
      this.adj = [];
      this.baseline = [];
      // this.setup_baseline();
    }
    clearCanvas(){
      this.ctx.clearRect(0, 0, this.ctx.canvas.clientWidth, this.ctx.canvas.clientHeight);
    }
    init(){}
    initFromSeed(name){
      this.clearPts();
      this.name = name;
      let seed = StdSeeds[name].seed;
      let len = seed.length;
      
      if(len >= 2) {
          let pt0 = seed[0].slice(0,2);
          let index0 = 0;
          pt0 = this.roundPt(pt0);
          let pt1 = [];
          
          this.pts.push( pt0 );
          this.adj.push( [0, ] );

          for( let i = 1; i < len; i++ ) {//from 0 to 1
              pt1 = this.roundPt( seed[i].slice(0,2) );
              let type = seed[i][2];
              let index1 = this.searchPt(pt1);
              if( index1 == -1 ) { //new point
                      this.pts.push(pt1);
                      this.adj.push( [0, ] );//count line connected
                      index1 = this.pts.length - 1;
                  }
              if(type!=5){
                  this.adj[index1][0] ++;
                  this.adj[index0][0] ++;
                  this.adj[index0].push([ index1, type ]);
              }
              pt0 = pt1;
              index0 = index1;
          }
      }
      // this.baseline = [ seed[0].slice(0,2) , seed[len-1].slice(0,2) ];
      this.baseline = [ 0 , this.pts.length - 1 ];
      this.setup_baseline();
    }
    initFromFile(){}
    roundPt(pt){
      return [Math.round(pt[0]),Math.round(pt[1])];
    }
    searchPt(pt){
      if(this.pts.length < 2) return -1;
      let index = -1;
      for(let i=0; i < this.pts.length; i++){
        let item = this.pts[i];
        if( item[0]==pt[0] && item[1]==pt[1] ){
          index = i; break;
        }
      }
      return index;
    }
    setup_baseline(){
      let b1= this.pts[this.baseline[0]];
      let b2= this.pts[this.baseline[1]];
      this.baseDeltaX = b1[0] - b2[0];console.log(b1);
      this.baseDeltaY = b1[1] - b2[1];
      this.sqrbaseLen = this.sqlineLen(b1,b2);
    }
    drawSeed(ctx, isInitiating = false) {
      this.ctx = ctx;
      this.clearCanvas();
      if(this.pts.length < 1) return;
      if(!isInitiating) this.drawBaseline();
      this.adj.forEach( (item,index) => {
        let list = item.slice(1);
        if( list.length > 0 ) list.forEach( adj => this.drawSeedLine(index,adj));
      });
      this.drawPts();
    }
    drawSeedLine(index,adj) {
        // if(adj[1] == 5) return;
        let start = this.pts[index];
        let end = this.pts[adj[0]];
        if(adj[1].length > 1){ //draw circle
          let v = adj[1];
          let color = lineTypes[v[2]].color;
          this.drawcircle(start, end, v[1], color);
          this.drawline(start,end,color,null,[4,4]);
        } else {
          let color = lineTypes[adj[1]].color;
          this.drawline(start,end,color);
        }
    }
    drawBaseline() {
      let pt1 = this.pts[this.baseline[0]];
      let pt2 = this.pts[this.baseline[1]];
      this.drawline(pt1,pt2,"#666",1,[8,4]);
    }
    drawPts() {
        let ctx = this.ctx;
        ctx.save();
        ctx.beginPath();
        this.pts.forEach(pt => {
            ctx.moveTo(pt[0], pt[1]);
            ctx.arc(pt[0], pt[1], 2, 0, Math.PI * 2, true);
        });
        ctx.fill();
        ctx.restore();
    }
    drawIter(ctx, level) {
      this.ctx = ctx;
      this.clearCanvas();
      if(this.pts < 1) return;
      let pt1 = this.pts[this.baseline[0]];
      let pt2 = this.pts[this.baseline[1]];
      this.basedraw(pt1,pt2,false,level,2);
    }
    basedraw(b1,b2,hflip,level,lineWidth){
      let color = 'black';
      let segLen = this.sqlineLen(b1,b2);
      let d_segX = b1[0] - b2[0];
      let d_segY = b1[1] - b2[1];
      let d_baseX = this.baseDeltaX;
      let d_baseY = this.baseDeltaY;
      let base0 = this.pts[this.baseline[0]];
      let base1= this.pts[this.baseline[1]]; 
      if( segLen < 4.0){ //if segment too short, return
        this.drawline(b1,b2); return;
      }
      //factors
      let h = hflip ? -1 : 1;
      let a = (d_baseX * d_segX + h * d_baseY * d_segY) / this.sqrbaseLen;
      let b = (d_baseY * d_segX - h * d_baseX * d_segY) / this.sqrbaseLen;
      let tx = b1[0] - a * base0[0] - b * base0[1];
      
      let c = (d_baseX * d_segY - h * d_baseY * d_segX) / this.sqrbaseLen;
      let d = (d_baseY * d_segY + h * d_baseX * d_segX) / this.sqrbaseLen;
      let ty = b1[1] - c * base0[0] - d * base0[1];
      //recalculate pt positions
      let segPts = this.pts.map( pt => {
        let newPt = [];
        newPt[0] = a * pt[0] + b * pt[1] + tx;
        newPt[1] = c * pt[0] + d * pt[1] + ty;
        return newPt;
      });
      //loop through all lines
      this.adj.forEach( (item, index) => {
        let list = item.slice(1);
        if( list.length > 0 ) 
          list.forEach(adj => {
            if(adj[1].length > 1){//for shapes
              let v = adj[1];
              if(v[0] == -1){ //for circles
                if(level == 1 || v[2] > 3 ) this.drawcircle(segPts[index],segPts[adj[0]],v[1],color,lineWidth);
                else {
                  let circlePts = this.getCirclePt(segPts[index],segPts[adj[0]],v[1]);
                  for(let i = 1 ; i < v[1] ; i++ ){
                    this.basedraw( circlePts[i-1], circlePts[i], hflip, level-1, lineWidth );
                  }
                  this.basedraw( circlePts[v[1]-1], circlePts[0], hflip, level-1, lineWidth );
                }
              }
            }
            if( level == 1 || adj[1] == 4 || adj[1] == 5 || adj[1].length > 1) {
              if( adj[1] == 5 ) return;
              if(adj[1].length > 1){
                
              } else {
                this.drawline(segPts[index],segPts[adj[0]],color,lineWidth);
              }
            } 
            else this.basedraw(segPts[index],segPts[adj[0]], hflip, level-1,lineWidth);
          });
      });
    }
    sqlineLen(pt1,pt2){
        let x=pt1[0]-pt2[0];
        let y=pt1[1]-pt2[1];
        return Math.pow(x, 2) + Math.pow(y, 2);
    }
    drawline(pt1,pt2,color="black", width=1, dash=[]){
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
    getAngle(center,start){
      let alpha;
      if(start[1]==center[1]){
        if(start[0] > center[0]) alpha = 0;
        else alpha = Math.PI;
      } else if(start[0]==center[0]){
        if(start[1] > center[1]) alpha = 0.5 * Math.PI;
        else alpha = -0.5 * Math.PI;
      } else {
        alpha = Math.atan( (start[1]-center[1]) / (start[0]-center[0]) );
        if(start[0] < center[0]) alpha = alpha + Math.PI;
      }
      return alpha;
    }
    drawcircle(center, start, n, color = "black", width = 1){
      if( n!=8 && n!=16 && n!=-1 ) return;
      if( n == -1 && type < 4) return;
      let ctx = this.ctx;
      ctx.save();
      ctx.beginPath();
      let r = Math.sqrt(this.sqlineLen(center,start));
      if( n == -1 ){
        ctx.arc(center[0], center[1], r, 0, 2 * Math.PI);
      } else {
        let alpha = this.getAngle(center,start);
        let theta = 2 * Math.PI / n;
        
        ctx.moveTo(start[0],start[1]);
        for(let i = 1 ; i < n ; i++ ){
          let x = r * Math.cos( alpha + i * theta );
          let y = r * Math.sin( alpha + i * theta );
          ctx.lineTo( center[0] + x , center[1] + y );
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
      let r = Math.sqrt(this.sqlineLen(center,start));
      let alpha = this.getAngle(center,start);
      let theta = 2 * Math.PI / n;
      for(let i = 1 ; i < n ; i++ ){
        let x = r * Math.cos( alpha + i * theta );
        let y = r * Math.sin( alpha + i * theta );
        pts.push([center[0] + x , center[1] + y]);
      }
      return pts;
    }
    breakcircle(index){
      let v = this.adj[index][1][1];//v = [-1, segments count, segment type]
      if( v[1] < 0 ) return;
      let center = this.pts[index];
      let start = this.pts[ this.adj[index][1][0] ];
      let type = v[2];
      let pts = this.getCirclePt( center, start, v[1]);
      this.deletePt(index);
      this.addPt(start);
      let startIndex = this.pts.length - 1;
      for(let i = 1; i < v[1] ; i++){
        let n = this.pts.length - 1;
        let before = [ [n,type], ];
        this.addPt(pts[i],before);
      }
      this.addLn(this.pts.length-1, startIndex, type);
    }
    getDim(){
      
    }
    addPt(pos, before = [], after = [], isInitiating = false){
      let pt = this.roundPt(pos);
      if( this.searchPt(pt) != -1 ) return -1;//!! if the pt already exists... fix later
      this.pts.push(pt);
      this.adj.push( [0, ] );
      let index = this.pts.length - 1;
      if(after.length > 0) 
        after.forEach(item => {
          this.adj[index][0] ++;
          this.adj[item[0]][0] ++;
          this.adj[index].push(item);
        });
      if(before.length > 0) {
        before.forEach(item => {
          this.adj[index][0] ++;
          this.adj[item[0]][0] ++;
          let type = item[1];
          if(item.length > 2) type = item.slice(1);
          this.adj[ item[0] ].push( [ index,  type ] );
        });
      }
      if( isInitiating ){
        this.baseline = [0, index];}
      return index;
    }
    addPtToLn(pos, ln1, ln2){ //
      let pt = this.roundPt(pos);
      if( this.searchPt(pt) != -1 ) return -1;
      this.pts.push(pt);
      this.adj.push([2, ]);
      let index = this.pts.length - 1;
      let type = -1;
      this.adj[ln1].slice(1).forEach((item,i) => {
        if( item[0] == ln2 ) {
          type = item[1];
          this.adj[ln1][i+1][0] = index;
        }
      });
      if(type!=-1) this.adj[index].push([ln2,type]);
      return index;
    }
    addLn(pt1,pt2,type){
      for(let i = 1 ; i < this.adj[pt1].length ; i++ ){
        if( this.adj[pt1][i][0] == pt2) return;
      }
      for(let i = 1 ; i < this.adj[pt2].length ; i++ ){
        if( this.adj[pt2][i][0] == pt1) return;
      }
      this.adj[pt1].push( [pt2,type] );
      this.adj[pt1][0]++; 
      this.adj[pt2][0]++;
    }
    deletePt(n, isInitiating = false){
      if( n < 0 || n > (this.pts.length - 1) ) return;
      let count = this.adj[n][0];
      let list = this.adj[n].slice(1);
      if( count > 2 || count < list.length) return;
      //handle baseline pt delete
      if( n == this.baseline[0]) return;
      if( n == this.baseline[1] && !isInitiating) return; 
      if( n < this.baseline[0] ) this.baseline[0]--;
      if( n <= this.baseline[1] ) this.baseline[1]--;
      // for shape center
      if( list.length > 0 && list[0][1].length > 1){
        let follower = list[0][0];
        this.pts.splice(n,1);
        this.adj.splice(n,1);
        if(n < follower) follower--;
        this.pts.splice(follower,1);
        this.adj.splice(follower,1);
        return;
      }

      if(list.length > 0 && count == list.length) 
          list.forEach( item => this.adj[ item[0] ][0]-- );

      this.adj.forEach((item, i) => {
        if( i == n ) return;
        let position = -1;
        for(let j = 1; j < item.length ; j++){
          if( item[j][0] > n ) item[j][0]--; 
          else if( item[j][0] == n ) position = j;
        }
        if( position != -1 ){
          item[0]--;
          item.splice( position, 1 );
          if( count == 2 ){
              let toPt = list[0][0] < n ? list[0][0] : ( list[0][0]-1 );
              item[0]++; 
              item.push( [toPt,list[0][1]] );
            }
        }
      });
      this.pts.splice(n,1);
      this.adj.splice(n,1);
    }
    movePt(n, pos, isInitiating = false){
      if(this.adj[n][1] && this.adj[n][1][1].length > 1){
        let follower = this.adj[n][1][0];
        let x = this.pts[follower][0] + pos[0] - this.pts[n][0];
        let y = this.pts[follower][1] + pos[1] - this.pts[n][1];
        this.pts[follower] = [ x, y ];
      }
      this.pts[n] = pos;
      this.drawSeed(this.ctx, isInitiating);
      this.highlightPt(n);
    }
    selectPt(pos, editingbase = false, givenList = []){
      let range = 3.0;
      let n = -1;
      let list = editingbase ? this.baseline : this.pts;
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
      let range = 9.0;
      let ln = [];
      if(this.pts.length < 2) return ln;
      this.adj.forEach( (item, index) => {
        let list = item.slice(1);
        if( list.length > 0 ) 
          list.forEach(adj => {
            let distance = this.distanceLnPt(this.pts[index],this.pts[adj[0]], pos);
            if ( distance <= range ) {
              ln = [ index, adj[0], adj[1] ]; return;}
          });
        if(ln.length > 0) return;
      });
      return ln;
    }
    setLnType(ln,type){
      let list = this.adj[ln[0]];
      for(let i = 1 ; i < list.length ; i++) {
        if( list[i][0] == ln[1] ){
          this.adj[ln[0]][i][1] = type; return;
        }
      }
    }
    distanceLnPt(ln1,ln2,pt){ // return distance sqaure
      let Len = this.sqlineLen(ln1,ln2);
      let d1 = this.sqlineLen(ln1, pt); 
      if(Len <= 4.0) return d1;
      else if(d1 >= Len) return 99;
      let d2 = this.sqlineLen(ln2, pt); 
      if(d2 >= Len) return 99;
      let k = (ln1[1]-ln2[1])/(ln1[0]-ln2[0]);
      let d3 = ( (ln1[1]-pt[1]) - k*(ln1[0]-pt[0]) )**2 / ( k**2 + 1 ) ;
      return d3;
    }
    highlightPt(n, editingbase = false){
      let ctx = this.ctx;
      let pt = editingbase ? this.baseline[n] : this.pts[n];
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
    this.level;
    //elements
    this.canvas, this.ctx;
    this.ctrlPanel, this.levelBtns;
    this.layout();
    this.setLevel(level,true);
  }
  layout(){
    this.setup_canvas();
    this.setup_ctrlPanel();
    this.setup_levelBtns();
  }
  enableMode(){
    this.canvas.style.display = 'block';
    this.ctrlPanel.style.display = 'flex';
    this.setLevel(this.level,true);
  }
  disableMode(){
    this.canvas.style.display = 'none';
    this.ctrlPanel.style.display = 'none';
  }
  setLevel(level, init = false){
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
    //draw fractal
    this.fractal.drawIter(this.ctx, level);
    // this.fractal.drawSeed(this.ctx);
    this.level = level;
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
        let level = inum < 9 ? inum : 40;
        this.setLevel(level);
      }.bind(this, i));
      elem.appendChild(btn);
    }
    this.levelBtns = elem;
    this.ctrlPanel.appendChild(elem);
  }
  get_canvas(){
    return this.canvas;
  }
  get_ctrlPanel(){
    return this.ctrlPanel;
  }
  set_fractal(){}
};
class SeedEditor{
  constructor(index, fractal, width = 600, height = 480, seedlist){
    //properties
    this.index = index;
    this.fractal = fractal;
    this.width = Math.max(600, width);
    this.height = Math.max(480, height);
    this.gridSize = 20;
    this.seedlist = seedlist;
    this.mousePos = [];
    this.rawPos = [];
    this.status = 0;
    this.segType = 4;
    this.repType = this.segType < 4? this.segtype : 0;
    this.selectedPt = -1;
    this.anchorPt = -1;
    this.circleSeg = 8;
    this.isInitiating = false;
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
    this.modetxt = ["move pt", "edit baseline", "add pt"]
    //elements
    this.canvas, this.bgctx, this.workctx;
    this.ctrlPanel;
    this.seedSel, this.modeSel, this.toolBar, this.segTypeSel, this.snapBox;
    this.repTypeBtn, this.segTypeBtn = [];
    this.layout();
    this.setSegType(this.segType,true);
    // this.drawBackground();
    this.interactions();
  }
  layout(){
    this.setup_canvas();
    this.setup_ctrlPanel();
    //inside ctrlPanel
    this.setup_seedPicker();
    this.setup_toolBar();
    this.setup_segTypeSel();
    this.setup_snapCheckbox();
  }
  enableMode(){
    this.fractal.drawSeed(this.workctx);
    this.canvas.style.display = 'block';
    this.ctrlPanel.style.display = 'flex';
    this.setSegType(this.segType,true);
    this.setMode(this.status,true);
    this.anchorPt = -1;
    this.selectedPt = -1;
  }
  disableMode(){
    this.canvas.style.display = 'none';
    this.ctrlPanel.style.display = 'none';
    this.fractal.setup_baseline();
  }
  setup_canvas(){
    let elem = document.createElement('div');

    let canvas1 = document.createElement('canvas');
    canvas1.id = 'ft-editing-bgcanvas-' + this.index;
    canvas1.className = 'canvas';
    canvas1.width = this.width;
    canvas1.height = this.height;
    canvas1.style['z-index'] = 1;

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

    let option = document.createElement('option');
    option.value = "create";
    option.innerHTML = "Custom";
    select.appendChild(option);

    this.seedlist.forEach(name => {
      let option = document.createElement('option');
      option.value = name;
      option.innerHTML = StdSeeds[name].fullname;
      select.appendChild(option);
    });
    //init default value
    if(this.fractal.name.length > 0 && (this.fractal.name in StdSeeds)) {
      select.value =  this.fractal.name;
    } else {select.value ="create";}
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
    elem.style.marginRight = "2em";
    
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
  setup_snapCheckbox(){
    let elem = document.createElement('div');
    elem.className = "snapCheckbox checkbox";

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
  setMode(mode, init = false){
    if( mode == this.status && !init) return;
    if(!init){//clear old highlight
      let btn = this.toolBar.querySelectorAll('button')[this.status];
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
    this.status = mode;
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
  }
  handleMouseMove(e){
    if( (this.status == this.modes.SELECT || this.status == this.modes.BASE) && this.selectedPt != -1){
      let editingbase = this.status == this.modes.BASE;
      this.getMousePos(e);
      this.fractal.movePt(this.selectedPt,this.mousePos,editingbase);
    } 
    else if(this.status == this.modes.ADD && this.anchorPt != -1){
      this.getMousePos(e);
      if(this.selectedPt == -1){
        let pos = [this.mousePos[0]+1,this.mousePos[1]+1]
        let before = [[this.anchorPt,this.segType],];
        console.log(before);
        this.fractal.addPt(pos, before,[], this.isInitiating);
        this.selectedPt = this.fractal.pts.length - 1; 
        this.fractal.drawSeed(this.workctx, this.isInitiating);
      }
      else this.fractal.movePt(this.selectedPt,this.mousePos,this.isInitiating);
     
    } else if(this.status == this.modes.SHAPE && this.anchorPt != -1){
      this.getMousePos(e);
      if(this.selectedPt == -1){
        let pos = [this.mousePos[0]+1,this.mousePos[1]+1]
        let before = [[this.anchorPt, -1, this.circleSeg, this.segType],];
        this.fractal.addPt(pos, before);
        this.selectedPt = this.fractal.pts.length - 1;
      }
      else this.fractal.movePt(this.selectedPt,this.mousePos);
    }
    
  }
  handleClick(e){
    this.getMousePos(e);
    if(this.status == this.modes.SELECT || this.status == this.modes.BASE){//MODE-MOVE: move pts, click to select pt
      let editingbase = this.status == this.modes.BASE; 
      if(this.selectedPt == -1) {  //pick up pt
        this.selectedPt = this.fractal.selectPt(this.rawPos, editingbase);
      } else { //drop pt
        this.selectedPt = -1; 
        this.fractal.drawSeed(this.workctx); //clear highlight
        return;
      }
    } else if(this.status == this.modes.PAINT){ // MODE-PAINT: set line types
      let ln = this.fractal.selectLn(this.rawPos);
      if(ln.length > 0) {
        this.fractal.setLnType(ln,this.segType);
        this.fractal.drawSeed(this.workctx);
      } 
      return;
    } else if(this.status == this.modes.ADD){ //MODE-ADD: add pts, click to add/delete pt
      if(this.anchorPt == -1){
        let pt = this.fractal.selectPt(this.mousePos);
        let ln = this.fractal.selectLn(this.mousePos);
        
        if( pt != -1 ){ //start from existing pts
          this.anchorPt = pt;
        } else if( ln.length > 0 ){ // add pt to existing line
          this.fractal.addPtToLn(this.mousePos,ln[0],ln[1]);
          this.fractal.drawSeed(this.workctx);
        } else { // start new lines
          let pt = this.fractal.addPt(this.mousePos,[],[],this.isInitiating);
          this.anchorPt = this.fractal.pts.length - 1;
          console.log(pt);
          this.fractal.drawSeed(this.workctx, this.isInitiating);
        } 
      } else { //add on to new line
        let pts = this.fractal.pts.slice(0,-1);
        let n = this.fractal.selectPt(this.mousePos,false,pts);
        if(n !=-1){ //connect the loosing end to existing pts
          if(n == this.anchorPt) return;
          this.fractal.deletePt(this.selectedPt);
          this.fractal.addLn(this.anchorPt,n,this.segType);
          this.fractal.drawSeed(this.workctx, this.isInitiating);
          this.anchorPt = -1;
          this.selectedPt = -1; 
        }
        this.anchorPt = this.selectedPt;
      }
      this.selectedPt = -1;
    } else if(this.status == this.modes.DELETE){ //MODE-DELETE: delete existing pts, click to select & delete
      let pt = this.fractal.selectPt(this.rawPos);
      if(pt != -1 ){
        this.fractal.deletePt(pt);
        this.fractal.drawSeed(this.workctx);
        this.selectedPt = -1;
      }
    } else if(this.status == this.modes.SHAPE){ //MODE-SHAPE: add circles to seed
      if(this.anchorPt == -1){ // set circle center
        this.fractal.addPt(this.mousePos);
        this.anchorPt = this.fractal.pts.length - 1;
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
        this.fractal.deletePt(this.selectedPt);
        this.fractal.drawSeed(this.workctx);
        this.selectedPt = -1;
      }
      if(e.key == "b" || e.key == "B") {
        let n = this.selectedPt;
        if(this.fractal.adj[n][1][1].length > 1) {
          this.fractal.breakcircle(n);
          this.fractal.drawSeed(this.workctx);
          this.selectedPt = -1;
        }
      }
    } else if(this.status == this.modes.ADD && this.selectedPt != -1){
      if(e.code == "Escape" || e.code == "Space") {
        this.fractal.deletePt(this.selectedPt, this.isInitiating);
        this.fractal.drawSeed(this.workctx);
        if(this.isInitiating) {
          this.isInitiating = false;
        }
        this.anchorPt = -1;
        this.selectedPt = -1;
      }
    } 
  }
  setSeed(seed, method){
    if(method == 'name') {
      this.fractal.clearPts();
      if(seed in StdSeeds) {
        this.fractal.initFromSeed(seed);
        this.fractal.drawSeed(this.workctx);
      }
      else if(seed == 'create'){
        this.setMode(this.modes.ADD);
        this.isInitiating = true;
      }
      this.fractal.drawSeed(this.workctx);
      return;
    }
  }
  setSegType(type,init = false){
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
    this.close_segDropdown();
  }
  getMousePos(e){
    let workrect = this.workctx.canvas.getBoundingClientRect();
    let x = e.clientX - workrect.left;
    let y = e.clientY - workrect.top;
    this.rawPos = [ x, y];
    if(this.snapBox.checked) {
      let cell = this.gridSize;
      x = cell * Math.round( x / cell );
      y = cell * Math.round( y / cell );
    }
    this.mousePos = [ x, y ];
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
    this.editor = new SeedEditor(this.index, this.fractal, this.width, this.height, this.seedlist);
    this.iterator.disableMode();
    this.editor.disableMode();
    this.layout();
  }
  handleParams(){
    if(this.params.width!=undefined) this.width = Math.max(800, this.params.width);
    if(this.params.height!=undefined) this.height = Math.max(600, this.params.height);
    if(this.params.level!=undefined) this.level = this.params.level;
    if(this.params.seedlist!=undefined) this.seedlist = this.params.seedlist.split(',');
    if(this.params.seed!=undefined && (this.params.seed in StdSeeds)) this.seed = this.params.seed;//!!这里原代码还有其他功能
    if(this.params.mode!=undefined && (this.params.mode.toLowerCase()=='draw')) this.currentMode = 1;
  }
  layout(){
    // this.setup_loadSave();
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
    selectFile.onchange = function(event) {
      drawer.loadLocally(event);
    };
    // load files from cloud
    let loadFromCloud = document.createElement('button');
    loadFromCloud.className = 'btn btn-default';
    loadFromCloud.innerHTML = 'Load From Cloud';
    loadFromCloud.onclick = function(event) {
      drawer.loadRemotely(event);
    };
    // save to cloud
    let saveToCloud = document.createElement('button');
    saveToCloud.className = 'btn btn-default';
    saveToCloud.innerHTML = 'Save To Cloud';
    saveToCloud.onclick = function(event) {
      drawer.saveRemotely(event);
    };
    // save files
    let save = document.createElement('button');
    save.className = 'btn btn-default';
    save.innerHTML = 'Save To File';
    save.onclick = function(event) {
      drawer.saveLocally(event);
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
    panel.innerHTML = '<h3>Instructions</h3>\
    <div><img class="icon-close" src="icons/close.svg"><div>\
    <ul>\
        <li><strong>Change mode - </strong>Click "Edit Mode" to enter the edit mode.</li>\
        <li><strong>Change line color - </strong>Select a color at the top then click on the line you wish to change.</li>\
        <li><strong>Move a node - </strong>Single click a node to move it around and click again to place it, or click and hold on a node and drag it to the place you want.</li>\
        <li><strong>Insert a node - </strong>Double click on a line between nodes to insert a new node.</li>\
        <li><strong>Delete a node - </strong>Click a node and press Delete/Backspace Key.</li>\
    </ul>';
    panel.className = "tutor help-panel";
    panel.querySelector(".icon-close").onclick = function(){
      this.helpPanel.style.display = "none";
    }.bind(this);

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
  // let canvas = document.querySelector('#mycanvas');
  // let graph = new Fractal('koch',1);
  // if (canvas.getContext) {
  //   let ctx = canvas.getContext('2d');
  //   console.log(graph.adj);
  //   graph.deletePt(3);
  //   // graph.addLn(0,1,0);
    
  //   graph.drawSeed(ctx);
  //   // graph.drawIter(ctx,3);
  // }
  
});
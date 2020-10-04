
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
        [260.0, 200.0, 0],
        [280.0, 250.0, 6],
        [260.0, 150.0, 6],
        [260.0, 50.0, 4],
        [380.0, 50.0, 4],
        [380.0, 150.0, 4],
        [480.0, 150.0, 4],
        [480.0, 250.0, 4],
        [380.0, 250.0, 4],
        [380.0, 350.0, 4],
        [260.0, 350.0, 4],
        [260.0, 250.0, 4],
        [160.0, 250.0, 4],
        [160.0, 150.0, 4],
        [260.0, 150.0, 4],
        [300.0, 200.0, 6],
        [340.0, 200.0, 0],
        [380.0, 200.0, 6],
      ],
    },
    'baila': {
      fullname: 'Ba-ila',
      thickness: 2.0,
      thicknessType: 1,
      itNumber: 3,
      seed: [
        [210.0, 284.0, 0],
        [210.0, 187, 6],
        [210.0, 201, 4],
        [217, 221, 4],
        [224, 235, 0],
        [237, 249, 0],
        [251, 263, 0],
        [279, 269, 0],
        [313, 276, 0],
        [354, 276, 0],
        [395, 269, 0],
        [430, 249, 0],
        [457, 215, 0],
        [469, 172, 0],
        [469, 122, 0],
        [451, 85, 0],
        [420, 61, 0],
        [389, 48, 0],
        [358, 42, 0],
        [327, 42, 0],
        [296, 48, 0],
        [272, 61, 0],
        [253, 73, 0],
        [235, 85, 0],
        [222, 98, 0],
        [216, 110, 0],
        [210.0, 129, 4],
        [210.0, 139, 4],
        [375, 180, 6],
        [375, 118, 0],
        [210.0, 32, 6],
      ],
    },
    'blanket': {
      fullname: 'Fulani Blanket',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 3,
      seed: [
        [240.0, 160.0, 0],
        [180.0, 160.0, 6],
        [140.0, 220.0, 4],
        [100.0, 160.0, 4],
        [140.0, 100.0, 4],
        [180.0, 160.0, 4],
        [60.0, 100.0, 6],
        [20.0, 160.0, 4],
        [60.0, 220.0, 4],
        [100.0, 160.0, 4],
        [60.0, 100.0, 4],
        [280.0, 120.0, 6],
        [320.0, 120.0, 0],
        [280.0, 200.0, 6],
        [320.0, 200.0, 0],
        [420.0, 160.0, 6],
        [460.0, 220.0, 4],
        [500.0, 160.0, 4],
        [540.0, 220.0, 4],
        [580.0, 160.0, 4],
        [540.0, 100.0, 4],
        [500.0, 160.0, 4],
        [460.0, 100.0, 4],
        [420.0, 160.0, 4],
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
        [239, 197, 6],
        [239, 94, 4],
        [341, 94, 4],
        [341, 197, 4],
        [239, 197, 4],
        [252, 194, 6],
        [239, 197, 6],
        [239, 159, 0],
        [239, 133, 6],
        [239, 94, 0],
        [277, 94, 0],
        [303, 94, 6],
        [341, 94, 0],
        [341, 133, 0],
        [341, 159, 6],
        [341, 197, 0],
        [303, 197, 0],
        [277, 197, 6],
        [239, 197, 0],
        [380, 300.0, 6],
      ],
    },
    'chaetophora': {
      fullname: 'Chaetophora',
      thickness: 2.0,
      thicknessType: 0,
      itNumber: 5,
      seed: [
        [249.0, 322.0, 0],
        [254, 319, 6],
        [265, 245, 4],
        [244, 319, 6],
        [252, 246, 4],
        [255, 245, 6],
        [236, 184, 1],
        [207, 246, 6],
        [261, 245, 6],
        [286, 195, 0],
        [309, 246, 6],
        [258, 246, 6],
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
        [240.0, 232.0, 4],
        [246.0, 214, 0],
        [265, 206.0, 0],
        [284, 214.0, 0],
        [289, 232.0, 0],
        [289, 320.0, 4],
        [289, 320.0, 6],
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
        [237, 170.0, 6],
        [209.0, 229, 6],
        [260.0, 240.0, 6],
        [280.0, 231.0, 4],
        [300.0, 220.0, 0],
        [307, 229, 6],
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
        [304.0, 156.0, 4],
        [328.0, 156.0, 4],
        [328.0, 174.0, 4],
        [304.0, 174.0, 0],
        [304.0, 156.0, 6],
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
        [269.0, 202.0, 6],
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
        [351.0, 55.0, 6],
        [338.0, 68.0, 4],
        [325.0, 94.0, 4],
        [325.0, 120.0, 4],
        [338.0, 147.0, 4],
        [351.0, 160.0, 4],
        [377.0, 173.0, 4],
        [403.0, 173.0, 4],
        [430.0, 160.0, 4],
        [443.0, 147.0, 4],
        [456.0, 120.0, 4],
        [456.0, 94.0, 4],
        [443.0, 68.0, 4],
        [430.0, 55.0, 4],
        [403.0, 42.0, 4],
        [377.0, 42.0, 4],
        [351.0, 55.0, 4],
        [272.0, 82.0, 6],
        [263.0, 170.0, 0],
        [211.0, 122.0, 6],
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
        [307, 229, 6],
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
        [288.0, 24.0, 0],
        [300.0, 260.0, 0],
        [548, 260.0, 0],
        [548, 260.0, 6],
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
        [300.0, 82, 4],
        [348.5, 171, 6],
        [249.5, 171, 0],
        [299.0, 260.0, 4],
        [348.5, 171, 4],
        [398.0, 260.0, 6],
        [299.0, 260.0, 0],
        [299.0, 260.0, 6],
        [200.0, 260.0, 0],
        [200.0, 260.0, 6],
        [300.0, 82, 4],
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
        [356.0, 107.0, 6],
        [235.0, 87.0, 0],
        [177.0, 99.0, 6],
        [154.0, 134.0, 6],
        [177.0, 168.0, 0],
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
let JSPATH;//path of the current js file
let mySeed = {};//store user customized seed

//initMethod:
//0 - oldversion, init from stdSeed
//1 - new version, init from json file
class Fractal {
    constructor( seed = [], initMethod = 0) {
        this.name = "";
        this.seed = [];
        this.baseline = [];
        this.baseDeltaX, this.baseDeltaY, this.sqbaseLen;
        this.ctx = "";
        this.dim = -1;
        switch (initMethod) {
          case 0: this.setSeedByName(seed);break;
          case 1: this.initFromFile(seed,baseline);break;
        }
    }
    clearPts(seed,baseline,undo=false){
      if(undo){
        this.seed = seed;
        this.baseline = baseline;
        return;
      }
      let arg = [this.seed, this.baseline, undo];
      this.seed = [];
      this.baseline = [];
      return arg;
    }
    clearCanvas(){
      this.ctx.clearRect(0, 0, this.ctx.canvas.clientWidth, this.ctx.canvas.clientHeight);
    }
    setSeedByName(name){
      let seed = StdSeeds[name].seed;
      this.initFromSeed(seed);
    }
    setMySeed(){
      if('seed' in mySeed && 'baseline' in mySeed) {
        this.initFromFile(mySeed.seed,mySeed.baseline);
      }
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
          let y = x0*sin + y0*cos;
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
        let y = x0*sin + y0*cos;
        let pt = [ (x+center[0]+0.5) << 0, (y+center[1]+0.5) << 0];
        pts.push( pt );
        x0 = x;
        y0 = y;
      }
      return pts;
    }
    //iteration
    drawIter(ctx, level, thickness = 1, thinner = false) {
      this.ctx = ctx;
      this.clearCanvas();
      this.setup_baseline();
      if(this.seed <= 1) return;
      let pt1 = this.seed[this.baseline[0]];
      let pt2 = this.seed[this.baseline[1]];
      //move and line
      this.basedraw(pt1,pt2,false,level,thickness,thinner);
      // this.basedraw(pt1,pt2,false,1,1);
    }
    basedraw(b1,b2,hflip,level,lineWidth,thinner){
      let color = 'black';
      let segLen = this.sqlineLen(b1,b2);
      let d_segX = b1[0] - b2[0];
      let d_segY = b1[1] - b2[1];
      let d_baseX = this.baseDeltaX;
      let d_baseY = this.baseDeltaY;
      let base0 = this.seed[this.baseline[0]];
      
      
      if( segLen < 4.0){ //if segment too short, return
        this.ctx.save();
        this.ctx.lineWidth = lineWidth;
        this.ctx.lineCap = 'round';
        this.ctx.beginPath();
        this.ctx.moveTo(b1[0], b1[1]);
        this.ctx.lineTo(b2[0], b2[1]);
        this.ctx.stroke();
        this.ctx.restore();
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
      let newWidth = thinner? lineWidth-1:lineWidth;
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
              this.ctx.save();
              this.ctx.lineWidth = lineWidth;
              this.ctx.lineCap = 'round';
              this.ctx.beginPath();
              this.ctx.moveTo(start[0], start[1]);
              this.ctx.lineTo(end[0], end[1]);
              this.ctx.stroke();
              this.ctx.restore();
            }
          } else if( type < 4 ){
            
            let typeName = lineTypes[(type|0)].name;
            let flag_h = typeName == 'flip' || typeName == 'invert';
            let flag_d = typeName == 'invert' || typeName == 'inverflip';
            let hf = flag_h? !hflip: hflip;
            if( ( type | 0 ) != type ){//for circles
              let center = start;
              let vertix = end;
              let n = (( type - ( type | 0 ) )*100)|0;
              let theta = flag_d? -2 * Math.PI / n : 2 * Math.PI / n;
              let cos = Math.cos(theta);
              let sin = Math.sin(theta);
              let x0 = vertix[0] - center[0];
              let y0 = vertix[1] - center[1];
              for(let i = 1 ; i < n ; i++ ){
                let x = x0*cos - y0*sin;
                let y = x0*sin + y0*cos;
                let pt1 = [ (x0+center[0]+0.5) << 0, (y0+center[1]+0.5) << 0];
                let pt2 = [ (x+center[0]+0.5) << 0, (y+center[1]+0.5) << 0];
                this.basedraw(pt1,pt2,hf,level-1,newWidth,thinner);
                x0 = x;
                y0 = y;
              }
              let pt = [ (x0+center[0]+0.5) << 0, (y0+center[1]+0.5) << 0];
              this.basedraw(pt, vertix, hf,level-1,newWidth,thinner);
            } else {
              if(flag_d) this.basedraw(end,start,hf,level-1,newWidth,thinner);
              else this.basedraw(start,end,hf,level-1,newWidth,thinner);
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
        let y = x0*sin + y0*cos;
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
};
class SeedIterator{
  constructor(index, fractal, width = 600, height = 480, level = 1){
    //properties
    this.index = index;
    this.fractal = fractal;
    this.width = Math.max(600, width);
    this.height = Math.max(480, height);
    this.level = level;
    this.levelMax = -1;
    this.thickness = 1;
    this.thinner = false;
    //elements
    this.canvas, this.ctx;
    this.ctrlPanel, this.levelBtns;
    this.thicknessInput, this.thinnerCheckbox;
    this.layout();
    this.setDimInfo();
  }
  layout(){
    this.setup_canvas();
    this.setup_ctrlPanel();
    this.setup_levelBtns();
    this.setup_dimInfo();
    this.setup_bottomPanel();
  }
  enableMode(){
    this.canvas.style.display = 'block';
    this.ctrlPanel.style.display = 'flex';
    this.fractal.setup_baseline();
    this.setLevelMax();
    console.log(this.level);
    this.setLevel(this.level,true);
    this.setDimInfo();
  }
  disableMode(){
    this.canvas.style.display = 'none';
    this.ctrlPanel.style.display = 'none';
  }
  setLevel(level, init = false){
    //draw fractal
    if(this.levelMax == -1) this.setLevelMax();
    let newlevel = Math.min(level, this.levelMax);
    this.fractal.drawIter(this.ctx, newlevel, this.thickness, this.thinner);
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
    let elem = document.createElement('div');
    let canvas = document.createElement('canvas');
    canvas.id = 'ft-drawing-canvas-' + this.index;
    canvas.className = 'canvas';
    canvas.width = this.width;
    canvas.height = this.height;

    elem.appendChild(canvas);
    this.canvas = elem;
    this.ctx = canvas.getContext('2d');
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
      btn.className = i < 9 ? 'fbtn fbtn-iter':'fbtn fbtn-iter fbtn-iter-inf';
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
  setup_thicknessSelect(){
    let elem = document.createElement('div');
    elem.style.display = 'inline-block';
    elem.style.marginRight = '2em';
    let input = document.createElement('input');
    input.id = 'segThickness_' + this.index;
    input.type = 'number';
    input.style.width = '4em';
    input.value = this.thickness;
    input.min = 1;
    input.onchange = (e) => {
      if(e.target.value < 1.0){ 
        e.target.value = 1.0;
      }
      this.thickness = e.target.value;
      this.fractal.drawIter(this.ctx, this.level, this.thickness, this.thinner);
    };
 
    let label = document.createElement('label');
    label.innerHTML = 'Line Thickness:';
    label.htmlFor = input.id;

    elem.appendChild(label);
    elem.appendChild(input);
    this.thicknessInput = input;
    return elem;
  }
  setup_thinnerCheckbox(){
    let elem = document.createElement('div');
    elem.className = 'checkbox';

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'segThinner_' + this.index;
    input.checked = this.thinner;
    input.style.marginRight = '.5em';
    input.onchange = (e) => {
      if(e.target.checked) this.thinner = true;
      else this.thinner = false;
    };
    let label = document.createElement('label');
    label.innerHTML = 'Thinner with recursion';
    label.htmlFor = input.id;

    elem.appendChild(input);
    elem.appendChild(label);
    this.thinnerCheckbox = input;
    return elem;
  }
  setup_bottomPanel(){
    let elem = document.createElement('div');
    elem.className = 'bottom-panel';
    let child1 = this.setup_thicknessSelect();
    let child2 = this.setup_thinnerCheckbox();
    elem.appendChild(child1);
    elem.appendChild(child2);
    this.canvas.appendChild(elem);
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
  setThickness(thickness){
    if(thickness == this.thickness) return;
    this.thickness = thickness;
    this.thicknessInput.value = thickness;
  }
  setThinner(thinner){//thinner is a boolean
    if(thinner == this.thinner) return;
    this.thinner = thinner;
    this.thinnerCheckbox.checked = thinner;
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
      SELECT: 0, DELETE: 1, SHAPE: 2, ADD: 3,
    }
    this.tools = [ 
      { mode:"SELECT",name:"select",  adv:false,title:"select & move points"},
      { mode:"DELETE",name:"deletept",adv:false,title:"delete points"},
      { mode:"SHAPE", name:"circle",  adv:true, title:"draw a circle"},
      { mode:"ADD",   name:"addpt",   adv:true, title:"draw new points & lines"}
    ];
    this.advTool = this.modes.SHAPE;
    this.instructions = {
      select_circle:'You can press "b" to break the circle into segments',};
    this.modetxt = ["move pt", "edit baseline", "add pt"]
    //elements
    this.canvas, this.bgctx, this.workctx,this.scaleMove;
    this.ctrlPanel;
    this.seedSel, this.modeSel, this.toolBar, this.segTypeSel, this.snapBox;
    this.repTypeBtn, this.segTypeBtn = [];
    this.advToolBtn, this.toolBtn = [];
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
    this.setup_clearBtn();
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

    let option = new Option("Make your own...", "create", true);
    select.appendChild(option);
    this.seedlist.forEach(name => {
      if(!(name in StdSeeds)) return;
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
    // set up mode selection bar, including SELECT, DELETE, SHAPE/ADD
    // return: none
    let elem = document.createElement('div');
    elem.style.position = 'relative';
    //dropdown controller
    let drop = this.setup_toolDropdown();
    //the dropdown panel
    let advTools = document.createElement('div');
    advTools.className = 'dropdown-list';
    advTools.style.display = 'none';
    drop.appendChild(advTools);

    this.tools.forEach(item => {
      let btn = document.createElement('button');
      btn.className = "fbtn fbtn-default fbtn-tool";
      btn.title = item.title;
      let icon = document.createElement('img');
      icon.src = "tool_" + item.name +".svg";
      icon.height = 24;
      icon.style.opacity = ".54";
      btn.appendChild(icon);
      if(item.mode == 'SELECT'){
        btn.style.position = 'relative';
        let color = document.createElement('div');
        color.className = ('color-selected');
        btn.appendChild(color);
      } else if(item.mode == 'SHAPE'){ // segnum selector or circles
        btn.style.position = 'relative';
        let select = this.setup_circleSel();
        elem.appendChild(select);
      }
      btn.onclick = function(mode){
        this.setMode(mode);
      }.bind(this,this.modes[item.mode]);
      this.toolBtn.push(btn);
      if(item.adv) {
        let span = document.createElement('span');
        span.innerText = item.title;
        span.style.marginLeft = '.5em';
        btn.appendChild(span);
        advTools.appendChild(btn);
      } else {
        elem.appendChild(btn);
      }
    });
    
    
    elem.appendChild(drop);
    this.toolBar = elem;
    this.ctrlPanel.appendChild(this.toolBar);
  }
  setup_toolDropdown(){
    //dropdown controller- advanced tools
    let tool = this.tools[this.advTool];
    let elem = document.createElement('div');
    elem.style.display = 'inline-block';
    elem.style.position = 'relative';
    let btn = document.createElement('button');
    btn.className = 'fbtn fbtn-default fbtn-tool';    
    btn.style.position = 'relative';
    btn.title = tool.title;
    
    let iconTool = document.createElement('img');
    iconTool.height = 24;
    iconTool.src = 'tool_'+ tool.name +'.svg';
    iconTool.style.opacity = ".54";
    let color = document.createElement('div');
    color.className = 'color-selected';
        
    let iconDrop = document.createElement('img');
    iconDrop.height = 24;
    iconDrop.style.marginLeft = '.5em';
    iconDrop.src = 'icon_arrow_down.svg';

    btn.appendChild(color);
    btn.appendChild(iconTool);
    btn.appendChild(iconDrop);    
    btn.onclick = ()=>{
      this.setMode(this.advTool);
    }
    elem.onmouseenter = () => {
      let elem = this.toolBar.querySelector('.dropdown-list');
      elem.style.display = 'block';
    };
    elem.onmouseleave = () => {
      let elem = this.toolBar.querySelector('.dropdown-list');
      elem.style.display = 'none';
    };
   
    //layout
    this.advToolBtn = btn;
    elem.appendChild(btn);
    return elem;
  }
  setup_segTypeSel(){
    let elem = document.createElement('div');
    elem.className = "segTypeSel";
    //the dropdown panel
    let repBtns = document.createElement('div');
    repBtns.className = 'dropdown-list';
    repBtns.style.display = 'none';

    let otherBtns = document.createElement('span');
    lineTypes.forEach( (item,index)=> {
      let btn = document.createElement('button');
      let icon = document.createElement('div');
      icon.className = 'icon-color';
      icon.style.backgroundColor = item.color;
      btn.appendChild(icon);
      btn.className = "fbtn fbtn-default";
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
    //dropdown - replication btn
    let elem = document.createElement('div');
    elem.style.display = 'inline-block';
    elem.style.position = 'relative';

    let btnColor = document.createElement('button');
    btnColor.className = 'fbtn fbtn-default';
    let iconColor = document.createElement('div');
    iconColor.className = 'icon-color repType';
    iconColor.style.backgroundColor = lineTypes[this.repType].color;
    iconColor.style.marginRight = '.5em';
    let iconDrop = document.createElement('img');
    iconDrop.height = 24;
    iconDrop.src = 'icon_arrow_down.svg';

    btnColor.appendChild(iconColor);
    btnColor.appendChild(iconDrop);
    btnColor.title = lineTypes[this.repType].title;
    btnColor.onclick = ()=>{
      this.setSegType(this.repType);
    }
    elem.onmouseenter = () => {
      let elem = this.segTypeSel.querySelector('.dropdown-list');
      elem.style.display = 'block';
    };
    elem.onmouseleave = () => {
      let elem = this.segTypeSel.querySelector('.dropdown-list');
      elem.style.display = 'none';
    };
   
    //layout
    this.repTypeBtn = btnColor;
    elem.appendChild(btnColor);
    return elem;
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
      let option = new Option(item.txt,item.value);
      select.appendChild(option);
    });
    select.onchange = (e) => {
      this.circleSeg = e.target.value;
    };
    elem.appendChild(label);
    elem.appendChild(select);
    this.circleSel = elem;
    return elem;
  }
  setup_undo(){
    let elem = document.createElement('div');
    elem.style.marginRight = '1em';
    //undo
    let btn_undo = document.createElement('button');
    btn_undo.className = "fbtn fbtn-default fbtn-tool";
    btn_undo.title = "undo";
    let icon_undo = document.createElement('img');
    icon_undo.src = "tool_undo.svg";
    icon_undo.height = 24;
    icon_undo.style.opacity = ".54";
    
    btn_undo.appendChild(icon_undo);
    
    btn_undo.onclick = ()=>{
      this.undo();
    };
    //redo
    let btn_redo = document.createElement('button');
    btn_redo.className = "fbtn fbtn-default fbtn-tool";
    btn_redo.title = "redo";
    let icon_redo = document.createElement('img');
    icon_redo.src = "tool_redo.svg";
    icon_redo.height = 24;
    icon_redo.style.opacity = ".54";
    btn_redo.appendChild(icon_redo);
    
    btn_redo.onclick = ()=>{
      this.redo();
    };
    elem.appendChild(btn_undo);
    elem.appendChild(btn_redo);

    btn_undo.disabled = true;
    btn_redo.disabled = true;
   
    this.undoBtn = btn_undo;
    this.redoBtn = btn_redo;
    this.ctrlPanel.appendChild(elem);
  }
  setup_snapCheckbox(){
    let elem = document.createElement('div');
    elem.className = "snapCheckbox checkbox";
    elem.style.marginRight = '1em';
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
    elem.className = 'bottom-panel';
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
    up.className = 'fbtn fbtn-default';
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
    down.className = 'fbtn fbtn-default';
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
      btn.className = 'fbtn fbtn-default';
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
  setup_clearBtn(){
    let btn = document.createElement('button');
    btn.className = 'fbtn fbtn-default fbtn-clear';
    btn.innerHTML = 'Clear';
    btn.onclick = ()=>{
      let arg = this.fractal.clearPts();
      this.fractal.drawSeed(this.workctx);
      this.addCommand(this.fractal.clearPts, arg);
    }
    this.ctrlPanel.appendChild(btn);
  }
  setup_message(){
    let elem = document.createElement('div');
    elem.className = "message";
    elem.style.display = "none";
    let span = document.createElement('span');
    span.className = "message-text"
    let icon = document.createElement('img');
    icon.src = "icon_close.svg";
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
  //major functions
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
    if(this.status == this.modes.SELECT){//MODE-MOVE: move pts, click to select pt 
      if(this.selectedPt == -1) {  //pick up pt
        let n = this.fractal.selectPt(this.rawPos);
        let ln = this.fractal.selectLn(this.rawPos)
        this.selectedPt = n;
        //handle message box
        if(n != -1 && this.fractal.isCircleCenter(n)){//select circle center
          this.message.querySelector('.message-text').innerHTML = this.instructions.select_circle;
          this.message.style.display = 'block';
        } else if(this.message.style.display == 'block') {
          this.message.querySelector('.message-text').innerHTML = "";
          this.message.style.display = 'none';
        }
        //if segment is selected
        if( n == -1 && ln != -1){
          let arg = this.fractal.setLnType(ln,this.segType);
          this.fractal.drawSeed(this.workctx);
          this.addCommand(this.fractal.setLnType, arg);
          return;
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
        this.setMode(this.modes.SELECT);
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
            if(this.message.style.display == 'block') {
              this.message.querySelector('.message-text').innerHTML = "";
              this.message.style.display = 'none';
            }
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
    } else if(this.status == this.modes.SHAPE && this.selectedPt != -1){
      if(e.code == "Escape" || e.code == "Space") {
        this.fractal.drawSeed(this.workctx);
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
  setMode(mode, init = false){
    if( mode == this.status && !init) return;
    if( this.isInitiating && mode!=this.modes.ADD) return;
    if(!init){//clear old highlight
      let btn = this.toolBtn[this.status];
      if(this.status == this.modes.SHAPE) this.circleSel.style.display = 'none';
      deactivateBtn(btn);
      if(this.tools[this.status].adv){
        deactivateBtn(this.advToolBtn);
      }
    }
    let color = lineTypes[this.segType].color;
    activateBtn(this.toolBtn[mode],color);
    if(this.tools[mode].adv){
      let icon = this.advToolBtn.querySelector('img');
      icon.src = 'tool_' + this.tools[mode].name + '.svg';
      icon.title = this.tools[mode].title;
      activateBtn(this.advToolBtn,color);
      this.advTool = mode;
    }
    if(mode == this.modes.SHAPE) this.circleSel.style.display = 'block';
    //disable segType selection for DELETE&SELECT mode
    let flag = mode == this.modes.DELETE;
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
    //local functions
    function activateBtn(btn,color){
      btn.classList.add('active-edit');
      btn.querySelector('img').style.opacity = '1.0';
      if(btn.querySelector('.color-selected')){
        btn.querySelector('.color-selected').style.backgroundColor = color;
      }
    }
    function deactivateBtn(btn){
      btn.classList.remove('active-edit');
      btn.querySelector('img').style.opacity = '.54';
      if(btn.querySelector('.color-selected')){
        btn.querySelector('.color-selected').style.backgroundColor = 'transparent';
      }
    }
  }
  setSeed(seed, method){
    if(method == 'name') {
      if(this.seedName == 'create'){
        mySeed.baseline = this.fractal.baseline;
        mySeed.seed = this.fractal.seed;
      }
      this.fractal.clearPts();
      this.clearStack();
      if(seed in StdSeeds) {
        this.setMode(this.modes.SELECT);
        this.fractal.setSeedByName(seed);
      } else if(seed == 'create') {
        if('seed' in mySeed){
          this.setMode(this.modes.SELECT);
          this.fractal.setMySeed();
        } else {
          this.setMode(this.modes.ADD);
          this.isInitiating = true;
        }
        
      }
      this.seedName = seed;
      this.fractal.drawSeed(this.workctx, this.isInitiating);
      return;
    }
  }
  setSegType(type,init = false){
    if(!init && type == this.segType) return;
    if(!lineTypes[type].rep){
      this.repTypeBtn.classList.remove('active-edit');
    } else if(this.repType != this.segType){
      this.repTypeBtn.classList.add('active-edit');
    }
    if(!init && type != this.repType && lineTypes[type].rep){//new rep type
      let n = this.repType;
      this.segTypeBtn[n].classList.remove('active-edit');
      this.repTypeBtn.querySelector('div').style.backgroundColor = lineTypes[type].color;
      this.repTypeBtn.title = lineTypes[type].title;
      this.repType = type;
    }
    
    if(!init && this.segType > 3){
      let n = this.segType;
      let oldbtn = this.segTypeBtn[n];
      oldbtn.classList.remove('active-edit');
    }

    this.segType = type;
    let newbtn = this.segTypeBtn[this.segType];
    newbtn.classList.add('active-edit');
    if(init && this.segType != this.repType){
      this.segTypeBtn[this.repType].classList.add('active-edit');
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
    this.topBar, this.editCanvas, this.iterCanvas;
    this.loadDrop,this.saveDrop;
    this.handleParams();
    this.fractal = new Fractal(this.seed,0);
    this.iterator = new SeedIterator(this.index, this.fractal, this.width, this.height, this.level);
    this.editor = new SeedEditor(this.index, this.fractal, this.width, this.height, this.seedlist, this.seed);
    this.iterator.disableMode();
    this.editor.disableMode();
    this.layout();
  }
  handleParams(){
    if(this.params.width!=undefined) this.width = Math.max(400, this.params.width);
    if(this.params.height!=undefined) this.height = Math.max(300, this.params.height);
    if(this.params.levels!=undefined) this.level = this.params.levels;
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
    this.main.style.width = this.width;
    this.insertStyleSheet();
    this.setup_topBar();
    this.setup_ctrlPanelDiv();
    this.setup_canvasDiv();
    this.setup_helpPanel();
    this.setup_csnapEntry();
  }
  insertStyleSheet(){
    let cssname = 'style.css';
    
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './' + cssname;
    document.querySelector('head').appendChild(link);
  }
  setup_topBar(){
    let elem = document.createElement('div');
    elem.style.display = 'flex';
    elem.style.justifyContent = 'space-between';
    elem.style.position = 'relative';
    let modeSel = this.setup_modeSel();
    let loadSave = this.setup_loadSave();
    elem.appendChild(modeSel);
    elem.appendChild(loadSave);
    this.topBar = elem;
    this.main.appendChild(elem);
  }
  setup_modeSel(){
    let elem = document.createElement('div');
    elem.id = 'ft-modesel-' + this.index;
    this.modeSel = elem;
    this.addMode("edit",this.editor);
    this.addMode("iterate",this.iterator);
    this.setMode(this.currentMode, true);
    return elem;
  }
  setup_load(){
    //////LOAD//////
    let elem = document.createElement('div');
    elem.style.display = 'inline-block';
    elem.style.position = 'relative';
    ////BUTTON
    let loadBtn = document.createElement('button');
    loadBtn.className = 'fbtn fbtn-default ctrlbtn';
    loadBtn.innerHTML = 'Load';
    let icon = new Image();
    icon.src = 'icon_arrow_down.svg';
    icon.height = 16;
    icon.style.marginLeft = '4px';
    loadBtn.appendChild(icon);
    ////DROPDOWN
    let loadDrop = document.createElement('div');
    loadDrop.className = 'dropdown-list';
    loadDrop.style.display = 'none';
    // load files
    let loadFromFile = document.createElement('div');
    loadFromFile.className = 'fbtn fbtn-default fbtn-tool';
    loadFromFile.style.textAlign = 'left';
    
    let selectFile = document.createElement('input');
    selectFile.type = 'file';
    selectFile.id = 'selectFile_'+this.index;
    selectFile.accept = '.json';
    selectFile.onchange = (e) => {
      this.loadLocally(e);
    };
    let label = document.createElement('label');
    label.innerHTML = 'Load From File';
    label.htmlFor = selectFile.id;
    loadFromFile.appendChild(label);
    loadFromFile.appendChild(selectFile);
    // load files from cloud
    let loadFromCloud = document.createElement('button');
    loadFromCloud.className = 'fbtn fbtn-default fbtn-tool';
    loadFromCloud.innerHTML = 'Load From Cloud';
    loadFromCloud.onclick = (e) => {
      this.loadRemotely(e);
    };
    loadDrop.appendChild(loadFromFile);
    loadDrop.appendChild(loadFromCloud);
    this.loadDrop = loadDrop;
    elem.appendChild(loadBtn);
    elem.appendChild(loadDrop);
    //behaviour
    elem.onmouseenter = (e) => {
      this.loadDrop.style.display = 'block';
      let btn = this.loadDrop.parentElement.querySelector('.ctrlbtn');
      btn.classList.add('active-edit');
    }
    elem.onmouseleave = (e) => {
      this.loadDrop.style.display = 'none';
      let btn = this.loadDrop.parentElement.querySelector('.ctrlbtn');
      btn.classList.remove('active-edit');
    }
    return elem;
  }
  setup_save(){
    //////SAVE//////
    let elem = document.createElement('div');
    elem.style.display = 'inline-block';
    elem.style.position = 'relative';
    ////BUTTON
    let saveBtn = document.createElement('button');
    saveBtn.className = 'fbtn fbtn-default ctrlbtn';
    saveBtn.innerHTML = 'Save';
    let icon = new Image();
    icon.height = 16;
    icon.style.marginLeft = '4px';
    icon.src = 'icon_arrow_down.svg';
    saveBtn.appendChild(icon);
    ////DROPDOWN
    let drop = document.createElement('div');
    drop.className = 'dropdown-list';
    drop.style.display = 'none';
    // save to cloud
    let saveToCloud = document.createElement('button');
    saveToCloud.className = 'fbtn fbtn-default fbtn-tool';
    saveToCloud.innerHTML = 'Save To Cloud';
    saveToCloud.onclick = (e) => {
      this.saveRemotely(e);
    };
    // save files
    let save = document.createElement('button');
    save.className = 'fbtn fbtn-default fbtn-tool';
    save.innerHTML = 'Save To File';
    save.onclick = (e) => {
      this.saveLocally(e);
    };
    
    drop.appendChild(saveToCloud);
    drop.appendChild(save);
    this.saveDrop = drop;
    elem.appendChild(saveBtn);
    elem.appendChild(drop);
    //behaviour
    elem.onmouseenter = (e) => {
      this.saveDrop.style.display = 'block';
      let btn = this.saveDrop.parentElement.querySelector('.ctrlbtn');
      btn.classList.add('active-edit');
    }
    elem.onmouseleave = (e) => {
      this.saveDrop.style.display = 'none';
      let btn = this.saveDrop.parentElement.querySelector('.ctrlbtn');
      btn.classList.remove('active-edit');
    }

    return elem;
  }
  setup_loadSave(){
    let elem =  document.createElement('div');
    elem.className = 'loadSave';  
    let loadDiv = this.setup_load();
    let saveDiv = this.setup_save();
    elem.appendChild(loadDiv);
    elem.appendChild(saveDiv);

    return elem;
  }
  setup_ctrlPanelDiv(){
    let elem = document.createElement('div');
    elem.id = 'ft-ctrlpanel-' + this.index;
    elem.appendChild(this.iterator.ctrlPanel);
    elem.appendChild(this.editor.ctrlPanel);
    this.ctrlPanelDiv = elem;
    this.main.appendChild(elem);
  }
  setup_canvasDiv(){
    let elem = document.createElement('div');
    elem.id = 'ft-canvases-' + this.index;
    elem.style.position = 'relative';
    elem.appendChild(this.iterator.canvas);
    elem.appendChild(this.editor.canvas);
    this.canvasDiv = elem;
    this.main.appendChild(elem);
  }
  setup_helpPanel(){
    let link = document.createElement('a');
    link.innerHTML = "Help";
    link.style.marginLeft = "1em";
    link.style.cursor = 'pointer';
    link.onclick = function() {
      toggle_e(this.helpPanel);
    }.bind(this);

    let panel = document.createElement('div');
    panel.className = "help-panel";
    panel.style.display = 'none';
    panel.innerHTML = '<h3>Instructions</h3>\
    <ul>\
        <li><strong>Change mode</strong>Click buttons on the top left.</li>\
        <li><strong>Change segment type</strong>Select a segment type (encoded with different colors) at the top. Then with the "SELECT" tool, click on the line you wish to change.</li>\
        <li><strong>Move a node</strong>With the "SELECT" tool, single click a node to move it around and click again to place it.</li>\
        <li><strong>Insert a node</strong>With the "SELECT" tool, double click on a line between nodes to insert a new node. Or use the "ADD" tool.</li>\
        <li><strong>Delete a node</strong>Use the "DELETE" tool. Or select a node and press Delete/Backspace Key.</li>\
        <li><strong>End drawing</strong>Double click or press Esc Key.</li>\
    </ul>';
    let icon = document.createElement('img');
    icon.src = 'icon_close.svg';
    icon.className = 'icon-close';
    icon.onclick = function(){
      this.helpPanel.style.display = "none";
    }.bind(this);

    panel.appendChild(icon);
    this.modeSel.appendChild(link);
    this.helpPanel = panel;
    this.topBar.appendChild(panel);
  }
  setup_csnapEntry(){
    let link = document.createElement('a');
    link.href = '#';
    link.innerHTML = "Csnap";
    link.style.marginLeft = "1em";
    link.style.cursor = 'pointer';
    this.modeSel.appendChild(link);
  }
  //major functions
  addMode(name, modeInstance){
    let elem = document.createElement('button');
    elem.innerHTML = (name + " mode").replace(/(^\w|\s\w)/g, m => m.toUpperCase());//cap first letter
    elem.id = name+"Mode"+this.index;
    elem.className = 'fbtn fbtn-mode';
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
    if('baseline' in data) {
      this.fractal.initFromFile(data.seed,data.baseline);
    } else {
      this.fractal.initFromSeed(data.seed);
    }
    this.setMode(1);
    this.iterator.setThickness(data.thickness);
    this.iterator.setThinner(data.thicknessType);
    this.iterator.setLevel(Number(data.itNumber));
    
   
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
      'thicknessType': this.iterator.thinner
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
          'seed': myself.fractal.seed,
          'baseline': myself.fractal.baseline,
          'itNumber': myself.iterator.level,
          'thickness': Number(myself.iterator.thickness),
          'thicknessType': myself.iterator.thinner
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
  // let scripts = document.getElementsByTagName('script');
  // let filename = 'fracexpl.js';
  
  // for (let i = 0; i < scripts.length; i++) {
  //   let source = scripts[i].src;
  //   if (source.indexOf(filename) > -1) {
  //     JSPATH = source.slice(0, source.indexOf(filename));
  //     break;
  //   }
  // }
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

//all instances need to use the same cloud
window.cloud = new CloudSaver();
window.applicationID = 69;
const lineTypes = [
  {
    name:'regular',
    title:'Self-replicating',
    color: '#EB5757',
    advanced: false,
    width: 2
  }, {
    name:'flip',
    title:'Vertical Flip + Replicate',
    color: '#2F80ED',
    advanced: true,
    width: 2
  }, {
    name:'invert',
    title:'Horizontal Flip + Replicate',
    color: '#F2994A',
    advanced: true,
    width: 2
  }, {
    name:'inverflip',
    title:'Vertical + Horizontal Flip + Replicate',
    color: '#9B51E0',
    advanced: true,
    width: 2
},{
    name:'passive',
    title:'Passive Replication',
    color: '#27AE60',
    advanced: false,
    width: 2
  },{
    name:'invisible',
    title:'Invisible',
    color: '#bdbdbd',
    advanced: false,
    width: 1
  }
];
function toggle_q(query) {
  let e = document.querySelector(query);
  if(e.style.display == 'block')
     e.style.display = 'none';
  else
     e.style.display = 'block';
}
function toggle_e(e) {
  if(e.style.display == 'block')
     e.style.display = 'none';
  else
     e.style.display = 'block';
}
class Fractal {
  constructor( seed = [], oldversion = false, b1 = [100,100], b2 = [200,100]) {
      this.pts = []; //pointlist
      this.adj = {}; //adjacent lists
      this.baseline = [b1,b2];
      this.ctx = "";
      if(oldversion) {
          this.initFromSeed(seed);
      }
  }
  initFromSeed(seed){
      let len = seed.length;
      if(len >= 2) {
          let pt0 = seed[0].slice(0,2);
          let index0 = this.ptToStr(pt0);
          let pt1 = [];
          let index1 = "";
          
          this.pts.push( pt0 );
          this.adj[index0] = [ 0, ];

          for( let i = 1; i < len; i++ ) {//from 0 to 1
              pt1 = seed[i].slice(0,2);
              index1 = this.ptToStr(pt1);
              if(seed[i][2]!=5){
                  if(!(index1 in this.adj)) { //new point
                      this.pts.push(pt1);
                      this.adj[index1] = [ this.pts.length - 1, ];//[position in pts, line count]
                  }
                  this.adj[index0].push([ this.adj[index1][0], seed[i][2] ]);
              }
              pt0 = pt1;
              index0 = index1;
          }
      }
      this.baseline = [ seed[0].slice(0,2) , seed[len-1].slice(0,2) ];
  }
  ptToStr(pt){
      let x = Math.round(pt[0]);
      let y = Math.round(pt[1]);
      if( x < 0 ) x = "m" + Math.abs(x);
      if( y < 0 ) y = "m" + Math.abs(y);
      return "pt" + x + "_" + y;
  }
  drawIt(ctx) {
      this.ctx = ctx;
      this.drawBaseline();
      for(const key in this.adj){
          let index = this.adj[key][0];
          let list = this.adj[key].slice(1);
          list.forEach(adj => this.drawLine(index,adj));
      }
      this.drawPts();
  }
  drawLine(index,adj) {
      if(adj[1]==5) return;
      let start = this.pts[index];
      let end = this.pts[adj[0]];
      let color = lineTypes[adj[1]].color;
      this.ctx.strokeStyle = color;
      this.ctx.beginPath();
      this.ctx.moveTo( start[0], start[1] );
      this.ctx.lineTo( end[0], end[1] );
      this.ctx.stroke();
  }
  drawBaseline() {
      let ctx = this.ctx;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(this.baseline[0][0],this.baseline[0][1]);
      ctx.lineTo(this.baseline[1][0],this.baseline[1][1]);
      ctx.setLineDash([8, 4]);
      ctx.strokeStyle = "#666";
      ctx.stroke();
      ctx.restore();
      ctx.lineWidth = 2;
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
}
/** Returns the square of a value
@param {double} x - The value to be squared
@return {double} - The square of x
*/
function sqr(x) {
  return x * x;
}

/** The main fractal drawing function
@param {int} toolNum - The canvas number
@param {int} seed - The starting shape
@param {int} askWidth - Width of the div
@param {int} askHeight - Height of the div
@param {int} levels - The # of levels of recursion
*/
function FractalDraw(toolNum, seed, askWidth, askHeight, levels, instanceNum) {
  this.seed = seed;
  this.instanceNum = instanceNum;
  this.canvas = document.createElement('canvas');
  this.canvas.id = 'ft-drawing-canvas-' + toolNum;
  this.canvas.width = Math.max(640, askWidth);
  this.canvas.height = Math.max(480, askHeight);
  this.canvas.className = 'canvas';
  this.ctx = this.canvas.getContext('2d');
  this.fractal = new Fractal();

  this.ctrlPanel = document.createElement('div');
  this.ctrlPanel.id = 'ft-drawing-ctrls-' + toolNum;
  this.ctrlPanel.className = 'ctrlPanel';

  //=========================
  //levelButtons: iteration times selection, 1 to 8 & infinity
  this.levelButtons = document.createElement('div');
  this.levelButtons.className = 'levelButtons';

  //level 1 to 8
  for (let i = 1; i <= 8; i++) {
    let levelBtn = document.createElement('button');
    levelBtn.className = 'btn btn-iter';
    levelBtn.innerHTML = 'Iter ' + i;
    levelBtn.id = instanceNum + levelBtn.innerHTML;
    levelBtn.addEventListener('click', function(inum) {
      this.drawIt(inum);
    }.bind(this, i));

    this.levelButtons.appendChild(levelBtn);
  }
  //level infinity
  let infBtn = document.createElement('button');
  infBtn.className = 'btn btn-iter btn-iter-inf';
  infBtn.innerHTML = '&infin; Inf';
  infBtn.id = instanceNum + infBtn.innerHTML;
  infBtn.addEventListener('click', function(inum) {
    this.drawIt(inum);
  }.bind(this, 40));
  
  this.levelButtons.appendChild(infBtn);

  //=========================
  //dimInfo: dimention display
  this.dimInfo = document.createElement('span');
  this.dimInfo.style.marginLeft = '20px';
  this.dimInfo.innerHTML = 'Dim=?';

  //=========================
  //segThickness: line thickness input & thinner
  let segThickness = document.createElement('div');
  segThickness.className = 'segThickness';

  //segThicknessInput: input line thickness
  let segThicknessInput = document.createElement('div');

  this.drawThickness = document.createElement('input');
  this.drawThickness.id = "thickness";
  this.drawThickness.type = 'number';
  this.drawThickness.value = 1;
  this.drawThickness.min = 1;
  this.drawThickness.className = 'input-thickness';
  this.drawThickness.addEventListener('change', function() {
      if (this.drawThickness.value < 1.0) {
        this.drawThickness.value = 1.0;
      }
      this.drawIt(this.currLevels,true);
    }.bind(this));

  let thickLabel = document.createElement('label');
  thickLabel.htmlFor = this.drawThickness.id;
  thickLabel.innerHTML = 'Line Thickness';

  segThicknessInput.appendChild(thickLabel);
  segThicknessInput.appendChild(this.drawThickness);

  // segThinner: thinner with recursion, checkbox
  let segThinner = document.createElement('div');
  segThinner.className = 'checkbox';

  this.thicknessBox = document.createElement('input');
  this.thicknessBox.id = 'thicknessBox' + this.instanceNum;
  this.thicknessBox.type = 'checkbox';
  this.thicknessBox.checked = this.thicknessType;
  this.thicknessBox.onchange = function() {
    this.thicknessBoxClicked();
    this.drawIt(this.currLevels,true);
  }.bind(this);
  
  let thicknessBoxLabel = document.createElement('label');
  thicknessBoxLabel.htmlFor = this.thicknessBox.id;
  thicknessBoxLabel.innerHTML = 'Thin with recursion';

  segThinner.appendChild(this.thicknessBox);
  segThinner.appendChild(thicknessBoxLabel);

  segThickness.appendChild(segThicknessInput);
  segThickness.appendChild(segThinner);

  //control panel layout
  this.ctrlPanel.appendChild(this.levelButtons);
  this.ctrlPanel.appendChild(this.dimInfo);
  this.ctrlPanel.appendChild(segThickness);

  this.currLevels = levels;
  this.drawWidth = 1;//
  this.thicknessType = 0;//
}

FractalDraw.prototype.loadLocally = function(evt) {
  let file = evt.target.files[0];
  if (!file.name.toLowerCase().endsWith('.json')) {
    console.log('bad file type');
    return;
  }

  let reader = new FileReader();
  let myself = this;
  reader.onload = myself.load.bind(myself);

  reader.readAsText(file);
};

FractalDraw.prototype.load = function(input) {
  try {
    if(input.target.result) input = input.target.result;
  }
  catch (err) {

  }
  let data = JSON.parse(input);
  this.setSeed(data.seed);
  this.drawSeed(true);
  this.setDrawWidth(data.thickness);
  this.disableMode();
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

FractalDraw.prototype.loadRemotely = function(evt) {
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
};

FractalDraw.prototype.saveLocally = function() {
  let name = prompt('Please enter the name of the pattern',
    '<name goes here>');
  if (name === null) {
    return;
  }
  let data = {
    'fullname': name,
    'seed': this.seed,
    'itNumber': this.currLevels,
    'thickness': Number(this.drawThickness.value),
    'thicknessType': this.thicknessType,
  };
  let blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  });
  saveAs(blob, name + '.json', false);
};

FractalDraw.prototype.saveRemotely = function() {
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
};

FractalDraw.prototype.checkDim = function(dim) {
  let seed = this.seed;
  if (seed.length < 2) return -1.0;
  let baseline = Math.sqrt((seed[seed.length - 1][0] - seed[0][0]) ** 2 +
    (seed[seed.length - 1][1] - seed[0][1]) ** 2);
  if (baseline < 1.0) return -1.0;
  let lenSum = 0.0;
  for (let i = 1; i < seed.length; i++) {
    let segLen = Math.sqrt((seed[i][0] - seed[i - 1][0]) ** 2 +
      (seed[i][1] - seed[i - 1][1]) ** 2);
    let linScale = segLen / baseline;
    if (seed[i][2] < 4) {
      lenSum += linScale ** dim;
    }
  }

  return lenSum;
};
///calculate dimension
FractalDraw.prototype.getDim = function() {
  let seed = this.seed;
  let replSum = 0.0;
  let nonrepl = 0.0;
  let baseline = Math.sqrt((seed[seed.length - 1][0] - seed[0][0]) ** 2 +
    (seed[seed.length - 1][1] - seed[0][1]) ** 2);
  if (baseline < 1.0) return -1.0;

  for (let i = 1; i < seed.length; i++) {
    let segLen = Math.sqrt((seed[i][0] - seed[i - 1][0]) ** 2 +
      (seed[i][1] - seed[i - 1][1]) ** 2);
    let linScale = segLen / baseline;
    if (seed[i][2] < 4) {
      replSum += linScale;
    } else if (seed[i][2] == 4) {
      nonrepl += linScale; // Visible but non-replicating
    }
  }

  if (nonrepl > 0.0) {
    if (replSum < 1.0) {
      return 1.0;
    } else {
      return -1.0;
    }
  }

  if ((nonrepl == 0.0) && (replSum == 0.0)) return 0.0;

  let lo = 0.0;
  let hi = 2.0;
  let tmp = this.checkDim(lo);
  if (tmp < 1.0) return -1.0;

  tmp = this.checkDim(hi);
  if ((tmp == -1.0) || (tmp > 1.0)) return -1.0;

  while ((hi - lo) > 0.0005) {
    let mid = (lo + hi) / 2;
    tmp = this.checkDim(mid);
    if (tmp >= 1.0) {
      lo = mid;
    } else {
      hi = mid;
    }
  }

  return (lo + hi) / 2;
};

FractalDraw.prototype.setSeed = function(newSeed) {
  this.seed = newSeed;
};

FractalDraw.prototype.setDrawWidth = function(width) {
  this.drawThickness.value = width;
};

FractalDraw.prototype.cloneSeed = function() {
  copy = [];
  for (let i = 0; i < this.seed.length; i++) {
    copy.push(this.seed[i].slice());
  }
  this.seed = copy;
};

FractalDraw.prototype.addToSeed = function(pt) {
  if ((pt[0] != this.seed[this.seed.length - 1][0]) ||
    (pt[1] != this.seed[this.seed.length - 1][1])) {
    this.seed.push(pt);
  }
};

FractalDraw.prototype.insertInSeed = function(pt, idx) {
  if ((idx >= 0) && (idx <= this.seed.length)) {
    this.seed.splice(idx, 0, pt);
  }
};

FractalDraw.prototype.deleteFromSeed = function(idx) {
  if ((idx >= 0) && (idx < this.seed.length)) {
    this.seed.splice(idx, 1);
  }
};

FractalDraw.prototype.changeSeedPt = function(ptNum, newPoint) {
  this.seed[ptNum] = newPoint;
};

FractalDraw.prototype.closestPt = function(pt) {
  if (this.seed.length < 1) return -1;
  let clIdx = 0;
  let clDistSq = sqr(pt[0] - this.seed[0][0]) + sqr(pt[1] - this.seed[0][1]);
  for (let i = 1; i < this.seed.length; i++) {
    let distsq = sqr(pt[0] - this.seed[i][0]) + sqr(pt[1] - this.seed[i][1]);
    if (distsq < clDistSq) {
      clIdx = i;
      clDistSq = distsq;
    }
  }

  // Tolerance: Must be within 10 pixels...
  if (clDistSq <= 100.0) {
    return clIdx;
  } else {
    return -1;
  }
};
FractalDraw.prototype.thicknessBoxClicked = function() {
  this.thicknessType = this.thicknessBox.checked ? 1 : 0;
};
/** Distance between point and line
@param {point} pt - A point
@param {point} e1 - First point in segment
@param {point} e2 - Second point in segment
@return {double} - The distance
*/
function ptlsdist2(pt, e1, e2) {
  if ((e1[0] == e2[0]) && (e1[1] == e2[1])) {
    return sqr(pt[0] - e1[0]) + (pt[1] - e1[1]); // shouldn't happen?
  }
  let seglen = sqr(e1[0] - e2[0]) + sqr(e1[1] - e2[1]);
  let t = ((pt[0] - e1[0]) * (e2[0] - e1[0]) +
    (pt[1] - e1[1]) * (e2[1] - e1[1])) / seglen;
  t = Math.max(0, Math.min(1, t)); // constrain to 0<=t<=1 (on segment)
  let lx = e1[0] + t * (e2[0] - e1[0]);
  let ly = e1[1] + t * (e2[1] - e1[1]);
  return sqr(pt[0] - lx) + sqr(pt[1] - ly);
};

FractalDraw.prototype.closestLn = function(pt) {
  if (this.seed.length < 1) return -1;
  let clIdx = 0;
  let clDistSq = ptlsdist2(pt, this.seed[0], this.seed[1]);
  for (let i = 1; i < this.seed.length - 1; i++) {
    let distsq = ptlsdist2(pt, this.seed[i], this.seed[i + 1]);
    if (distsq < clDistSq) {
      clIdx = i;
      clDistSq = distsq;
    }
  }

  // Tolerance: Must be within 5 pixels...
  if (clDistSq <= 25.0) {
    return clIdx;
  } else {
    return -1;
  }
};

FractalDraw.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

//draw fractals with specific iteration times
FractalDraw.prototype.drawIt = function(levels, init = false) {
  let levelBtns = this.levelButtons.children;
  let levelBtns_len = levelBtns.length;
  if(levels == this.currLevels && !init){return;}

  let oldLevel = Math.min(this.currLevels, levelBtns_len) - 1;//old level
  if (this.currLevels != -1) {
    levelBtns[oldLevel].classList.remove('active-iter');
  }
  let newLevel = Math.min(levels, levelBtns_len) - 1;//new level
  levelBtns[newLevel].classList.add('active-iter');
  this.currLevels = levels;
  this.clear();
  this.ctx.lineWidth = this.drawThickness.value;
  this.ctx.strokeStyle = 'black';
  this.ctx.lineCap = 'round';
  this.basedraw(this.seed[0], this.seed[this.seed.length - 1], 1, levels);
  this.ctx.closePath();
};

FractalDraw.prototype.getCanvas = function() {
  return this.canvas;
};

FractalDraw.prototype.getCtrls = function() {
  return this.ctrlPanel;
};

FractalDraw.prototype.enableMode = function() {
  this.ctrlPanel.className = 'ctrlPanel';
  this.drawIt(this.currLevels, true);//init fractal
  let dim = Math.round(this.getDim() * 1000.0) / 1000.0;
  if (dim == -1) {
    this.dimInfo.innerHTML = 'Dim=?';
  } else {
    this.dimInfo.innerHTML = 'Dim=' + dim;
  }
};

FractalDraw.prototype.disableMode = function() {
  this.ctrlPanel.className = 'hide';
};

FractalDraw.prototype.drawSeed = function(drawBaseLine = false, without = -1) {
  this.clear();
  this.fractal.initFromSeed(this.seed);
  this.fractal.drawIt(this.ctx);
  // if (this.seed.length > 1) {
  //   for (let i = 1; i < this.seed.length; i++) {
  //     if ((i - 1 != without) && (i != without)) {
  //       this.ctx.beginPath();
  //       this.ctx.lineWidth = lineTypes[this.seed[i][2]].width;
  //       this.ctx.strokeStyle = lineTypes[this.seed[i][2]].color;
  //       this.ctx.moveTo(this.seed[i - 1][0], this.seed[i - 1][1]);
  //       this.ctx.lineTo(this.seed[i][0], this.seed[i][1]);
  //       this.ctx.stroke();
  //     }
  //   }
  //   if (drawBaseLine) {
  //     this.ctx.beginPath();
  //     this.ctx.lineWidth = 1;
  //     this.ctx.strokeStyle = 'black';
  //     this.ctx.setLineDash([10, 10]);
  //     this.ctx.moveTo(this.seed[0][0], this.seed[0][1]);
  //     this.ctx.lineTo(this.seed[this.seed.length - 1][0],
  //       this.seed[this.seed.length - 1][1]);
  //     this.ctx.stroke();
  //     this.ctx.setLineDash([]);
  //   }
  // }
};

function lineLen(pt1,pt2){
  let x=pt1[0]-pt2[0];
  let y=pt1[1]-pt2[1];
  return Math.pow( Math.pow(x, 2) + Math.pow(y, 2), 0.5 );
};

FractalDraw.prototype.basedraw = function(start, end, hflip, level, thickness = this.ctx.lineWidth) {
  let seedLen = this.seed.length;
  if (seedLen < 2) return;
  if (this.thicknessType == 1) {
    this.ctx.lineWidth = thickness;
    --thickness;
  }

  let baseDeltaX = this.seed[seedLen - 1][0] - this.seed[0][0];
  let baseDeltaY = this.seed[seedLen - 1][1] - this.seed[0][1];
  let segmentDeltaX = end[0] - start[0];
  let segmentDeltaY = end[1] - start[1];

  let baseLength = lineLen(this.seed[seedLen- 1],this.seed[0]);
  let segmentLength = lineLen(end, start);

  if (segmentLength < 2.0) {
    this.ctx.beginPath();
    this.ctx.moveTo(start[0], start[1]);
    this.ctx.lineTo(end[0], end[1]);
    this.ctx.stroke();
    return;
  }

  // TODO: This needs to be more comprehensible
  let a = (baseDeltaX * segmentDeltaX + hflip * baseDeltaY * segmentDeltaY) / baseLength ** 2;
  let b = (segmentDeltaX * baseDeltaY - hflip * baseDeltaX * segmentDeltaY) / baseLength ** 2;
  let tx = start[0] - a * this.seed[0][0] - b * this.seed[0][1];

  let c = (baseDeltaX * segmentDeltaY - hflip * baseDeltaY * segmentDeltaX) / baseLength ** 2;
  let d = (segmentDeltaY * baseDeltaY + hflip * baseDeltaX * segmentDeltaX) / baseLength ** 2;
  let ty = start[1] - c * this.seed[0][0] - d * this.seed[0][1];

  let startDrawX = start[0];
  let startDrawY = start[1];

  // allows for bypassing the feedback catch:
  let count = 0;
  
  for (let i = 0; i < this.seed.length; i++) {
    let type = lineTypes[this.seed[i][2]].name;
    if (type !== 'passive' && type !== 'invisible') {
      count++;
      if (count > 2) {
        break;
      }
    }
  }

  for (let i = 1; i < this.seed.length; i++) {
    let endDrawX = a * this.seed[i][0] + b * this.seed[i][1] + tx;
    let endDrawY = c * this.seed[i][0] + d * this.seed[i][1] + ty;
    let newSegmentLength = lineLen( [endDrawX,endDrawY], [startDrawX,startDrawY]);

    //for positive feedback
    if (newSegmentLength > segmentLength && level > 30) {
      if (count > 2) {
        level = 30;
      }
    }
    if (newSegmentLength > segmentLength*0.9 && level > 20) {
      if (count > 2) {
        level = 20;
      }
    }
    let type = lineTypes[this.seed[i][2]].name;
    if (type != 'invisible') {
      if ((level == 1) || (type == 'passive')) {
        this.ctx.beginPath();
        this.ctx.moveTo(startDrawX, startDrawY);
        this.ctx.lineTo(endDrawX, endDrawY);
        this.ctx.stroke();
      } else if (type == 'flip') { //flip
        this.basedraw([startDrawX, startDrawY], [endDrawX, endDrawY], -hflip, level - 1, thickness);
      } else if (type == 'invert') { //invert
        this.basedraw([endDrawX, endDrawY], [startDrawX, startDrawY], -hflip, level - 1, thickness);
      } else if (type == 'inverflip') { //invert & flip
        this.basedraw([endDrawX, endDrawY], [startDrawX, startDrawY], hflip, level - 1, thickness);
      } else { //regular
        this.basedraw([startDrawX, startDrawY], [endDrawX, endDrawY], hflip, level - 1, thickness);
      }
    }
    startDrawX = endDrawX;
    startDrawY = endDrawY;
  }
};

/** The base seed editor class
@param {canvas} fractalDraw - the canvas on which stuff needs to be drawn
@param {boolean} enabled - if the drawing should be shown
*/
function SeedEditor(fractalDraw, enabled) {
  this.fractalDraw = fractalDraw;
  let drawingcanvas = fractalDraw.getCanvas();
  let drawing_W = drawingcanvas.width;
  let drawing_H = drawingcanvas.height;
  let drawing_Z = parseInt(drawingcanvas.style['z-index']);
  

  //bgcanvas: background grid
  this.bgcanvas = document.createElement('canvas');
  this.bgcanvas.id = 'fraceditbg';
  this.bgcanvas.className = 'canvas';
  this.bgcanvas.width            = drawing_W;
  this.bgcanvas.height           = drawing_H;
  this.bgcanvas.style['z-index'] = drawing_Z;
 
  drawingcanvas.parentElement.appendChild(this.bgcanvas);
  this.setupBackground();
  
  //drawingcanvas: render fractal iteration
  drawingcanvas.style['z-index'] = drawing_Z + 1;

  //workcanvas: the canvas users interact with
  this.workcanvas = document.createElement('canvas');
  this.workcanvas.id = 'fraceditwork';
  this.workcanvas.className = 'canvas';
  this.workcanvas.width            = drawing_W;
  this.workcanvas.height           = drawing_H;
  this.workcanvas.style['z-index'] = drawing_Z + 2;

  drawingcanvas.parentElement.appendChild(this.workcanvas);
  
  if (!enabled) {
    this.bgcanvas.style['display'] = 'none';
    this.workcanvas.style['display'] = 'none';
  }
  
  this.workctx = this.workcanvas.getContext('2d');
  this.workrect = this.workcanvas.getBoundingClientRect();
  this.workcanvas.seedEditor = this;

  this.gridhighlight = [-1, -1];
  this.workcanvas.onmousemove = this.mouseMove.bind(this);
  this.workcanvas.onclick = this.mouseClick.bind(this);
  this.workcanvas.ondblclick = this.mouseDblClick.bind(this);
  this.workcanvas.onmouseup = this.onMouseUp.bind(this);
  this.workcanvas.onmousedown = this.onMouseDown.bind(this);

  this.workcanvas.tabIndex = 1;
  this.workcanvas.onkeydown = this.keyPress.bind(this);

  this.editMode = SeedEditor.EDITMODE.INIT;
  this.anchor1 = null;
  this.anchor2 = null;
  this.movePt = -1;

  this.ctrlPanel = document.createElement('div');
  this.ctrlPanel.id = 'scoobydoo';
  this.ctrlPanel.className = 'ctrlPanel';

  this.stdSeeds = [];
  this.stdSeedWidth = [];
  this.stdSeedThicknessType = [];

  //=========================
  //seedPicker: seed selection
  let seedPicker = document.createElement('div');
  seedPicker.className = 'seedPicker';

  let pickerLabel = document.createElement('label');
  pickerLabel.innerHTML = 'Seed: ';
  pickerLabel.htmlFor = 'seedSel';

  this.picker = document.createElement('select');
  this.picker.id = 'seedSel';
  this.picker.type = 'list';
  this.picker.onchange = function() {
    this.pickSeed();
  }.bind(this);

  seedPicker.appendChild(pickerLabel);
  seedPicker.appendChild(this.picker);
  
  this.addSeed('edit', 'Make your own...', []);
  //=========================
  //segTypeSel: line type/color selection
  this.currentSegType = -1;
  this.segTypeBtn = [];
  
  let segTypeSel = document.createElement('div');
  segTypeSel.className = 'segTypeSel';

  let segTypeLabel = document.createElement('label');
  segTypeLabel.innerHTML = 'Line:';
  segTypeSel.appendChild(segTypeLabel);

  let typeBtnReg = document.createElement('div');
  let typeBtnAdv = document.createElement('div');  
  typeBtnReg.className = 'typeBtnReg';
  typeBtnAdv.className = 'typeBtnAdv';
  for (let i = 0; i < lineTypes.length; i++) {
    let btn = document.createElement('button');
    let icon = document.createElement('img');
    icon.src = "icons/button_" + lineTypes[i].name + ".svg";
    btn.appendChild(icon);
    btn.className = 'btn btn-edit type-' + lineTypes[i].name;
    btn.title = lineTypes[i].title;
    btn.value = i;
    btn.onclick = function(type) {
      this.setSegType(type);
    }.bind(this, i);
    this.segTypeBtn.push(btn);
    if (lineTypes[i].advanced) {typeBtnAdv.appendChild(btn);}
    else typeBtnReg.appendChild(btn);
  }
  segTypeSel.appendChild(typeBtnReg);
  segTypeSel.appendChild(typeBtnAdv);
  //=========================
  ///scaleMoveBtns: scale and move buttons
  let scaleMoveBtns = document.createElement('div');
  scaleMoveBtns.className = 'scaleMoveBtns';

  ///scaleBtns: scale down and up
  let scaleBtns = document.createElement('div');
  scaleBtns.className = 'scaleBtns';

  let scaleDownButton = document.createElement('button');
  scaleDownButton.innerHTML = 'Shrink';
  scaleDownButton.className = 'btn btn-default';
  scaleDownButton.onclick = function() {
    this.snapBox.checked = false;
    this.scale(0.90);
  }.bind(this);

  let scaleUpButton = document.createElement('button');
  scaleUpButton.innerHTML = 'Expand';
  scaleUpButton.className = 'btn btn-default';
  scaleUpButton.onclick = function() {
    this.snapBox.checked = false;
    this.scale(1.10);
  }.bind(this);

  scaleBtns.appendChild(scaleDownButton);
  scaleBtns.appendChild(scaleUpButton);
  
  ///compass: move fractal around
  let compass = document.createElement('div');
  compass.className = 'compass';
  let compassBtns = [
    {name:'up',content:'&uarr;',title:'Move Up'},
    {name:'left',content:'&larr;',title:'Move Left'},
    {name:'down',content:'&darr;',title:'Move Down'},
    {name:'right',content:'&rarr;',title:'Move Right'}
  ];
  for (let i = 0 ; i < 4 ; i++ ){
    let btn = document.createElement('button');
    btn.innerHTML = compassBtns[i].content;
    btn.title = compassBtns[i].title;
    btn.className = 'btn btn-default';
    btn.onclick = function() {
      this.compass(compassBtns[i].name);
    }.bind(this);
    compass.appendChild(btn);
  }
  
  scaleMoveBtns.appendChild(scaleBtns);
  scaleMoveBtns.appendChild(compass);
  
  //=========================
  //snapCheckbox: snap to grid, checkbox
  let snapCheckbox = document.createElement('div');
  snapCheckbox.className ='snapCheckbox checkbox';

  this.snapBox = document.createElement('input');
  this.snapBox.type = 'checkbox';
  this.snapBox.checked = true;
  this.snapBox.id = 'snap';

  let snapBoxLabel = document.createElement('label');
  snapBoxLabel.htmlFor = this.snapBox.id;
  snapBoxLabel.innerHTML = 'Snap to grid';
  snapCheckbox.appendChild(this.snapBox);
  snapCheckbox.appendChild(snapBoxLabel);

  
  //=========================
  ///clearBtn: clear button
  this.clearBtn = document.createElement('button');
  this.clearBtn.innerHTML = 'Clear';
  this.clearBtn.className = 'btn btn-default btn-clear';
  this.clearBtn.onclick = function() {
    this.clearBtnClicked();
  }.bind(this);

  //=========================
  ///typeTutor: display instructions & illustrations
  this.typeTutor = document.createElement('div');
  this.typeTutor.className = 'tutor typeTutor';

  let infoDiv = document.createElement('div');
  infoDiv.className = 'tutor-heading';
  let color = document.createElement('div');
  color.className = 'type-color';

  let text = document.createElement('p');
  let icon = document.createElement('img');
  icon.className = "icon-question";
  icon.src = "icons/question_mark.svg";
  icon.title = "Learn more";
  
  
  infoDiv.appendChild(color);
  infoDiv.appendChild(text);
  infoDiv.appendChild(icon);

  let imgDiv = document.createElement('div');
  let img = document.createElement('img');
  imgDiv.appendChild(img);
  imgDiv.className = "tutorial";
  imgDiv.style.display = "none";

  this.typeTutor.style.cursor = "pointer";
  this.typeTutor.onclick = this.segTypeTutorial.bind(this);
  this.typeTutor.appendChild(infoDiv);
  this.typeTutor.appendChild(imgDiv);

  //ctrlPanel layout
  this.ctrlPanel.appendChild(seedPicker);
  this.ctrlPanel.appendChild(segTypeSel);
  this.ctrlPanel.appendChild(scaleMoveBtns);
  this.ctrlPanel.appendChild(snapCheckbox);
  this.ctrlPanel.appendChild(this.clearBtn);
  this.ctrlPanel.appendChild(this.typeTutor);
  this.setSegType(0);
}
//add seed to the drop down list
SeedEditor.prototype.addSeed = function(name, longname, seed, width, thicknessType) {
  let option = document.createElement('option');
  option.value = name;
  option.dataset['name'] = name;
  option.innerHTML = longname;
  this.stdSeeds.push(seed);
  this.stdSeedWidth.push(width);
  this.stdSeedThicknessType.push(thicknessType);
  this.picker.appendChild(option);
};

SeedEditor.prototype.addStdSeed = function(name) {
  let seedInfo = SeedEditor.StdSeeds[name];
  if (seedInfo != undefined) {
    // Adjust to JS canvas coordinates - do we need this?
    let adjSeed = [];
    for (let i = 0; i < seedInfo.seed.length; i++) {
      adjSeed.push([seedInfo.seed[i][0] + 0.5, seedInfo.seed[i][1] + 0.5,
        seedInfo.seed[i][2],
      ]);
    }
    // Nudging thickness here, because I like the narrower lines...
    let thickness = Math.max(seedInfo.thickness - 1, 1);
    let thicknessType = seedInfo.thicknessType;
    this.addSeed(name, seedInfo.fullname, adjSeed, thickness, thicknessType);
  }
};

SeedEditor.prototype.setSeedByName = function(seedName) {
  let findName = seedName.toLowerCase();
  let seeds = this.picker.children;
  for (let i = 0; i < seeds.length; i++) {
    if (findName == seeds[i].dataset['name']) {
      this.picker.selectedIndex = i;
      this.pickSeed();
      return;
    }
  }
};

SeedEditor.prototype.pickSeed = function() {
  this.reset();
  if (this.picker.selectedIndex === 0) {
    globalClearedCanvas = true;
  }
  if (this.picker.selectedIndex != 0) {
    this.fractalDraw.setSeed(this.stdSeeds[this.picker.selectedIndex]);
    this.fractalDraw.setDrawWidth(this.stdSeedWidth[this.picker.selectedIndex]);
    this.fractalDraw.thicknessType = this.stdSeedThicknessType[this.picker.selectedIndex];
    this.clearWork();
    this.setMode(SeedEditor.EDITMODE.LOCKED);
    // this.thicknessBox.checked = (this.fractalDraw.thicknessType == 1) ? true : false;
  }
  this.fractalDraw.drawSeed(true);
};

// Global variable for clear and "Make Own..." new canvas
// that prevents mouse actions that don't allow the placing
// of an initial point on an empty canvas
let globalClearedCanvas = false;

SeedEditor.prototype.clearBtnClicked = function() {
  globalClearedCanvas = true;
  if (this.editMode == SeedEditor.EDITMODE.LOCKED) {
    this.picker.selectedIndex = 0;
    this.setMode(SeedEditor.EDITMODE.DONE);
  }
  this.reset();
  this.fractalDraw.drawSeed(true);
};

SeedEditor.prototype.getCtrls = function() {
  return this.ctrlPanel;
};
SeedEditor.prototype.activateSegType = function(n, activate) {
  let type = lineTypes[n];
  let btn = this.segTypeBtn[n];
  let icon = btn.querySelector('img');
  let img_suf = activate? "_a.svg":".svg";
  btn.style.backgroundColor = activate? type.color: 'white';
  icon.src = "icons/button_" + type.name + img_suf;
  if(activate) {
    btn.classList.add('active-edit');
    this.typeTutor.querySelector('p').innerHTML = type.title;
    this.typeTutor.querySelector('.type-color').style.backgroundColor = type.color;
    this.typeTutor.querySelector('.tutorial img').src = "tutor_"+ type.name +".gif";
  } else {
    btn.classList.remove('active-edit');
  }
}
SeedEditor.prototype.setSegType = function(type) {
  seedEditorMouseMoved = false;
  document.removeEventListener("mousemove", this.onMouseMove, false);
  document.removeEventListener("mouseup", this.onMouseUp, false);

  if(type == this.currentSegType) {return;}
  
  if (this.currentSegType != -1) {
    this.activateSegType( this.currentSegType, false );
  }
  this.activateSegType( type, true );
  this.currentSegType = type;

  if (this.anchor1 != null) {
    this.anchor1[2] = type;
    this.drawWork();
  }
};
SeedEditor.prototype.segTypeTutorial = function() {
  let e = this.typeTutor.querySelector('.tutorial');
  let question_mark = this.typeTutor.querySelector('.icon-question');
  toggle_e(e);
  if(e.style.display == 'block') question_mark.src = 'icons/question_mark_a.svg';
  else question_mark.src = 'icons/question_mark.svg';
};
SeedEditor.EDITMODE = {
  INIT: 0,
  DEFINING: 1,
  DONE: 2,
  MOVEPT: 3,
  LOCKED: 4,
};

SeedEditor.prototype.setupBackground = function() {
  let bgctx = this.bgcanvas.getContext('2d');
  bgctx.strokeStyle = '#a0a0a0';
  bgctx.lineWidth = 1;
  // center is (20.5,20.5) - go 18-23
  for (let x = 1; x < Math.floor(this.bgcanvas.width / 20); x++) {
    for (let y = 1; y < Math.floor(this.bgcanvas.height / 20); y++) {
      bgctx.beginPath();
      bgctx.moveTo(x * 20 - 2, y * 20 + 0.5);
      bgctx.lineTo(x * 20 + 3, y * 20 + 0.5);
      bgctx.moveTo(x * 20 + 0.5, y * 20 - 2);
      bgctx.lineTo(x * 20 + 0.5, y * 20 + 3);
      bgctx.stroke();
    }
  }
};

SeedEditor.prototype.enableMode = function() {
  this.bgcanvas.style.display = 'inline';
  this.workcanvas.style.display = 'inline';
  this.ctrlPanel.className = 'ctrlPanel';
  if ((this.editMode == SeedEditor.EDITMODE.DONE) ||
    (this.editMode == SeedEditor.EDITMODE.LOCKED)) {
    this.fractalDraw.drawSeed(true);
  } else {
    this.fractalDraw.drawSeed(false);
  }
};

SeedEditor.prototype.disableMode = function() {
  this.bgcanvas.style.display = 'none';
  this.workcanvas.style.display = 'none';
  this.ctrlPanel.className = 'hide';
};

SeedEditor.prototype.reset = function() {
  this.setMode(SeedEditor.EDITMODE.INIT);
  this.anchor1 = null;
  this.anchor2 = null;
  this.fractalDraw.setSeed([]);
  this.fractalDraw.setDrawWidth(1);
};

SeedEditor.prototype.compass = function(movement) {
  let x, y;
  switch (movement) {
    case 'right':
      x = 20;
      y = 0;
      break;
    case 'left':
      x = -20;
      y = 0;
      break;
    case 'down':
      x = 0;
      y = 20;
      break;
    case 'up':
      x = 0;
      y = -20;
      break;
    default:
      x = 0;
      y = 0;
      break;
  }
  let oobCount = 0;
  let margin1 = 20;
  let p0 = margin1;
  let p1 = margin1;
  let p2 = this.fractalDraw.canvas.width;
  let p3 = this.fractalDraw.canvas.height;
  function Create2DArray(rows) {
    var arr = [];
    for (var i=0;i<rows;i++) {
       arr[i] = [3];
    }
    return arr;
  }
  let seedCopy = Create2DArray(this.fractalDraw.seed.length);
  for (let i = 0; i < this.fractalDraw.seed.length; i++) {
    if (!(p0 <= this.fractalDraw.seed[i][0] + x
      && this.fractalDraw.seed[i][0] + x <= p2
      && p1 <= this.fractalDraw.seed[i][1] + y
      && this.fractalDraw.seed[i][1] + y <= p3)) {
      oobCount++;
    }
    seedCopy[i][0] = this.fractalDraw.seed[i][0] + x;
    seedCopy[i][1] = this.fractalDraw.seed[i][1] + y;
    seedCopy[i][2] = this.fractalDraw.seed[i][2];
  }
  if (oobCount < this.fractalDraw.seed.length) {
    this.fractalDraw.seed = seedCopy;
    this.fractalDraw.drawSeed(true);
  }
};

SeedEditor.prototype.scale = function(factor = 2) {
  let minX = this.fractalDraw.canvas.width;
  let minY = this.fractalDraw.canvas.height;
  let maxX = 0;
  let maxY = 0;
  let scaleFactor = factor;
  for (let i = 0; i < this.fractalDraw.seed.length; i++) {
    minX = Math.min(minX, this.fractalDraw.seed[i][0]);
    minY = Math.min(minY, this.fractalDraw.seed[i][1]);
    maxX = Math.max(maxX, this.fractalDraw.seed[i][0]);
    maxY = Math.max(maxY, this.fractalDraw.seed[i][1]);
  }
  let midX = (maxX + minX) / 2.0;
  let midY = (maxY + minY) / 2.0;
  let oobCount = 0;
  let margin1 = 0;
  let p0 = margin1;
  let p1 = margin1;
  let p2 = this.fractalDraw.canvas.width;
  let p3 = this.fractalDraw.canvas.height;
  function Create2DArray(rows) {
    var arr = [];
    for (var i=0;i<rows;i++) {
       arr[i] = [3];
    }
    return arr;
  }
  let seedCopy = Create2DArray(this.fractalDraw.seed.length);
  // shift to midpoint, scale, shift back, calculate oobCount
  for (let i = 0; i < this.fractalDraw.seed.length; i++) {
    seedCopy[i][0] = this.fractalDraw.seed[i][0] - midX;
    seedCopy[i][1] = this.fractalDraw.seed[i][1] - midY;
    seedCopy[i][2] = this.fractalDraw.seed[i][2];
    seedCopy[i][0] = seedCopy[i][0] * scaleFactor;
    seedCopy[i][1] = seedCopy[i][1] * scaleFactor;
    seedCopy[i][0] += midX;
    seedCopy[i][1] += midY;
    if (!(p0 <= seedCopy[i][0]
      && seedCopy[i][0] <= p2
      && p1 <= seedCopy[i][1]
      && seedCopy[i][1] <= p3)) {
      oobCount++;
    }
  }
  // don't allow going out of bounds completely
  if (oobCount < this.fractalDraw.seed.length) {
    this.fractalDraw.seed = seedCopy;
    this.fractalDraw.drawSeed(true);
  }
};

SeedEditor.prototype.drawWork = function() {
  this.clearWork();
  if (this.anchor1 != null) {
    this.workctx.beginPath();
    this.workctx.strokeStyle = lineTypes[this.anchor1[2]].color;
    this.workctx.moveTo(this.anchor1[0], this.anchor1[1]);
    this.workctx.lineTo(this.mouseX, this.mouseY);
    this.workctx.stroke();
  }
  if (this.anchor2 != null) {
    this.workctx.beginPath();
    this.workctx.strokeStyle = lineTypes[this.anchor2[2]].color;
    this.workctx.moveTo(this.anchor2[0], this.anchor2[1]);
    this.workctx.lineTo(this.mouseX, this.mouseY);
    this.workctx.stroke();
  }

  if ((this.gridhighlight[0] != -1) && (this.gridhighlight[1] != -1)) {
    this.workctx.beginPath();
    this.workctx.arc(this.gridhighlight[0], this.gridhighlight[1],
      3.5, 0, Math.PI * 2, true);
    this.workctx.fill();
  }
};

SeedEditor.prototype.editCopy = function() {
  this.fractalDraw.cloneSeed();
  this.anchor1 = null;
  this.anchor2 = null;
  this.setMode(SeedEditor.EDITMODE.DONE);
};

SeedEditor.prototype.setMode = function(mode) {
  this.editMode = mode;
};

SeedEditor.prototype.clearWork = function() {
  this.workctx.clearRect(0, 0, this.workcanvas.width, this.workcanvas.height);
};

SeedEditor.prototype.getMousePos = function(evt) {
  this.workrect = this.workcanvas.getBoundingClientRect();
  this.rawX = evt.clientX - this.workrect.left;
  this.rawY = evt.clientY - this.workrect.top;
  if (this.snapBox.checked) {
    this.mouseX = 20 * Math.round(this.rawX / 20.0) + 0.5;
    this.mouseY = 20 * Math.round(this.rawY / 20.0) + 0.5;
  } else {
    this.mouseX = this.rawX;
    this.mouseY = this.rawY;
  }
};

SeedEditor.prototype.mouseMove = function(evt) {
  if ((this.editMode == SeedEditor.EDITMODE.DONE) ||
    (this.editMode == SeedEditor.EDITMODE.LOCKED)) {
    return;
  }

  this.getMousePos(evt);
  if ((this.mouseX != this.gridhighlight[0]) ||
    (this.mouseY != this.gridhighlight[1])) {
    this.gridhighlight = [this.mouseX, this.mouseY];
    this.drawWork();
  }
};

// Global Variables for mouse handling, since click and mousedown conflict.
let seedEditorMouseMoved = false;
let seedEditorDoubleClick = false;

SeedEditor.prototype.onMouseDown = function(evt) {
  /* Clone of SeedEditor.prototype.mouseClick's
  this.editMode == SeedEditor.EDITMODE.DONE
  so clicking once and dragging activates getting anchor point  */
  if (!globalClearedCanvas) {
    let seed = this.fractalDraw.seed;
    this.getMousePos(evt);
    if (this.editMode != SeedEditor.EDITMODE.MOVEPT) {
      let closestPt = this.fractalDraw.closestPt([this.rawX, this.rawY]);
      if (closestPt < 0) {
        seedEditorMouseMoved = false;
        document.removeEventListener("mousemove", this.onMouseMove, false);
        document.removeEventListener("mouseup", this.onMouseUp, false);
        return;
      }
      if (closestPt >= 0) {
        if (closestPt == 0) {
          this.anchor1 = [seed[1][0], seed[1][1], seed[1][2]];
        } else {
          this.anchor1 = [seed[closestPt - 1][0],
            seed[closestPt - 1][1],
            seed[closestPt][2]
          ];
          if (closestPt < seed.length - 1) {
            this.anchor2 = [seed[closestPt + 1][0],
              seed[closestPt + 1][1],
              seed[closestPt + 1][2]
            ];
          }
        }
        this.movePt = closestPt;
        this.fractalDraw.drawSeed(false, this.movePt);
        this.gridhighlight = [this.mouseX, this.mouseY];
        this.drawWork();
        this.setMode(SeedEditor.EDITMODE.MOVEPT);
      }
    }
    document.addEventListener("mousemove", this.onMouseMove, false);
    document.addEventListener("mouseup", this.onMouseUp, false);
  }
}

SeedEditor.prototype.onMouseMove = function(evt) {
  /* Triggers flag to verify that you are drag n' dropping, instead of just
  clicking the node to activate mode switch */
  seedEditorMouseMoved = true;
}

SeedEditor.prototype.onMouseUp = function(evt) {
  /* Checks if drag and drop event by the 'seedEditorMouseMoved' flag. If
  it is a single click after a double click (signaled by the this.mouseDblClick
  if (state == Done)'s statements triggering the 'seedEditorDoubleClick'
  flag to true), it sets the final this.mouseDblClick(Event()) to set
  the node in place */
  if (this === document) {
    return;
  }
  if (!globalClearedCanvas) {
    if (!seedEditorMouseMoved) {
      if (seedEditorDoubleClick) {
        seedEditorDoubleClick = false;
        return;
      }
      if (this.fractalDraw.seed.length < 1) {
        this.setMode(SeedEditor.EDITMODE.INIT);
      } else {
        if (this.editMode !== 1) {
          this.setMode(SeedEditor.EDITMODE.DONE);
        }
      }
      return;
    }
    seedEditorMouseMoved = false;
    document.removeEventListener("mousemove", this.onMouseMove, false);
    document.removeEventListener("mouseup", this.onMouseUp, false);
    // Finalizes the node's placement after a drag and drop:
    this.setMode(SeedEditor.EDITMODE.MOVEPT);
  }
}

SeedEditor.prototype.mouseClick = function(evt) {
  let seed = this.fractalDraw.seed; // Better way to do this?
  this.getMousePos(evt);
  if (this.editMode == SeedEditor.EDITMODE.DEFINING) {
    this.fractalDraw.addToSeed([this.mouseX, this.mouseY, this.currentSegType]);
    this.fractalDraw.drawSeed(false);
    this.anchor1 = [this.mouseX, this.mouseY, this.currentSegType];
  } else if (this.editMode == SeedEditor.EDITMODE.INIT) {
    this.fractalDraw.setSeed([
      [this.mouseX, this.mouseY, 0],
    ]);
    this.anchor1 = [this.mouseX, this.mouseY, this.currentSegType];
    this.setMode(SeedEditor.EDITMODE.DEFINING);
  } else if ((this.editMode == SeedEditor.EDITMODE.DONE) ||
    (this.editMode == SeedEditor.EDITMODE.LOCKED)) {
    if (this.editMode == SeedEditor.EDITMODE.LOCKED) {
      this.editCopy();
      this.picker.selectedIndex = 0;
      this.setMode(SeedEditor.EDITMODE.DONE);
    }

    let closestPt = this.fractalDraw.closestPt([this.rawX, this.rawY]);
    if (closestPt >= 0) {
      if (closestPt == 0) {
        this.anchor1 = [seed[1][0], seed[1][1], seed[1][2]];
      } else {
        this.anchor1 = [seed[closestPt - 1][0],
          seed[closestPt - 1][1],
          seed[closestPt][2],
        ];
        if (closestPt < seed.length - 1) {
          this.anchor2 = [seed[closestPt + 1][0],
            seed[closestPt + 1][1],
            seed[closestPt + 1][2],
          ];
        }
      }
      this.movePt = closestPt;
      this.fractalDraw.drawSeed(false, this.movePt);
      this.gridhighlight = [this.mouseX, this.mouseY];
      this.drawWork();
      this.setMode(SeedEditor.EDITMODE.MOVEPT);
    } else {
      placeColor = () => {
        let closestLn = this.fractalDraw.closestLn([this.rawX, this.rawY]);
        if (closestLn >= 0) {
          seed[closestLn + 1][2] = this.currentSegType;
          this.fractalDraw.drawSeed(true);
        }
      }
      if (this.colorTimer) {
        clearTimeout(this.colorTimer);
        this.colorTimer = null;
      }
      this.placeColorCallback = () => {
        this.colorTimer = setTimeout(() => {
          placeColor();
        }, 500);
      }
      this.placeColorCallback();


    }
  } else if (this.editMode == SeedEditor.EDITMODE.MOVEPT) {
    if (this.movePt >= 0) {
      this.fractalDraw.changeSeedPt(this.movePt, [this.mouseX,
        this.mouseY,
        this.anchor1[2],
      ]);
      this.fractalDraw.clear();
      this.fractalDraw.drawSeed(true);
      this.clearWork();
      this.setMode(SeedEditor.EDITMODE.DONE);
      this.movePt = -1;
      this.anchor1 = this.anchor2 = null;
      globalClearedCanvas = false;
    }
  }
};

SeedEditor.prototype.keyPress = function(evt) {
  let charCode = evt.keyCode || evt.which;
  if ((charCode == 46) || (charCode == 8)) {
    // Delete (or backspace)
    if (this.editMode == SeedEditor.EDITMODE.MOVEPT &&
      (this.fractalDraw.seed.length > 2)) {
      seedEditorMouseMoved = false;
      document.removeEventListener("mousemove", this.onMouseMove, false);
      document.removeEventListener("mouseup", this.onMouseUp, false);
    }
    if ((this.editMode == SeedEditor.EDITMODE.MOVEPT) &&
      (this.fractalDraw.seed.length > 2)) {
      this.fractalDraw.deleteFromSeed(this.movePt);
      this.fractalDraw.clear();
      this.fractalDraw.drawSeed(true);
      this.clearWork();
      this.setMode(SeedEditor.EDITMODE.DONE);
      this.movePt = -1;
      this.anchor1 = this.anchor2 = null;
    }
  }
};

SeedEditor.prototype.mouseDblClick = function(evt) {
  globalClearedCanvas = false;
  clearTimeout(this.colorTimer);
  this.colorTimer = null;
  if (this.editMode == SeedEditor.EDITMODE.DEFINING) {
    this.getMousePos(evt);
    this.fractalDraw.addToSeed([this.mouseX, this.mouseY, this.currentSegType]);
    this.fractalDraw.clear();
    this.fractalDraw.drawSeed(true);
    this.clearWork();
    this.anchor1 = this.anchor2 = null;
    this.setMode(SeedEditor.EDITMODE.DONE);
  } else if (this.editMode == SeedEditor.EDITMODE.DONE) {
    let closestPt = this.fractalDraw.closestPt([this.rawX, this.rawY]);
    let closestLn = this.fractalDraw.closestLn([this.rawX, this.rawY]);
    let seed = this.fractalDraw.seed;
    if ((closestPt == -1) && (closestLn >= 0)) {
      this.fractalDraw.insertInSeed([this.mouseX,
          this.mouseY, seed[closestLn + 1][2],
        ],
        closestLn + 1);
      this.anchor1 = seed[closestLn].slice();
      this.anchor2 = seed[closestLn + 2].slice();
      this.anchor1[2] = this.anchor2[2];
      this.movePt = closestLn + 1;
      this.fractalDraw.drawSeed(false, this.movePt);
      this.gridhighlight = [this.mouseX, this.mouseY];
      this.drawWork();
      seedEditorDoubleClick = true;
      this.setMode(SeedEditor.EDITMODE.MOVEPT);
    }
  }
};

//standard seeds
SeedEditor.StdSeeds = {
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

/** Class for switching between modes
@param {div} mainDiv - The div in which you're drawing
@param {div} toolNum - The number of said division
@param {int} askWidth - The div width requested
@param {int} askHeight - The div height requested
*/
function MultiModeTool(mainDiv, toolNum, askWidth, askHeight, instanceNum) {
  this.instanceNum = instanceNum;
  this.mainDiv = mainDiv;
  this.toolNum = toolNum;
  this.modes = [];
  this.modeButtons = [];
  this.currentMode = -1;

  this.width = 800;
  if (mainDiv.dataset['width'] != undefined) {
    this.width = Math.max(640, mainDiv.dataset['width']);
  }
  this.height = 600;
  if (mainDiv.dataset['height'] != undefined) {
    this.height = Math.max(320, mainDiv.dataset['height']);
  }
  this.mainDiv.style.width = (this.width)+'px';

  let levels = 1;
  if (mainDiv.dataset['levels'] != undefined) {
    levels = mainDiv.dataset['levels'];
  }

  this.drawDiv = new FractalDraw(toolNum, [], this.width, this.height, levels, instanceNum);
  this.setupSaveMenu();

  this.modeSelDiv = document.createElement('div');
  this.modeSelDiv.id = 'ft-modesel-' + toolNum;
  this.modeSelDiv.className = 'modeSelDiv';
  mainDiv.appendChild(this.modeSelDiv);

  this.ctrlPanelDiv = document.createElement('div');
  this.ctrlPanelDiv.id = 'ft-ctrlpanel-' + toolNum;
  this.ctrlPanelDiv.className = 'ctrlPanelDiv';
  mainDiv.appendChild(this.ctrlPanelDiv);
  
  this.canvasDiv = document.createElement('div');
  this.canvasDiv.id = 'ft-canvases-' + toolNum;
  this.canvasDiv.className = 'canvasDiv';
  this.canvasDiv.style.height = (this.height + 4) + 'px';
  mainDiv.appendChild(this.canvasDiv);

  this.canvasDiv.appendChild(this.drawDiv.getCanvas());
  this.editorDiv = new SeedEditor(this.drawDiv, true);

  this.addMode('Edit Mode', this.editorDiv, instanceNum);
  this.editorDiv.disableMode();
  
  this.addMode('Iterate Mode', this.drawDiv, instanceNum);
  this.drawDiv.disableMode();
  
  let seedlist = 'koch,sprout,tree';//defualt seed list
  if (mainDiv.dataset['seedlist'] != undefined) {
    seedlist = mainDiv.dataset['seedlist'];
  }
  let stdseeds = seedlist.split(',');
  for (let i = 0; i < stdseeds.length; i++) {
    this.editorDiv.addStdSeed(stdseeds[i]);
  }

  // the seed to start with
  if (mainDiv.dataset['seed'] != undefined) {
    try {
      function error(data) {
        console.log(data);
      }
      var myself = this.editorDiv.fractalDraw;
      if (Number.isInteger(Number(mainDiv.dataset['seed']))) {
        this.editorDiv.setSeedByName('koch');
        cloud.loadProject(mainDiv.dataset['seed'], myself.load.bind(myself), error);
      } else {
        this.editorDiv.setSeedByName(mainDiv.dataset['seed']);
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


  let mode = 0;
  if ((mainDiv.dataset['mode'] != undefined) &&
    (mainDiv.dataset['mode'].toLowerCase() == 'draw')) {
    mode = 1;
  }

  this.setMode(mode);
  let help = document.createElement('a');
  help.innerHTML = "Help";
  help.style.marginLeft = "1em";
  help.onclick = function() {
    toggle_e(this.helpPanel);
  }.bind(this);
  this.helpPanel = document.createElement('div');
  this.helpPanel.innerHTML = '<h3>Instructions</h3>\
  <div><img class="icon-close" src="icons/close.svg"><div>\
  <ul>\
      <li><strong>Change mode - </strong>Click "Edit Mode" to enter the edit mode.</li>\
      <li><strong>Change line color - </strong>Select a color at the top then click on the line you wish to change.</li>\
      <li><strong>Move a node - </strong>Single click a node to move it around and click again to place it, or click and hold on a node and drag it to the place you want.</li>\
      <li><strong>Insert a node - </strong>Double click on a line between nodes to insert a new node.</li>\
      <li><strong>Delete a node - </strong>Click a node and press Delete/Backspace Key.</li>\
  </ul>';
  this.helpPanel.className = "tutor help-panel";
  this.helpPanel.querySelector(".icon-close").onclick = function(){
    this.helpPanel.style.display = "none";
  }.bind(this);
  this.modeSelDiv.appendChild(help);
  mainDiv.appendChild(this.helpPanel);
}

MultiModeTool.prototype.addMode = function(title, modeObj, globalId) {
  let button = document.createElement('button');
  button.innerHTML = title;
  button.id = title.replace(/ /g, '') + globalId;
  button.className = 'btn btn-mode';
  button.onclick = function(modeNum) {
    this.setMode(modeNum);
  }.bind(this, this.modes.length);

  this.modeSelDiv.appendChild(button);
  modeObj.disableMode();
  this.ctrlPanelDiv.appendChild(modeObj.getCtrls());
  this.modes.push(modeObj);
  this.modeButtons.push(button);
};

MultiModeTool.prototype.setMode = function(modeNum) {
  if (modeNum != this.currentMode) {
    if (this.currentMode != -1) {
      this.modes[this.currentMode].disableMode();
      this.modeButtons[this.currentMode].classList.remove('active-mode');
    }
    this.modes[modeNum].enableMode();
    this.modeButtons[modeNum].classList.add('active-mode');
    this.currentMode = modeNum;
  }
};

MultiModeTool.prototype.setupSaveMenu = function() {
  let drawer = this.drawDiv;
  let loadAndSave = document.createElement('div');
  loadAndSave.className = 'loadSaveDiv';

  // load files
  let selectFile = document.createElement('input');
  selectFile.type = 'file';
  selectFile.id = 'selectFile';
  selectFile.accept = '.json';
  selectFile.onchange = function(event) {
    drawer.loadLocally(event);
  };
  loadAndSave.appendChild(selectFile);

  // load files from cloud
  let loadFromCloudItem = document.createElement('li');
  let loadFromCloud = document.createElement('button');
  loadFromCloud.className = 'btn btn-default';
  loadFromCloud.innerHTML = 'Load From Cloud';
  loadFromCloud.onclick = function(event) {
    drawer.loadRemotely(event);
  };
  loadAndSave.appendChild(loadFromCloud);

  // save to cloud
  let saveToCloud = document.createElement('button');
  saveToCloud.className = 'btn btn-default';
  saveToCloud.innerHTML = 'Save To Cloud';
  saveToCloud.onclick = function(event) {
    drawer.saveRemotely(event);
  };
  loadAndSave.appendChild(saveToCloud);

  // save files
  let save = document.createElement('button');
  save.className = 'btn btn-default';
  save.innerHTML = 'Save To File';
  save.onclick = function(event) {
    drawer.saveLocally(event);
  };
  loadAndSave.appendChild(save);

  this.mainDiv.appendChild(loadAndSave);
};

let fractaltoolInstances = null;

/** Starts the fractal tool on load. */
function fractalToolInit() {
  let tools = document.getElementsByClassName('fractaltool');
  fractaltoolInstances = [];
  for (let i = 0; i < tools.length; i++) {
    fractaltoolInstances[i] = new MultiModeTool(tools[i], i + 1, 800, 600, i);
  }
}

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

// Local Variables:
// mode: js
// js-indent-level: 2
// End:

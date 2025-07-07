/* proofView.js – adds the “Build-a-Proof” tab
   Requires: a mode tab with id="buildTab" and containers:
     #topicTabs  #logicTabs  #statementSelect  #svgDyn  #hoverBox
     #lockedBox  #truthCheck  #infoCard  (#justifyTab already exists)
   Also expects scenarios.json sitting in same folder.
*/
(function () {
    const MODE_TAB_ID = "buildTab";
    const JUSTIFY_TAB_ID = "justifyTab";
  
    // --- UI helpers ---------------------------------------------------------
    function $(id) { return document.getElementById(id); }
    function addClass(el, c) { el && el.classList.add(c); }
    function rmClass(el, c){ el && el.classList.remove(c); }
  
    // --- state --------------------------------------------------------------
    const state = {
      mode: "justify",          // or "build"
      scenarios: [],            // loaded from scenarios.json
      scenIdx: 0,
      stepSel: "statement",     // or "method"
      chosenStmt:null,
      chosenMethod:null
    };
  
    // --- load scenarios -----------------------------------------------------
    fetch('scenarios.json')
      .then(r => r.json())
      .then(json => { state.scenarios = json; init(); });
  
    // --- initialise UI ------------------------------------------------------
    function init(){
      // Add click handler to Build-a-Proof tab
      $(MODE_TAB_ID).addEventListener('click', () => switchMode('build'));
      $(JUSTIFY_TAB_ID).addEventListener('click', () => switchMode('justify'));
  
      buildScenarioDropdown();
      if(state.mode==='justify') switchMode('justify');
    }
  
    function buildScenarioDropdown(){
      const sel = $('statementSelect');
      state.scenarios.forEach((sc,i)=>{
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = sc.claim;
        sel.appendChild(opt);
      });
      sel.onchange = ()=>{ state.scenIdx = +sel.value; renderBuild(); };
    }
  
    // --- mode switching -----------------------------------------------------
    function switchMode(m){
      state.mode = m;
      if(m==='build'){
        addClass($(MODE_TAB_ID),'active'); rmClass($(JUSTIFY_TAB_ID),'active');
        renderBuild();
      }else{
        rmClass($(MODE_TAB_ID),'active'); addClass($(JUSTIFY_TAB_ID),'active');
        location.hash = '#justify';               // let original JS take over
      }
    }
  
    // --- BUILD-A-PROOF  ------------------------------------------------------
    const buildHTML = `
      <div style="margin:1.2rem auto;max-width:460px;text-align:center;">
        <h2 style="margin:.2rem 0 .8rem 0;font-size:1.25rem;color:var(--primary);">Build a Proof</h2>
        <p id="bpClaim" style="font-size:1.05rem;margin:.4rem 0 .9rem 0;"></p>
  
        <div id="bpStep1">
          <b>1.</b> Choose a known statement:<br/>
          <select id="bpStmtSel" style="margin-top:.4rem;padding:.35em .6em;"></select>
        </div>
  
        <div id="bpStep2" style="margin-top:1.4rem;">
          <b>2.</b> Choose a method:<br/>
          <select id="bpMethodSel" style="margin-top:.4rem;padding:.35em .6em;">
            <option value="">– pick –</option>
            <option value="direct">Direct</option>
            <option value="contrapositive">Contrapositive</option>
          </select>
        </div>
  
        <button id="bpRun" disabled
          style="margin-top:1.6rem;padding:.48em 2.2em;background:var(--primary);border:none;border-radius:7px;color:#fff;font-weight:600;cursor:pointer;">
          Run
        </button>
  
        <div id="bpResult" style="margin-top:1.5rem;"></div>
      </div>`;
  
    function renderBuild(){
      if(state.mode!=='build') return;
      $('svgDyn').innerHTML = buildHTML;
      const sc = state.scenarios[state.scenIdx];
      $('bpClaim').textContent = sc.claim;
  
      // populate statement dropdown
      const stmtSel = $('bpStmtSel');
      stmtSel.innerHTML = '<option value="">– pick –</option>';
      stmtSel.innerHTML += '<option value="theorem">If P then Q (theorem)</option>';
      stmtSel.innerHTML += '<option value="converse">If Q then P (converse)</option>';
      stmtSel.onchange = ()=>{ state.chosenStmt = stmtSel.value; enableRun(); };
  
      const methSel = $('bpMethodSel');
      methSel.onchange = ()=>{ state.chosenMethod = methSel.value; enableRun(); };
  
      $('bpRun').onclick = checkProof;
    }
  
    function enableRun(){
      $('bpRun').disabled = !(state.chosenStmt && state.chosenMethod);
      $('bpResult').textContent = '';
    }
  
    function checkProof(){
      const sc = state.scenarios[state.scenIdx];
      const okPreferred =
        state.chosenStmt === sc.proofHints.preferred.statement &&
        state.chosenMethod === sc.proofHints.preferred.method;
  
      const okAlt = sc.proofHints.altOK && sc.proofHints.altOK.some(
        o => state.chosenStmt===o.statement && state.chosenMethod===o.method);
  
      const ok = okPreferred || okAlt;
      $('bpResult').innerHTML = ok
        ? `<span class=\"msg-good\">✔ Valid proof!</span>`
        : `<span class=\"msg-bad\">✖ That combination doesn’t justify the claim.</span>`;
    }
  
  })();
  
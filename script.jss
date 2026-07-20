// =======================================
// Dummy Project Demo Script
// UI Demonstration Only
// =======================================

const btn = document.getElementById("runScan");
const terminal = document.getElementById("terminalText");
const progress = document.getElementById("progressBar");
const timer = document.getElementById("timer");

btn.addEventListener("click", startDemo);

function startDemo(){
  
document.getElementById("reportSection").style.display="none";

document.querySelector(".1-monitoring").style.display="none";

document.querySelector(".statistics").style.display="none";
const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const ttn=document.getElementById("ttn").value.trim();
const phone=document.getElementById("phone").value.trim();
const tp=document.getElementById("tp").value.trim();

if(!name||!email||!ttn||!phone||!tp){

alert("Please fill all mandatory fields.");

return;

}

btn.disabled=true;

document.getElementById("reportSection").style.display="none";

terminal.textContent="Microsoft Windows [Version 10.0.26100]\n";
terminal.textContent+="(c) Microsoft Corporation.\n\n";
terminal.textContent+="*** server MODE ***\n\n";

const logs=[

"[113] Initializing interface...",
"[114] Loading sample configuration...",
"[115] Preparing scan...",
"[116] Verifying entered information...",
"[117] Simulating processing...",
"[118] Creating scan report...",
"[119] Finalizing..."

];

let logIndex=0;
let seconds=60;

progress.style.width="0%";
timer.innerHTML=seconds;

const interval=setInterval(()=>{

seconds--;

timer.innerHTML=seconds;

const percent=((60-seconds)/60)*100;

progress.style.width=percent+"%";

if(logIndex<logs.length && seconds%8===0){

terminal.textContent+=logs[logIndex]+"\n";

terminal.scrollTop=terminal.scrollHeight;

logIndex++;

}

if(seconds<=0){

clearInterval(interval);

terminal.textContent+="\n";
terminal.textContent+="scan Completed Successfully.\n";
terminal.textContent+="security analysis was performed.\n";

generateReport(name,email,ttn,phone,tp);

btn.disabled=false;

}

},1000);

}

function generateReport(name,email,ttn,phone,tp){

document.getElementById("r_name").innerHTML=name;
document.getElementById("r_email").innerHTML=email;
document.getElementById("r_ttn").innerHTML=ttn;
document.getElementById("r_phone").innerHTML=phone;
document.getElementById("r_tp").innerHTML=tp;

document.getElementById("reportSection").style.display="block";

document.getElementById("reportSection").scrollIntoView({

behavior:"smooth"
document.getElementById("reportSection").style.display="block";

document.querySelector(".1-monitoring").style.display="block";

document.querySelector(".statistics").style.display="grid";
});

}

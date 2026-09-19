const subjects = {
  arabic: {name:"اللغة العربية", icon:"ع", desc:"النحو والقراءة والنصوص والتعبير"},
  german: {name:"اللغة الألمانية", icon:"DE", desc:"القواعد والمفردات والفهم"},
  studies: {name:"الدراسات الاجتماعية", icon:"⌘", desc:"التاريخ والجغرافيا والمواطنة"}
};

const grades = [
  {id:"grade1", name:"الصف الأول", subtitle:"المرحلة الدراسية الأولى"},
  {id:"grade2", name:"الصف الثاني", subtitle:"المرحلة الدراسية الثانية"},
  {id:"grade3", name:"الصف الثالث", subtitle:"المرحلة الدراسية الثالثة"},
  {id:"grade4", name:"الصف الرابع", subtitle:"المرحلة الدراسية الرابعة"},
  {id:"grade5", name:"الصف الخامس", subtitle:"المرحلة الدراسية الخامسة"},
  {id:"grade6", name:"الصف السادس", subtitle:"المرحلة الدراسية السادسة"}
];

// يمكنك استبدال أسماء الصفوف وإضافة امتحانات حقيقية من هنا.
const exams = {
  arabic: [
    {id:"ar1", title:"اختبار اللغة العربية — نموذج 1", desc:"اختبار شامل في المهارات الأساسية.", time:20, count:10},
    {id:"ar2", title:"مراجعة اللغة العربية", desc:"تدريب سريع قبل الامتحان.", time:15, count:8}
  ],
  german: [
    {id:"de1", title:"اختبار Deutsch — نموذج 1", desc:"مفردات وقواعد وفهم.", time:20, count:10},
    {id:"de2", title:"مراجعة اللغة الألمانية", desc:"أسئلة تدريبية متنوعة.", time:15, count:8}
  ],
  studies: [
    {id:"st1", title:"اختبار الدراسات الاجتماعية — نموذج 1", desc:"أسئلة متنوعة في التاريخ والجغرافيا.", time:20, count:10},
    {id:"st2", title:"مراجعة الدراسات الاجتماعية", desc:"تدريب سريع على أهم النقاط.", time:15, count:8}
  ]
};

// بنك أسئلة تجريبي. أضف أسئلة لكل امتحان بنفس الشكل.
const questionBank = {
  ar1: [
    {q:"أيّ الكلمات الآتية اسمٌ؟", options:["يكتب","كتاب","اكتب","سريع"], answer:1},
    {q:"ما علامة رفع المبتدأ الأصلية؟", options:["الفتحة","الكسرة","الضمة","السكون"], answer:2},
    {q:"الجملة الاسمية تبدأ غالبًا بـ:", options:["فعل","اسم","حرف","ظرف"], answer:1},
    {q:"مرادف كلمة «سعيد» هو:", options:["حزين","فرحان","ضعيف","بعيد"], answer:1},
    {q:"الفعل الماضي يدل على حدث:", options:["حدث الآن","سيحدث مستقبلًا","حدث وانتهى","لا يدل على زمن"], answer:2},
    {q:"علامة نصب المفعول به الأصلية هي:", options:["الضمة","الفتحة","الكسرة","السكون"], answer:1},
    {q:"أي الكلمات التالية فعل مضارع؟", options:["ذهب","يذهب","اذهب","ذهاب"], answer:1},
    {q:"الفاعل في «قرأ الطالبُ الدرسَ» هو:", options:["قرأ","الطالب","الدرس","لا يوجد"], answer:1},
    {q:"ضد كلمة «قديم» هو:", options:["عتيق","حديث","صغير","قصير"], answer:1},
    {q:"حرف الجر في «ذهبتُ إلى المدرسة» هو:", options:["ذهبت","إلى","المدرسة","أنا"], answer:1}
  ],
  de1: [
    {q:"Was bedeutet „Guten Morgen“?", options:["Good night","Good morning","Goodbye","Thank you"], answer:1},
    {q:"Wie heißt du?", options:["Ich heiße Ali.","Ich bin zwölf.","Ich wohne in Kairo.","Danke."], answer:0},
    {q:"Das Gegenteil von „groß“ ist:", options:["klein","alt","schnell","neu"], answer:0},
    {q:"Welche Zahl ist „fünf“?", options:["3","4","5","6"], answer:2},
    {q:"„Ich ___ Schüler.“", options:["bist","bin","ist","sind"], answer:1},
    {q:"Welche Farbe ist „rot“?", options:["red","blue","green","black"], answer:0},
    {q:"„Danke“ bedeutet:", options:["Please","Hello","Thanks","Sorry"], answer:2},
    {q:"Der Plural von „das Buch“ ist:", options:["die Buch","die Bücher","den Buch","der Bücher"], answer:1},
    {q:"„Wo wohnst du?“ fragt nach:", options:["Name","Alter","Wohnort","Hobby"], answer:2},
    {q:"„Montag“ ist ein:", options:["Monat","Tag","Jahr","Farbe"], answer:1}
  ],
  st1: [
    {q:"ما عاصمة جمهورية مصر العربية؟", options:["الإسكندرية","القاهرة","أسوان","الأقصر"], answer:1},
    {q:"النيل يمر في مصر من:", options:["الجنوب إلى الشمال","الشمال إلى الجنوب","الشرق إلى الغرب","الغرب إلى الشرق"], answer:0},
    {q:"من أشهر الحضارات القديمة في مصر:", options:["الحضارة الفرعونية","الحضارة الحديثة","الحضارة الصناعية","لا شيء"], answer:0},
    {q:"توجد شبه جزيرة سيناء في:", options:["غرب مصر","شرق مصر","جنوب مصر","وسط مصر"], answer:1},
    {q:"البحر الذي يقع شمال مصر هو:", options:["الأحمر","المتوسط","العربي","الأسود"], answer:1},
    {q:"من أشهر معالم الأقصر:", options:["الأهرامات","المعابد الفرعونية","برج القاهرة","قلعة صلاح الدين"], answer:1},
    {q:"الزراعة تعتمد بصورة أساسية على:", options:["المياه والتربة","الذهب","المصانع فقط","الطرق"], answer:0},
    {q:"قناة السويس تربط بين:", options:["البحر المتوسط والبحر الأحمر","المحيطين","نهرين","بحيرتين"], answer:0},
    {q:"من موارد مصر الطبيعية:", options:["البترول","الكتب","المدارس","المتاحف"], answer:0},
    {q:"المواطنة تعني:", options:["اللامبالاة","الانتماء والمسؤولية","العزلة","رفض المجتمع"], answer:1}
  ]
};

let state = {
  grade:null, subject:"arabic", exam:null, questions:[], current:0, answers:[],
  seconds:0, timer:null, studentName: localStorage.getItem("studentName") || "الطالب"
};

document.addEventListener("DOMContentLoaded", ()=>{
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("studentNameLabel").textContent = state.studentName;
  renderGrades();
  renderSubjectPreview();
  document.getElementById("themeBtn").onclick = toggleTheme;
});

function renderGrades(){
  document.getElementById("gradesGrid").innerHTML = grades.map((g,i)=>`
    <article class="grade-card" onclick="openGrade('${g.id}')">
      <span class="grade-arrow">←</span>
      <div class="grade-num">0${i+1}</div>
      <h3>${g.name}</h3><p>${g.subtitle}</p>
    </article>`).join("");
}
function renderSubjectPreview(){
  document.getElementById("subjectsPreview").innerHTML = Object.entries(subjects).map(([id,s])=>`
    <div class="subject-card"><div class="subject-icon">${s.icon}</div><div><h3>${s.name}</h3><p>${s.desc}</p></div></div>`).join("");
}
function showView(id){
  ["homeView","gradeView","examIntroView","examView","resultView"].forEach(x=>document.getElementById(x).classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
}
function goHome(){ stopTimer(); showView("homeView"); }
function scrollToGrades(){ document.getElementById("gradesSection").scrollIntoView({behavior:"smooth"}); }
function openGrade(id){
  state.grade = grades.find(g=>g.id===id);
  document.getElementById("gradeTitle").textContent = state.grade.name;
  renderTabs();
  renderExams();
  showView("gradeView");
}
function renderTabs(){
  document.getElementById("subjectTabs").innerHTML = Object.entries(subjects).map(([id,s])=>
    `<button class="tab ${state.subject===id?"active":""}" onclick="selectSubject('${id}')">${s.icon} ${s.name}</button>`).join("");
}
function selectSubject(id){ state.subject=id; renderTabs(); renderExams(); }
function renderExams(){
  const list = exams[state.subject] || [];
  document.getElementById("examsGrid").innerHTML = list.map(e=>`
    <article class="exam-card">
      <span class="tag">${subjects[state.subject].name}</span>
      <h3>${e.title}</h3><p>${e.desc}</p>
      <div class="exam-meta"><span>⏱ ${e.time} دقيقة</span><span>📝 ${e.count} سؤال</span></div>
      <button class="btn btn-primary" onclick="openExamIntro('${e.id}')">ابدأ الآن</button>
    </article>`).join("");
}
function openExamIntro(examId){
  state.exam = exams[state.subject].find(e=>e.id===examId);
  const qs = questionBank[examId] || [];
  const s = subjects[state.subject];
  document.getElementById("examIntroView").innerHTML = `
    <div class="intro-card">
      <div class="intro-head"><div class="big-icon">${s.icon}</div><div><span class="section-kicker">${s.name}</span><h1>${state.exam.title}</h1></div></div>
      <p>${state.exam.desc}</p>
      <div class="rules">
        <div class="rule"><b>⏱ الوقت</b><span>${state.exam.time} دقيقة</span></div>
        <div class="rule"><b>📝 عدد الأسئلة</b><span>${qs.length} أسئلة</span></div>
        <div class="rule"><b>✓ التصحيح</b><span>تلقائي بعد التسليم</span></div>
        <div class="rule"><b>⚡ الحفظ</b><span>إجاباتك محفوظة أثناء الامتحان</span></div>
      </div>
      <div class="hero-actions"><button class="btn btn-primary" onclick="startExam()">ابدأ الامتحان</button><button class="btn btn-ghost" onclick="openGrade('${state.grade.id}')">رجوع</button></div>
    </div>`;
  showView("examIntroView");
}
function startExam(){
  state.questions = [...(questionBank[state.exam.id] || [])];
  state.current=0; state.answers=new Array(state.questions.length).fill(null);
  state.seconds=state.exam.time*60;
  renderExam();
  startTimer();
  showView("examView");
}
function startTimer(){
  stopTimer();
  state.timer=setInterval(()=>{
    state.seconds--;
    updateTimer();
    if(state.seconds<=0){ stopTimer(); submitExam(true); }
  },1000);
}
function stopTimer(){ if(state.timer){clearInterval(state.timer);state.timer=null;} }
function updateTimer(){
  const el=document.getElementById("timer");
  if(!el)return;
  const m=Math.floor(state.seconds/60).toString().padStart(2,"0"), s=(state.seconds%60).toString().padStart(2,"0");
  el.textContent=`${m}:${s}`;
  if(state.seconds<=60) el.style.background="#ffe4e4";
}
function renderExam(){
  const q=state.questions[state.current], total=state.questions.length, idx=state.current;
  const letters=["أ","ب","ج","د","هـ"];
  const progress=((idx)/total)*100;
  document.getElementById("examView").innerHTML=`
    <div class="exam-shell">
      <div class="exam-top"><div class="container exam-top-inner"><div><b>${state.exam.title}</b><div style="font-size:11px;color:var(--muted)">السؤال ${idx+1} من ${total}</div></div><div class="timer" id="timer">00:00</div></div><div class="container progress-wrap"><div class="progress" style="width:${progress}%"></div></div></div>
      <div class="container">
        <div class="question-card">
          <div class="q-number">السؤال ${idx+1}</div>
          <div class="question">${q.q}</div>
          <div class="options">${q.options.map((op,i)=>`
            <button class="option ${state.answers[idx]===i?"selected":""}" onclick="chooseAnswer(${i})"><span class="option-key">${letters[i]}</span><span>${op}</span></button>`).join("")}</div>
        </div>
        <div class="exam-nav">
          <button class="btn btn-ghost" onclick="prevQuestion()" ${idx===0?"disabled":""}>السابق</button>
          <button class="danger-btn" onclick="confirmSubmit()">تسليم الامتحان</button>
          ${idx===total-1?`<button class="btn btn-primary" onclick="submitExam()">إنهاء وإظهار النتيجة</button>`:`<button class="btn btn-primary" onclick="nextQuestion()">التالي ←</button>`}
        </div>
      </div>
    </div>`;
  updateTimer();
}
function chooseAnswer(i){ state.answers[state.current]=i; renderExam(); }
function nextQuestion(){ if(state.current<state.questions.length-1){state.current++;renderExam();} }
function prevQuestion(){ if(state.current>0){state.current--;renderExam();} }
function confirmSubmit(){
  const unanswered=state.answers.filter(x=>x===null).length;
  if(unanswered>0 && !confirm(`لديك ${unanswered} أسئلة بدون إجابة. هل تريد التسليم؟`)) return;
  submitExam();
}
function submitExam(auto=false){
  stopTimer();
  let correct=0; state.questions.forEach((q,i)=>{if(state.answers[i]===q.answer)correct++;});
  const total=state.questions.length, percent=Math.round(correct/total*100);
  const result={date:new Date().toLocaleString("ar-EG"),grade:state.grade.name,subject:subjects[state.subject].name,exam:state.exam.title,correct,total,percent};
  const history=JSON.parse(localStorage.getItem("examHistory")||"[]"); history.unshift(result); localStorage.setItem("examHistory",JSON.stringify(history.slice(0,30)));
  document.getElementById("resultView").innerHTML=`
    <div class="result-card">
      <span class="section-kicker">${auto?"انتهى الوقت":"تم تسليم الامتحان"}</span>
      <h1>نتيجتك النهائية</h1>
      <div class="result-circle" style="--score:${percent}%"><div class="score-text">${percent}%</div></div>
      <p>${state.exam.title} — ${subjects[state.subject].name}</p>
      <div class="result-details">
        <div><b>${correct}</b><span>إجابات صحيحة</span></div>
        <div><b>${total-correct}</b><span>إجابات خاطئة</span></div>
        <div><b>${total}</b><span>إجمالي الأسئلة</span></div>
      </div>
      <div class="hero-actions" style="justify-content:center"><button class="btn btn-primary" onclick="openGrade('${state.grade.id}')">امتحان آخر</button><button class="btn btn-ghost" onclick="goHome()">الرئيسية</button></div>
    </div>`;
  showView("resultView");
}
function showHowItWorks(){ alert("اختر الصف ← المادة ← الامتحان، ثم أجب عن الأسئلة خلال الوقت المحدد. في النهاية تحصل على النتيجة مباشرة ويتم حفظ سجل النتيجة على جهازك."); }
function showStudentPanel(){
  const name=prompt("اكتب اسم الطالب:",state.studentName);
  if(name && name.trim()){state.studentName=name.trim();localStorage.setItem("studentName",state.studentName);document.getElementById("studentNameLabel").textContent=state.studentName;toast("تم حفظ اسم الطالب");}
}
function toggleTheme(){
  document.body.classList.toggle("dark");
  localStorage.setItem("darkMode",document.body.classList.contains("dark"));
}
if(localStorage.getItem("darkMode")==="true") document.body.classList.add("dark");
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200);}

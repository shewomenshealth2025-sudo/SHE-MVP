const pathways = {
  "painful periods": {
    title: "Painful Periods",
    happening: "Painful periods can be common, but severe pain may be linked to conditions such as endometriosis, adenomyosis, fibroids or other pelvic health concerns.",
    matters: "Pay attention to pain severity, whether pain stops daily activities, pain outside your period, painful sex, bowel or bladder symptoms, and whether symptoms are getting worse.",
    next: "Track your symptoms for 2–3 cycles, note pain level and bleeding pattern, and prepare questions for your GP or clinician.",
    who: "A GP, gynaecologist, pelvic health physiotherapist or specialist women's health service may be relevant depending on symptoms.",
    where: "Start with your GP or local sexual/reproductive health service. SHE can also signpost to local services as the directory grows.",
    expect: "A typical route may include a GP discussion, symptom history, examination if appropriate, ultrasound, referral and treatment planning.",
    related: ["Endometriosis", "Adenomyosis", "Pelvic Pain", "Period Products"]
  },
  "heavy periods": {
    title: "Heavy Periods",
    happening: "Heavy periods may be linked to hormonal changes, fibroids, adenomyosis, bleeding disorders, contraception changes or perimenopause.",
    matters: "Look out for flooding, large clots, fatigue, dizziness, shortness of breath, or needing to change protection very frequently.",
    next: "Track bleeding, consider iron/fatigue symptoms, and speak to a clinician if bleeding is affecting daily life.",
    who: "A GP, pharmacist, gynaecologist or contraception/sexual health clinic may be relevant.",
    where: "Start with GP or reproductive health clinic. Urgent support may be needed if bleeding is extremely heavy or you feel faint.",
    expect: "You may be asked about cycle history, contraception, pregnancy possibility, blood tests, pelvic examination or ultrasound.",
    related: ["Fibroids", "Adenomyosis", "Iron Deficiency", "Menstrual Products"]
  },
  "fatigue": {
    title: "Fatigue",
    happening: "Fatigue can be linked to many factors including iron deficiency, thyroid changes, stress, sleep, hormonal shifts, pregnancy, heavy bleeding or chronic conditions.",
    matters: "Notice whether fatigue is cyclical, linked to bleeding, associated with dizziness, mood changes, weight changes, pain or disrupted sleep.",
    next: "Track when fatigue appears, review sleep and cycle patterns, and consider speaking to a clinician if it is persistent or affecting life.",
    who: "A GP is usually the first step. Depending on the pattern, further support may include a dietitian, mental health professional or specialist.",
    where: "Start with primary care for basic checks such as blood tests if appropriate.",
    expect: "A clinician may ask about sleep, periods, diet, stress, mood, medications and may consider blood tests.",
    related: ["Iron", "Hormones", "Thyroid", "Menstrual Health"]
  },
  "bloating": {
    title: "Bloating",
    happening: "Bloating can relate to digestion, hormones, cycle changes, endometriosis, ovarian cysts, IBS, food triggers or other pelvic/abdominal concerns.",
    matters: "Pay attention to persistent bloating, pain, appetite changes, bowel changes, weight changes, bleeding changes or symptoms that do not come and go.",
    next: "Track bloating alongside your cycle, food, bowel symptoms and pain. Seek medical advice if persistent or concerning.",
    who: "A GP, gynaecologist, dietitian or gastroenterology service may be relevant depending on pattern.",
    where: "Start with GP, especially if bloating is persistent, new, worsening or linked to other symptoms.",
    expect: "You may be asked about bowel habits, periods, pain, diet, family history and may need examination or tests.",
    related: ["Endometriosis", "Gut Health", "Ovarian Health", "Cycle Tracking"]
  }
};

function normalize(text) {
  return text.trim().toLowerCase();
}

function quickSearch(term) {
  document.getElementById("symptomSearch").value = term;
  runSearch();
}

function findPathway(query) {
  const clean = normalize(query);
  if (pathways[clean]) return pathways[clean];

  const keys = Object.keys(pathways);
  const matchedKey = keys.find(key => clean.includes(key) || key.includes(clean));
  return matchedKey ? pathways[matchedKey] : null;
}

function runSearch() {
  const query = document.getElementById("symptomSearch").value;
  const result = document.getElementById("pathwayResult");

  if (!query.trim()) {
    result.className = "pathway-empty";
    result.innerHTML = "Type a symptom or concern first.";
    return;
  }

  const pathway = findPathway(query);

  if (!pathway) {
    result.className = "pathway-card";
    result.innerHTML = `
      <h3>No exact pathway yet for "${query}"</h3>
      <p>This is where SHE's AI layer will help interpret symptoms and connect people to the closest pathway.</p>
      <p>For now, try: painful periods, heavy periods, fatigue or bloating.</p>
    `;
    return;
  }

  result.className = "pathway-card";
  result.innerHTML = `
    <h3>${pathway.title}</h3>
    <p><strong>Educational note:</strong> SHE does not diagnose. This pathway helps you understand what may be relevant and what to consider next.</p>

    <div class="pathway-grid">
      <div class="pathway-step"><h3>What's happening?</h3><p>${pathway.happening}</p></div>
      <div class="pathway-step"><h3>What matters?</h3><p>${pathway.matters}</p></div>
      <div class="pathway-step"><h3>What do I do next?</h3><p>${pathway.next}</p></div>
      <div class="pathway-step"><h3>Who can help?</h3><p>${pathway.who}</p></div>
      <div class="pathway-step"><h3>Where do I go?</h3><p>${pathway.where}</p></div>
      <div class="pathway-step"><h3>What should I expect?</h3><p>${pathway.expect}</p></div>
    </div>

    <div class="related-links">
      ${pathway.related.map(item => `<a href="facts.html">${item}</a>`).join("")}
    </div>
  `;
}

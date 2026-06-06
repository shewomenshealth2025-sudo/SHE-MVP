const pathways = [
  {
    name: "Menstrual health",
    title: "Period symptoms and cycle concerns",
    keywords: ["period", "periods", "cramps", "cramp", "heavy bleeding", "heavy period", "painful periods", "painful period", "irregular periods", "missed period", "spotting", "clots", "clot", "pms", "pmdd", "headache", "headaches"],
    understanding: [
      "Period symptoms can vary from person to person, but pain, heavy bleeding, headaches, dizziness, irregular cycles, or symptoms that interrupt work, school, sleep or daily life are worth taking seriously.",
      "Symptoms like painful cramps and headaches may be linked to normal cycle changes for some people, but they can also appear alongside conditions such as endometriosis, adenomyosis, fibroids, heavy menstrual bleeding, migraine patterns, or iron deficiency. This does not mean you have any of these conditions, but it gives you useful areas to discuss.",
      "A helpful next step is to track when the symptoms happen, how severe they are, how long they last, whether bleeding is heavy, and whether symptoms are affecting your ability to function." 
    ],
    areas: [
      ["Endometriosis", "Can be associated with severe period pain, pelvic pain, pain during sex, bowel symptoms or pain that disrupts daily life."],
      ["Adenomyosis", "May be associated with painful, heavy or prolonged periods and pelvic heaviness."],
      ["Fibroids", "Can sometimes contribute to heavy bleeding, pelvic pressure, bloating or longer periods."],
      ["Iron deficiency", "Heavy bleeding can contribute to low iron, which may cause fatigue, dizziness, breathlessness or headaches."],
      ["Hormonal changes", "Cycle shifts can affect pain, mood, headaches, energy and bleeding patterns."]
    ],
    questions: [
      "Could my period symptoms suggest endometriosis, adenomyosis or fibroids?",
      "Should I have blood tests for iron, ferritin or other deficiencies?",
      "Would an ultrasound or gynaecology referral be appropriate?",
      "What options are available to reduce pain or heavy bleeding?",
      "At what point should I seek urgent help for bleeding or pain?"
    ],
    helps: [
      "Track pain, bleeding, headaches, dizziness and cycle dates for at least 2–3 cycles if possible.",
      "Heat therapy, rest, hydration and discussing pain relief options with a pharmacist or GP may be useful.",
      "If bleeding is heavy, note how often you change products and whether there are clots.",
      "Consider menstrual products that suit your flow and comfort, especially if heavy bleeding affects confidence outside the home."
    ],
    services: "A GP is usually the first step. Depending on symptoms, support may also involve a pharmacist, gynaecology referral, sexual health clinic, women’s health clinic or urgent care if pain or bleeding is severe.",
    urgent: "Seek urgent medical help if you have sudden severe pain, fainting, very heavy bleeding, pregnancy-related bleeding, fever with pelvic pain, chest pain, shortness of breath, or symptoms that feel unsafe."
  },
  {
    name: "Pelvic pain",
    title: "Pelvic pain and pain during sex",
    keywords: ["pelvic pain", "pain during sex", "pain after sex", "sex painful", "painful sex", "lower abdominal pain", "ovulation pain", "endometriosis", "adenomyosis", "fibroids", "ovarian cyst", "cyst"],
    understanding: [
      "Pelvic pain can come from several different body systems, including reproductive, urinary, bowel, muscular and pelvic floor causes. Pain during or after sex is also a valid symptom to raise with a healthcare professional.",
      "Pain that is persistent, worsening, linked to periods, sex, bowel movements, urination or daily disruption should not be brushed off. It may be useful to describe the location, timing, severity and triggers clearly."
    ],
    areas: [["Endometriosis", "Can be linked with pelvic pain, painful periods, painful sex and bowel or bladder symptoms."], ["Pelvic floor dysfunction", "Tight or overactive pelvic floor muscles can contribute to pain during sex, pelvic discomfort or urinary symptoms."], ["Ovarian cysts", "Can sometimes cause one-sided pelvic pain or pressure."], ["Infection", "Pelvic inflammatory disease or urinary infections can cause pelvic pain and may need prompt care."]],
    questions: ["Could this pain be related to endometriosis or adenomyosis?", "Do I need an examination, swab, urine test or ultrasound?", "Could pelvic floor physiotherapy help?", "When should I be referred to gynaecology?"],
    helps: ["Track pain timing, location and triggers.", "Avoid pushing through painful sex; pain is a valid reason to seek support.", "Gentle heat and rest may help some people.", "A women’s health physiotherapist may be useful if pelvic floor symptoms are suspected."],
    services: "GP, sexual health clinic, gynaecology, women’s health physiotherapy, urgent care if pain is sudden, severe or one-sided.",
    urgent: "Seek urgent help for sudden severe pelvic pain, pain with fever, fainting, shoulder-tip pain, heavy bleeding, pregnancy concerns or severe one-sided pain."
  },
  {
    name: "Hormones and energy",
    title: "Fatigue, hormones and energy changes",
    keywords: ["fatigue", "tired", "exhausted", "weight gain", "acne", "hair growth", "hair loss", "mood swings", "brain fog", "cravings", "bloating", "insulin resistance", "pcos", "pmos", "hormones"],
    understanding: [
      "Fatigue, brain fog, hair changes, acne, weight changes, mood shifts and bloating can have many possible causes. These may include hormone changes, thyroid health, iron levels, vitamin deficiencies, sleep disruption, stress, PMOS/PCOS or other health conditions.",
      "Because these symptoms can overlap, a clear timeline is useful. Note when symptoms started, whether they change across your cycle, and whether they are affecting work, exercise, mood or daily life."
    ],
    areas: [["PMOS/PCOS", "May be linked with irregular cycles, acne, excess hair growth, insulin resistance or weight changes."], ["Thyroid health", "Thyroid changes can affect energy, weight, mood, hair, periods and temperature sensitivity."], ["Iron or vitamin deficiencies", "Low iron, B12 or vitamin D may contribute to fatigue, dizziness, weakness or poor recovery."], ["Sleep and stress", "Sleep disruption and chronic stress can intensify hormone-related symptoms."]],
    questions: ["Could my symptoms be hormone-related?", "Should I have blood tests for thyroid, ferritin, B12, vitamin D or glucose markers?", "Could PMOS/PCOS be worth exploring?", "What symptoms should I track before my next appointment?"],
    helps: ["Track energy, sleep, cycle dates and mood patterns.", "Prioritise regular meals, hydration and gentle movement where possible.", "Avoid starting supplements without checking what is appropriate for you.", "Prepare a symptom timeline for your appointment."],
    services: "GP, pharmacist, endocrinology if referred, dietitian, women’s health clinic.",
    urgent: "Seek urgent help if fatigue is severe with chest pain, shortness of breath, fainting, confusion, sudden weakness or symptoms that feel unsafe."
  },
  {
    name: "Perimenopause and menopause",
    title: "Perimenopause and menopause symptoms",
    keywords: ["perimenopause", "menopause", "hot flush", "hot flashes", "night sweats", "vaginal dryness", "low libido", "over 40", "sleep changes", "joint pain", "waking at 3am"],
    understanding: [
      "Perimenopause can begin years before periods stop. It can affect sleep, temperature regulation, mood, concentration, libido, vaginal comfort, joints and cycle patterns.",
      "Symptoms can be confusing because they may appear gradually or come and go. If symptoms are affecting your quality of life, it is reasonable to ask for support and discuss options."
    ],
    areas: [["Perimenopause", "Can cause cycle changes, hot flushes, night sweats, mood changes, brain fog and sleep disruption."], ["Menopause", "Usually refers to the stage after periods have stopped for 12 months, but symptoms can start earlier."], ["Thyroid or iron issues", "Can mimic or worsen fatigue, mood, sleep and temperature symptoms."], ["Vaginal and urinary changes", "Lower oestrogen can affect dryness, sex, UTIs and bladder symptoms."]],
    questions: ["Could my symptoms be perimenopause?", "What treatment options are available, including HRT if suitable?", "Should we check thyroid, iron or other possible causes?", "What can help with sleep, mood, vaginal dryness or libido changes?"],
    helps: ["Track sleep, cycle changes, hot flushes and mood symptoms.", "Strength training, sleep routines and stress support may help overall wellbeing.", "Vaginal moisturisers or lubricants may help dryness or pain during sex.", "Discuss HRT and non-hormonal options with a qualified clinician."],
    services: "GP, menopause clinic, pharmacist, sexual health clinic, women’s health physiotherapist.",
    urgent: "Seek urgent help for chest pain, shortness of breath, severe sudden headache, heavy unexplained bleeding or symptoms that feel unsafe."
  },
  {
    name: "Autoimmune and chronic conditions",
    title: "Autoimmune and chronic symptom patterns",
    keywords: ["autoimmune", "chronic illness", "flare", "flare up", "inflammation", "joint pain", "swollen joints", "morning stiffness", "muscle weakness", "muscle pain", "butterfly rash", "rash", "lupus", "rheumatoid", "sjogren", "hashimoto", "graves", "coeliac", "celiac", "crohn", "ulcerative colitis", "multiple sclerosis", "fibromyalgia", "me/cfs", "thyroid disease", "brain fog"],
    understanding: [
      "Symptoms affecting several body systems can feel difficult to explain, especially when they include fatigue, brain fog, joint pain, rashes, hair changes, digestive symptoms or recurring flares.",
      "Autoimmune and chronic inflammatory conditions can sometimes present in patterns rather than as one obvious symptom. This does not mean you have an autoimmune disease, but it may be worth discussing autoimmune, thyroid, inflammatory or deficiency-related causes with a healthcare professional.",
      "A clear timeline can be especially helpful: when symptoms started, what flares them, whether they change around your period, and whether there is a family history of autoimmune disease."
    ],
    areas: [["Autoimmune conditions", "Some conditions can cause fatigue, joint pain, rashes, inflammation or symptoms across multiple systems."], ["Thyroid disease", "Hashimoto’s or Graves’ disease can affect energy, weight, mood, hair, temperature and periods."], ["Inflammatory bowel disease or coeliac disease", "Digestive symptoms, weight changes, fatigue or deficiencies may be worth exploring."], ["Fibromyalgia or ME/CFS", "Chronic pain, fatigue, poor recovery and brain fog may need supportive assessment and management."], ["Nutritional deficiencies", "Low iron, B12, folate or vitamin D can worsen fatigue, weakness, hair changes and brain fog."]],
    questions: ["Could these symptoms suggest an autoimmune, inflammatory or thyroid-related condition?", "Should I have blood tests for inflammation, thyroid, iron, B12, folate or vitamin D?", "Would rheumatology, gastroenterology, endocrinology or dermatology referral be appropriate?", "How should I track flares, triggers and cycle-related changes?"],
    helps: ["Create a symptom timeline covering fatigue, pain, skin, digestion, periods and flares.", "Note morning stiffness, swelling, rashes, fevers, mouth ulcers or family history.", "Track whether symptoms worsen around your cycle.", "Pacing, rest and gentle activity may help during flares, depending on your situation."],
    services: "GP, rheumatology, endocrinology, gastroenterology, dermatology, women’s health services, dietitian if appropriate.",
    urgent: "Seek urgent help for chest pain, shortness of breath, sudden weakness, severe headache, confusion, fainting, high fever, severe abdominal pain or symptoms that feel unsafe."
  },
  {
    name: "Sexual and vaginal health",
    title: "Vaginal, urinary and sexual health symptoms",
    keywords: ["discharge", "itching", "smell", "odour", "thrush", "bv", "uti", "sti", "burning when peeing", "burning", "vaginal", "pain during sex", "painful sex", "contraception"],
    understanding: [
      "Changes in discharge, smell, itching, burning, urinary symptoms or pain during sex are common reasons to seek advice. These symptoms can have different causes, so testing or a professional check can be more helpful than guessing.",
      "Symptoms may relate to thrush, bacterial vaginosis, UTIs, STIs, irritation, contraception changes, vaginal dryness or pelvic floor issues. Many are treatable, and it is reasonable to ask for support."
    ],
    areas: [["Thrush or bacterial vaginosis", "Can cause itching, discharge, irritation or odour changes."], ["UTI", "Can cause burning, urgency, frequency or lower abdominal discomfort."], ["STIs", "Can sometimes cause discharge, pain, bleeding after sex or no symptoms at all."], ["Vaginal dryness or irritation", "Can be linked to hormones, contraception, products or menopause-related changes."]],
    questions: ["Do I need a swab, urine test or STI screen?", "Could this be thrush, BV, a UTI or an STI?", "Could contraception or hormones be contributing?", "What treatment is safe and appropriate for me?"],
    helps: ["Avoid scented intimate products or douching.", "Consider testing if symptoms are new, recurring or there is STI risk.", "A pharmacist may advise on common symptoms, but recurring symptoms should be checked.", "Use condoms if STI risk is possible until you have advice or testing."],
    services: "Pharmacist, GP, sexual health clinic, contraception clinic, women’s health clinic.",
    urgent: "Seek urgent help if symptoms come with fever, severe pelvic pain, pregnancy concerns, back pain with UTI symptoms, or feeling very unwell."
  },
  {
    name: "Breast health",
    title: "Breast symptoms",
    keywords: ["breast", "breast pain", "breast lump", "lump", "nipple discharge", "nipple", "breastfeeding breast pain", "mastitis"],
    understanding: [
      "Breast symptoms can be linked to hormonal changes, cycle patterns, breastfeeding, infection, cysts or other causes. A new lump, nipple changes or unusual discharge should be checked by a healthcare professional.",
      "It can help to note whether symptoms are one-sided or both sides, whether they change with your cycle, and whether there are skin, nipple or size changes."
    ],
    areas: [["Cycle-related breast tenderness", "Breast pain can change across the menstrual cycle."], ["Breast lump or cyst", "New lumps should be assessed, even when they are not painful."], ["Mastitis", "Breastfeeding pain with redness, heat or fever may need prompt care."], ["Nipple or skin changes", "New discharge, inversion, dimpling or skin changes should be checked." ]],
    questions: ["Does this breast symptom need examination or imaging?", "Could this be cycle-related, a cyst or infection?", "What changes should I monitor?", "When should I be referred to a breast clinic?"],
    helps: ["Record when symptoms started and whether they change with your cycle.", "Check for skin, nipple, size or shape changes.", "Seek prompt advice for breastfeeding pain with fever or redness.", "Avoid repeatedly checking in a way that causes soreness; use a consistent routine."],
    services: "GP, breast clinic if referred, pharmacist for some breastfeeding support, maternity services if postpartum.",
    urgent: "Seek urgent or prompt medical advice for a new lump, nipple discharge, skin dimpling, nipple inversion, redness with fever, or rapidly worsening symptoms."
  },
  {
    name: "Fertility and reproductive health",
    title: "Fertility and reproductive health concerns",
    keywords: ["fertility", "trying to conceive", "ttc", "infertility", "ovulation", "miscarriage", "pregnancy test", "not getting pregnant", "fertility appointment"],
    understanding: [
      "Fertility concerns can feel emotionally heavy, especially when cycles are irregular, ovulation is unclear, or trying to conceive is taking longer than expected.",
      "Useful next steps often involve understanding cycle patterns, ovulation signs, medical history, age, previous pregnancies or losses, and whether either partner may need assessment."
    ],
    areas: [["Ovulation patterns", "Irregular cycles can make ovulation harder to predict."], ["PMOS/PCOS", "Can be linked with irregular ovulation or longer cycles."], ["Fertility assessment", "May involve blood tests, ultrasound, semen analysis or specialist referral."], ["Pregnancy loss support", "Miscarriage concerns deserve sensitive clinical and emotional support." ]],
    questions: ["When should I seek fertility assessment?", "Do I appear to be ovulating regularly?", "What tests are appropriate for me and my partner?", "Could PMOS/PCOS, thyroid or other factors be relevant?"],
    helps: ["Track cycle length and possible ovulation signs.", "Prepare dates, pregnancy history, contraception history and relevant medical conditions.", "Avoid blaming yourself; fertility involves many factors.", "Seek emotional support if this is affecting your wellbeing."],
    services: "GP, fertility clinic, gynaecology, early pregnancy unit if pregnant with concerning symptoms, counselling support if needed.",
    urgent: "Seek urgent help for severe one-sided pelvic pain, shoulder-tip pain, fainting or bleeding in early pregnancy, as these can need urgent assessment."
  },
  {
    name: "Pregnancy and postpartum",
    title: "Pregnancy and postpartum concerns",
    keywords: ["pregnant", "pregnancy", "postpartum", "postnatal", "after birth", "breastfeeding", "pelvic girdle pain", "bleeding in pregnancy", "morning sickness", "birth recovery"],
    understanding: [
      "Pregnancy and postpartum symptoms can range from expected changes to symptoms that need prompt assessment. It is always reasonable to ask for support if something feels unusual, severe or worrying.",
      "The most helpful next step depends on whether you are pregnant, how many weeks, whether there is bleeding or pain, and how you are feeling physically and emotionally."
    ],
    areas: [["Pregnancy symptoms", "Nausea, tiredness, pelvic changes and body changes can occur, but severity matters."], ["Bleeding or pain in pregnancy", "Should be discussed with maternity or urgent services depending on severity and stage."], ["Postpartum recovery", "Bleeding, pain, mood, pelvic floor and feeding concerns deserve support."], ["Postnatal mood", "Anxiety, low mood or feeling unable to cope should be taken seriously." ]],
    questions: ["Is this symptom expected for my stage of pregnancy or postpartum recovery?", "Do I need maternity triage or urgent assessment?", "What support is available for pelvic pain, bleeding, feeding or mood?", "What symptoms should I not ignore?"],
    helps: ["Write down pregnancy week or postpartum stage and symptom timing.", "Contact maternity services for concerning pregnancy symptoms.", "Ask about pelvic floor or women’s health physiotherapy if recovery is difficult.", "Tell someone you trust if mood symptoms feel overwhelming."],
    services: "Midwife, maternity triage, GP, health visitor, early pregnancy unit, women’s health physiotherapist, urgent care where needed.",
    urgent: "Seek urgent help for heavy bleeding, severe pain, reduced fetal movements, fainting, chest pain, shortness of breath, severe headache, vision changes, fever, or thoughts of harming yourself or your baby."
  },
  {
    name: "Mental wellbeing",
    title: "Mental wellbeing and health-related stress",
    keywords: ["anxiety", "low mood", "depressed", "panic", "stress", "overwhelmed", "mental health", "pmdd", "mood", "suicidal", "harm myself"],
    understanding: [
      "Health symptoms and mental wellbeing can strongly affect each other. Anxiety, low mood, panic, mood swings or feeling overwhelmed are valid reasons to seek support.",
      "If symptoms appear cyclically before a period, PMDD or hormone-related mood changes may be worth discussing. If symptoms feel constant or unsafe, support should be sought as soon as possible."
    ],
    areas: [["Anxiety or low mood", "Can affect sleep, energy, appetite, concentration and physical symptoms."], ["PMDD", "Severe premenstrual mood symptoms can be disabling and deserve support."], ["Stress and burnout", "Long-term stress can worsen physical and hormonal symptoms."], ["Crisis support", "Feeling unsafe or at risk of self-harm needs urgent human support." ]],
    questions: ["Could my mood symptoms be linked to my cycle or hormones?", "What support is available for anxiety, low mood or PMDD?", "Would therapy, medication or lifestyle support be appropriate?", "What should I do if I feel unsafe?"],
    helps: ["Track mood alongside cycle dates if symptoms seem cyclical.", "Tell someone trusted how you are feeling.", "Prepare examples of how symptoms affect daily life.", "Seek urgent support immediately if you feel at risk of harming yourself."],
    services: "GP, mental health services, counselling, crisis support, emergency services if you feel unsafe.",
    urgent: "If you feel at risk of harming yourself or someone else, seek urgent help now through emergency services, crisis support, or someone trusted who can stay with you."
  }
];

const fallback = {
  name: "General guidance",
  title: "A clearer starting point",
  understanding: [
    "Your question may need a little more detail before it can be matched to a specific women’s health pathway. A good starting point is to describe what is happening, where it is happening, how long it has been going on, and whether it affects your daily life.",
    "Even when symptoms feel vague, a structured summary can make healthcare conversations easier. Try to note timing, severity, triggers, cycle changes, medications and anything that makes the symptom better or worse."
  ],
  areas: [["Symptom location", "Where the symptom is happening can help narrow the next step."], ["Duration", "How long it has been happening helps determine whether it needs review."], ["Impact", "Symptoms affecting work, sleep, sex, exercise or daily life are worth mentioning."], ["Pattern", "Cycle timing, triggers or repeated episodes can be useful clues." ]],
  questions: ["What could be causing this symptom?", "Are there any tests or checks that would be appropriate?", "What should I monitor before coming back?", "What symptoms would mean I should seek urgent help?"],
  helps: ["Write down when the symptom started.", "Rate severity from 1 to 10.", "Note anything that improves or worsens it.", "Bring a short written summary to your appointment."],
  services: "Depending on the concern, a GP, pharmacist, sexual health clinic, women’s health clinic, physiotherapist or urgent care service may be appropriate.",
  urgent: "Seek urgent medical help if symptoms are severe, sudden, worsening, associated with fainting, chest pain, shortness of breath, heavy bleeding, pregnancy concerns, fever, or if you feel unsafe."
};

function setQuestion(text) {
  document.getElementById("searchInput").value = text;
  runSearch();
}

function runSearch() {
  const input = document.getElementById("searchInput").value.trim();
  if (!input) return;

  const pathway = findBestPathway(input);
  renderResults(input, pathway);

  document.getElementById("hero").style.display = "none";
  document.getElementById("results").classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function findBestPathway(input) {
  const lower = input.toLowerCase();
  let best = null;
  let bestScore = 0;

  pathways.forEach(pathway => {
    const score = pathway.keywords.reduce((total, keyword) => {
      return lower.includes(keyword.toLowerCase()) ? total + keyword.length : total;
    }, 0);
    if (score > bestScore) {
      best = pathway;
      bestScore = score;
    }
  });

  return best || fallback;
}

function renderResults(input, pathway) {
  document.getElementById("resultTitle").innerText = pathway.title;
  document.getElementById("concernSummary").innerText = buildConcernSummary(input, pathway);

  document.getElementById("understanding").innerHTML = pathway.understanding.map(p => `<p>${p}</p>`).join("");

  document.getElementById("areas").innerHTML = pathway.areas.map(([title, desc]) => `
    <div class="explore-item">
      <strong>${title}</strong>
      <p>${desc}</p>
    </div>
  `).join("");

  fillList("questions", pathway.questions);
  fillList("helps", pathway.helps);

  document.getElementById("appointment").innerText = buildAppointmentSummary(input, pathway);
  document.getElementById("services").innerText = pathway.services;
  document.getElementById("urgent").innerText = pathway.urgent;
}

function buildConcernSummary(input, pathway) {
  const cleanInput = input.replace(/[?.!]+$/g, "");
  if (pathway === fallback) {
    return `The concern described is: “${cleanInput}.” More detail about timing, severity, location and impact would help make the next step clearer. A structured summary may still make it easier to explain the issue to a healthcare professional.`;
  }
  return `The symptoms described suggest a concern related to ${pathway.name.toLowerCase()}. In plain terms, the issue is: “${cleanInput}.” Because symptoms can have several possible causes, it may be helpful to discuss the pattern, severity and impact on daily life with a healthcare professional.`;
}

function buildAppointmentSummary(input, pathway) {
  const cleanInput = input.replace(/[?.!]+$/g, "");
  return `I would like advice about the following concern: “${cleanInput}.” I would like to understand what may be contributing to these symptoms, whether any checks, tests or referrals are appropriate, and what options may help manage them. The symptoms are important to me because they may be affecting my wellbeing and day-to-day life. I would also like to know what changes I should monitor and when I should seek urgent help.`;
}

function fillList(id, items) {
  document.getElementById(id).innerHTML = items.map(item => `<li>${item}</li>`).join("");
}

function copySummary() {
  const text = document.getElementById("appointment").innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector(".copy-btn");
    const original = btn.innerText;
    btn.innerText = "Copied";
    setTimeout(() => btn.innerText = original, 1300);
  });
}

function startOver() {
  document.getElementById("hero").style.display = "grid";
  document.getElementById("results").classList.remove("active");
  document.getElementById("searchInput").value = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

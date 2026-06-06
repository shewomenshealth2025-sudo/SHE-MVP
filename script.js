const pathways = [
  {
    name: "Urgent Red Flags",
    confidence: "Strong match",
    keywords: ["severe pain", "sudden severe", "fainting", "passed out", "chest pain", "shortness of breath", "soaking pads", "soaking through", "pregnancy bleeding", "suicidal", "harm myself", "fever with pelvic pain", "one-sided severe pelvic pain", "shoulder tip pain", "worst pain"],
    understanding: "Some symptoms need urgent medical attention, especially if they are sudden, severe, worsening, linked with pregnancy, or affecting your ability to stay safe.",
    areas: ["Emergency assessment", "Heavy bleeding", "Severe or sudden pain", "Pregnancy-related bleeding", "Infection or acute illness", "Mental health crisis"],
    questions: ["Do I need urgent assessment today?", "Could this be related to bleeding, infection, pregnancy, or severe pain?", "What symptoms should make me seek emergency care?"],
    helps: ["Do not wait for an app response if symptoms feel severe.", "Ask someone trusted to stay with you if you feel faint, unsafe or overwhelmed.", "Use emergency or urgent care services where appropriate."],
    services: "Emergency services, urgent care, GP out-of-hours, maternity triage if pregnant, or crisis support if you feel at risk of harming yourself.",
    urgent: "Seek urgent medical help now if you have severe pain, heavy bleeding, fainting, chest pain, shortness of breath, pregnancy bleeding, fever with pelvic pain, one-sided severe pelvic pain, shoulder tip pain, or thoughts of harming yourself."
  },
  {
    name: "Menstrual Health",
    confidence: "Strong match",
    keywords: ["period", "periods", "menstrual", "cramps", "cramping", "heavy bleeding", "painful periods", "irregular periods", "missed period", "late period", "spotting", "clots", "blood clots", "pms", "pmdd", "bleeding between periods", "cycle changes"],
    understanding: "Period symptoms can vary, but pain, heavy bleeding, irregular cycles, dizziness or symptoms affecting work, school or daily life are worth discussing with a healthcare professional.",
    areas: ["Endometriosis", "Adenomyosis", "Fibroids", "Heavy menstrual bleeding", "Iron deficiency", "Hormonal changes", "PMDD"],
    questions: ["Could my symptoms suggest endometriosis, fibroids or adenomyosis?", "Should I have my iron or ferritin levels checked?", "What treatment options are available for heavy or painful periods?", "When should I be referred to gynaecology?"],
    helps: ["Heat therapy", "Pain relief options discussed with a pharmacist or GP", "Tracking bleeding, pain and cycle timing", "Menstrual products suited to heavy flow", "Writing down how symptoms affect daily life"],
    services: "GP, pharmacist, gynaecology referral, sexual health clinic where relevant, women’s health clinic.",
    urgent: "Seek urgent help if bleeding is very heavy, you feel faint, pain is sudden or severe, or symptoms are rapidly worsening."
  },
  {
    name: "Pelvic Pain",
    confidence: "Strong match",
    keywords: ["pelvic pain", "pain during sex", "pain after sex", "lower abdominal pain", "ovulation pain", "endometriosis", "adenomyosis", "fibroids", "ovarian cyst", "painful sex", "deep pain", "pelvis", "pain when pooing", "bowel pain during period"],
    understanding: "Pelvic pain can have several causes. Pain that is persistent, worsening, linked to periods, sex, bowel symptoms or daily disruption deserves proper assessment.",
    areas: ["Endometriosis", "Adenomyosis", "Pelvic inflammatory disease", "Ovarian cysts", "Fibroids", "Pelvic floor dysfunction", "Bowel or bladder-related causes"],
    questions: ["Could this pain be related to endometriosis or adenomyosis?", "Do I need an ultrasound or further investigation?", "Could pelvic floor physiotherapy help?", "When should I be referred to a specialist?"],
    helps: ["Pain diary", "Heat therapy", "Pelvic floor physiotherapy discussion", "Gentle movement if safe", "Tracking pain triggers", "Recording bowel, bladder and sex-related symptoms"],
    services: "GP, gynaecology, sexual health clinic, women’s health physiotherapist, urgent care if pain is sudden or severe.",
    urgent: "Seek urgent help if pelvic pain is sudden, severe, one-sided, associated with fainting, fever, vomiting, pregnancy, or heavy bleeding."
  },
  {
    name: "Hormones & Energy",
    confidence: "Possible match",
    keywords: ["fatigue", "tired", "exhausted", "weight gain", "weight changes", "acne", "hair growth", "facial hair", "hair loss", "mood swings", "brain fog", "cravings", "bloating", "insulin resistance", "pcos", "pmos", "hormones", "hormonal", "low energy"],
    understanding: "Symptoms like fatigue, weight changes, acne, hair changes, mood swings and brain fog can be linked to many things, including hormones, thyroid health, iron levels, stress, sleep and metabolic health.",
    areas: ["PMOS/PCOS", "Thyroid issues", "Iron deficiency", "Vitamin deficiencies", "Stress and sleep disruption", "Insulin resistance", "Perimenopause depending on age and cycle changes"],
    questions: ["Could my symptoms be hormone-related?", "Should I have blood tests for thyroid, iron, vitamin D or B12?", "Could PMOS/PCOS be worth exploring?", "What lifestyle or medical options are appropriate?"],
    helps: ["Symptom tracking", "Sleep routine support", "Balanced meals and regular movement", "Strength training where appropriate", "Discuss supplements only with a qualified professional"],
    services: "GP, endocrinology where referred, dietitian, pharmacist, women’s health clinic.",
    urgent: "Seek urgent help if fatigue is accompanied by chest pain, shortness of breath, fainting, confusion, severe weakness, or rapid deterioration."
  },
  {
    name: "Perimenopause & Menopause",
    confidence: "Strong match",
    keywords: ["perimenopause", "menopause", "hot flush", "hot flashes", "night sweats", "vaginal dryness", "low libido", "over 40", "sleep changes", "joint pain", "mood changes", "brain fog", "irregular periods over 40", "hrt", "sweats"],
    understanding: "Perimenopause can begin years before periods stop. Symptoms can include cycle changes, hot flushes, sleep disruption, mood changes, brain fog, vaginal dryness, libido changes and joint aches.",
    areas: ["Perimenopause", "Menopause", "Thyroid health", "Iron deficiency", "Mood and sleep changes", "Genitourinary symptoms of menopause"],
    questions: ["Could my symptoms be perimenopause?", "What treatment options are available, including HRT if suitable?", "Should other causes like thyroid or iron deficiency be checked?", "What support is available for vaginal or sexual symptoms?"],
    helps: ["Symptom diary", "Sleep support", "Strength training", "Discussing HRT and non-hormonal options with a clinician", "Vaginal moisturisers or lubricants where relevant"],
    services: "GP, menopause clinic, pharmacist, sexual health clinic, women’s health physiotherapist.",
    urgent: "Seek urgent help for chest pain, severe shortness of breath, sudden neurological symptoms, very heavy bleeding, or sudden severe pain."
  },
  {
    name: "Fertility & Reproductive Health",
    confidence: "Possible match",
    keywords: ["trying to conceive", "ttc", "fertility", "infertility", "ovulation", "not ovulating", "miscarriage", "pregnancy test", "negative test", "positive test", "irregular ovulation", "fertility appointment", "conceive", "getting pregnant"],
    understanding: "Fertility concerns can be emotionally and physically stressful. Irregular cycles, uncertainty around ovulation, repeated negative tests or previous pregnancy loss may be worth discussing with a healthcare professional.",
    areas: ["Ovulation patterns", "PMOS/PCOS", "Thyroid health", "Male factor fertility", "Fertility referral criteria", "Pregnancy loss support"],
    questions: ["When should I seek fertility advice?", "Should ovulation, thyroid or hormone blood tests be considered?", "Are there lifestyle factors or medical issues worth reviewing?", "What referral options are available?"],
    helps: ["Cycle and ovulation tracking", "Preparing a fertility history", "Recording cycle length and bleeding patterns", "Emotional support during fertility stress"],
    services: "GP, fertility clinic, reproductive medicine service, counselling support, early pregnancy unit where relevant.",
    urgent: "Seek urgent help if you are pregnant or might be pregnant and have severe pain, shoulder tip pain, fainting, or heavy bleeding."
  },
  {
    name: "Pregnancy & Postpartum",
    confidence: "Strong match",
    keywords: ["pregnant", "pregnancy", "postpartum", "postnatal", "after birth", "breastfeeding", "birth recovery", "pelvic girdle pain", "bleeding in pregnancy", "early pregnancy", "morning sickness", "baby blues", "postnatal depression"],
    understanding: "Pregnancy and postpartum symptoms can be common, but some symptoms need careful assessment. Bleeding, severe pain, mood changes, feeding difficulties or recovery concerns should be taken seriously.",
    areas: ["Early pregnancy symptoms", "Pregnancy bleeding", "Pelvic girdle pain", "Postpartum recovery", "Postnatal mood", "Breastfeeding concerns"],
    questions: ["Is this symptom expected at this stage?", "Do I need maternity triage, GP or midwife advice?", "What warning signs should I watch for?", "What support is available for my recovery or mood?"],
    helps: ["Symptom timeline", "Rest and recovery support", "Pelvic health physiotherapy discussion", "Feeding support where relevant", "Asking for mental health support early"],
    services: "Midwife, GP, maternity triage, health visitor, lactation support, pelvic health physiotherapist, emergency care if severe symptoms occur.",
    urgent: "Seek urgent help for heavy bleeding, severe abdominal pain, severe headache, visual changes, chest pain, shortness of breath, fainting, reduced fetal movements, or thoughts of harming yourself or the baby."
  },
  {
    name: "Sexual & Vaginal Health",
    confidence: "Strong match",
    keywords: ["discharge", "itching", "smell", "odour", "thrush", "bv", "bacterial vaginosis", "uti", "sti", "std", "burning when peeing", "pain during sex", "contraception", "vaginal", "vulva", "sore", "dryness"],
    understanding: "Vaginal, urinary and sexual health symptoms are common and treatable, but they can have different causes. Changes in discharge, smell, itching, pain or urinary symptoms are worth checking properly.",
    areas: ["Thrush", "Bacterial vaginosis", "UTI", "STIs", "Vaginal dryness", "Contraception-related changes", "Vulval irritation"],
    questions: ["Could this be thrush, BV, a UTI or an STI?", "Do I need a swab, urine test or STI screen?", "Could contraception be affecting my symptoms?", "What treatment is safe and appropriate?"],
    helps: ["Avoid scented intimate products", "Seek testing before guessing if symptoms are new or recurring", "Use condoms if STI risk is possible", "Speak to a pharmacist for appropriate advice"],
    services: "Pharmacist, GP, sexual health clinic, contraception clinic.",
    urgent: "Seek urgent help if symptoms include fever, pelvic pain, pregnancy concerns, severe pain, or feeling very unwell."
  },
  {
    name: "Breast Health",
    confidence: "Strong match",
    keywords: ["breast", "breast pain", "breast lump", "lump", "nipple discharge", "nipple", "breastfeeding breast pain", "mastitis", "cycle-related breast tenderness", "breast changes", "dimpling"],
    understanding: "Breast symptoms can be linked to hormones, breastfeeding, infection or other causes. New lumps, nipple changes, skin changes or persistent symptoms should be assessed by a healthcare professional.",
    areas: ["Hormonal breast tenderness", "Breast cysts", "Fibroadenoma", "Mastitis", "Breast clinic assessment", "Medication or cycle-related changes"],
    questions: ["Does this breast change need urgent assessment?", "Should I be referred to a breast clinic?", "Could this be related to my cycle, hormones or breastfeeding?", "What changes should I monitor?"],
    helps: ["Note when the symptom started", "Check if symptoms change with your cycle", "Avoid repeatedly pressing the area", "Seek prompt assessment for new or unusual changes"],
    services: "GP, breast clinic referral, breastfeeding support, urgent care if infection symptoms are severe.",
    urgent: "Seek prompt medical advice for a new lump, nipple discharge, skin dimpling, nipple inversion, redness with fever, or severe breast pain."
  },
  {
    name: "Autoimmune & Chronic Conditions",
    confidence: "Possible match",
    keywords: ["autoimmune", "chronic illness", "chronic disease", "flare", "flare up", "inflammation", "joint pain", "swollen joints", "stiff joints", "morning stiffness", "muscle weakness", "muscle pain", "aches", "butterfly rash", "facial rash", "rash", "psoriasis", "eczema", "skin changes", "hair loss", "thinning hair", "lupus", "rheumatoid arthritis", "sjogren", "sjogren's", "hashimoto", "hashimoto's", "graves", "coeliac", "celiac", "crohn", "crohn's", "ulcerative colitis", "multiple sclerosis", "ms", "fibromyalgia", "me/cfs", "chronic fatigue", "thyroid disease", "thyroid", "ibs", "diarrhoea", "constipation", "food intolerance", "symptoms everywhere"],
    understanding: "Autoimmune and chronic inflammatory conditions can sometimes affect multiple body systems. Symptoms like fatigue, joint pain, rashes, hair loss, digestive changes, brain fog or recurring flares may be worth discussing with a healthcare professional.",
    areas: ["Autoimmune conditions", "Thyroid disease", "Inflammatory bowel disease", "Rheumatology-related conditions", "Nutritional deficiencies", "Chronic fatigue conditions", "Fibromyalgia or pain-related syndromes"],
    questions: ["Could these symptoms suggest an autoimmune or inflammatory condition?", "Should I have blood tests for inflammation, thyroid, iron, B12 or vitamin D?", "Would rheumatology, gastroenterology, endocrinology or dermatology referral be appropriate?", "How should I track flares and triggers?", "Could symptoms be changing around my menstrual cycle?"],
    helps: ["Track flares, cycle timing, pain, fatigue and skin or digestive symptoms", "Prepare a timeline of symptoms", "Note family history of autoimmune disease", "Prioritise rest and gentle pacing during flares", "Take photos of visible rashes or swelling to show a clinician"],
    services: "GP, rheumatology, gastroenterology, endocrinology, dermatology, dietitian, women’s health services.",
    urgent: "Seek urgent help if you have chest pain, severe breathlessness, sudden weakness, severe dehydration, blood in stool, high fever, confusion, fainting, or rapidly worsening symptoms."
  },
  {
    name: "Mental Wellbeing",
    confidence: "Possible match",
    keywords: ["anxiety", "low mood", "depression", "panic", "overwhelmed", "mood", "crying", "rage", "irritable", "pmdd", "postnatal depression", "intrusive thoughts", "burnout", "stress"],
    understanding: "Mood and mental wellbeing can be affected by stress, hormones, sleep, life stage, pregnancy, postpartum changes, PMDD, perimenopause and wider health issues. You deserve support, especially if symptoms affect daily life.",
    areas: ["Anxiety", "Depression", "PMDD", "Postnatal mental health", "Perimenopause-related mood changes", "Stress and burnout"],
    questions: ["Could my mood symptoms be linked to my cycle or hormones?", "What support or treatment options are available?", "Could PMDD, postpartum changes or perimenopause be relevant?", "Where can I access talking therapy or mental health support?"],
    helps: ["Track mood alongside cycle and sleep", "Tell someone trusted what is happening", "Prepare examples of how mood affects daily life", "Ask for support early"],
    services: "GP, mental health services, talking therapy, crisis support, maternity mental health services where relevant.",
    urgent: "Seek urgent support now if you feel at risk of harming yourself or someone else, feel unsafe, or cannot cope. Contact emergency services or a crisis helpline in your area."
  }
];

function setQuestion(text) {
  document.getElementById("searchInput").value = text;
  runSearch();
}

function runSearch() {
  const inputEl = document.getElementById("searchInput");
  const input = inputEl.value.trim();
  if (!input) {
    inputEl.focus();
    return;
  }

  const lower = input.toLowerCase();
  let bestMatch = null;
  let bestMatches = [];

  pathways.forEach(pathway => {
    const matches = pathway.keywords.filter(word => lower.includes(word.toLowerCase()));
    if (matches.length > bestMatches.length) {
      bestMatch = pathway;
      bestMatches = matches;
    }
  });

  if (!bestMatch) {
    bestMatch = getFallbackPathway();
    bestMatches = [];
  }

  const confidence = bestMatches.length >= 2 ? bestMatch.confidence : bestMatch.name === "General Guidance" ? "General guidance" : "Possible match";

  document.getElementById("home").style.display = "none";
  document.getElementById("results").classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });

  document.getElementById("resultTitle").innerText = bestMatch.name;
  document.getElementById("originalQuestion").innerText = `You searched: “${input}”`;
  document.getElementById("pathwayName").innerText = bestMatch.name;
  document.getElementById("confidenceLevel").innerText = confidence;
  document.getElementById("matchedCount").innerText = bestMatches.length ? `${bestMatches.length} recognised` : "Needs more detail";

  document.getElementById("summary").innerText = createClearSummary(input, bestMatch.name);
  renderMatchedTags(bestMatches);
  document.getElementById("understanding").innerText = bestMatch.understanding;
  fillList("areas", bestMatch.areas.map(item => `${item} — this is not a diagnosis, but may be worth discussing.`));
  fillList("questions", bestMatch.questions);
  fillList("helps", bestMatch.helps);
  document.getElementById("appointment").innerText = createAppointmentSummary(input, bestMatch.name, bestMatches);
  document.getElementById("services").innerText = bestMatch.services;
  document.getElementById("urgent").innerText = bestMatch.urgent;
}

function getFallbackPathway() {
  return {
    name: "General Guidance",
    confidence: "General guidance",
    understanding: "Your concern may need a little more detail before SHE can match it to a specific pathway. It can still be useful to write down what is happening, how long it has been going on, and how it affects your daily life.",
    areas: ["Symptom location", "Duration", "Impact on daily life", "Triggers or patterns", "Relevant life stage such as puberty, postpartum, perimenopause or menopause"],
    questions: ["Where exactly is the symptom?", "How long has this been happening?", "Is it affecting work, school, sleep, sex, exercise or daily life?", "Are there any symptoms that feel severe, sudden or unusual?"],
    helps: ["Track when symptoms happen", "Note severity from 1–10", "Write down anything that makes it better or worse", "Bring a clear summary to a healthcare appointment"],
    services: "GP, pharmacist, sexual health clinic, women’s health service, or urgent care depending on severity.",
    urgent: "Seek urgent help if symptoms are severe, sudden, worsening, associated with fainting, chest pain, shortness of breath, heavy bleeding, pregnancy concerns, fever, or if you feel unsafe."
  };
}

function createClearSummary(input, pathwayName) {
  return `I am experiencing a health concern related to ${pathwayName.toLowerCase()}. In my own words: “${input}”. I would like help understanding what may be contributing to this, what I should monitor, and what I should ask a healthcare professional.`;
}

function createAppointmentSummary(input, pathwayName, matches) {
  const matchedPhrase = matches.length ? ` Recognised symptoms or keywords include: ${matches.join(", ")}.` : "";
  return `I am seeking advice about a concern related to ${pathwayName.toLowerCase()}. My main concern is: “${input}”.${matchedPhrase} I would like to discuss possible causes, whether any tests or referrals are appropriate, and what options are available to manage or investigate these symptoms. This is affecting my wellbeing and I would like a clear plan for what to do next.`;
}

function renderMatchedTags(matches) {
  const container = document.getElementById("matched");
  if (!matches.length) {
    container.innerHTML = `<span>No strong keyword match yet</span><span>Try adding location, duration, severity or related symptoms</span>`;
    return;
  }
  container.innerHTML = matches.map(match => `<span>${escapeHtml(match)}</span>`).join("");
}

function fillList(id, items) {
  document.getElementById(id).innerHTML = items.map(item => `<li>${escapeHtml(item)}</li>`).join("");
}

function copySummary() {
  const text = document.getElementById("appointment").innerText;
  navigator.clipboard.writeText(text).then(() => showToast());
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

function startOver() {
  document.getElementById("home").style.display = "grid";
  document.getElementById("results").classList.remove("active");
  document.getElementById("searchInput").value = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.getElementById("searchInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") runSearch();
});

/* ============================================================
   All grammar — English + Korean TOPIK
   ============================================================ */

/* ---------- ENGLISH GRAMMAR ---------- */

registerGrammar({
  id: "articles", title: "Articles (a, an, the)", titleKo: "관사",
  level: "Beginner", category: "Nouns & Determiners",
  explanationKo: "관사는 명사 앞에 붙어서 그 명사가 특정한 것인지 아닌지를 나타냅니다.",
  explanationEn: "Articles show whether a noun is specific or general.",
  structure: "a/an + singular countable  |  the + any noun (specific)  |  (no article) + plural/uncountable (general)",
  examples: [
    { en: "I saw a dog in the park.", ko: "공원에서 개 한 마리를 봤어요." },
    { en: "The dog was friendly.", ko: "그 개는 친근했어요." },
    { en: "I like dogs.", ko: "나는 개를 좋아해요." },
    { en: "She is an engineer.", ko: "그녀는 엔지니어입니다." }
  ],
  commonMistakes: [
    { wrong: "I bought a apple.", right: "I bought an apple.", note: "Use 'an' before vowel sounds." },
    { wrong: "I go to the school every day.", right: "I go to school every day.", note: "No 'the' with school, work, home, bed." },
    { wrong: "She is doctor.", right: "She is a doctor.", note: "Jobs need 'a/an'." }
  ],
  tips: ["Use 'a/an' for first mention, 'the' after.", "General statements use no article: I like dogs."],
  related: ["countable-uncountable"]
});

registerGrammar({
  id: "present-tense", title: "Present Tense", titleKo: "현재 시제",
  level: "Beginner", category: "Tenses",
  explanationKo: "단순 현재는 습관·사실·반복을, 현재 진행형은 지금 이 순간 일어나는 일을 나타냅니다.",
  explanationEn: "Simple present = habits and facts. Present continuous = actions happening now.",
  structure: "Simple: subject + base verb (he/she/it + verb-s)  |  Continuous: subject + am/is/are + verb-ing",
  examples: [
    { en: "I work at a bank.", ko: "저는 은행에서 일해요." },
    { en: "I'm working from home this week.", ko: "이번 주는 재택근무 중이에요." },
    { en: "Water boils at 100°C.", ko: "물은 100도에서 끓어요." }
  ],
  commonMistakes: [
    { wrong: "I am work at a bank.", right: "I work at a bank.", note: "Don't use 'am/is/are' with base verb." },
    { wrong: "She drink coffee every morning.", right: "She drinks coffee every morning.", note: "Add -s for he/she/it." }
  ],
  tips: ["Simple: always, usually, never, every day.", "Continuous: now, at the moment, this week."],
  related: ["present-perfect"]
});

registerGrammar({
  id: "present-perfect", title: "Present Perfect", titleKo: "현재완료",
  level: "Intermediate", category: "Tenses",
  explanationKo: "과거의 일이 현재와 연결될 때 사용합니다. 경험, 최근 사건, 계속되는 상황을 나타냅니다.",
  explanationEn: "Connects the past to the present: experiences, recent events, situations continuing now.",
  structure: "Subject + have/has + past participle (V3)",
  examples: [
    { en: "I have lived in Seoul for 5 years.", ko: "저는 서울에 5년째 살고 있어요." },
    { en: "She has just finished her homework.", ko: "그녀는 방금 숙제를 끝냈어요." },
    { en: "Have you ever been to Japan?", ko: "일본에 가본 적이 있나요?" }
  ],
  commonMistakes: [
    { wrong: "I have seen him yesterday.", right: "I saw him yesterday.", note: "Use past simple with finished time." },
    { wrong: "I have went to Japan.", right: "I have been to Japan.", note: "Correct participle: been." }
  ],
  tips: ["'For' + duration, 'since' + start point.", "'Just', 'already', 'yet', 'ever', 'never' go with present perfect."],
  related: ["past-simple-vs-present-perfect"]
});

registerGrammar({
  id: "past-simple-vs-present-perfect", title: "Past Simple vs Present Perfect", titleKo: "과거 시제 vs 현재완료",
  level: "Intermediate", category: "Tenses",
  explanationKo: "과거 시제는 끝난 일, 현재완료는 과거의 일이 현재까지 영향을 미칠 때 씁니다.",
  explanationEn: "Past simple = finished action at a specific past time. Present perfect = past action connected to now.",
  structure: "Past simple: verb-ed/V2  |  Present perfect: have/has + V3",
  examples: [
    { en: "I saw that movie yesterday.", ko: "나는 어제 그 영화를 봤어요." },
    { en: "I have seen that movie.", ko: "나는 그 영화를 본 적이 있어요." },
    { en: "She went to London in 2020.", ko: "그녀는 2020년에 런던에 갔어요." }
  ],
  commonMistakes: [
    { wrong: "I have seen him last week.", right: "I saw him last week.", note: "Finished time = past simple." },
    { wrong: "When have you arrived?", right: "When did you arrive?", note: "'When' asks for a specific time." }
  ],
  tips: ["Ask: can I say WHEN? Yes → past simple. No → present perfect."],
  related: ["present-perfect"]
});

registerGrammar({
  id: "third-conditional", title: "Third Conditional", titleKo: "가정법 과거완료",
  level: "Advanced", category: "Conditionals",
  explanationKo: "과거에 일어나지 않은 일을 상상하거나 후회할 때 사용합니다.",
  explanationEn: "Imagine or regret the past — what would have happened if things had been different.",
  structure: "If + past perfect, would have + past participle",
  examples: [
    { en: "If I had studied, I would have passed.", ko: "공부했더라면 합격했을 텐데." },
    { en: "If she had left earlier, she wouldn't have missed it.", ko: "일찍 떠났더라면 놓치지 않았을 텐데." }
  ],
  commonMistakes: [
    { wrong: "If I would have studied, I would have passed.", right: "If I had studied, I would have passed.", note: "Never 'would have' in the if-clause." },
    { wrong: "If I had studied, I had passed.", right: "If I had studied, I would have passed.", note: "Second half needs 'would have + V3'." }
  ],
  tips: ["Use for regret and reflection.", "Never put 'would' in the 'if' clause."],
  related: []
});

registerGrammar({
  id: "get-used-to", title: "To Get Used To / To Be Used To", titleKo: "~에 익숙해지다",
  level: "Intermediate", category: "Verb Patterns",
  explanationKo: "'Get used to'는 익숙해지는 과정, 'be used to'는 이미 익숙한 상태입니다.",
  explanationEn: "'Get used to' = the process. 'Be used to' = already familiar.",
  structure: "get/be used to + noun / -ing",
  examples: [
    { en: "I'm getting used to the cold weather.", ko: "추운 날씨에 익숙해지고 있어요." },
    { en: "I'm used to waking up early.", ko: "일찍 일어나는 것에 익숙해요." }
  ],
  commonMistakes: [
    { wrong: "I'm used to wake up early.", right: "I'm used to waking up early.", note: "Use -ing after 'used to'." },
    { wrong: "I used to living here.", right: "I used to live here.", note: "'Used to + base verb' = past habit." }
  ],
  tips: ["'Used to + base verb' (past habit) is different from 'be used to + -ing' (familiar)."],
  related: []
});

registerGrammar({
  id: "comparison", title: "Comparatives & Superlatives", titleKo: "비교급과 최상급",
  level: "Beginner", category: "Adjectives",
  explanationKo: "비교급은 두 가지를, 최상급은 여러 가지 중 가장 ~한 것을 나타냅니다.",
  explanationEn: "Comparatives compare two things. Superlatives describe the extreme among three or more.",
  structure: "-er/-est for short adjectives  |  more/most for long adjectives",
  examples: [
    { en: "This book is cheaper than that one.", ko: "이 책이 저 책보다 싸요." },
    { en: "This is the most interesting movie.", ko: "이게 가장 흥미로운 영화예요." },
    { en: "She's as tall as her mother.", ko: "그녀는 어머니만큼 커요." }
  ],
  commonMistakes: [
    { wrong: "She is more taller.", right: "She is taller.", note: "Never 'more' + '-er'." },
    { wrong: "This is more good.", right: "This is better.", note: "'Good' → 'better' (irregular)." }
  ],
  tips: ["1 syllable: -er/-est.", "2 syllables ending in -y: -er/-est.", "3+ syllables: more/most."],
  related: []
});

registerGrammar({
  id: "countable-uncountable", title: "Countable & Uncountable Nouns", titleKo: "가산/불가산 명사",
  level: "Intermediate", category: "Nouns & Determiners",
  explanationKo: "영어 명사는 셀 수 있는 것과 없는 것으로 나뉩니다. 한국어에는 이 구분이 없어 실수가 많습니다.",
  explanationEn: "Countable nouns can be counted. Uncountable nouns can't.",
  structure: "Countable: a/an, many, few  |  Uncountable: much, little, some",
  examples: [
    { en: "I have three books.", ko: "저는 책 세 권이 있어요." },
    { en: "I need some information.", ko: "정보가 좀 필요해요." },
    { en: "She gave me a lot of advice.", ko: "그녀가 저에게 조언을 많이 해줬어요." }
  ],
  commonMistakes: [
    { wrong: "I need some informations.", right: "I need some information.", note: "'Information' is uncountable." },
    { wrong: "I have many money.", right: "I have a lot of money.", note: "'Money' is uncountable." }
  ],
  tips: ["Common uncountables: information, advice, furniture, luggage, money, news, work, bread, water."],
  related: ["articles"]
});

registerGrammar({
  id: "prepositions-time", title: "Prepositions of Time (in, on, at)", titleKo: "시간 전치사",
  level: "Beginner", category: "Prepositions",
  explanationKo: "시간의 범위가 넓을수록 in, 중간이면 on, 가장 좁으면 at을 씁니다.",
  explanationEn: "in + broad times, on + days/dates, at + exact times.",
  structure: "in + months/years/seasons  |  on + days & dates  |  at + exact times & night",
  examples: [
    { en: "The meeting is at 3 PM.", ko: "회의는 오후 3시에 있어요." },
    { en: "My birthday is on May 5th.", ko: "제 생일은 5월 5일이에요." },
    { en: "I was born in 1995.", ko: "저는 1995년에 태어났어요." }
  ],
  commonMistakes: [
    { wrong: "I was born on 1995.", right: "I was born in 1995.", note: "Use 'in' with years." },
    { wrong: "I'll see you in Monday.", right: "I'll see you on Monday.", note: "Use 'on' with days." }
  ],
  tips: ["Think of a funnel: in → on → at.", "Exception: at night, in the morning."],
  related: ["prepositions-place"]
});

registerGrammar({
  id: "prepositions-place", title: "Prepositions of Place (in, on, at)", titleKo: "장소 전치사",
  level: "Beginner", category: "Prepositions",
  explanationKo: "넓은 장소에는 in, 표면에는 on, 특정 지점에는 at을 씁니다.",
  explanationEn: "in = inside enclosed spaces. on = surfaces. at = specific points.",
  structure: "in + enclosed spaces  |  on + surfaces  |  at + specific points",
  examples: [
    { en: "I live in Seoul.", ko: "저는 서울에 살아요." },
    { en: "The book is on the table.", ko: "책이 탁자 위에 있어요." },
    { en: "I'll meet you at the station.", ko: "역에서 만나요." }
  ],
  commonMistakes: [
    { wrong: "I live at Seoul.", right: "I live in Seoul.", note: "Use 'in' with cities." },
    { wrong: "She's on the car.", right: "She's in the car.", note: "Use 'in' for enclosed vehicles." }
  ],
  tips: ["in a car / in a taxi, but on a bus / on a train."],
  related: ["prepositions-time"]
});

registerGrammar({
  id: "ed-ing-adjectives", title: "-ed vs -ing Adjectives", titleKo: "감정 형용사",
  level: "Intermediate", category: "Adjectives",
  explanationKo: "-ed는 감정을 느끼는 사람에게, -ing는 감정을 일으키는 대상에 씁니다.",
  explanationEn: "-ed adjectives describe how you feel. -ing adjectives describe what causes the feeling.",
  structure: "Person + be + -ed  |  Thing + be + -ing",
  examples: [
    { en: "I am bored.", ko: "나는 지루해요." },
    { en: "The movie is boring.", ko: "그 영화는 지루해요." },
    { en: "She is interested in art.", ko: "그녀는 예술에 관심이 있어요." }
  ],
  commonMistakes: [
    { wrong: "I am boring.", right: "I am bored.", note: "'I am boring' means you make others bored." },
    { wrong: "The class is bored.", right: "The class is boring.", note: "The class causes boredom." }
  ],
  tips: ["Common pairs: bored/boring, interested/interesting, excited/exciting, tired/tiring."],
  related: []
});

registerGrammar({
  id: "modals", title: "Modal Verbs", titleKo: "조동사",
  level: "Intermediate", category: "Verbs",
  explanationKo: "조동사는 동사 앞에 와서 능력, 가능성, 의무, 허락, 조언을 나타냅니다.",
  explanationEn: "Modals express ability, possibility, obligation, permission, advice.",
  structure: "Subject + modal + base verb (no 'to', no -s)",
  examples: [
    { en: "I can speak three languages.", ko: "저는 세 개 언어를 할 수 있어요." },
    { en: "You should see a doctor.", ko: "병원에 가보는 게 좋겠어요." },
    { en: "We must finish today.", ko: "우리는 오늘 끝내야 해요." },
    { en: "It might rain later.", ko: "나중에 비가 올지도 몰라요." }
  ],
  commonMistakes: [
    { wrong: "She cans swim.", right: "She can swim.", note: "Modals never take -s." },
    { wrong: "I must to go.", right: "I must go.", note: "No 'to' after modals." }
  ],
  tips: ["Ability: can/could.", "Advice: should/ought to.", "Obligation: must/have to.", "Possibility: may/might/could."],
  related: []
});

registerGrammar({
  id: "phrasal-verbs", title: "Phrasal Verbs", titleKo: "구동사",
  level: "Intermediate", category: "Verbs",
  explanationKo: "동사와 전치사/부사가 결합해 원래와 다른 의미를 만듭니다. 회화에서 매우 자주 쓰입니다.",
  explanationEn: "Verb + particle creates a new meaning. Very common in everyday English.",
  structure: "Verb + particle  |  Some separable, some not",
  examples: [
    { en: "I need to look after my sister.", ko: "여동생을 돌봐야 해요." },
    { en: "Let's figure out the problem.", ko: "문제를 해결해 봅시다." },
    { en: "She gave up smoking.", ko: "그녀는 담배를 끊었어요." }
  ],
  commonMistakes: [
    { wrong: "I look forward to meet you.", right: "I look forward to meeting you.", note: "After 'look forward to', use -ing." },
    { wrong: "Please turn off it.", right: "Please turn it off.", note: "Pronouns go between verb and particle." }
  ],
  tips: ["Common: get up, turn on/off, look for, find out, give up, figure out."],
  related: []
});

registerGrammar({
  id: "subject-verb-agreement", title: "Subject-Verb Agreement", titleKo: "주어-동사 수 일치",
  level: "Beginner", category: "Verbs",
  explanationKo: "주어의 수에 따라 동사 형태가 달라집니다. 3인칭 단수에는 -s를 붙입니다.",
  explanationEn: "Verbs must match the subject in number. Add -s for he/she/it.",
  structure: "He/She/It + verb-s  |  I/You/We/They + base verb",
  examples: [
    { en: "She works at a hospital.", ko: "그녀는 병원에서 일해요." },
    { en: "They work at a hospital.", ko: "그들은 병원에서 일해요." },
    { en: "Everyone has a phone.", ko: "모두가 휴대폰을 가지고 있어요." }
  ],
  commonMistakes: [
    { wrong: "She work at a bank.", right: "She works at a bank.", note: "Add -s for he/she/it." },
    { wrong: "Everyone have a phone.", right: "Everyone has a phone.", note: "'Everyone' is singular." }
  ],
  tips: ["Everyone, everybody, someone, nobody are singular."],
  related: ["present-tense"]
});

registerGrammar({
  id: "word-order", title: "Word Order (SVO vs SOV)", titleKo: "어순",
  level: "Beginner", category: "Sentence Structure",
  explanationKo: "한국어는 SOV, 영어는 SVO 순서입니다. 동사를 문장 끝에 두지 마세요.",
  explanationEn: "Korean is SOV. English is SVO. Put the verb before the object.",
  structure: "Subject + Verb + Object",
  examples: [
    { en: "I eat rice.", ko: "나는 밥을 먹어요." },
    { en: "She reads books every night.", ko: "그녀는 매일 밤 책을 읽어요." },
    { en: "What are you doing?", ko: "뭐 하고 있어요?" }
  ],
  commonMistakes: [
    { wrong: "I rice eat.", right: "I eat rice.", note: "Verb comes before object." },
    { wrong: "What you are doing?", right: "What are you doing?", note: "Invert subject and auxiliary in questions." }
  ],
  tips: ["Time expressions usually go at end or beginning.", "Adverbs of frequency go before the main verb."],
  related: ["present-tense"]
});

registerGrammar({
  id: "confusing-pairs", title: "Easily Confused Words", titleKo: "헷갈리는 단어",
  level: "Intermediate", category: "Vocabulary",
  explanationKo: "한국어로 비슷하게 번역되지만 영어에서는 다른 단어들을 정리했습니다.",
  explanationEn: "Words that translate similarly but mean different things.",
  structure: "fun vs funny  |  play vs hang out  |  promise vs plans",
  examples: [
    { en: "I had a fun time at the party.", ko: "파티에서 재미있게 놀았어요." },
    { en: "That comedian is really funny.", ko: "그 코미디언은 정말 웃겨요." },
    { en: "I hung out with my friends.", ko: "친구들과 놀았어요." },
    { en: "Is it okay to meet at 7?", ko: "7시에 만나는 것 괜찮아요?" }
  ],
  commonMistakes: [
    { wrong: "I had a funny time.", right: "I had a fun time.", note: "'Funny' = makes you laugh." },
    { wrong: "I played with my friends.", right: "I hung out with my friends.", note: "'Play' is for children." },
    { wrong: "Are you okay to meet at 7?", right: "Is it okay to meet at 7?", note: "'Are you okay?' asks about health." }
  ],
  tips: ["Also: borrow/lend, say/tell, see/watch, listen/hear."],
  related: []
});

registerGrammar({
  id: "gerunds-infinitives", title: "Gerunds & Infinitives", titleKo: "동명사와 부정사",
  level: "Intermediate", category: "Verb Patterns",
  explanationKo: "어떤 동사 뒤에는 -ing, 어떤 동사 뒤에는 to + 동사가 옵니다. 암기가 필요합니다.",
  explanationEn: "Some verbs take -ing, others take to + verb.",
  structure: "Verb + -ing  |  Verb + to + verb  |  Preposition + -ing",
  examples: [
    { en: "I enjoy watching movies.", ko: "저는 영화 보는 것을 즐겨요." },
    { en: "She wants to travel abroad.", ko: "그녀는 해외여행을 가고 싶어해요." },
    { en: "I'm looking forward to meeting you.", ko: "만나기를 기대하고 있어요." }
  ],
  commonMistakes: [
    { wrong: "I enjoy to watch movies.", right: "I enjoy watching movies.", note: "'Enjoy' takes -ing." },
    { wrong: "I'm looking forward to meet you.", right: "I'm looking forward to meeting you.", note: "'To' is a preposition — use -ing." }
  ],
  tips: ["-ing verbs: enjoy, avoid, finish, mind, suggest, quit.", "to-verbs: want, decide, hope, plan, need, promise, agree."],
  related: ["get-used-to"]
});

registerGrammar({
  id: "relative-clauses", title: "Relative Clauses", titleKo: "관계절",
  level: "Intermediate", category: "Clauses",
  explanationKo: "명사를 꾸며주는 절입니다. who, which, that, where, when을 사용합니다.",
  explanationEn: "Clauses that describe a noun. Use who, which, that, where, when.",
  structure: "Noun + who/which/that + clause",
  examples: [
    { en: "The man who lives next door is a doctor.", ko: "옆집에 사는 남자는 의사예요." },
    { en: "This is the book that I told you about.", ko: "이게 내가 말한 그 책이에요." },
    { en: "The cafe where we met is closing.", ko: "우리가 만난 카페가 문을 닫아요." }
  ],
  commonMistakes: [
    { wrong: "The man who he lives next door is a doctor.", right: "The man who lives next door is a doctor.", note: "Don't repeat subject after 'who'." },
    { wrong: "The book what I told you about.", right: "The book that I told you about.", note: "Use 'that', not 'what'." }
  ],
  tips: ["Who = people. Which = things. That = both.", "Where = places. When = times."],
  related: []
});

registerGrammar({
  id: "passive-voice", title: "Passive Voice", titleKo: "수동태",
  level: "Intermediate", category: "Verbs",
  explanationKo: "주어가 동작을 받을 때 사용합니다. 한국어 '~되다'와 비슷합니다.",
  explanationEn: "Used when the subject receives the action. be + past participle.",
  structure: "Subject + be + past participle (+ by agent)",
  examples: [
    { en: "The letter was written by John.", ko: "그 편지는 존에 의해 쓰였어요." },
    { en: "This building was built in 1990.", ko: "이 건물은 1990년에 지어졌어요." },
    { en: "English is spoken all over the world.", ko: "영어는 전 세계에서 사용돼요." }
  ],
  commonMistakes: [
    { wrong: "The letter was wrote by John.", right: "The letter was written by John.", note: "Use V3, not V2." },
    { wrong: "I was stolen my wallet.", right: "My wallet was stolen.", note: "The thing receiving the action becomes the subject." }
  ],
  tips: ["Use passive when the doer is unknown or unimportant.", "Tenses: is done / was done / has been done / will be done."],
  related: []
});

registerGrammar({
  id: "reported-speech", title: "Reported Speech", titleKo: "간접화법",
  level: "Intermediate", category: "Clauses",
  explanationKo: "다른 사람의 말을 전달할 때 사용합니다. 시제·대명사·시간 표현이 바뀝니다.",
  explanationEn: "Telling someone what another person said. Tenses and pronouns shift back.",
  structure: "Direct: She said, 'I am tired.' → Reported: She said she was tired.",
  examples: [
    { en: "He said he was busy.", ko: "그는 바쁘다고 말했어요." },
    { en: "She told me she would call later.", ko: "그녀는 나중에 전화하겠다고 했어요." },
    { en: "I asked if she was coming.", ko: "나는 그녀가 오는지 물었어요." }
  ],
  commonMistakes: [
    { wrong: "He said me that he was tired.", right: "He told me that he was tired.", note: "'Say' takes no person. Use 'tell + person'." },
    { wrong: "He said he is tired.", right: "He said he was tired.", note: "Shift tense back." },
    { wrong: "She asked where did I live.", right: "She asked where I lived.", note: "Reported questions use statement order." }
  ],
  tips: ["Tense shift: am→was, is→was, will→would, can→could."],
  related: []
});

/* ---------- KOREAN TOPIK GRAMMAR ---------- */

registerGrammar({
  id: "topik-1-copula", title: "이에요/예요 (to be)", titleKo: "이에요/예요",
  level: "Beginner", category: "TOPIK 1",
  explanationKo: "명사 뒤에 붙어 '~이다'를 나타냅니다. 받침이 있으면 이에요, 없으면 예요.",
  explanationEn: "Copula: to be (polite).",
  structure: "Noun + 이에요 / 예요",
  examples: [
    { en: "학생이에요.", ko: "I am a student." },
    { en: "의사예요.", ko: "I am a doctor." }
  ],
  commonMistakes: [],
  tips: ["받침 있으면 이에요, 없으면 예요."],
  related: []
});

registerGrammar({
  id: "topik-1-topic-marker", title: "은/는 (topic marker)", titleKo: "은/는",
  level: "Beginner", category: "TOPIK 1",
  explanationKo: "문장의 주제를 나타내는 조사입니다.",
  explanationEn: "Topic marker.",
  structure: "Noun + 은 / 는",
  examples: [
    { en: "저는 학생이에요.", ko: "As for me, I am a student." },
    { en: "이것은 책이에요.", ko: "This is a book." }
  ],
  commonMistakes: [],
  tips: ["받침 있으면 은, 없으면 는."],
  related: []
});

registerGrammar({
  id: "topik-1-present", title: "아/어요 (present tense)", titleKo: "아/어요",
  level: "Beginner", category: "TOPIK 1",
  explanationKo: "동사와 형용사의 현재 시제를 만드는 어미입니다.",
  explanationEn: "Present tense verb ending.",
  structure: "Verb stem + 아요 / 어요",
  examples: [
    { en: "학교에 가요.", ko: "I go to school." },
    { en: "밥을 먹어요.", ko: "I eat rice." }
  ],
  commonMistakes: [],
  tips: ["모음 ㅏ, ㅗ → 아요. 나머지 → 어요."],
  related: []
});

registerGrammar({
  id: "topik-2-experience", title: "-아/어 본 적이 있다 (experience)", titleKo: "-아/어 본 적이 있다",
  level: "Intermediate", category: "TOPIK 2",
  explanationKo: "경험을 나타내는 표현입니다. '~해 본 적이 있다'.",
  explanationEn: "Have experience of doing.",
  structure: "Verb stem + 아/어 본 적이 있다",
  examples: [
    { en: "한국에 가 본 적이 있어요.", ko: "I have been to Korea." },
    { en: "김치를 먹어 본 적이 있어요?", ko: "Have you tried kimchi?" }
  ],
  commonMistakes: [],
  tips: ["부정: -아/어 본 적이 없다."],
  related: []
});

registerGrammar({
  id: "topik-2-intention", title: "-려고 하다 (intention)", titleKo: "-려고 하다",
  level: "Intermediate", category: "TOPIK 2",
  explanationKo: "의도나 계획을 나타냅니다.",
  explanationEn: "Intend to / plan to.",
  structure: "Verb stem + 려고 하다",
  examples: [
    { en: "한국에 가려고 해요.", ko: "I plan to go to Korea." },
    { en: "공부하려고 해요.", ko: "I intend to study." }
  ],
  commonMistakes: [],
  tips: ["받침 있으면 -으려고 하다."],
  related: []
});

registerGrammar({
  id: "topik-2-cause", title: "-아/어서 (cause)", titleKo: "-아/어서",
  level: "Intermediate", category: "TOPIK 2",
  explanationKo: "이유나 원인을 나타냅니다. '~해서'.",
  explanationEn: "Because / so.",
  structure: "Verb/Adj stem + 아/어서",
  examples: [
    { en: "피곤해서 일찍 잤어요.", ko: "I was tired, so I slept early." },
    { en: "배가 고파서 밥을 먹었어요.", ko: "I was hungry, so I ate." }
  ],
  commonMistakes: [],
  tips: ["명령문, 청유문에는 쓸 수 없음."],
  related: []
});

registerGrammar({
  id: "topik-2-contrast", title: "-지만 (contrast)", titleKo: "-지만",
  level: "Intermediate", category: "TOPIK 2",
  explanationKo: "대조를 나타냅니다. '~하지만'.",
  explanationEn: "But / however.",
  structure: "Verb/Adj stem + 지만",
  examples: [
    { en: "한국어는 어렵지만 재미있어요.", ko: "Korean is difficult but fun." },
    { en: "비가 오지만 가고 싶어요.", ko: "It's raining, but I want to go." }
  ],
  commonMistakes: [],
  tips: ["받침 여부 상관없이 지만."],
  related: []
});

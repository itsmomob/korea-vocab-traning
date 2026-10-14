/* ============================================================
   All topics — English + Korean TOPIK
   Consolidated into one file for maintainability.
   ============================================================ */

/* ---------- ENGLISH TOPICS ---------- */

registerTopic({
  id: "food", title: "Food", titleKo: "음식", category: "Food & Dining", level: "Beginner", emoji: "🍽️",
  summary: "Talking about food, meals, and eating habits.", summaryKo: "음식, 식사, 식습관.",
  sections: [
    { title: "Favorite Foods", titleKo: "좋아하는 음식", questions: [
      { q: "What is your favorite food, and why?", qKo: "가장 좋아하는 음식은 무엇이고, 왜요?",
        vocab: [{ en: "flavor", ko: "맛" }, { en: "dish", ko: "요리" }],
        phrasalVerbs: [{ en: "be into", ko: "~을 좋아하다" }],
        model: "I'm really into bibimbap because it has a rich flavor.", modelKo: "비빔밥을 정말 좋아해요. 풍미가 풍부하거든요." },
      { q: "Is there any food you dislike?", qKo: "싫어하는 음식이 있나요?",
        vocab: [{ en: "texture", ko: "식감" }, { en: "dislike", ko: "싫어하다" }],
        phrasalVerbs: [{ en: "stay away from", ko: "피하다" }],
        model: "I stay away from cilantro because of its strong smell.", modelKo: "고수 냄새가 강해서 피하는 편이에요." },
      { q: "What food reminds you of your childhood?", qKo: "어린 시절을 떠올리게 하는 음식은?",
        vocab: [{ en: "comfort food", ko: "위로가 되는 음식" }, { en: "nostalgia", ko: "향수" }],
        phrasalVerbs: [{ en: "bring back", ko: "되살리다" }],
        model: "My grandmother's kimchi jjigae brings back warm memories.", modelKo: "할머니의 김치찌개는 따뜻한 추억을 떠올리게 해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "cafe", title: "At the Cafe", titleKo: "카페에서", category: "Food & Dining", level: "Beginner", emoji: "☕",
  summary: "Ordering coffee and catching up.", summaryKo: "커피 주문과 대화.",
  sections: [
    { title: "Ordering Coffee", titleKo: "커피 주문", questions: [
      { q: "How do you usually order your coffee?", qKo: "커피를 어떻게 주문하나요?",
        vocab: [{ en: "to go", ko: "포장" }, { en: "refill", ko: "리필" }],
        phrasalVerbs: [{ en: "ask for", ko: "요청하다" }],
        model: "I usually ask for a large iced Americano to go.", modelKo: "보통 라지 아이스 아메리카노를 포장으로 주문해요." },
      { q: "Do you have a favorite cafe?", qKo: "좋아하는 카페가 있나요?",
        vocab: [{ en: "cozy", ko: "아늑한" }, { en: "barista", ko: "바리스타" }],
        phrasalVerbs: [{ en: "hang out", ko: "어울리다" }],
        model: "There's a cozy cafe near my place with friendly baristas.", modelKo: "집 근처에 바리스타가 친절한 아늑한 카페가 있어요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "restaurant", title: "At the Restaurant", titleKo: "식당에서", category: "Food & Dining", level: "Beginner", emoji: "🍴",
  summary: "Ordering food and paying.", summaryKo: "음식 주문과 계산.",
  sections: [
    { title: "Ordering", titleKo: "주문", questions: [
      { q: "Do you usually make a reservation?", qKo: "보통 예약을 하나요?",
        vocab: [{ en: "reservation", ko: "예약" }, { en: "waitlist", ko: "대기 명단" }],
        phrasalVerbs: [{ en: "walk in", ko: "예약 없이 들어가다" }],
        model: "I usually walk in unless it's a weekend.", modelKo: "주말이 아니면 보통 예약 없이 들어가요." },
      { q: "How do you decide what to order?", qKo: "무엇을 주문할지 어떻게 정하나요?",
        vocab: [{ en: "signature dish", ko: "대표 요리" }, { en: "portion", ko: "1인분" }],
        phrasalVerbs: [{ en: "go for", ko: "선택하다" }],
        model: "I go for the signature dish or ask for a recommendation.", modelKo: "대표 요리를 선택하거나 추천을 부탁해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "bar", title: "At the Bar", titleKo: "바에서", category: "Food & Dining", level: "Intermediate", emoji: "🍺",
  summary: "Ordering drinks and socializing.", summaryKo: "음료 주문과 사교.",
  sections: [
    { title: "Drinks", titleKo: "음료", questions: [
      { q: "What's your go-to drink?", qKo: "주로 어떤 음료를 마시나요?",
        vocab: [{ en: "on tap", ko: "생맥주로" }, { en: "cocktail", ko: "칵테일" }],
        phrasalVerbs: [{ en: "go for", ko: "선택하다" }],
        model: "I usually go for a draft beer.", modelKo: "보통 생맥주를 시켜요." },
      { q: "How do you say no to alcohol politely?", qKo: "정중하게 술을 거절하려면?",
        vocab: [{ en: "designated driver", ko: "운전 대행자" }, { en: "preference", ko: "선호" }],
        phrasalVerbs: [{ en: "turn down", ko: "거절하다" }],
        model: "I turn it down politely by saying I'm the designated driver.", modelKo: "운전 대행자라면서 정중하게 거절해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "nutrition", title: "Nutrition", titleKo: "영양", category: "Food & Dining", level: "Intermediate", emoji: "🥗",
  summary: "Healthy eating and nutrients.", summaryKo: "건강한 식습관과 영양소.",
  sections: [
    { title: "Healthy Eating", titleKo: "건강한 식습관", questions: [
      { q: "What does a balanced diet mean to you?", qKo: "균형 잡힌 식단이란?",
        vocab: [{ en: "balanced diet", ko: "균형 잡힌 식단" }, { en: "nutrient", ko: "영양소" }],
        phrasalVerbs: [{ en: "fill up on", ko: "배를 채우다" }],
        model: "To me, it means filling up on vegetables and cutting down on processed food.", modelKo: "채소로 배를 채우고 가공식품을 줄이는 거예요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "sports", title: "Sports & Workout", titleKo: "운동과 스포츠", category: "Health & Mind", level: "Beginner", emoji: "🏃",
  summary: "Talking about sports and exercise.", summaryKo: "스포츠와 운동.",
  sections: [
    { title: "Sports", titleKo: "스포츠", questions: [
      { q: "Do you play any sports?", qKo: "운동을 하시나요?",
        vocab: [{ en: "sport", ko: "스포츠" }, { en: "team", ko: "팀" }],
        phrasalVerbs: [{ en: "take up", ko: "시작하다" }],
        model: "I took up badminton last year and I'm really into it.", modelKo: "작년에 배드민턴을 시작해서 정말 좋아해요." },
      { q: "How often do you work out?", qKo: "얼마나 자주 운동하나요?",
        vocab: [{ en: "workout", ko: "운동" }, { en: "cardio", ko: "유산소" }],
        phrasalVerbs: [{ en: "warm up", ko: "준비 운동하다" }],
        model: "I work out three or four times a week and always warm up first.", modelKo: "일주일에 서너 번 운동하고 항상 준비 운동을 해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "mbti", title: "MBTI & Personality", titleKo: "MBTI와 성격", category: "Life & Society", level: "Intermediate", emoji: "🧩",
  summary: "Personality types and relationships.", summaryKo: "성격 유형과 관계.",
  sections: [
    { title: "MBTI & Personality", titleKo: "MBTI와 성격", questions: [
      { q: "What is your MBTI?", qKo: "MBTI가 무엇인가요?",
        vocab: [{ en: "personality", ko: "성격" }, { en: "introvert", ko: "내향적인 사람" }],
        phrasalVerbs: [{ en: "get along with", ko: "잘 지내다" }],
        model: "My MBTI is INFP and I get along well with introverts.", modelKo: "제 MBTI는 INFP이고 내향적인 사람들과 잘 지내요." },
      { q: "Do you think MBTI accurately describes you?", qKo: "MBTI가 정확하다고 생각하나요?",
        vocab: [{ en: "accurate", ko: "정확한" }, { en: "characteristic", ko: "특징" }],
        phrasalVerbs: [{ en: "fit into", ko: "들어맞다" }],
        model: "I think MBTI describes some parts of my personality accurately.", modelKo: "MBTI가 제 성격의 일부를 정확하게 설명해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "childhood", title: "Childhood Memories", titleKo: "어린 시절 추억", category: "Life & Society", level: "Beginner", emoji: "🧸",
  summary: "Talking about childhood.", summaryKo: "어린 시절 이야기.",
  sections: [
    { title: "Growing Up", titleKo: "성장", questions: [
      { q: "Where did you grow up?", qKo: "어디서 자랐나요?",
        vocab: [{ en: "hometown", ko: "고향" }, { en: "neighborhood", ko: "동네" }],
        phrasalVerbs: [{ en: "grow up", ko: "자라다" }],
        model: "I grew up in a quiet suburb in the south of Seoul.", modelKo: "서울 남쪽의 조용한 교외에서 자랐어요." },
      { q: "What's your earliest memory?", qKo: "가장 오래된 기억은?",
        vocab: [{ en: "memory", ko: "기억" }, { en: "vivid", ko: "생생한" }],
        phrasalVerbs: [{ en: "bring back", ko: "되살리다" }],
        model: "My earliest memory is playing in the garden with my mother.", modelKo: "가장 오래된 기억은 어머니와 정원에서 놀던 거예요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "screen-addiction", title: "Screen Addictions", titleKo: "스크린 중독", category: "Life & Society", level: "Intermediate", emoji: "📱",
  summary: "Digital habits and screen time.", summaryKo: "디지털 습관과 화면 사용.",
  sections: [
    { title: "Screen Time", titleKo: "화면 사용 시간", questions: [
      { q: "How much time do you spend on your phone?", qKo: "휴대폰을 얼마나 쓰나요?",
        vocab: [{ en: "screen time", ko: "화면 사용 시간" }, { en: "notification", ko: "알림" }],
        phrasalVerbs: [{ en: "pick up", ko: "집다" }],
        model: "Honestly, too much. I pick up my phone constantly.", modelKo: "솔직히 너무 많이 해요. 휴대폰을 계속 집어 들어요." },
      { q: "Have you tried a digital detox?", qKo: "디지털 디톡스를 해본 적 있나요?",
        vocab: [{ en: "detox", ko: "디톡스" }, { en: "reset", ko: "재정비" }],
        phrasalVerbs: [{ en: "unplug from", ko: "벗어나다" }],
        model: "I tried a weekend detox once. Unplugging gave me a real reset.", modelKo: "주말 디톡스를 시도했어요. 벗어나니 정말 재정비가 됐어요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "cosmos", title: "Cosmos (Space, Stars, Planets)", titleKo: "우주", category: "Knowledge & World", level: "Intermediate", emoji: "🌌",
  summary: "Talking about space and the universe.", summaryKo: "우주와 천문학.",
  sections: [
    { title: "Space", titleKo: "우주", questions: [
      { q: "How interested are you in space?", qKo: "우주에 얼마나 관심 있나요?",
        vocab: [{ en: "galaxy", ko: "은하" }, { en: "planet", ko: "행성" }],
        phrasalVerbs: [{ en: "be into", ko: "좋아하다" }],
        model: "I'm really into space. I dive into documentaries about black holes.", modelKo: "우주에 정말 관심이 많아요. 블랙홀 다큐멘터리에 빠져들어요." },
      { q: "Would you travel to space?", qKo: "우주여행을 하고 싶나요?",
        vocab: [{ en: "zero gravity", ko: "무중력" }, { en: "launch", ko: "발사" }],
        phrasalVerbs: [{ en: "go through", ko: "경험하다" }],
        model: "If I could afford it, going through zero gravity would be unforgettable.", modelKo: "여유가 있다면 무중력을 경험하는 건 잊을 수 없을 거예요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "train-station", title: "At the Train Station", titleKo: "기차역에서", category: "Everyday Places", level: "Beginner", emoji: "🚉",
  summary: "Buying tickets and navigating stations.", summaryKo: "표 구매와 역 이용.",
  sections: [
    { title: "Tickets", titleKo: "표 구매", questions: [
      { q: "How do you usually buy train tickets?", qKo: "표를 어떻게 사나요?",
        vocab: [{ en: "one-way ticket", ko: "편도표" }, { en: "round-trip", ko: "왕복" }],
        phrasalVerbs: [{ en: "pick up", ko: "받다" }],
        model: "I pick up my tickets at the machine or ask at the counter.", modelKo: "발권기에서 표를 받거나 창구에 물어봐요." },
      { q: "Have you ever missed a train?", qKo: "기차를 놓친 적 있나요?",
        vocab: [{ en: "delay", ko: "지연" }, { en: "connection", ko: "환승" }],
        phrasalVerbs: [{ en: "miss out on", ko: "놓치다" }],
        model: "Once I missed a connection and ended up waiting two hours.", modelKo: "한 번 환승을 놓쳐서 결국 두 시간을 기다렸어요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "bank", title: "At the Bank", titleKo: "은행에서", category: "Everyday Places", level: "Beginner", emoji: "🏦",
  summary: "Everyday banking in English.", summaryKo: "일상적인 은행 업무.",
  sections: [
    { title: "Banking", titleKo: "은행 업무", questions: [
      { q: "How often do you go to the bank?", qKo: "은행에 얼마나 자주 가나요?",
        vocab: [{ en: "branch", ko: "지점" }, { en: "online banking", ko: "인터넷 뱅킹" }],
        phrasalVerbs: [{ en: "stop by", ko: "들르다" }],
        model: "I rarely stop by a branch these days.", modelKo: "요즘은 지점에 거의 안 들러요." },
      { q: "Have you ever had a problem with your account?", qKo: "계좌에 문제가 생긴 적 있나요?",
        vocab: [{ en: "fraud", ko: "사기" }, { en: "dispute", ko: "이의 제기" }],
        phrasalVerbs: [{ en: "sort out", ko: "해결하다" }],
        model: "Once I noticed a suspicious charge and the bank helped me dispute it.", modelKo: "수상한 결제를 발견해서 은행이 이의 제기를 도와줬어요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "hospital", title: "At the Hospital", titleKo: "병원에서", category: "Everyday Places", level: "Beginner", emoji: "🏥",
  summary: "Medical situations in English.", summaryKo: "의료 상황에서 쓰는 영어.",
  sections: [
    { title: "Appointments & Symptoms", titleKo: "예약과 증상", questions: [
      { q: "How do you book a doctor's appointment?", qKo: "진료 예약은 어떻게 하나요?",
        vocab: [{ en: "appointment", ko: "예약" }, { en: "clinic", ko: "의원" }],
        phrasalVerbs: [{ en: "call in", ko: "전화하다" }],
        model: "I call the clinic or book online to schedule an appointment.", modelKo: "의원에 전화하거나 온라인으로 예약해요." },
      { q: "What do you say when you're not feeling well?", qKo: "몸이 안 좋을 때 뭐라고 하나요?",
        vocab: [{ en: "symptom", ko: "증상" }, { en: "sore throat", ko: "목 통증" }],
        phrasalVerbs: [{ en: "come down with", ko: "걸리다" }],
        model: "I say I've come down with a cold and have a sore throat.", modelKo: "감기에 걸린 것 같고 목이 아프다고 말해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "police-station", title: "At the Police Station", titleKo: "경찰서에서", category: "Everyday Places", level: "Intermediate", emoji: "🚔",
  summary: "Reporting a crime.", summaryKo: "신고와 신고서.",
  sections: [
    { title: "Reporting", titleKo: "신고", questions: [
      { q: "What would you do if you witnessed a crime?", qKo: "범죄를 목격하면 어떻게 하나요?",
        vocab: [{ en: "witness", ko: "목격자" }, { en: "emergency", ko: "긴급 상황" }],
        phrasalVerbs: [{ en: "call in", ko: "신고하다" }],
        model: "I'd call it in immediately and back away to stay safe.", modelKo: "즉시 신고하고 안전을 위해 물러설 거예요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "cinema", title: "At the Cinema", titleKo: "영화관에서", category: "Everyday Places", level: "Beginner", emoji: "🎬",
  summary: "Movies and the cinema experience.", summaryKo: "영화와 영화관.",
  sections: [
    { title: "Tickets & Genres", titleKo: "표와 장르", questions: [
      { q: "How do you usually buy movie tickets?", qKo: "영화표를 어떻게 사나요?",
        vocab: [{ en: "showtime", ko: "상영 시간" }, { en: "matinee", ko: "낮 영화" }],
        phrasalVerbs: [{ en: "book in advance", ko: "미리 예약하다" }],
        model: "I book in advance online and pick up my tickets at the counter.", modelKo: "온라인으로 미리 예약하고 카운터에서 표를 받아요." },
      { q: "What's your favorite movie genre?", qKo: "좋아하는 영화 장르는?",
        vocab: [{ en: "genre", ko: "장르" }, { en: "thriller", ko: "스릴러" }],
        phrasalVerbs: [{ en: "be into", ko: "좋아하다" }],
        model: "I'm really into thrillers because they keep me on edge.", modelKo: "긴장감 있게 만드는 스릴러를 정말 좋아해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "theatre", title: "At the Theatre", titleKo: "극장에서", category: "Everyday Places", level: "Intermediate", emoji: "🎭",
  summary: "Plays, musicals, and performances.", summaryKo: "연극, 뮤지컬, 공연.",
  sections: [
    { title: "Theatre", titleKo: "극장", questions: [
      { q: "Do you prefer plays or musicals?", qKo: "연극과 뮤지컬 중 어느 쪽?",
        vocab: [{ en: "plot", ko: "줄거리" }, { en: "choreography", ko: "안무" }],
        phrasalVerbs: [{ en: "be into", ko: "좋아하다" }],
        model: "I'm really into musicals because of the choreography.", modelKo: "안무 때문에 뮤지컬을 정말 좋아해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "airport", title: "At the Airport", titleKo: "공항에서", category: "Everyday Places", level: "Beginner", emoji: "✈️",
  summary: "Check-in, security, and boarding.", summaryKo: "체크인, 보안, 탑승.",
  sections: [
    { title: "Check-in", titleKo: "체크인", questions: [
      { q: "How early do you arrive at the airport?", qKo: "공항에 얼마나 일찍 도착하나요?",
        vocab: [{ en: "boarding pass", ko: "탑승권" }, { en: "gate", ko: "탑승구" }],
        phrasalVerbs: [{ en: "check in", ko: "체크인하다" }],
        model: "I arrive about two hours early for international flights.", modelKo: "국제선은 두 시간 전에 도착해요." },
      { q: "Do you prefer a window or aisle seat?", qKo: "창가와 통로 좌석 중?",
        vocab: [{ en: "aisle seat", ko: "통로 좌석" }, { en: "legroom", ko: "다리 공간" }],
        phrasalVerbs: [{ en: "stretch out", ko: "기지개를 켜다" }],
        model: "I prefer an aisle seat so I can stretch out.", modelKo: "다리를 뻗을 수 있도록 통로 좌석을 선호해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "immigration", title: "At the Immigration Center", titleKo: "출입국 관리소에서", category: "Everyday Places", level: "Intermediate", emoji: "🛂",
  summary: "Visas, permits, and paperwork.", summaryKo: "비자, 체류 허가, 서류.",
  sections: [
    { title: "Visas", titleKo: "비자", questions: [
      { q: "What kind of visa do you need to live abroad?", qKo: "해외에서 살려면 어떤 비자가 필요한가요?",
        vocab: [{ en: "residence permit", ko: "체류 허가증" }, { en: "work permit", ko: "취업 허가" }],
        phrasalVerbs: [{ en: "apply for", ko: "신청하다" }],
        model: "It depends on your purpose. I applied for a working holiday visa.", modelKo: "목적에 따라 달라요. 워킹홀리데이 비자를 신청했어요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "bookstore", title: "At the Bookstore", titleKo: "서점에서", category: "Everyday Places", level: "Beginner", emoji: "📚",
  summary: "Browsing books and recommendations.", summaryKo: "책 둘러보기와 추천.",
  sections: [
    { title: "Browsing", titleKo: "둘러보기", questions: [
      { q: "How do you choose a book?", qKo: "책을 어떻게 고르나요?",
        vocab: [{ en: "bestseller", ko: "베스트셀러" }, { en: "blurb", ko: "책 소개" }],
        phrasalVerbs: [{ en: "flip through", ko: "넘겨보다" }],
        model: "I flip through the first few pages and read the blurb.", modelKo: "몇 페이지를 넘겨보고 책 소개를 읽어요." },
      { q: "Do you prefer physical books or e-books?", qKo: "종이책과 전자책 중?",
        vocab: [{ en: "paperback", ko: "페이퍼백" }, { en: "e-reader", ko: "전자책 리더기" }],
        phrasalVerbs: [{ en: "lean toward", ko: "기울다" }],
        model: "I lean toward paperbacks for the feel.", modelKo: "손맛 때문에 페이퍼백 쪽으로 기울어요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "school", title: "At School", titleKo: "학교에서", category: "Everyday Places", level: "Beginner", emoji: "🏫",
  summary: "School life and study habits.", summaryKo: "학교생활과 공부 습관.",
  sections: [
    { title: "School Life", titleKo: "학교생활", questions: [
      { q: "What was your favorite subject?", qKo: "가장 좋아했던 과목은?",
        vocab: [{ en: "subject", ko: "과목" }, { en: "classmate", ko: "반 친구" }],
        phrasalVerbs: [{ en: "do well in", ko: "잘하다" }],
        model: "I was really into history and did well in it.", modelKo: "역사를 정말 좋아했고 잘했어요." },
      { q: "Do you keep in touch with school friends?", qKo: "학교 친구들과 연락하나요?",
        vocab: [{ en: "reunion", ko: "동창회" }, { en: "memories", ko: "추억" }],
        phrasalVerbs: [{ en: "keep in touch", ko: "연락하다" }],
        model: "I keep in touch with a few close classmates.", modelKo: "친한 반 친구 몇 명과 연락하고 지내요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "supermarket", title: "At the Supermarket", titleKo: "마트에서", category: "Everyday Places", level: "Beginner", emoji: "🛒",
  summary: "Shopping for groceries.", summaryKo: "식료품 쇼핑.",
  sections: [
    { title: "Shopping", titleKo: "쇼핑", questions: [
      { q: "How do you find items in a supermarket?", qKo: "물건을 어떻게 찾나요?",
        vocab: [{ en: "aisle", ko: "통로" }, { en: "shelf", ko: "선반" }],
        phrasalVerbs: [{ en: "look for", ko: "찾다" }],
        model: "I look for aisle signs and ask a staff member if needed.", modelKo: "통로 표지판을 보고 필요하면 직원에게 물어봐요." },
      { q: "Do you read nutrition labels?", qKo: "영양 성분표를 읽나요?",
        vocab: [{ en: "nutrition label", ko: "영양 성분표" }, { en: "additive", ko: "첨가물" }],
        phrasalVerbs: [{ en: "keep an eye on", ko: "주의 깊게 보다" }],
        model: "I keep an eye on sugar and sodium.", modelKo: "설탕과 나트륨을 주의 깊게 봐요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "travel", title: "Travelling and Trips", titleKo: "여행", category: "Life & Society", level: "Beginner", emoji: "✈️",
  summary: "Trips, destinations, and travel experiences.", summaryKo: "여행과 경험.",
  sections: [
    { title: "Planning", titleKo: "계획", questions: [
      { q: "Do you plan trips or go with the flow?", qKo: "계획파인가요, 즉흥파인가요?",
        vocab: [{ en: "itinerary", ko: "여행 일정" }, { en: "flexibility", ko: "유연성" }],
        phrasalVerbs: [{ en: "map out", ko: "계획하다" }],
        model: "I map out the big things but go with the flow for the rest.", modelKo: "큰 것들은 계획하고 나머지는 흐름에 따라요." },
      { q: "What's the best trip you've taken?", qKo: "가장 좋았던 여행은?",
        vocab: [{ en: "highlight", ko: "하이라이트" }, { en: "cuisine", ko: "요리" }],
        phrasalVerbs: [{ en: "stand out", ko: "두드러지다" }],
        model: "A trip to Japan stands out for the food and cleanliness.", modelKo: "일본 여행이 음식과 청결함으로 두드러져요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "going-abroad", title: "Going Abroad", titleKo: "해외로 나가기", category: "Life & Society", level: "Intermediate", emoji: "🌍",
  summary: "Moving and adapting to a new country.", summaryKo: "해외 이주와 적응.",
  sections: [
    { title: "Moving", titleKo: "이주", questions: [
      { q: "Would you ever move abroad?", qKo: "해외로 이사할 의향이 있나요?",
        vocab: [{ en: "opportunity", ko: "기회" }, { en: "roots", ko: "뿌리" }],
        phrasalVerbs: [{ en: "settle down", ko: "정착하다" }],
        model: "I would if the opportunity is right. Settling down somewhere new is exciting.", modelKo: "기회가 맞으면 할 거예요. 새로운 곳에 정착하는 건 신나요." },
      { q: "How do you cope with culture shock?", qKo: "문화 충격은 어떻게 극복하나요?",
        vocab: [{ en: "adjustment", ko: "적응" }, { en: "routine", ko: "일상" }],
        phrasalVerbs: [{ en: "ease into", ko: "천천히 적응하다" }],
        model: "I ease into it slowly by building a routine.", modelKo: "루틴을 만들면서 천천히 적응해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "renting", title: "Renting a House/Apartment", titleKo: "집 임대", category: "Life & Society", level: "Intermediate", emoji: "🏠",
  summary: "Renting, leases, and housing.", summaryKo: "임대, 계약, 주거.",
  sections: [
    { title: "Finding a Place", titleKo: "집 구하기", questions: [
      { q: "How do you look for a place to rent?", qKo: "집을 어떻게 구하나요?",
        vocab: [{ en: "listing", ko: "매물" }, { en: "landlord", ko: "임대인" }],
        phrasalVerbs: [{ en: "narrow down", ko: "좁히다" }],
        model: "I browse listings and narrow down by location and price.", modelKo: "매물을 보고 위치와 가격으로 좁혀요." },
      { q: "What should you check before signing a lease?", qKo: "계약서 서명 전 확인 사항은?",
        vocab: [{ en: "clause", ko: "조항" }, { en: "deposit", ko: "보증금" }],
        phrasalVerbs: [{ en: "go over", ko: "검토하다" }],
        model: "You should go over every clause carefully.", modelKo: "모든 조항을 꼼꼼히 검토해야 해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "business-meeting", title: "Business Meeting", titleKo: "비즈니스 미팅", category: "Work & Business", level: "Intermediate", emoji: "💼",
  summary: "Running and participating in meetings.", summaryKo: "회의 진행과 참여.",
  sections: [
    { title: "Meetings", titleKo: "회의", questions: [
      { q: "How do you prepare for an important meeting?", qKo: "중요한 회의를 어떻게 준비하나요?",
        vocab: [{ en: "agenda", ko: "안건" }, { en: "talking points", ko: "발표 요점" }],
        phrasalVerbs: [{ en: "go over", ko: "검토하다" }],
        model: "I go over the agenda and prepare talking points.", modelKo: "안건을 검토하고 발표 요점을 준비해요." },
      { q: "How do you politely disagree?", qKo: "정중하게 반대하는 방법은?",
        vocab: [{ en: "disagreement", ko: "의견 불일치" }, { en: "compromise", ko: "타협" }],
        phrasalVerbs: [{ en: "work out", ko: "해결하다" }],
        model: "I say 'I see your point, but...' and offer an alternative.", modelKo: "'말씀은 이해하지만...'이라고 말하고 대안을 제시해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "sales", title: "Sales", titleKo: "영업", category: "Work & Business", level: "Intermediate", emoji: "📈",
  summary: "Sales strategies and clients.", summaryKo: "영업 전략과 고객.",
  sections: [
    { title: "Sales", titleKo: "영업", questions: [
      { q: "What makes a great salesperson?", qKo: "훌륭한 영업사원의 조건은?",
        vocab: [{ en: "persuasive", ko: "설득력 있는" }, { en: "trust", ko: "신뢰" }],
        phrasalVerbs: [{ en: "build up", ko: "쌓다" }],
        model: "A great salesperson builds up trust by listening more than talking.", modelKo: "훌륭한 영업사원은 말하기보다 듣기로 신뢰를 쌓아요." },
      { q: "How do you handle rejection?", qKo: "거절은 어떻게 다루나요?",
        vocab: [{ en: "rejection", ko: "거절" }, { en: "resilience", ko: "회복탄력성" }],
        phrasalVerbs: [{ en: "bounce back", ko: "회복하다" }],
        model: "I bounce back quickly — every rejection is a learning opportunity.", modelKo: "빨리 회복해요. 모든 거절이 배움의 기회예요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "marketing", title: "Marketing", titleKo: "마케팅", category: "Work & Business", level: "Intermediate", emoji: "📣",
  summary: "Marketing campaigns and branding.", summaryKo: "마케팅 캠페인과 브랜딩.",
  sections: [
    { title: "Marketing", titleKo: "마케팅", questions: [
      { q: "What does marketing mean to you?", qKo: "마케팅이란?",
        vocab: [{ en: "brand", ko: "브랜드" }, { en: "audience", ko: "고객층" }],
        phrasalVerbs: [{ en: "get across", ko: "전달하다" }],
        model: "Marketing is about getting the right message across.", modelKo: "마케팅은 올바른 메시지를 전달하는 거예요." },
      { q: "How has marketing changed?", qKo: "마케팅은 어떻게 변했나요?",
        vocab: [{ en: "influencer", ko: "인플루언서" }, { en: "algorithm", ko: "알고리즘" }],
        phrasalVerbs: [{ en: "keep up with", ko: "따라가다" }],
        model: "It shifted toward digital content, and marketers have to keep up with algorithms.", modelKo: "디지털 콘텐츠로 이동했고 마케터는 알고리즘을 따라가야 해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "software-dev", title: "Software Development", titleKo: "소프트웨어 개발", category: "Work & Business", level: "Intermediate", emoji: "💻",
  summary: "Coding and tech teams.", summaryKo: "코딩과 기술 팀.",
  sections: [
    { title: "Coding", titleKo: "코딩", questions: [
      { q: "What software do you use every day?", qKo: "매일 어떤 소프트웨어를 쓰나요?",
        vocab: [{ en: "platform", ko: "플랫폼" }, { en: "tool", ko: "도구" }],
        phrasalVerbs: [{ en: "rely on", ko: "의존하다" }],
        model: "I rely on a few platforms for work.", modelKo: "업무에 몇 가지 플랫폼을 의존해요." },
      { q: "How do software teams stay organized?", qKo: "소프트웨어 팀은 어떻게 체계를 유지하나요?",
        vocab: [{ en: "sprint", ko: "스프린트" }, { en: "backlog", ko: "백로그" }],
        phrasalVerbs: [{ en: "keep up with", ko: "따라가다" }],
        model: "Teams use sprints and standups to keep up with the backlog.", modelKo: "팀은 스프린트와 스탠드업으로 백로그를 따라가요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "international-relations", title: "International Relations", titleKo: "국제 관계", category: "Work & Business", level: "Advanced", emoji: "🌐",
  summary: "Diplomacy and global affairs.", summaryKo: "외교와 국제 문제.",
  sections: [
    { title: "Diplomacy", titleKo: "외교", questions: [
      { q: "Why is diplomacy important?", qKo: "외교가 중요한 이유는?",
        vocab: [{ en: "diplomacy", ko: "외교" }, { en: "treaty", ko: "조약" }],
        phrasalVerbs: [{ en: "iron out", ko: "해결하다" }],
        model: "Diplomacy irons out differences before they escalate.", modelKo: "외교는 확대되기 전에 차이를 해결해요." },
      { q: "What global issue concerns you most?", qKo: "가장 걱정되는 국제 문제는?",
        vocab: [{ en: "climate change", ko: "기후 변화" }, { en: "inequality", ko: "불평등" }],
        phrasalVerbs: [{ en: "come together", ko: "힘을 합치다" }],
        model: "Climate change worries me most — no country can tackle it alone.", modelKo: "기후 변화가 가장 걱정돼요. 한 나라만으로는 해결 못 해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "engineering", title: "Engineering", titleKo: "엔지니어링", category: "Work & Business", level: "Intermediate", emoji: "⚙️",
  summary: "Engineering work and problem-solving.", summaryKo: "엔지니어링 업무와 문제 해결.",
  sections: [
    { title: "Engineering", titleKo: "엔지니어링", questions: [
      { q: "What does an engineer do day to day?", qKo: "엔지니어는 하루에 무엇을 하나요?",
        vocab: [{ en: "design", ko: "설계" }, { en: "prototype", ko: "시제품" }],
        phrasalVerbs: [{ en: "figure out", ko: "알아내다" }],
        model: "An engineer works on designs and figures out how to meet specs.", modelKo: "엔지니어는 설계를 하고 사양을 어떻게 충족할지 알아내요." },
      { q: "How do you approach a complex problem?", qKo: "복잡한 문제에 어떻게 접근하나요?",
        vocab: [{ en: "constraint", ko: "제약" }, { en: "hypothesis", ko: "가설" }],
        phrasalVerbs: [{ en: "break down", ko: "분해하다" }],
        model: "I break down the problem and narrow down the constraints.", modelKo: "문제를 분해하고 제약을 좁혀요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "semiconductor", title: "Semiconductor Field", titleKo: "반도체 분야", category: "Work & Business", level: "Advanced", emoji: "🔬",
  summary: "Chips, fabs, and the semiconductor industry.", summaryKo: "반도체, 팹, 산업.",
  sections: [
    { title: "Semiconductors", titleKo: "반도체", questions: [
      { q: "What is a semiconductor, in simple terms?", qKo: "반도체를 쉽게 설명하면?",
        vocab: [{ en: "chip", ko: "칩" }, { en: "silicon", ko: "실리콘" }],
        phrasalVerbs: [{ en: "boil down to", ko: "귀결되다" }],
        model: "It boils down to a material that conducts electricity under certain conditions.", modelKo: "특정 조건에서 전기를 전도하는 물질로 귀결돼요." },
      { q: "Which countries dominate the industry?", qKo: "어느 나라가 주도하나요?",
        vocab: [{ en: "dominance", ko: "주도권" }, { en: "export control", ko: "수출 통제" }],
        phrasalVerbs: [{ en: "pour into", ko: "쏟아붓다" }],
        model: "Korea, Taiwan, the US, and the Netherlands dominate key parts.", modelKo: "한국, 대만, 미국, 네덜란드가 핵심 부분을 주도해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "health", title: "Health", titleKo: "건강", category: "Health & Mind", level: "Beginner", emoji: "💪",
  summary: "Physical health and habits.", summaryKo: "신체 건강과 습관.",
  sections: [
    { title: "Healthy Habits", titleKo: "건강한 습관", questions: [
      { q: "What do you do to stay healthy?", qKo: "건강을 위해 무엇을 하나요?",
        vocab: [{ en: "exercise", ko: "운동" }, { en: "routine", ko: "루틴" }],
        phrasalVerbs: [{ en: "stick to", ko: "고수하다" }],
        model: "I stick to a routine and eat a balanced diet.", modelKo: "루틴을 지키고 균형 잡힌 식단을 먹어요." },
      { q: "How do you deal with stress?", qKo: "스트레스는 어떻게 다스리나요?",
        vocab: [{ en: "meditation", ko: "명상" }, { en: "breathing", ko: "호흡" }],
        phrasalVerbs: [{ en: "wind down", ko: "긴장을 풀다" }],
        model: "I wind down with breathing exercises or meditation.", modelKo: "호흡 운동이나 명상으로 긴장을 풀어요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "mental-health", title: "Mental Health", titleKo: "정신 건강", category: "Health & Mind", level: "Intermediate", emoji: "🧠",
  summary: "Mental well-being and self-care.", summaryKo: "정신적 안녕과 자기 관리.",
  sections: [
    { title: "Well-being", titleKo: "안녕", questions: [
      { q: "What does mental health mean to you?", qKo: "정신 건강이란?",
        vocab: [{ en: "well-being", ko: "안녕" }, { en: "resilience", ko: "회복탄력성" }],
        phrasalVerbs: [{ en: "look after", ko: "돌보다" }],
        model: "It's about balance and resilience. I look after my well-being.", modelKo: "균형과 회복탄력성에 관한 거예요. 안녕을 돌봐요." },
      { q: "How do you take care of your mental health?", qKo: "정신 건강을 어떻게 관리하나요?",
        vocab: [{ en: "self-care", ko: "자기 관리" }, { en: "boundary", ko: "경계" }],
        phrasalVerbs: [{ en: "open up", ko: "마음을 열다" }],
        model: "I set boundaries and open up to close friends.", modelKo: "경계를 설정하고 친한 친구에게 마음을 열어요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "emotions", title: "Emotions", titleKo: "감정", category: "Health & Mind", level: "Beginner", emoji: "❤️",
  summary: "Describing emotions.", summaryKo: "감정 묘사.",
  sections: [
    { title: "Everyday Emotions", titleKo: "일상의 감정", questions: [
      { q: "How are you feeling today?", qKo: "오늘 기분은?",
        vocab: [{ en: "relaxed", ko: "편안한" }, { en: "stressed", ko: "스트레스 받는" }],
        phrasalVerbs: [{ en: "cheer up", ko: "기운을 내다" }],
        model: "I'm feeling relaxed today — I got good sleep.", modelKo: "오늘은 편안해요. 잘 잤어요." },
      { q: "What makes you happy?", qKo: "무엇이 행복하게 하나요?",
        vocab: [{ en: "grateful", ko: "감사하는" }, { en: "joy", ko: "기쁨" }],
        phrasalVerbs: [{ en: "look forward to", ko: "기대하다" }],
        model: "Spending time with close friends makes me happy.", modelKo: "친한 친구들과 시간을 보내는 게 행복해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "aliens", title: "Aliens", titleKo: "외계인", category: "Knowledge & World", level: "Intermediate", emoji: "👽",
  summary: "Life beyond Earth.", summaryKo: "지구 밖 생명체.",
  sections: [
    { title: "Beliefs", titleKo: "믿음", questions: [
      { q: "Do you believe aliens exist?", qKo: "외계인이 존재한다고 믿나요?",
        vocab: [{ en: "extraterrestrial", ko: "외계의" }, { en: "existence", ko: "존재" }],
        phrasalVerbs: [{ en: "rule out", ko: "배제하다" }],
        model: "With billions of galaxies, it's hard to rule out other life.", modelKo: "수십억 은하가 있으니 다른 생명체를 배제하기 어려워요." },
      { q: "Should we try to contact aliens?", qKo: "외계인에게 연락을 시도해야 할까요?",
        vocab: [{ en: "transmission", ko: "전송" }, { en: "consequence", ko: "결과" }],
        phrasalVerbs: [{ en: "weigh", ko: "저울질하다" }],
        model: "We should weigh the risks carefully before making contact.", modelKo: "연락하기 전에 위험을 신중히 저울질해야 해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "geography", title: "Geography", titleKo: "지리", category: "Knowledge & World", level: "Beginner", emoji: "🗺️",
  summary: "Countries and landscapes.", summaryKo: "국가와 지형.",
  sections: [
    { title: "Places", titleKo: "장소", questions: [
      { q: "What's the most beautiful place you've been to?", qKo: "가장 아름다웠던 장소는?",
        vocab: [{ en: "landscape", ko: "풍경" }, { en: "coastline", ko: "해안선" }],
        phrasalVerbs: [{ en: "take in", ko: "감상하다" }],
        model: "The Norwegian fjords stand out — I took in the scenery.", modelKo: "노르웨이 피오르가 두드러져요. 경치를 감상했어요." },
      { q: "What kind of landscape do you prefer?", qKo: "어떤 지형을 선호하세요?",
        vocab: [{ en: "mountain", ko: "산" }, { en: "desert", ko: "사막" }],
        phrasalVerbs: [{ en: "lean toward", ko: "기울다" }],
        model: "I lean toward mountains — being in the forest feels like home.", modelKo: "산 쪽으로 기울어요. 숲에 있으면 편안해요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "history", title: "History", titleKo: "역사", category: "Knowledge & World", level: "Intermediate", emoji: "📜",
  summary: "Historical events and lessons.", summaryKo: "역사적 사건과 교훈.",
  sections: [
    { title: "History", titleKo: "역사", questions: [
      { q: "How interested are you in history?", qKo: "역사에 얼마나 관심 있나요?",
        vocab: [{ en: "civilization", ko: "문명" }, { en: "century", ko: "세기" }],
        phrasalVerbs: [{ en: "be into", ko: "좋아하다" }],
        model: "I'm really into ancient civilizations.", modelKo: "고대 문명을 정말 좋아해요." },
      { q: "What can we learn from history?", qKo: "역사에서 무엇을 배울 수 있나요?",
        vocab: [{ en: "pattern", ko: "패턴" }, { en: "mistake", ko: "실수" }],
        phrasalVerbs: [{ en: "learn from", ko: "배우다" }],
        model: "We learn patterns so we avoid repeating the same mistakes.", modelKo: "패턴을 배워 같은 실수를 피할 수 있어요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "politics", title: "Politics", titleKo: "정치", category: "Knowledge & World", level: "Advanced", emoji: "🗳️",
  summary: "Politics and civic issues.", summaryKo: "정치와 시민 문제.",
  sections: [
    { title: "Government", titleKo: "정부", questions: [
      { q: "How important is politics to you?", qKo: "정치가 얼마나 중요한가요?",
        vocab: [{ en: "policy", ko: "정책" }, { en: "civic duty", ko: "시민의 의무" }],
        phrasalVerbs: [{ en: "keep up with", ko: "따라가다" }],
        model: "Very. I keep up with policy because it shapes daily life.", modelKo: "아주 중요해요. 정책이 일상에 큰 영향을 미쳐서 따라가요." },
      { q: "How do you stay informed?", qKo: "시사 문제를 어떻게 파악하나요?",
        vocab: [{ en: "news outlet", ko: "뉴스 매체" }, { en: "bias", ko: "편향" }],
        phrasalVerbs: [{ en: "cross-check", ko: "교차 확인하다" }],
        model: "I cross-check multiple outlets and filter out obvious bias.", modelKo: "여러 매체를 교차 확인하고 명백한 편향은 걸러내요." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "at-the-hotel", title: "At the Hotel", titleKo: "호텔에서", category: "Everyday Places", level: "Beginner", emoji: "🏨",
  summary: "Checking in, facilities, and problems.", summaryKo: "체크인, 시설, 문제 해결.",
  sections: [
    { title: "Checking In", titleKo: "체크인", questions: [
      { q: "How was your last check-in?", qKo: "최근 체크인은 어땠나요?",
        vocab: [{ en: "reservation", ko: "예약" }, { en: "front desk", ko: "프런트" }],
        phrasalVerbs: [{ en: "check in", ko: "체크인하다" }],
        model: "Check-in was quick and easy. The staff were welcoming.", modelKo: "체크인이 빠르고 간편했어요. 직원들이 친절했어요." },
      { q: "What facilities do you look for?", qKo: "어떤 시설을 찾으세요?",
        vocab: [{ en: "amenities", ko: "편의 시설" }, { en: "gym", ko: "헬스장" }],
        phrasalVerbs: [{ en: "come with", ko: "딸려 있다" }],
        model: "I always look for a hotel with a gym and free breakfast.", modelKo: "헬스장과 무료 조식이 있는 호텔을 항상 찾아요." }
    ]}
  ],
  grammarSpotlight: []
});

/* ---------- KOREAN TOPIK TOPICS (from your old data) ---------- */

registerTopic({
  id: "topik-1-vocab", title: "TOPIK 1 · Vocabulary", titleKo: "TOPIK 1 어휘",
  category: "TOPIK 1", level: "Beginner", emoji: "📘",
  summary: "Beginner Korean vocabulary for TOPIK I.", summaryKo: "TOPIK I 초급 어휘.",
  sections: [
    { title: "Basic Words", titleKo: "기초 단어", questions: [
      { q: "인사할 때 뭐라고 해요?", qKo: "What do you say when greeting?",
        vocab: [{ ko: "안녕하세요", en: "Hello" }, { ko: "감사합니다", en: "Thank you" }, { ko: "학교", en: "school" }, { ko: "친구", en: "friend" }],
        phrasalVerbs: [],
        model: "안녕하세요, 친구를 만나요.", modelKo: "Hello, I meet a friend." },
      { q: "동작을 나타내는 말은?", qKo: "Words for actions?",
        vocab: [{ ko: "가다", en: "to go" }, { ko: "오다", en: "to come" }, { ko: "먹다", en: "to eat" }, { ko: "보다", en: "to see / watch" }, { ko: "좋다", en: "good / to like" }],
        phrasalVerbs: [],
        model: "학교에 가요. 밥을 먹어요.", modelKo: "I go to school. I eat rice." }
    ]}
  ],
  grammarSpotlight: []
});

registerTopic({
  id: "topik-1-grammar", title: "TOPIK 1 · Grammar", titleKo: "TOPIK 1 문법",
  category: "TOPIK 1", level: "Beginner", emoji: "📗",
  summary: "Beginner Korean grammar for TOPIK I.", summaryKo: "TOPIK I 초급 문법.",
  sections: [
    { title: "Core Patterns", titleKo: "핵심 패턴", questions: [
      { q: "이에요/예요는 언제 써요?", qKo: "When do you use 이에요/예요?",
        vocab: [{ ko: "이에요/예요", en: "to be (polite)" }],
        phrasalVerbs: [],
        model: "학생이에요. 의사예요.", modelKo: "I am a student. I am a doctor." },
      { q: "은/는은 무슨 뜻이에요?", qKo: "What does 은/는 mean?",
        vocab: [{ ko: "은/는", en: "topic marker" }],
        phrasalVerbs: [],
        model: "저는 학생이에요. 이것은 책이에요.", modelKo: "As for me, I am a student. This is a book." },
      { q: "현재 시제는 어떻게 만들어요?", qKo: "How do you form present tense?",
        vocab: [{ ko: "아/어요", en: "present tense" }],
        phrasalVerbs: [],
        model: "학교에 가요. 밥을 먹어요.", modelKo: "I go to school. I eat rice." },
      { q: "경험을 물어보려면?", qKo: "How to ask about experience?",
        vocab: [{ ko: "-ㄴ/은 적이 있다", en: "have experience of doing" }],
        phrasalVerbs: [],
        model: "한국에 가 본 적이 있어요.", modelKo: "I have been to Korea." },
      { q: "하고 싶은 것을 말하려면?", qKo: "How to express desire?",
        vocab: [{ ko: "-고 싶다", en: "want to do" }],
        phrasalVerbs: [],
        model: "한국어를 배우고 싶어요.", modelKo: "I want to learn Korean." }
    ]}
  ],
  grammarSpotlight: []
});

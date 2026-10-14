/* ============================================================
   TOPIK 1-4 Vocabulary — auto-registers as topics
   Schema: [한글, English]
   ============================================================ */

const topikWords = {
  "TOPIK 1": [
    ["안녕하세요","Hello"],["감사합니다","Thank you"],["학교","school"],["사람","person"],
    ["친구","friend"],["가다","to go"],["오다","to come"],["먹다","to eat"],
    ["보다","to see / watch"],["좋다","good / to like"]
  ],
  "TOPIK 2": [
    ["여행","travel"],["음식","food"],["운동","exercise"],["일하다","to work"],
    ["공부하다","to study"],["주말","weekend"]
  ],
  "TOPIK 3": [
    ["경제","economy"],["사회","society"],["문제","problem / issue"],["해결하다","to solve"],
    ["영향","influence"],["변화","change"],["결과","result"],["연구","research"]
  ],
  "TOPIK 4": [
    ["증가","increase"],["환경","environment"],["정부","government"],["소비자","consumer"]
  ]
};

(function () {
  Object.keys(topikWords).forEach(function (level) {
    var words = topikWords[level];
    var num = level.replace("TOPIK ", "").trim();
    registerTopic({
      id: "topik-" + num + "-vocab-auto",
      title: level + " · Vocabulary",
      titleKo: level + " 어휘",
      category: level,
      level: num === "1" ? "Beginner" : num === "2" ? "Beginner" : num === "3" ? "Intermediate" : "Advanced",
      emoji: "📘",
      summary: level + " vocabulary.",
      summaryKo: level + " 어휘 모음.",
      vocabulary: words.map(function (p) { return { ko: p[0], en: p[1] }; }),
      idioms: [],
      discussionQuestions: [],
      grammarSpotlight: []
    });
  });
})();

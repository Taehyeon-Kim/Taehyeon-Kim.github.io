export const SITE = {
  website: "https://taehyeon-kim.github.io/",
  author: "Taehyeon Kim",
  profile: "https://github.com/Taehyeon-Kim",
  desc: "개발, 일상, 에세이 — 모든 것을 기록합니다.",
  title: "tony97",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "ko",
  timezone: "Asia/Seoul",
} as const;

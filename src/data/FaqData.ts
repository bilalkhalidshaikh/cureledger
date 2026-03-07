interface DataType {
   id: number;
   page: string
   title: string;
   desc: string;
   showAnswer: boolean;
}

const faq_data: DataType[] = [
   // home_2 (Answers matched to ~127 characters)
   {
      id: 1,
      page: "home_2",
      showAnswer: false,
      title: "How fast are claims sent?",
      desc: "We handle everything from initial eligibility verification to final payment posting, ensuring your practice captures every dollar.",
   },
   {
      id: 2,
      page: "home_2",
      showAnswer: false,
      title: "Do you manage credentialing?",
      desc: "We handle everything from initial eligibility verification to final payment posting, ensuring your practice captures every dollar.",
   },
   {
      id: 3,
      page: "home_2",
      showAnswer: false,
      title: "Optimizing a seamless revenue cycle for your growing dental practice.",
      desc: "We handle everything from initial eligibility verification to final payment posting, ensuring your practice captures every dollar.",
   },
   {
      id: 4,
      page: "home_2",
      showAnswer: false,
      title: "Why hiring an RCM partner is essential for practice success.",
      desc: "We handle everything from initial eligibility verification to final payment posting, ensuring your practice captures every dollar.",
   },

   // home_4 (Titles matched to 29, 29, 15 chars. Answers matched to 144 chars)
   {
      id: 1,
      page: "home_4",
      showAnswer: false,
      title: "Dental insurance verification",
      desc: "Our clinical billing experts maximize your daily collections and cashflow. With deep dental experience we are constantly providing RCM solution.",
   },
   {
      id: 2,
      page: "home_4",
      showAnswer: false,
      title: "Denial and appeal managements",
      desc: "Our clinical billing experts maximize your daily collections and cashflow. With deep dental experience we are constantly providing RCM solution.",
   },
   {
      id: 3,
      page: "home_4",
      showAnswer: false,
      title: "Ledger auditing",
      desc: "Our clinical billing experts maximize your daily collections and cashflow. With deep dental experience we are constantly providing RCM solution.",
   },

   // inner_faq (Titles matched exactly to original lengths. Answers matched to 291 chars)
   {
      id: 1,
      page: "inner_faq",
      showAnswer: false,
      title: "What dental software do you handle?",
      desc: "Financial health is the backbone of a thriving practice, but it shouldn't be your daily distraction. We optimize your entire revenue cycle—from credentialing to final payment—so you can prioritize patient outcomes while we protect the financial integrity of your hard work and collections.",
   },
   {
      id: 2,
      page: "inner_faq",
      showAnswer: false,
      title: "How do you manage daily claim submissions?",
      desc: "Financial health is the backbone of a thriving practice, but it shouldn't be your daily distraction. We optimize your entire revenue cycle—from credentialing to final payment—so you can prioritize patient outcomes while we protect the financial integrity of your hard work and collections.",
   },
   {
      id: 3,
      page: "inner_faq",
      showAnswer: false,
      title: "Why is regular ledger auditing needed?",
      desc: "Financial health is the backbone of a thriving practice, but it shouldn't be your daily distraction. We optimize your entire revenue cycle—from credentialing to final payment—so you can prioritize patient outcomes while we protect the financial integrity of your hard work and collections.",
   },
   {
      id: 4,
      page: "inner_faq",
      showAnswer: false,
      title: "How can I request a free financial audit?",
      desc: "Financial health is the backbone of a thriving practice, but it shouldn't be your daily distraction. We optimize your entire revenue cycle—from credentialing to final payment—so you can prioritize patient outcomes while we protect the financial integrity of your hard work and collections.",
   },
   {
      id: 5,
      page: "inner_faq",
      showAnswer: false,
      title: "Best RCM practices for dental clinic growth",
      desc: "Financial health is the backbone of a thriving practice, but it shouldn't be your daily distraction. We optimize your entire revenue cycle—from credentialing to final payment—so you can prioritize patient outcomes while we protect the financial integrity of your hard work and collections.",
   },
   {
      id: 6,
      page: "inner_faq",
      showAnswer: false,
      title: "How to effectively reduce A/R aging",
      desc: "Financial health is the backbone of a thriving practice, but it shouldn't be your daily distraction. We optimize your entire revenue cycle—from credentialing to final payment—so you can prioritize patient outcomes while we protect the financial integrity of your hard work and collections.",
   },
]

export default faq_data;
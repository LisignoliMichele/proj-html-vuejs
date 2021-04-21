var swiper = new Swiper('.swiper-container', {
   slidesPerView: 3,
   spaceBetween: 30,
   slidesPerGroup: 3,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 });

 
 var app = new Vue(
   {
      el: "#app",
      data:{
         testimonials:[
            {  avatar: "02",
               name: "Florence Themes",
               feedTitle: "It's a choice of quality for people with special needs",
               feed:	"I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
               job: "Multimedia Admin",
            },
            {  avatar: "04",
               name: "Mina Hollace",
               feedTitle: "High level of efficiency and scientific teaching methods",
               feed:	"I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
               job: "Freelancer",
            },
            {  avatar: "03",
               name: "Luvic Dubble",
               feedTitle: "The MaxCoach team works really hard to ensure high quality",
               feed:	"I am happy with their arrangement of lessons and subjects. They reflect a scientific  investigation into effective methods to be adopted for learners of all levels.",
               job: "Private Tutor",
            },
            {  avatar: "01",
               name: "Madley Pondor",
               feedTitle: "The MaxCoach team works really hard to ensure high quality",
               feed:	"I am happy with their arrangement of lessons and subjects. They reflect a scientific  investigation into effective methods to be adopted for learners of all levels.",
               job: "IT Specialist",
            },
         ],
         testimonialsIndex: 0,
      },
   },
   Vue.config.ignoredElements = [swiper-container]
);
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
               feed:	"I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
               job: "IT Specialist",
            },
         ],
         courses: [
            {
               name: "The Acrylic Painting Academy",
               price: "18.00$",
               studentsNumb: "50",
               lessonsNumb: "4",
               image: "08",
            },
            {
               name: "Drawing and Shading: Complete Course",
               price: "21.00$",
               studentsNumb: "50",
               lessonsNumb: "14",
               image: "07",
            },
            {
               name: "The Color Theory for Digital Artist",
               price: "19.00$",
               studentsNumb: "50",
               lessonsNumb: "7",
               image: "06",
            },
            {
               name: "Ultimate Guide to Digital Sketching for Beginner",
               price: "35.00$",
               studentsNumb: "50",
               lessonsNumb: "14",
               image: "05",
            },
            {
               name: "Portrait Drawing The Smart Way",
               price: "19.00$",
               studentsNumb: "50",
               lessonsNumb: "2",
               image: "04",
            },
            {
               name: "Mastering Watercolor Painting from Beginner",
               price: "19.00$",
               studentsNumb: "50",
               lessonsNumb: "4",
               image: "03",
            },
            {
               name: "The Art & Science of Drawing",
               price: "25.00$",
               studentsNumb: "50",
               lessonsNumb: "6",
               image: "02",
            },
            {
               name: "The Colored Pencil Drawing Course",
               price: "22.00$",
               studentsNumb: "50",
               lessonsNumb: "9",
               image: "01",
            },
         ],
         blogsTodisplay:[
            {
               writerJOB: "ARTIST",
               title: "Brush Strokes Energize Trees in Paintings",
               date: "May 15, 2020",
               views: "917",
               poster: "artist-blog-03-480x356.jpeg"
            },
            {
               writerJOB: "ARTIST",
               title: "Connection Between Self-Portraits and Identity",
               date: "May 15, 2020",
               views: "604",
               poster: "artist-blog-02-500x680.jpg"
            },
            {
               writerJOB: "ARTIST",
               title: "Pocket-Sized Notebooks Hold Miniature Paintings",
               date: "May 15, 2020",
               views: "803",
               poster: "artist-blog-01-480x356.jpg"
            }
         ],
      },
   },
);

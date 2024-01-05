// alumni testimonial

const facultyData = [
  {
    Id: 1,
    fImg: "assets/Purva-Madam.webp",
    fName: "Purva P. Tayade",
    fPosition: "Director, ITM IHM",
    SubjectSpecialization: "Rooms Division Management",
    fexperienced: "21+ Years ",
    fData1: "Pursuing Ph.D from Pacific University,",
    fData2:
      " Master of Tourism Management from IGNOU, Diploma in HMCT from MSBTE",
  },
  {
    Id: 1,
    fImg: "assets/sanket-gore.webp",
    fName: "Chef Sanket Gore",
    fPosition: "Vice Principal/ Assistant Professor",
    SubjectSpecialization: "Rooms Division Management",
    fexperienced: "24+ Years ",
    fData1: "Diploma In HMCT,",
    fData2: "M.sc Tourism & Hospitality Management",
  },
  {
    Id: 1,
    fImg: "assets/Yogesh-Amin.webp",
    fName: "Chef Yogesh Amin",
    fPosition: "Vice Principal/ Assistant Professor",
    SubjectSpecialization: "Rooms Division Management",
    fexperienced: "20+ Years ",
    fData1: "M.Sc In Hotel Managment,",
    fData2: "B.Sc In Hospitality Mgt & Hotel Administration",
  },

  {
    Id: 1,
    fImg: "assets/vinay-anant-rane.webp",
    fName: "Vinay Aanant Rane",
    fPosition: "Deputy Manager ",
    SubjectSpecialization: "Rooms Division Management",
    fexperienced: "18+ Years ",
    fData1: "Post Graduation from UK,",
    fData2: "Training and Placement",
  },
  {
    Id: 1,
    fImg: "assets/Saroj-Budke.webp",
    fName: "Saroj Budke",
    fPosition: "Assistant Professor",
    SubjectSpecialization: "Food Production & Patisserie",
    fexperienced: "19+ Years ",
    fData1: "Master's In Tourism Managment",
    fData2: "-",
  },
  {
    Id: 1,
    fImg: "assets/Sandesh-Kore.webp",
    fName: "Sandesh Kore",
    fPosition: "Lecturer",
    SubjectSpecialization: "Food Production",
    fexperienced: "8+ Years ",
    fData1: "B.Sc In HHA",
    fData2: "THM Pursuing",
  },

  {
    Id: 1,
    fImg: "assets/Viresh-More.webp",
    fName: "Viresh More",
    fPosition: "Assistant Professor",
    SubjectSpecialization: "Food Production",
    fexperienced: "6+ Years ",
    fData1: "B.Sc In Hospitality Studies",
    fData2: "-",
  },
  {
    Id: 1,
    fImg: "assets/Shajil-Nair.webp",
    fName: "Shajil Nair",
    fPosition: "Assistant Professor",
    SubjectSpecialization: "Food & Beverage Service",
    fexperienced: "8+ Years ",
    fData1: "PG In Hospitality and Tourism Management",
    fData2: "MBA In Business Management(Pursuing)",
  },
  {
    Id: 1,
    fImg: "assets/Asmita-Pawar.webp",
    fName: "Asmita Pawar",
    fPosition: "Assistant Professor",
    SubjectSpecialization: "Front Office & HouseKeeping",
    fexperienced: "14+ Years ",
    fData1: "Diploma in Catering Management & APplied Nutrition",
    fData2: "BA English, MBA (Tourism & Hospitality Management)",
  },
  {
    Id: 1,
    fImg: "assets/Raunak-Sukale.webp",
    fName: "Raunak Sukale",
    fPosition: "Assistant Professor",
    SubjectSpecialization: "Food & Beverage Service",
    fexperienced: "5+ Years ",
    fData1: "Bachlor's In Hotel Management",
    fData2: "Masters In Luxury Brand Management Wines & Spirits",
  },
  {
    Id: 1,
    fImg: "assets/Mitesh-Vichare.webp",
    fName: "Mitesh Vichare",
    fPosition: "Instructor",
    SubjectSpecialization: "Front Office & Tourism Managment",
    fexperienced: "6+ Years ",
    fData1: "B.Sc Hospitality & Hotel Administration",
    fData2: "Master's In Travel & Tourism Management Pursuing (NCTMCT & IGNOU)",
  },
  {
    Id: 1,
    fImg: "assets/Divya-Rane.webp",
    fName: "Divya Rane",
    fPosition: "Assistant Professor",
    SubjectSpecialization: "HouseKeeping",
    fexperienced: "7+ Years ",
    fData1: "B.Sc in Hospitality Studies",
    fData2: "Masters In Travel & Tourism",
  },

  {
    Id: 1,
    fImg: "assets/Aditi-Deshbhartar.webp",
    fName: "Aditi Deshbhartar",
    fPosition: "Instructor",
    SubjectSpecialization: "HouseKeeping",
    fexperienced: "8+ Years ",
    fData1: "B.Sc in Hospitality Studies",
    fData2: "Masters In Travel & Tourism",
  },
  {
    Id: 1,
    fImg: "assets/Meenakshi-Nadar.webp",
    fName: "Meenakshi Nadar",
    fPosition: "Assistant Professor",
    SubjectSpecialization: "General Management",
    fexperienced: "8+ Years ",
    fData1: "Mass Communication and Journalism",
    fData2: "MBA-Advertising, Ph.D(Pursuing)",
  },
  {
    Id: 1,
    fImg: "assets/Snehal-Mahadik.webp",
    fName: "Snehal Mahadik",
    fPosition: "Senior Trainer",
    SubjectSpecialization: "Hospitality Skills",
    fexperienced: "15+ Years ",
    fData1: "M.com , PG in HR",
    fData2: "Masters Trainer Facilitator",
  },

  {
    Id: 1,
    fImg: "assets/Suparna-Mukherjee.webp",
    fName: "Suparna Mukherjee",
    fPosition: "Assistant Professor",
    SubjectSpecialization: "IT & MIS",
    fexperienced: "24+ Years ",
    fData1: "M.Sc",
    fData2: "MCA",
  },
  {
    Id: 1,
    fImg: "assets/Sarita-Rajan.webp",
    fName: "Sarita Rajan",
    fPosition: "Assistant Professor",
    SubjectSpecialization:
      "Communication Skills In English & French , Revenue Management",
    fexperienced: "15+ Years ",
    fData1: "Diploma In Hotel Management, Master In Tourism from IGNOU",
    fData2: "Certification of Revenue Management from eCornell University",
  },
  {
    Id: 1,
    fImg: "assets/nikita-dasgupta.webp",
    fName: "Nikita Dasgupta",
    fPosition: "HOD Front Office / Asso. Professor",
    SubjectSpecialization: "Room Division Managment",
    fexperienced: "22+ Years ",
    fData1: "M.Sc in Hospitality & Tourism Management",
    fData2: "-",
  },

  {
    Id: 1,
    fImg: "assets/nanda-parghi.webp",
    fName: "Nanda Parghi",
    fPosition: "HOD - Housekeeping / Asso. Professor",
    SubjectSpecialization: "Room Division Management & Housekeeping",
    fexperienced: "26+ Years ",
    fData1: "Master In Tourism Management",
    fData2: "-",
  },
  {
    Id: 1,
    fImg: "assets/Osden-Ferreira.webp",
    fName: "osden-ferreira",
    fPosition: "Assistant Professor",
    SubjectSpecialization:
      "Communication Skills In English & French , Revenue Management",
    fexperienced: "23+ Years ",
    fData1: "NET (Tourism Mgmt), BBA (Retail mgmt)",
    fData2:
      " M.Sc Tourism & Hospitality Mgmt, Diploma In Hotel Management & Catering Tech(MSBTE)",
  },
  {
    Id: 1,
    fImg: "assets/yatin-tambe.webp",
    fName: "Yatin Tambe",
    fPosition: "HOD - Bakery & Confectionery Associate Professor",
    SubjectSpecialization: "Bakery & Food Production",
    fexperienced: "15+ Years ",
    fData1: "MBA in HR Management PGD in Pastry Confectionery(London)",
    fData2:
      "B.Sc in Hotel Management Advanced Dipl. In Cutlery Arts(City & Guides - UK)",
  },

  {
    Id: 1,
    fImg: "assets/caroline-pereira.webp",
    fName: "Caroline Pereira",
    fPosition: "Associate Professor / General Manager",
    SubjectSpecialization: "General Management",
    fexperienced: "21+ Years ",
    fData1: "BA Socialogy, MBA - General Management",
    fData2: "Masters In Tourism Management",
  },
  {
    Id: 1,
    fImg: "assets/aaron-dsilva.webp",
    fName: "Aaron D'Silva",
    fPosition: "Associate Professor",
    SubjectSpecialization: "Food & Beverage Service General Management",
    fexperienced: "15+ Years ",
    fData1: "PGD in International Hospitaliry Management",
    fData2: "Master in Hotel & Tourism Management ",
  },
  {
    Id: 1,
    fImg: "assets/rekha-miranda.webp",
    fName: "Rekha Miranda",
    fPosition: "Associate Professor",
    SubjectSpecialization:
      "Managerial Leadership, Career Management Training, Law and Ethics",
    fexperienced: "22+ Years ",
    fData1: "MA, LLB",
    fData2: "Certification In Councelling Psychology",
  },

  {
    Id: 1,
    fImg: "assets/sushant-bijlani.webp",
    fName: "Shushant Bijlani",
    fPosition: "Assistant Professor",
    SubjectSpecialization:
      "New Enterprise Creation, Principle Of Management, HR Management, Environmental & Suitable Tourism",
    fexperienced: "14+ Years ",
    fData1: "MBA In Hospitality Management ",
    fData2: "B.Sc in Hotel & Tourism Management",
  },
  {
    Id: 1,
    fImg: "assets/dhiraj-patil.webp",
    fName: "Dhiraj Patil",
    fPosition: "Assistant Professor",
    SubjectSpecialization: "Food & Beverage",
    fexperienced: "14+ Years ",
    fData1: "B.SC in Hospitality and Hotel Administration",
    fData2: "B.Com",
  },
  {
    Id: 1,
    fImg: "assets/avinash-bamania.webp",
    fName: "Avinash Bamania",
    fPosition: "HOD - Food Production / Associate Professor",
    SubjectSpecialization: "Food Production",
    fexperienced: "14+ Years ",
    fData1: "B.SC in Hospitality and Hotel Management",
    fData2: "B.SC in Hospitality and Hotel Management",
  },

  {
    Id: 1,
    fImg: "assets/bhakti-kudalkar.webp",
    fName: "Bhakti Kudalkar",
    fPosition: "Associate Professor",
    SubjectSpecialization: "Bakery & Food Production",
    fexperienced: "12+ Years ",
    fData1: "MBA in Hospitality Management, B.Sc HomeScience",
    fData2: "Diploma In Food Production and Patisserie",
  },
  {
    Id: 1,
    fImg: "assets/kunal-raut.webp",
    fName: "Kunal Raut",
    fPosition: "Associate Professor",
    SubjectSpecialization: "Bakery & Food Production",
    fexperienced: "6+ Years ",
    fData1: "B.SC in Hospitality and Hotel Management",
    fData2: "M.SC in Hospitality and Hotel Management",
  },
  {
    Id: 1,
    fImg: "assets/richard-borde.webp",
    fName: "Richard Borde",
    fPosition: " Asst.Manager Training & Placement ",
    SubjectSpecialization: "Interview Presentation",
    fexperienced: "11+ Years ",
    fData1: "MBA HR",
    fData2: " Hotel Management Graduate",
  },

  {
    Id: 1,
    fImg: "assets/priyanka-faculty.webp",
    fName: "Priyanka Mishra",
    fPosition: "Tailwind Trainer ",
    SubjectSpecialization: "Education & Training",
    fexperienced: "5+ Years ",
    fData1: "MA Education",
    fData2: "PG Diploma In Management Of Education",
  },
  {
    Id: 1,
    fImg: "assets/madhuri-faculty.webp",
    fName: "Madhuri S. Shalin",
    fPosition: " Asst.Manager Training & Placement ",
    SubjectSpecialization: "Front Office & Training & Placement",
    fexperienced: "6+ Years ",
    fData1: "M.Sc",
    fData2: " -",
  },
  {
    Id: 1,
    fImg: "assets/dhruv-faculty.webp",
    fName: "Dhruv Ramanathan",
    fPosition: "Instructor ",
    SubjectSpecialization: "Interview Presentation",
    fexperienced: "2+ Years ",
    fData1: "BA in International Hospitality & Tourism Management",
    fData2: " Food Production",
  },

  {
    Id: 1,
    fImg: "assets/anishka-favulty.webp",
    fName: "Anishka Fernandes",
    fPosition: "Assistant Professor - Bakery & Pastry",
    SubjectSpecialization: "Food Production",
    fexperienced: "6+ Years ",
    fData1: "Graduate",
    fData2: " Advanced Certificate Bakery and Pastry",
  },
  {
    Id: 1,
    fImg: "assets/trupti-lokhande.webp",
    fName: "Trupti Lokhande",
    fPosition: "Assistant Professor - Food Production ",
    SubjectSpecialization: "Food Production",
    fexperienced: "17+ Years ",
    fData1: "M.Sc Tourism & Hospitality",
    fData2: "-",
  },
];

let output = facultyData.map(showData).join("");
let list = document.getElementById("list");
list.innerHTML = output;

function showData(facultyData) {
  let listItems = `
        <li
            class="relative grid grid-cols-1 md:grid-cols-2 md:w-96 text-xs gap-1 px-3 py-3 w-80 border border-gray-300 hover:border-brand-red cursor-pointer transition-all group hover:shadow-md group  h-auto  rounded-md items-center justify-center max-w-sm ">
            <div class="flex flex-col w-full rounded-md border border-gray-300">
                <div class="flex w-full rounded-md">
                    <img src=${facultyData.fImg}
                        class="flex w-full object-contain rounded-md" alt="">
                </div>
                <div class="flex flex-col px-2 py-3 w-full">
                    <h4 class="flex w-full text-center items-center justify-center">${facultyData.fName}
                    </h4>
                    <span class="flex w-full text-center items-center justify-center">${facultyData.fPosition}
                        </span>
                </div>
            </div>
            <div class="flex w-full h-full pl-5 rounded-md ">
                <ul class="flex flex-col w-full justify-around list-outside  gap-2">
                    <li class="list-disc">${facultyData.fData1}</li>
                    <li class="list-disc">${facultyData.fData2}</li>
                    <li class="list-disc"> <Strong>Subject Specialization</Strong> : ${facultyData.SubjectSpecialization} </li>
                    <li class="list-disc"><strong>Experienced : </strong>${facultyData.fexperienced} &nbsp;</li>
                </ul>
            </div>
            </li>
        `;
  return listItems;
}

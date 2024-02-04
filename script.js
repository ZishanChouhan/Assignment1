const feeStructure = {
    "Exam Fee": {
      "INDIAN": {
        "ALL_COURSES​": {
          "ALL_LEVEL​": {
            "amount": 400
          }
        }
      },
      "FOREIGN": {
        "ALL_COURSES​": {
          "ALL_LEVEL​": {
            "amount": 100
          }
        }
      },
      "NRI": {
        "ALL_COURSES​": {
          "ALL_LEVEL​": {
            "amount": 600
          }
        }
      },
      "SAARC": {
        "ALL_COURSES​": {
          "ALL_LEVEL​": {
            "amount": 600
          }
        }
      }
    },
    "Application Fee": {
      "INDIAN": {
        "ALL_COURSES​": {
          "UG": {
            "amount": 200
          },
          "UG-DIPLOMA": {
            "amount": 300
          },
          "PG": {
            "amount": 500
          }
        }
      },
      "FOREIGN": {
        "ALL_COURSES​": {
          "UG": {
            "amount": 400
          },
          "UG-DIPLOMA": {
            "amount": 400
          },
          "PG": {
            "amount": 700
          }
        }
      }
    }
  };
  
const getFee = () =>{
  const feeStructureKeys = Object.keys(feeStructure);
  const fee =  prompt("Enter Fee type (" + feeStructureKeys.join() + "): ")?.trim();

  if(feeStructureKeys.includes(fee)){
    getNationality(fee)
  }else{
      alert("Wrong fee entered")
  }
}

const getNationality = (fee) => {
  const feeStructureNationalityKeys = Object.keys(feeStructure[fee]);
  const nationality = prompt("Please enter the nationality(" + feeStructureNationalityKeys.join() + "): ")?.trim();  
  if(feeStructureNationalityKeys.includes(nationality)){
    getAllCourses(fee, nationality)
  }else{
    alert("Wrong nationality entered")
  }
}

const getAllCourses = (fee, nationality) => {
  const feeStructureNationalityCoursesKeys = Object.keys(feeStructure[fee][nationality]);

  for(let feeStructureNationalityCoursesKey of feeStructureNationalityCoursesKeys){
    if(feeStructureNationalityCoursesKey.match("ALL_COURSES")){
      const course = prompt("Please enter the course (Medical, Dental, Ayurveda): ")?.trim();
      const feeStructureNationalityCoursesLevelKeys = Object.keys(feeStructure[fee][nationality][feeStructureNationalityCoursesKey]);
      
      var str = ""
      for(let feeStructureNationalityCoursesLevelKey of feeStructureNationalityCoursesLevelKeys){
        
        if(feeStructureNationalityCoursesLevelKey.match("ALL_LEVEL")){
          const level = prompt("Please enter the course (UG, PG, DIPLOMA, Ph.D): ")?.trim();
          alert(feeStructure[fee][nationality][feeStructureNationalityCoursesKey][feeStructureNationalityCoursesLevelKey]?.amount)
          return
        }else{
            str += feeStructureNationalityCoursesLevelKey  + " : " + feeStructure[fee][nationality][feeStructureNationalityCoursesKey][feeStructureNationalityCoursesLevelKey].amount + "\n"
        }
      }
      alert(str)
    }
  }
}


getFee()
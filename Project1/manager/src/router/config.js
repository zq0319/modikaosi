import Addeaxm from '../views/Exam/Questions/addExam';
import Viewexam from '../views/Exam/Questions/viewExam';
import Typeexam from '../views/Exam/Questions/typeExam';
import Adduser from '../views/Exam/Usermanagement/addUser';
import Viewuser from '../views/Exam/Usermanagement/viewUser';
import Addexams from '../views/Exam/Exammanagement/addExams';
import Examlist from '../views/Exam/Exammanagement/examList';
import Class from '../views/Exam/manageMent/classManagement';
import Classrooms from '../views/Exam/manageMent/classroomManagement';
import Student from '../views/Exam/manageMent/studentManagement';
import Classroom from '../views/Exam/Markmanagement/classRoom';
// import Detailexam from '../views/Exam/Questions/detailExam';



export default {
  routes: [{
    name: 'router.exam',
    children: [{
      name: 'router.exam.add',
      key: 1,
      id: 'main-addQuestions',
      path: '/questions/add',
      component: Addeaxm
    }, {
      name: 'router.exam.classify',
      key: 2,
      id: 'main-watchQuestions',
      path: '/questions/view',
      component: Viewexam
    }, {
      name: 'router.exam.test',
      id: 'main-questionsType',
      key: 3,
      path: '/questions/type',
      component: Typeexam
    }]
  }, {
    name: 'router.user',
    children: [{
      name: 'router.user.adduser',
      id: 'main-watchQuestions',
      key: 4,
      path: '/questions/adduser',
      component: Adduser
    }, {
      name: 'router.user.show',
      id: 'main-questionsType',
      key: 5,
      path: '/questions/viewuser',
      component: Viewuser
    }]
  }, {
    name: 'router.marking',
    children: [{
      name: 'router.marking.add',
      id: 'main-watchQuestions',
      key: 6,
      path: '/questions/addexams',
      component: Addexams
    }, {
      name: 'router.marking.lists',
      id: 'main-questionsType',
      key: 7,
      path: '/questions/examlist',
      component: Examlist
    }]
  }, {
    name: 'router.class',
    children: [{
      name: 'router.class.classmanage',
      id: 'main-watchQuestions',
      key: 8,
      path: '/questions/classManagement',
      component: Class
    }, {
      name: 'router.class.teammanage',
      id: 'main-questionsType',
      key: 9,
      path: '/questions/studentManagement',
      component: Classrooms
    }, {
      name: 'router.class.student',
      id: 'main-questionsType',
      key: 10,
      path: '/questions/classroomManagement',
      component: Student
    }]
  }, {
    name: 'router.markings',
    children: [{
      name: 'router.markings.class',
      id: 'main-watchQuestions',
      key: 11,
      path: '/questions/classroom',
      component: Classroom
    }]
  }]
}

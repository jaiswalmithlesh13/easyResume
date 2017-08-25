import LoginView from './LoginView'
import HomeView from './HomeView'
import AcademicView from './screens/academic'
import ProfessionalView from './screens/professional'
import ProjectView from './screens/projects'
// import CoverLetterView from './screens/coverLetter'
// import DigitalIdentityView from './screens/digitalIdentity'
// import ObjectiveView from './screens/objective'
// import SkillsView from './screens/skills'
// import ReferenceView from './screens/references'
// import TrainingView from './screens/trainings'
// import SamplesView from './screens/samples'




const Routes = {
    LoginView:{
        navigationLevel:0,
        name:'Login Page',
        description:'Login into EasyResume',
        screen:LoginView,
    },
    HomeView:{
        navigationLevel:1,
        name: 'Home Page',
        description:'Home page for EasyResume',
        screen:HomeView,

    },
        AcademicView:{
        navigationLevel:1,
        name: 'Academic Details',
        description:'Academic Details page for EasyResume',
        screen:AcademicView,

    },
        ProfessionalView:{
        navigationLevel:1,
        name: 'Professional View Page',
        description:'Professional View page for EasyResume',
        screen:ProfessionalView,

    },
        ProjectView:{
        navigationLevel:1,
        name: 'Project View Page',
        description:'Project View page for EasyResume',
        screen:ProjectView,

    },
    //     CoverLetterView:{
    //     navigationLevel:1,
    //     name: 'CoverLetter View Page',
    //     description:'CoverLetter View page for EasyResume',
    //     screen:CoverLetterView,

    // },
    //  DigitalIdentityView:{
    //     navigationLevel:1,
    //     name: 'DigitalIdentity View Page',
    //     description:'DigitalIdentityView page for EasyResume',
    //     screen:DigitalIdentityView,

    // }, 
    // ObjectiveView:{
    //     navigationLevel:1,
    //     name: 'Objective View Page',
    //     description:'Objective View page for EasyResume',
    //     screen:ObjectiveView,

    // }, 
    // SkillsView:{
    //     navigationLevel:1,
    //     name: 'Skills View Page',
    //     description:'Skills View page for EasyResume',
    //     screen:SkillsView,

    // },
    // ReferenceView:{
    //     navigationLevel:1,
    //     name: 'Reference View Page',
    //     description:'Reference View page for EasyResume',
    //     screen:ReferenceView,

    // },
    // TrainingView:{
    //     navigationLevel:1,
    //     name: 'Training View Page',
    //     description:'Training View page for EasyResume',
    //     screen:TrainingView,

    // },
    // SamplesView:{
    //     navigationLevel:1,
    //     name: 'Samples View Page',
    //     description:'Samples View page for EasyResume',
    //     screen:SamplesView,

    // },
};
export default Routes;
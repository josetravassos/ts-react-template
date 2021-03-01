import Container from "./Container";
import React from 'react';
import ImgPlaceholder from '../images/svg/ic-img-placeholder.svg';

const HeroImage = () => {
    return (
        <div className="zsg-hero__wrapper">
            <Container>
                <div className="zsg-hero__inner">
                    <div className="zsg-hero__inner--text">Learn about all the features of the Collection app</div>
                    <div className="zsg-hero__inner--img"><img className="placeholder" src={ImgPlaceholder} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeroImage



// function StudentHero(props: {student: IStudentProfile | null}) {
//   if (!props.student) {
//     <div className="zsg-hero">
//       <HeroImage />
//       <Container className="zsg-hero__wrapper"></Container>
//     </div>
//   }

//   return (
//     <div className="zsg-hero">
//       <HeroImage />
//       <div className="zsg-hero__wrapper">
//         <Container className="u-width-100">
//           <div className="zsg-hero__inner">
//             <Avatar className="zsg-hero__avatar" size={Sizes.Large} src={getAvatar(props.student?.avatarUrl ?? null, true)}></Avatar>
//             <div className="zsg-hero__bio">
//               <p className="zsg-hero__primary h1">{props.student?.firstName}</p>
//               <div className="zsg-hero__secondary">
//                 <p>Student ID: {props.student?.portfolioId}</p>
//                 <p>Username: {props.student?.userName || '???'}</p>
//                 <p>{
//                   [
//                     !!props.student?.gradeKey ? i18next.t(`STUDENT_INFO.${props.student?.gradeKey}`) : '',
//                     props.student?.schoolName ?? ''
//                   ].filter(x => x.length).join(' - ')
//                 }</p>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// }

//export default StudentHero;

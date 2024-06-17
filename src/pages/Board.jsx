const React = require('react');

// import BoardBoardMember from '../utils/BoardBoardMember.js';
// import boardBoardMembers from '../utils/boardBoardMembers.js';

// function Profile({ BoardMember }) {
//   return (
//     <div>
//       <div class="board_div">
//         <img
//           class="board_pic"
//           src="{BoardMember.imageURL}"
//           data-bs-toggle="modal"
//           data-bs-target="#{BoardMember.netid}"
//         />
//         <h3>{BoardMember.name}</h3>
//         <div id="board_title_box">
//           <p id="board_title">{BoardMember.position}</p>
//         </div>
//       </div>

//       <div class="modal fade" id="{BoardMember.netid}">
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h4 class="modal-title">{BoardMember.name}</h4>
//             </div>
//             <div class="modal-body">
//               <img class="modal_pic" src="{BoardMember.imageURL}" />
//               <p class="modal_question">
//                 Major: <span class="modal_answer">{BoardMember.major}</span>
//               </p>
//               <p class="modal_question">
//                 Year: <span class="modal_answer">{BoardMember.grade}</span>
//               </p>
//               <p class="modal_question">
//                 From: <span class="modal_answer">{BoardMember.hometown}</span>
//               </p>
//               <p class="modal_question">
//                 Why CLAID: <span class="modal_answer">{BoardMember.whyCLAID}</span>
//               </p>
//               <p class="modal_question">
//                 Hobbies: <span class="modal_answer">{BoardMember.hobbies}</span>
//               </p>
//               <p class="modal_question">
//                 Fun fact: <span class="modal_answer">{BoardMember.funFact}</span>
//               </p>
//             </div>
//             <div class="modal-footer">
//               <button
//                 type="button"
//                 class="btn btn-default"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const Board = () => {
//   return (
//     <div>
//       {boardBoardMembers.map((BoardMember) => (
//         <Profile key={BoardMember.name} BoardMember={BoardMember} />
//       ))}
//     </div>
//   );
// };

const Board = () => {
  return <p>baord!</p>;
};

export default Board;

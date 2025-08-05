import {comments} from "./modules/comments.js"
import { initAddCommentListener } from "./modules/initListeners.js";
import {renderComments} from "./modules/renderComments.js"


renderComments();
initAddCommentListener(renderComments);
initLikeListener(renderComments);
initReplyListeners();
     
// "use strict";
//     const buttonElement = document.getElementById("add-form-button");
//     const listElement = document.getElementById("comments");
//     const nameInputElement = document.getElementById("name-input");
//     const textInputElement = document.getElementById("text-input");
    
// const commentDate = new Date();

// function fnDate(commentDate) {
//   const day = String(commentDate.getDate()).padStart(2, '0')
//   const month = String(commentDate.getMonth() + 1).padStart(2, '0')
//   const year = commentDate.getFullYear().toString().slice(-2)
//   const hours = commentDate.getHours().toString().padStart(2, '0')
//   const minutes = commentDate.getMinutes().toString().padStart(2, '0')

//   // return ${day}.${month}.${year} ${hours}:${minutes};
// }

    

// // buttonElement.addEventListener("click", () => {
// //   nameInputElement.classList.remove('error');
// //   if (nameInputElement.value === "") {
// //     nameInputElement.classList.add('error');
// //     return;
// //   }

// //   textInputElement.classList.remove('error');
// //   if (textInputElement.value === "") {
// //     textInputElement.classList.add('error');
// //     return;
// //   }

// //   const oldListElement = listElement.innerHTML;
// //   listElement.innerHTML =
// //     oldListElement +
// //     <li class="comment">
// //       <div class="comment-header">
// //         <div> ${nameInputElement.value} </div>
// //         <div> ${fnDate(new Date())} </div>
// //       </div>
// //       <div class="comment-body">
// //         <div class="comment-text">
// //           ${textInputElement.value}
// //         </div>
// //       </div>
// //       <div class="comment-footer">
// //         <div class="likes">
// //           <span class="likes-counter">0</span>
// //           <button class="like-button"></button>
// //         </div>
// //       </div>
// //     </li>;
// //     initLikeButtons();
// //   // Очистка формы
// //   nameInputElement.value = "";
// //   textInputElement.value = "";
// // });


// // function initLikeButtons() {
// //   const likeButtons = document.querySelectorAll('.like-button');
// //   likeButtons.forEach((button) => {
// //     button.addEventListener('click', () => {
// //       const counter = button.closest('.likes').querySelector('.likes-counter');
// //       const count = Number(counter.textContent);
// //       if (button.classList.contains('-active-like')) {
// //         counter.textContent = count - 1;
// //         button.classList.remove('-active-like');
// //       } else {
// //         counter.textContent = count + 1;
// //         button.classList.add('-active-like');
// //       }
// //     });
// //   });
// // }
// // // Вызов при загрузке страницы (для уже существующих комментариев)
// // initLikeButtons();

// // listElement.innerHTML = oldListElement + ...;
// // initLikeButtons();


//     // Код писать здесь
//     console.log("It works!");

//     const comments = [{
// name: "Глеб Фокин",
// date: new Date(),
// text:"Это будет первый комментарий на этой странице",
// likes:3,
// isLiked:false,
//     },
//     {
// name:"Варвара Н.",
// date:new Date(),
// text:"Мне нравится, как оформлена эта страница",
// likes:75,
// isLiked:true,
//     },
//   ];

//   const renderComments = () => {
//     const list = document.querySelector(".comments");

//     list.innerHTML = comments
//     .map((comment, index) => {
//      return `
     
//      <li class="comment" id="comment">
//           <div class="comment-header">
//             <div>${comment.name}</div>
//             <div>${comment.date.toLocaleDateString()}</div>
//           </div>
//           <div class="comment-body">
//             <div class="comment-text">
//               ${comment.text}
//             </div>
//           </div>
//           <div class="comment-footer">
//             <div class="likes">
//               <span class="likes-counter">${comment.likes}</span>
//               <button data-index="${index}" class="like-button ${comment.isLiked ? "-active-like" : ""}"></button>
//             </div>
//           </div>
//         </li>`;
        
//     })
//     .join("");

//     const likeButtons = document.querySelectorAll(".like-button")
//     for(const likeButton of likeButtons) {
//       likeButton.addEventListener("click", () => {
//         const index = likeButton.dataset.index;
//         const comment = comments[index];

//       comment.likes = comment.isLiked ? comment.likes - 1 : comment.likes +1;
        

//         comment.isLiked = !comment.isLiked;

//         renderComments();
//       })
//     }
// };

// renderComments();

// const addButton = document.querySelector(".add-form-button")
// addButton.addEventListener("click", () => {
//  if (!name.value || !text.value) {
//  console.error("заполните поля")
//   return
//  }

// const addButton = document.querySelector(".add-form-button")
// const name = document.getElementById("name-input");
// const text = document.getElementById("text-input");

// addButton.addEventListener("click", () => {
// const newComment = {
//   name: name.value,
//   date: new Date(),
//   text: text.value,
//   likes:0,
//   isLiked: false,
// };

// comments.push(newComment);
// renderComments();

// name.value ="";
// text.value = "";
// });
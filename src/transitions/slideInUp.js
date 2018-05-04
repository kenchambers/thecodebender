import { injectGlobal, keyframes } from 'styled-components';

const transitionClassName = 'slideInUp';
const duration = 1000;

const slideOut = keyframes`
20% {
  opacity: 1;
   -webkit-transform: translate3d(0, 10px, 0);
   transform: translate3d(0, 10px, 0);
 }

 40%,
 45% {
   opacity: .4;
   -webkit-transform: translate3d(0, -20px, 0);
   transform: translate3d(0, -20px, 0);
 }

 to {
   opacity: 0;
   -webkit-transform: translate3d(0, 2000px, 0);
   transform: translate3d(0, 2000px, 0);
 }
`;
const slideIn = keyframes`
from,
 60%,
 75%,
 90%,
 to {
   -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
   animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
 }

 from {
   opacity: 0;
   -webkit-transform: translate3d(0, 3000px, 0);
   transform: translate3d(0, 3000px, 0);
 }

 60% {
   opacity: 1;
   -webkit-transform: translate3d(0, -20px, 0);
   transform: translate3d(0, -20px, 0);
 }

 75% {
   -webkit-transform: translate3d(0, 10px, 0);
   transform: translate3d(0, 10px, 0);
 }

 90% {
   -webkit-transform: translate3d(0, -5px, 0);
   transform: translate3d(0, -5px, 0);
 }

 to {
   -webkit-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
 }
`;
injectGlobal`
.${transitionClassName}-exit-active {
  animation: ${slideOut} ${duration}ms both ease;
}
.${transitionClassName}-enter-active {
  animation: ${slideIn} ${duration}ms both ease;
}
`;

export default { transition: transitionClassName, duration };

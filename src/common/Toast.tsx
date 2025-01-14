import "react-toastify/dist/ReactToastify.min.css";

import {
  ToastContainer as ToastLibContainer,
  cssTransition,
  toast as toastLib,
} from "react-toastify";

import React from "react";

const bobaTransition = cssTransition({
  enter: "fade-in-top-animation",
  exit: "slide-out-blurred-top-animation",
});

const Toast = () => {
  return (
    <>
      <ToastLibContainer
        transition={bobaTransition}
        position="top-center"
        autoClose={2200}
        newestOnTop={false}
        rtl={false}
        theme="colored"
        draggable
        icon={false}
      />
      <style jsx global>{`
        .Toastify__toast-container {
          top: 30px;
        }
        .Toastify__toast {
          border-radius: 25px;
          padding: 15px;
          font-size: var(--font-size-regular);
          font-family: inherit;
          min-height: 40px;
          box-shadow: rgb(19 21 24 / 21%) 0px 3px 2px 1px;
          border: 1px solid rgb(19 21 24 / 21%);
        }
        .Toastify__toast-body {
          padding: 0;
        }
        .Toastify__close-button {
          align-self: center;
          display: flex;
        }
        .fade-in-top-animation {
          animation-duration: 0.25s !important;
          -webkit-animation: fade-in-top 0.2s
            cubic-bezier(0.39, 0.575, 0.565, 1) both;
          animation: fade-in-top 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) both;
        }
        .slide-out-blurred-top-animation {
          animation-duration: 0.25s !important;
          -webkit-animation: slide-out-blurred-top 0.01s
            cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
          animation: slide-out-blurred-top 0.01s
            cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
        }
        /* ----------------------------------------------
         * Generated by Animista on 2022-1-27 21:9:33
         * Licensed under FreeBSD License.
         * See http://animista.net/license for more info. 
         * w: http://animista.net, t: @cssanimista
         * ---------------------------------------------- 
         */
        /**
         * ----------------------------------------
         * animation fade-in-top
         * ----------------------------------------
         */
        @-webkit-keyframes fade-in-top {
          0% {
            -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fade-in-top {
          0% {
            -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1;
          }
        }
        /* ----------------------------------------------
         * Generated by Animista on 2022-1-27 21:43:21
         * Licensed under FreeBSD License.
         * See http://animista.net/license for more info. 
         * w: http://animista.net, t: @cssanimista
         * ----------------------------------------------
         */
        /**
         * ----------------------------------------
         * animation slide-out-blurred-top
         * ----------------------------------------
         */
        @-webkit-keyframes slide-out-blurred-top {
          0% {
            -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
          }
          100% {
            -webkit-transform: translateY(-1000px) scaleY(2) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2) scaleX(0.2);
            -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
          }
        }
        @keyframes slide-out-blurred-top {
          0% {
            -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
            -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
            -webkit-filter: blur(0);
            filter: blur(0);
            opacity: 1;
          }
          100% {
            -webkit-transform: translateY(-1000px) scaleY(2) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2) scaleX(0.2);
            -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
            -webkit-filter: blur(40px);
            filter: blur(40px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Toast;
export const toast = toastLib;

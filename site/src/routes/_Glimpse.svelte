<script>
  import {fade , fly} from 'svelte/transition'
  export let videoid;
  let visible = false;
  function handler(){
    visible = !visible;
  }
  
  function closer(){
    visible = false;
  }
  
  </script>
  
  
  
  
  
    <div class="container">
  
      <svg id="play" on:click={handler} viewBox="0 0 163 163" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px">
      
        <g fill="none">
            <g transform="translate(2.000000, 2.000000)" stroke-width="4">
                <path d="M10,80 C10,118.107648 40.8923523,149 79,149 L79,149 C117.107648,149 148,118.107648 148,80 C148,41.8923523 117.107648,11 79,11" id="lineOne" stroke="#A5CB43"></path>
                <path d="M105.9,74.4158594 L67.2,44.2158594 C63.5,41.3158594 58,43.9158594 58,48.7158594 L58,109.015859 C58,113.715859 63.4,116.415859 67.2,113.515859 L105.9,83.3158594 C108.8,81.1158594 108.8,76.6158594 105.9,74.4158594 L105.9,74.4158594 Z" id="triangle" stroke="#A3CD3A"></path>
                <path d="M159,79.5 C159,35.5933624 123.406638,0 79.5,0 C35.5933624,0 0,35.5933624 0,79.5 C0,123.406638 35.5933624,159 79.5,159 L79.5,159" id="lineTwo" stroke="#A5CB43"></path>
            </g>
        </g>
    </svg>
      <img class="image"  src="http://img.youtube.com/vi/{videoid}/0.jpg" alt="" srcset="">
      
    </div>
  
  
  
  
    {#if visible}
    <div  >
      <div transition:fly="{{ y: 200, duration: 1000 }}" class="video-popup">
        <div class="popup-bg"></div>
          <div  class="popup-content">
          <iframe class="video" src="https://www.youtube.com/embed/{videoid}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          
          <a on:click={handler}  class="close">
  
      </div>
          </div>
    </div>
  
    {/if}
  
  
  
  
  
  
  
    
    <style>
  
      /* Play button animation */
  svg#play {
    position: absolute;
    width:6%;
    margin-top: 15%;
    margin-left: 47%;
   display:block;
    cursor: pointer;
    transform-origin: 50% 50%;
  }
  
  svg#play #triangle {
    fill:rgba(22,22,22,0);
    transition:500ms;
    transform-origin: 50% 50%;
  }
  svg#play:hover #triangle {
    fill:#A3CD3A;
    transform-origin: 50% 50%;
  }
  
   svg #lineOne, svg #lineTwo {
    transform-origin: 50% 50%;
    transition: 1s;
  } 
  
   svg:hover #lineOne {
    transform: rotate(260deg);
     -webkit-transform: rotate(260deg);
  -moz-transform: rotate(260deg);
  -o-transform: rotate(260deg);
     transform-origin: 50% 50%;
  } 
  
   svg:hover #lineTwo {
    transform: rotate(-450deg);
     transform-origin: 50% 50%;
  } 
  
  
  /* video modal */
  
  .image{
    z-index: -3;
    cursor: pointer;
    position: absolute;
  width: 50%;
  margin-left: 25%;
  }
  
  
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background: lightgray; 
    border-radius: 5px;
  }
  p {
    text-align: center;
  }
  .title {
    text-align: center;
    text-transform: uppercase;
  }
  .video {
    width: 100%;
    height: 500px;
    margin: auto;
    display: block;
    border: none;
  }
  .popup-btn, .close-btn {
    width: 100px;
    height: 50px;
    display: block;
    margin: 50px auto;
    cursor: pointer; 
    border: 2px solid black;
    background-color: white;
  }
  .popup-btn:hover {
    color: white;
    background-color: black;
  }
  .video-popup {
    /* display: none; */
    z-index: 2;
  
    width: 100%;
    height: 100vh;
    margin: auto;
    position: fixed;
    top: 0;
    box-shadow: 10px 10px 10px 10px black;
  }
  .popup-bg {
    background: #182747;
    opacity: 0.8;
    width : 100%;
    height: 100vh;
    position: absolute;
  }
  .popup-content {
    background: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: auto;
  }
  .popup-title {
    padding: 30px;
    margin: 0 auto;
    color: red;
    text-transform: uppercase;
  }
  
  
  
  
  /* this code is for cross button */
  .close {
    position: absolute;
    top:0;
    right:-200px;
    width: 32px;
    height: 32px;
    opacity: 0.3;
  }
  .close:hover {
    opacity: 2;
  }
  .close:before, .close:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: whitesmoke;
  }
  .close:before {
    transform: rotate(45deg);
  }
  .close:after {
    transform: rotate(-45deg);
  }
  
  
  @media screen and (max-width: 1060px) {
    section > div.images {
      flex-direction: column;
  
      
    }
    iframe{
      height: 30vh;
      width: 90vw;
      margin-top: 5vh;
      margin-bottom: 0px;
    }
    .glimpses{
      height: 70vh ;
    }
  }
  
  
    </style>
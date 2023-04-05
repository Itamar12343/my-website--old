const Bubble = () => {
    return ( 
       <div>
         <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: "rgb(194, 229, 156)"}}></stop>
            <stop offset="100%" style={{stopColor: "rgb(100, 179, 244)"}}></stop>
          </linearGradient>
        </defs>
        <path id="blob" d="M393,344.5Q359,439,244.5,448.5Q130,458,71.5,354Q13,250,86.5,171.5Q160,93,249,95.5Q338,98,382.5,174Q427,250,393,344.5Z" fill="url(#gradient)"></path>
      </svg>
       </div>
     );
}
 
export default Bubble;
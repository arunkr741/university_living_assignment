export const formatTime = (time) => {
    const padZero = (num) => (num < 10 ? `0${num}` : num);

    let seconds = time % 60;
    let minutes = Math.floor(time / 60) % 60;
    let hours = Math.floor(time / 3600) % 24;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

// export const formatTimeInReadableFormat = (datetime) => {
//     if (!datetime) return '';
  
//     const dateObject = new Date(datetime);
//     console.log(dateObject, datetime)
//     const hours = dateObject.getHours();
//     const minutes = dateObject.getMinutes();
  
//     const formattedHours = hours < 10 ? `0${hours}` : hours;
//     const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
//     return `${formattedHours}:${formattedMinutes}`;
//   };
//   // Inside utils.js


export const formatTimeInReadableFormat = (timestampString) => {
    if (!timestampString) return '';
  
    const [datePart,timePart] = timestampString.split('T');
    return timePart.slice(0,5);
  
  };
  
  
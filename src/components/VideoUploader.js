// import React, { useState } from 'react';
// import PresentatationVideo from '../assets/videos/MVI_2178.MP4';

// const VideoUploader = () => {
//   const [videoSrc, setVideoSrc] = useState(PresentatationVideo); 

//   const handleVideoUpload = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type.startsWith('video/')) {
//       const videoURL = URL.createObjectURL(file);
//       setVideoSrc(videoURL);
//     } else {
//       alert('Please upload a valid video file.');
//     }
//   };

//   return (
//     <div className="row mb-3 video-presentation">
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <h2>Upload and Play Local Video</h2>
//         <input
//           type="file"
//           accept="video/*"
//           onChange={handleVideoUpload}
//           style={{ marginBottom: '20px' }}
//         />

//         {videoSrc && (
//           <video width="600" height="400" controls>
//             <source src={videoSrc} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VideoUploader;

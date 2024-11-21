// import { FileDown } from "lucide-react";
// import resume from '../assets/resume/Geremy Tan_Resume.pdf'

// const ResumePreview = () => {
//   const resumePath = process.env.PUBLIC_URL + '../assets/resume/Geremy Tan_Resume.pdf';

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = resume;
//     link.download = "Geremy Tan_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       {/* PDF Preview */}
//       <div className="mb-4 rounded-lg overflow-hidden shadow-lg">
//         <iframe 
//           src={resume}
//           title="Resume Preview"
//           width="100%"
//           height="800px"

//           className="border border-gray-300"
//         />
//       </div>

//       {/* Download Button */}
//       <div className="flex justify-center">
//         <button
//           onClick={handleDownload}
//           className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300"
//         >
//           <FileDown className="w-5 h-5" />
//           <span>Download Resume</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ResumePreview;


import { FileDown } from "lucide-react";
import resume from '../assets/resume/Geremy Tan_Resume.jpg'


const ResumePreview = () => {
  const resumePath = '/assets/resume/Geremy Tan_Resume.jpg';

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Geremy Tan_Resume.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-24">
      {/* JPG Preview */}
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img
          src={resume}
          alt="Resume Preview"
          className="w-full object-contain"
          loading="lazy"
        />
      </div>
      
       {/* Download Button */}
       <div className="flex justify-center mt-10 mb-10">
            <button 
                onClick={handleDownload}
                className="bg-white hover:bg-gray-300 text-gray-800 font-bold py-4 px-4 rounded inline-flex items-center transition-colors hover:text-white border-none shadow-md hover:shadow-lg transition-shadow duration-300"
            >
                <FileDown className="w-4 h-4 mr-2" />
                <span>Download Resume</span>
            </button>
        </div>


    </div>
  );
};

export default ResumePreview;
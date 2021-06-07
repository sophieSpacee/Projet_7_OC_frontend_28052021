import React, { useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = (props) => {
    const {
       
        getRootProps,
        getInputProps
      } = useDropzone({
        accept: 'image/jpeg, image/png'
      });
    
      
    
     
  return (
    <div className="file-uploader" {...getRootProps}>
      <input {...getInputProps()} />
      <p>Télécharger votre gif / photo</p>
    </div>
  );
};

export default FileUploader;

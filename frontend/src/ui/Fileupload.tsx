import React, { useState } from "react";
import { GrUploadOption } from "react-icons/gr";

interface FileUploadProps {
  onFileUpload: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0] || null;
      setFileName(file?.name || null);
      onFileUpload(file);
    }
  };

  return (
    <div className="flex items-center">
      <div className="h-40 w-20 md:h-100 md:w-200 items-center justify-center flex ml-4 bg-lightGreen text-darkGreen rounded-2xl mb-8">
        <input
          type="file"
          onChange={handleFileChange}
          style={{ display: "none" }}
          id="file-upload"
        />
        <div className="flex items-center">
          <label htmlFor="file-upload" className="cursor-pointer">
            <GrUploadOption size={50} /> Upload
          </label>
        </div>
      </div>
      <div>
        {fileName && (
          <p className="ml-2 text-darkGreen">Uploaded file: {fileName}</p>
        )}
      </div>
    </div>
  );
};

export default FileUpload;

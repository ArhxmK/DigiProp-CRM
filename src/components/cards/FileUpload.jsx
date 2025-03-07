import React from 'react';
import { Box, Typography, LinearProgress, Button } from '@mui/material';
import uploadImg from '../../assets/images/upload.svg';

const FileUpload = ({
  handleFileChange,
  isLoading,
  dragOver,
  handleDragLeave,
  handleDragOver,
  handleDrop,
  foldername,
  browsestyle,
  isFirstTime,
  uploadProgress,
  handleCancelUpload
}) => {
  const triggerFileInput = () => {
    document.getElementById(`inputFiles-${foldername}`).click();
  };

  return (
    <Box
      sx={{
        background: dragOver ? 'white' : '#eef2f3',
        border: '1px dashed #2861674D',
        paddingY: '30px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={triggerFileInput}
    >
      <input
        type="file"
        id={`inputFiles-${foldername}`}
        multiple={isFirstTime ? true : false}
        style={{ display: 'none' }}
        onChange={(e) => handleFileChange(e, foldername)}
      />
      <Box>
        <img src={uploadImg} alt="upload icon" />
        <Typography sx={{ fontSize: '16px', paddingY: '10px', fontFamily: 'InterBold' }}>
          Drag & drop files or{' '}
          <label
            htmlFor={`inputFiles-${foldername}`}
            style={browsestyle}
            onClick={(e) => {
              e.stopPropagation();
              triggerFileInput();
            }}
          >
            Browse
          </label>
        </Typography>
        <Typography sx={{ fontSize: '12px', color: 'gray' }}>
          Supported formats: png, jpeg, zip, pdf upto 50MB
        </Typography>
      </Box>
      
    </Box>
  );
};

export default FileUpload;

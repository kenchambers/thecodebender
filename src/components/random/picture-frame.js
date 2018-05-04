import React from 'react';

const codeUrls = { code1: require('../../assets/article1.png') };
const frameUrls = { frame1: require('../../assets/frame1.png') };

export const PictureFrame = ({ props }) => {
  return (
    <div
      style={{
        border: '1px solid yellow',
        overflow: 'hidden',
        objectFit: 'contain'
      }}>
      {/* <img
        style={{
          display: 'inline-block',

          position: 'absolute',
          margin: 31,
          WebkitBoxShadow: '-1px 9px 105px 6px rgba(255,255,255,1)',
          MozBoxShadow: '-1px 9px 105px 6px rgba(255,255,255,1)',
          boxShadow: '-1px 9px 105px 6px rgba(255,255,255,1)'
        }}
        src={codeUrls.code1}
      /> */}
      <img
        style={{
          display: 'block',
          objectFit: 'contain',
          maxHeight: '100%',
          maxWidth: '100%'
        }}
        src={frameUrls.frame1}
      />
    </div>
  );
};

import React from 'react';
import { isSafari } from '../lib/ua';

export default function Resume() {
  return (
    <div>
      {isSafari ? (
        <iframe src={'/resume.pdf'} style={{ height: '100vh', width: '100%' }} title="ANGELLA THAM"></iframe>
      ) : (
        <embed
          src={'/resume.pdf'}
          style={{ height: '100vh', width: '100%' }}
          type="application/pdf"
          title="ANGELLA THAM"
        ></embed>
      )}
    </div>
  );
}

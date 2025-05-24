import React from 'react';
import InfoCardGrid from '../components/InfoCardGrid';
import OneColumnCard from '../components/OneColumnCard';

const Acupuncture = () => {
  // --- ここにVite版AcupunctureのJSX本体を貼り付け（既に取得済みの内容） ---
  return (
    <div className="page-container">
      {/* ヒーローセクション - imgタグで実装 */}
      <div style={{ position: 'relative', height: '320px' }}>
        <img src="/images/test.jpg" width="100%" height="320" alt="鍼灸治療" style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>鍼灸治療</h1>
        </div>
      </div>
      {/* ...（以下、Vite版の全JSX内容をそのまま貼り付け）... */}
    </div>
  );
};

export default Acupuncture; 
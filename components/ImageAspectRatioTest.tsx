import React from 'react';

const ImageAspectRatioTest: React.FC = () => {
  const imageUrl = "https://placehold.co/600x337.png?text=16:9+Image"; // ダミー画像URL (16:9)

  return (
    <div className="p-4 bg-gray-200">
      <h1 className="text-xl font-bold mb-4">Image Aspect Ratio Test (16:9)</h1>
      <p className="mb-2">Expected: Image container width 600px, height approx 337.5px</p>

      {/* --- Test Case Start --- */}
      <div className="w-[600px] mx-auto bg-yellow-200 p-1"> {/* 親コンテナ: 横幅600px, 中央配置, デバッグ用背景色 */}
        <div 
          className="relative w-full pt-[56.25%] h-0 overflow-hidden rounded-lg shadow-sm bg-blue-200" // アスペクト比コンテナ
          // style={{ paddingTop: '56.25%', height: '0' }} // インラインスタイルでの確認も可能
        >
          <img 
            src={imageUrl} 
            alt="16:9 Test Image" 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
      {/* --- Test Case End --- */}

      <div className="mt-8 p-4 border border-gray-400 rounded">
        <h2 className="text-lg font-semibold mb-2">Checklist Points from 問題解決.md (1. padding-top ハック)</h2>
        <ul className="list-disc list-inside text-sm">
          <li>**Parent Container `div` (yellow background):**
            <ul className="list-disc list-inside ml-4">
              <li>`w-[600px]` (fixed width for testing)</li>
              <li>`mx-auto` (centering)</li>
            </ul>
          </li>
          <li className="mt-1">**Aspect Ratio Container `div` (blue background):**
            <ul className="list-disc list-inside ml-4">
              <li>`relative`</li>
              <li>`w-full` (takes width from parent)</li>
              <li>`pt-[56.25%]` (for 16:9 aspect ratio)</li>
              <li>`h-0` (height is determined by padding-top)</li>
              <li>`overflow-hidden`</li>
              <li>`rounded-lg shadow-sm` (styling)</li>
            </ul>
          </li>
          <li className="mt-1">**Image `img` tag:**
            <ul className="list-disc list-inside ml-4">
              <li>`absolute`</li>
              <li>`top-0 left-0`</li>
              <li>`w-full h-full` (fills the aspect ratio container)</li>
              <li>`object-cover`</li>
            </ul>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default ImageAspectRatioTest; 
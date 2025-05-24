import React from 'react';
import InfoCardGrid from '../components/InfoCardGrid';
import OneColumnCard from '../components/OneColumnCard';

const Acupuncture = () => {
  return (
    <div className="page-container">
      {/* ヒーローセクション - imgタグで実装 */}
      <div style={{ position: 'relative', height: '320px' }}>
        <img src="/images/test.jpg" width="100%" height="320" alt="鍼灸治療" style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>鍼灸治療</h1>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto px-4 py-12">
        {/* 鍼灸治療の説明 */}
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-6 text-secondary-dark text-center">サンリットウエストの鍼灸治療</h2>
          
          <div className="bg-accent bg-opacity-10 p-4 rounded-lg mb-6 border-l-4 border-primary">
            <p className="text-lg text-gray-700">
              東洋医学の考えに基づいた鍼灸治療で、身体の自然治癒力を高め、様々な症状の改善を目指します。
              当院では、患者様一人ひとりの体質や症状に合わせたオーダーメイドの治療を提供しています。
            </p>
          </div>
          
          <p className="text-lg mb-4 text-gray-700">
            鍼灸治療は、身体のツボに鍼やお灸で刺激を与えることで、気血の流れを整え、自然治癒力を高める治療法です。
            痛みの緩和だけでなく、自律神経の調整や免疫力の向上など、様々な効果が期待できます。
          </p>
          <p className="text-lg mb-6 text-gray-700">
            当院では、経験豊富な鍼灸師が、最新の医療知識と伝統的な東洋医学の知見を融合させた治療を行っています。
            安全で効果的な治療を心がけ、患者様の健康と笑顔のために日々研鑽を重ねています。
          </p>
        </div>

        {/* 治療メニュー */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-dark">鍼灸治療メニュー</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

        <InfoCardGrid
          menuGroups={[
            {
              title: '一般鍼灸',
              icon: 'spa',
              titleStyle: { backgroundColor: '#f9aa33', padding: '8px', borderRadius: '8px' },
              iconStyle: { color: '#3377f9' },
              items: [
                {
                  icon: 'spa',
                  title: '一般鍼灸',
                  hideTitle: true,
                  hideIcon: true,
                  price: '3,300円(税込)',
                  duration: '30分',
                  description: '肩こり、腰痛、頭痛など、様々な症状に対応した鍼灸治療を行います。',
                  imageSrc: '/images/IMG_0352.jpg',
                  imageAlt: '一般鍼灸'
                }
              ]
            },
            {
              title: '美容鍼',
              icon: 'face',
              titleStyle: { backgroundColor: '#f9aa33', padding: '8px', borderRadius: '8px' },
              iconStyle: { color: '#3377f9' },
              items: [
                {
                  icon: 'face',
                  title: '美容鍼',
                  hideTitle: true,
                  hideIcon: true,
                  price: '5,500円(税込)',
                  duration: '45分',
                  description: 'お顔のツボに鍼を打ち、肌のハリやツヤを改善します。',
                  imageSrc: '/images/02-01.png',
                  imageAlt: '美容鍼'
                }
              ]
            },
            {
              title: '小児はり',
              icon: 'child_care',
              titleStyle: { backgroundColor: '#f9aa33', padding: '8px', borderRadius: '8px' },
              iconStyle: { color: '#3377f9' },
              items: [
                {
                  icon: 'child_care',
                  title: '小児はり',
                  hideTitle: true,
                  hideIcon: true,
                  price: '2,200円(税込)',
                  duration: '20分',
                  description: 'お子様の夜泣き、かんの虫、食欲不振などに効果的な治療です。',
                  imageSrc: '/images/02-01.png',
                  imageAlt: '小児はり'
                }
              ]
            },
            {
              title: '不妊治療',
              icon: 'favorite',
              titleStyle: { backgroundColor: '#f9aa33', padding: '8px', borderRadius: '8px' },
              iconStyle: { color: '#3377f9' },
              items: [
                {
                  icon: 'favorite',
                  title: '不妊治療',
                  hideTitle: true,
                  hideIcon: true,
                  price: '4,400円(税込)',
                  duration: '40分',
                  description: '妊娠しやすい体づくりをサポートする鍼灸治療を行います。',
                  imageSrc: '/images/02-01.png',
                  imageAlt: '不妊治療'
                }
              ]
            }
          ]}
          columns={2}
          gap="gap-6"
          marginBottom="mb-8"
        />

        {/* 治療の流れ */}
        <div className="mt-16 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-secondary-dark text-center">治療の流れ</h3>
          
          <div className="relative">
            <div className="absolute left-8 top-0 h-full w-1 bg-primary-light"></div>
            
            <div className="relative z-10 mb-8">
              <div className="flex items-start">
                <div className="bg-primary rounded-full text-white w-16 h-16 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="material-icons text-2xl">assignment_ind</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-secondary-dark">1. 問診</h3>
                  <p className="text-gray-700">現在の症状や体調、生活習慣などを詳しくお伺いします。</p>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mb-8">
              <div className="flex items-start">
                <div className="bg-primary rounded-full text-white w-16 h-16 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="material-icons text-2xl">search</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-secondary-dark">2. 検査</h3>
                  <p className="text-gray-700">脈診、腹診、舌診など、東洋医学的な診察を行います。</p>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mb-8">
              <div className="flex items-start">
                <div className="bg-primary rounded-full text-white w-16 h-16 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="material-icons text-2xl">medical_services</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-secondary-dark">3. 治療</h3>
                  <p className="text-gray-700">症状に合わせた鍼灸治療を行います。痛みの少ない細い鍼を使用します。</p>
                </div>
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-start">
                <div className="bg-primary rounded-full text-white w-16 h-16 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="material-icons text-2xl">chat</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-secondary-dark">4. アフターケア</h3>
                  <p className="text-gray-700">治療後の注意点や、日常生活でのアドバイスをお伝えします。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* よくある質問 */}
        <div className="mt-16 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-secondary-dark text-center">よくある質問</h3>
          
          <div className="space-y-4">
            <details className="bg-white p-4 rounded-lg shadow-sm cursor-pointer">
              <summary className="font-medium text-secondary-dark text-lg">鍼灸治療は痛いですか？</summary>
              <div className="mt-4 pl-4 text-gray-700">
                <p>当院では、痛みの少ない細い鍼を使用しています。鍼を刺す際の痛みは、蚊に刺された程度の感覚です。また、患者様の体質や症状に合わせて、刺入の深さや角度を調整しますので、ご安心ください。</p>
              </div>
            </details>
            
            <details className="bg-white p-4 rounded-lg shadow-sm cursor-pointer">
              <summary className="font-medium text-secondary-dark text-lg">治療の頻度はどのくらいですか？</summary>
              <div className="mt-4 pl-4 text-gray-700">
                <p>症状や体質によって異なりますが、一般的には週1〜2回の治療を2〜3週間続けることをお勧めしています。症状が改善してきたら、徐々に間隔を空けていきます。</p>
              </div>
            </details>
            
            <details className="bg-white p-4 rounded-lg shadow-sm cursor-pointer">
              <summary className="font-medium text-secondary-dark text-lg">保険は使えますか？</summary>
              <div className="mt-4 pl-4 text-gray-700">
                <p>はい、保険適用の鍼灸治療も行っています。ただし、保険適用には医師の同意書が必要です。詳しくはお問い合わせください。</p>
              </div>
            </details>
          </div>
        </div>

        {/* お問い合わせセクション */}
        <div className="bg-accent p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4 text-secondary-dark">お問い合わせ</h2>
          <p className="text-lg mb-6 text-gray-700">
            鍼灸治療についてのご質問やご予約は、お気軽にお問い合わせください。
            経験豊富なスタッフが丁寧にご対応いたします。
          </p>
          <a 
            href="/contact" 
            className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md transition-colors duration-300 font-medium inline-block"
          >
            お問い合わせはこちら
          </a>
        </div>
      </div>
    </div>
  );
};

export default Acupuncture; 
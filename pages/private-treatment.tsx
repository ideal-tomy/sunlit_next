import React from 'react';
import Link from 'next/link';
import InfoCardGrid from '../components/InfoCardGrid';
import OneColumnCard from '../components/OneColumnCard';
import ImageAspectRatioTest from '../components/ImageAspectRatioTest';

const PrivateTreatment = () => {
  return (
    <div className="page-container">
      {/* ヒーローセクション */}
      <div className="relative w-full aspect-[16/9] pt-[72px]">
        <img
          src="/images/01.png"
          alt="自由診療"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4">
          <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
            自由診療
          </h1>
        </div>
      </div>
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-6 text-secondary-dark text-center">サンリットウエストの自由診療</h2>
            
            <div className="bg-accent bg-opacity-10 p-4 rounded-lg mb-6 border-l-4 border-primary">
              <p className="text-lg text-gray-700">
                日常的な疲れ慢性的な不調など多くの症状に対応するメニューを用意しております。
                症状に合わせた部分集中コースや全体をまんべんなく施術する全身コースなど豊富なメニュー
                で辛い症状にアプローチをいたします。
              </p>
            </div>
            
            <p className="text-lg mb-4 text-gray-700">
              当院では女性施術者も常勤しておりますので
              女性施術者をご希望の際は気兼ねなくお申し付けください。
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-dark">自由診療メニュー</h2>
          <p className="text-center text-lg mb-6 text-gray-700">お客様一人ひとりの症状に合わせたオーダーメイドの施術をご提供します</p>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          {/* 整体メニュー（2カラム横並び） */}
          <InfoCardGrid
            menuGroups={[
              {
                title: '全身整体メニュー',
                items: [
                  {
                    title: '全身整体',
                    price: '¥6,200',
                    initialPrice: '¥5,200',
                    duration: '60分',
                    description: '全身の調整を行い、身体全体のバランスを整えます。慢性的な疲れや不調にお悩みの方におすすめです。',
                    imageSrc: '/images/full.jpg',
                    imageAlt: '全身整体'
                  }
                ]
              },
              {
                title: 'メンテナンス整体メニュー',
                items: [
                  {
                    title: 'メンテナンス整体',
                    price: '¥3,600',
                    initialPrice: '¥3,100',
                    duration: '30分',
                    description: '定期的なメンテナンスとして、気になる部分を重点的に施術します。忙しい方や部分的な不調にお悩みの方に最適です。',
                    imageSrc: '/images/mente02.jpg',
                    imageAlt: 'メンテナンス整体'
                  }
                ]
              }
            ]}
            columns={2}
            gap="gap-8 md:gap-16"
            marginBottom="mb-12"
          />

          {/* 特別整体メニュー */}
          
          <OneColumnCard
            menuGroups={[
              {
                title: '特別整体',
                items: [
                  {
                    title: '料金・所要時間',
                    price: '¥8,800',
                    initialPrice: '¥7,800',
                    duration: '90分',
                    description: '全身の調整に加え、特に気になる部分に時間をかけて丁寧に施術します。長期的な不調や複合的な症状にお悩みの方におすすめです。',
                    imageSrc: '/images/mente03.jpg',
                    imageAlt: '特別整体'
                  }
                ]
              }
            ]}
            gap="gap-8"
            marginBottom="mb-12"
          />

          {/* その他のケアメニュー */}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-dark">その他のケアメニュー</h2>
          <p className="text-center text-lg mb-6 text-gray-700">お客様のお悩みに合わせたケアメニューをご用意しております</p>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          
          <h2 className="text-2xl font-bold mb-6 text-secondary-dark text-center">リラックスケアメニュー</h2>
          
          <InfoCardGrid
            menuGroups={[
              {
                title: '足裏ケア',
                items: [
                  {
                    title: '足裏ケア',
                    price: '¥3,600',
                    duration: '30分',
                    description: '足裏の反射区を刷激し、全身の血行促進や疲労回復を促します。むくみや冷え性の改善にも効果的です。',
                    imageSrc: '/images/ashiura.jpg',
                    imageAlt: '足裏ケア'
                  }
                ]
              },
              {
                title: '眼精疲労ケア',
                items: [
                  {
                    title: '眼精疲労ケア',
                    price: '¥3,600',
                    duration: '30分',
                    description: '目の周りや頭部の締張をほぐし、眼精疲労や頭痛の緩和を目指します。デスクワークやスマホ使用が多い方におすすめです。',
                    imageSrc: '/images/eye.jpg',
                    imageAlt: '眼精疲労ケア'
                  }
                ]
              }
            ]}
            columns={2}
            gap="gap-8 md:gap-16"
            marginBottom="mb-12"
          />
          
          <div className="mb-12"></div>

          <h2 className="text-2xl font-bold mb-6 text-secondary-dark text-center">特別ケアメニュー</h2>
          
          <InfoCardGrid
            menuGroups={[
              {
                title: 'ファンクショナルカッピング',
                items: [
                  {
                    title: 'ファンクショナルカッピング',
                    price: '¥2,800',
                    duration: '30分',
                    description: '一般的な吸い玉法ではなく、筋肉や経絡に置くことでモビリティの向上や痛みの減少を目指す法です。',
                    imageSrc: '/images/func.jpg',
                    imageAlt: 'ファンクショナルカッピング'
                  }
                ]
              },
              {
                title: '極上ハンドケア',
                items: [
                  {
                    title: '極上ハンドケア',
                    price: '¥1,900',
                    duration: '15分',
                    description: '手や腕の疲れをほぐし、血行を促進します。スマホやパソコン操作で手や腕に疲れを感じる方におすすめです。',
                    imageSrc: '/images/hand.jpg',
                    imageAlt: '極上ハンドケア'
                  }
                ]
              }
            ]}
            columns={2}
            gap="gap-8 md:gap-16"
            marginBottom="mb-12"
          />
          
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg border-l-4 border-accent mb-12">
            <h3 className="text-xl font-bold mb-4 text-secondary-dark flex items-center">
              注意事項
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>保険診療・各オプションも対応可能です。詳しくはスタッフにお尋ねください。</li>
              <li>状態や症状により、施術時間や内容が変更になる場合があります。</li>
              <li>ご予約の変更・キャンセルは、前日までにご連絡ください。</li>
            </ul>
          </div>

          {/* <div className="my-12">
            <ImageAspectRatioTest />
          </div> */}

          <div className="text-center mb-12">
            <Link href="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1 flex items-center justify-center mx-auto">
              ご予約・お問い合わせはこちら
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateTreatment;

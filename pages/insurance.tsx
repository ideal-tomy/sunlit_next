import React from 'react';
import Link from 'next/link';
import InfoCardGrid from '../components/InfoCardGrid';

const Insurance = () => {
  return (
    <div className="page-container">
      {/* ヒーローセクション */}
      <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
        <img src="/images/01.png" alt="保険診療" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>保険診療</h1>
        </div>
      </div>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-sm mb-12">
            <h2 className="text-2xl font-bold mb-6 text-secondary-dark text-center">サンリットウエストの保険診療</h2>
            <div className="bg-accent bg-opacity-10 p-4 rounded-lg mb-6 border-l-4 border-primary">
              <p className="text-lg text-gray-700">
                突然の怪我やスポーツ障害，強い痛みでお困りの方には<span className="font-bold text-primary">保険診療</span>もご案内しております。
                怪我を１度で治すのは中々難しいですので、継続反復の治療が必要になります。
                当院では保険診療と併用して更に早く完治できるように特別な電気治療や部分鍼治療を推奨しております。
              </p>
            </div>
            <p className="text-lg mb-4 text-gray-700">
              学生さんの怪我に対する治療も手厚く対応しております。
              高校生までは医療証を使えますのでご持参ください。
            </p>
            <p className="text-lg mb-6 text-gray-700">
              経験豊富な施術者が怪我・痛みに対し的確なアプローチで出来るだけ早く現場復帰が出来るよう心がけておりますので安心してご相談下さい
            </p>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary-dark">保険診療</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <img 
                src="/images/02.png" 
                alt="保険診療" 
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark flex items-center">
                保険診療の特徴
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary mb-6">
                <p className="text-lg text-gray-700">
                  保険診療とは、健康保険が適用される治療を指します。当院では保険診療と併用して更に早く完治できるように<span className="font-bold text-primary">特別な電気治療や部分鍼治療</span>を推奨しております。
                </p>
                <p className="text-lg text-gray-700 mt-2">
                  そのため、保険診療を受ける際には、事前に当院までご相談ください。
                </p>
              </div>
              {/* 保険診療のワークフロー */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-secondary-dark flex items-center justify-center">
                  治療の流れ
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="bg-primary p-4 flex items-center justify-center">
                      <div className="bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1</div>
                    </div>
                    <div className="p-6 text-center">
                      <h4 className="text-xl font-bold mb-3 text-secondary-dark">問診・受付</h4>
                      <p className="text-gray-700">症状をお聞きし、保険証を確認します</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="bg-primary p-4 flex items-center justify-center">
                      <div className="bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">2</div>
                    </div>
                    <div className="p-6 text-center">
                      <h4 className="text-xl font-bold mb-3 text-secondary-dark">検査・診断</h4>
                      <p className="text-gray-700">症状に応じた詳細な検査を行います</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="bg-primary p-4 flex items-center justify-center">
                      <div className="bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">3</div>
                    </div>
                    <div className="p-6 text-center">
                      <h4 className="text-xl font-bold mb-3 text-secondary-dark">治療・アフターケア</h4>
                      <p className="text-gray-700">適切な治療と回復のためのケアを行います</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-secondary-dark flex items-center justify-center">
                保険診療の種類
              </h2>
              {/* 整形外科とリハビリテーション */}
              <div className="bg-primary bg-opacity-10 p-4 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-secondary-dark flex items-center justify-center">
                  整形外科・リハビリテーション
                </h3>
              </div>
              <InfoCardGrid
                menuGroups={[{
                  title: '整形外科',
                  items: [{
                    title: '整形外科',
                    price: '保険適用(税込)',
                    duration: '症状により異なります',
                    description: '怪我や整形外科的症状に対する専門的な治療を行います。'
                  }]
                }, {
                  title: 'リハビリテーション',
                  items: [{
                    title: 'リハビリテーション',
                    price: '保険適用(税込)',
                    duration: '指示により異なります',
                    description: '機能回復や体力向上のためのリハビリテーションを提供します。'
                  }]
                }]}
                columns={2}
                gap="gap-6"
                marginBottom="mb-8"
              />
              {/* 鍼灸治療とマッサージ治療 */}
              <div className="mt-16 mb-12">
                <h3 className="text-2xl font-bold mb-6 text-secondary-dark text-center bg-primary-light py-3 px-4 rounded-lg border-l-4 border-primary">鍼灸・マッサージ治療</h3>
                <InfoCardGrid
                  menuGroups={[{
                    title: '鍼灸治療',
                    items: [{
                      title: '鍼灸治療',
                      price: '保険適用(税込)',
                      duration: '20分程度',
                      description: '保険適用の鍼灸治療で、痛みの緩和や血行改善を促進します。'
                    }]
                  }, {
                    title: 'マッサージ治療',
                    items: [{
                      title: 'マッサージ治療',
                      price: '保険適用(税込)',
                      duration: '15分程度',
                      description: '機能回復や痛みの緩和を目的とした医療マッサージを行います。'
                    }]
                  }]}
                  columns={2}
                  gap="gap-6"
                  marginBottom="mb-8"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary mt-12 mb-6">
                <p className="text-lg text-gray-700">
                  以上のような保険診療の種類があります。当院では、保険診療と併用して更に早く完治できるように<span className="font-bold text-primary">特別な電気治療や部分鍼治療</span>を推奨しております。
                </p>
              </div>
            </div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-secondary-dark flex items-center justify-center">
                診療の流れ
              </h2>
              <div className="max-w-4xl mx-auto">
                <ul className="space-y-8">
                  <li className="flex items-center gap-8">
                    <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">1</div>
                    <div className="w-28 h-14 flex flex-col items-center justify-center bg-blue-700 text-white font-bold rounded-full shadow text-sm leading-tight">
                      <span className="fancy-underline">初診</span>
                      <span className="fancy-underline mt-1">受付</span>
                    </div>
                    <div className="flex-1 w-full max-w-2xl bg-white shadow px-6 py-4 rounded border-l-4 border-blue-500 text-gray-900 text-base md:text-lg">
                      保険証をご持参の上、受付で記入していただきます。症状の詳細や怪我時の状況を確認し、初回検査を行います。
                    </div>
                  </li>
                  <li className="flex items-center gap-8">
                    <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">2</div>
                    <div className="w-28 h-14 flex flex-col items-center justify-center bg-blue-700 text-white font-bold rounded-full shadow text-sm leading-tight">
                      <span className="fancy-underline">検査</span>
                      <span className="fancy-underline mt-1">診断</span>
                    </div>
                    <div className="flex-1 w-full max-w-2xl bg-white shadow px-6 py-4 rounded border-l-4 border-blue-500 text-gray-900 text-base md:text-lg">
                      症状に応じた詳細な検査を行います。具体的には徒手検査や姿勢・可動域のチェック、姿勢や歩行チェックなどを行います。
                    </div>
                  </li>
                  <li className="flex items-center gap-8">
                    <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">3</div>
                    <div className="w-28 h-14 flex flex-col items-center justify-center bg-blue-700 text-white font-bold rounded-full shadow text-sm leading-tight">
                      <span className="fancy-underline">経過</span>
                      <span className="fancy-underline mt-1">観察</span>
                    </div>
                    <div className="flex-1 w-full max-w-2xl bg-white shadow px-6 py-4 rounded border-l-4 border-blue-500 text-gray-900 text-base md:text-lg">
                      定期的な通院で回復状況を確認し、治療計画を必要に応じて調整します。週に1～2回の通院で軽快な回復を目指します。
                    </div>
                  </li>
                  <li className="flex items-center gap-8">
                    <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">4</div>
                    <div className="w-28 h-14 flex flex-col items-center justify-center bg-blue-700 text-white font-bold rounded-full shadow text-sm leading-tight">
                      <span className="fancy-underline">回復</span>
                      <span className="fancy-underline mt-1">終了</span>
                    </div>
                    <div className="flex-1 w-full max-w-2xl bg-white shadow px-6 py-4 rounded border-l-4 border-blue-500 text-gray-900 text-base md:text-lg">
                      症状の改善を確認し、日常生活やスポーツ活動への復帰を支援します。必要に応じて再発防止のためのアドバイスも行います。
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-6">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="bg-primary bg-opacity-10 p-3 flex items-center">
                  <h3 className="text-xl font-bold text-secondary-dark">自賠責治療</h3>
                </div>
                <div className="p-5">
                  <p className="text-lg mb-4 text-gray-700">
                    突然の交通事故でお悩みの方は当院まで一報ご相談ください。
                    交通事故は日常生活受ける衝撃の数倍のエネルギーの衝撃が身体に与えられます。
                  </p>
                  <p className="text-lg mb-4 text-gray-700">
                    その大きな衝撃により<span className="font-bold text-primary">後遺症を残してしまう方々が多く</span>いらっしゃいます。
                    交通事故治療は限られた治療期間でいかに回数をこなすかが大事になります。
                  </p>
                  <p className="text-lg text-gray-700">
                    当院の施術者は交通事故治療も対応しておりますので、事故に遭われてしまった際にはご相談だけでも大丈夫ですので一度お電話ください。
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-accent bg-opacity-10 p-6 rounded-lg mt-8 mb-12">
              <h3 className="text-xl font-bold mb-4 text-secondary-dark flex items-center">
                保険診療に関する注意事項
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>保険証は毎回ご持参ください</li>
                <li>保険適用の治療は医師の指示に基づいて行われます</li>
                <li>保険診療と自費診療を併用する場合は事前にご相談ください</li>
                <li>交通事故の場合は自賠責保険の適用となります</li>
              </ul>
            </div>
            <div className="text-center">
              <Link href="/contact" className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:-translate-y-1 flex items-center justify-center mx-auto" style={{ maxWidth: '400px' }}>
                ご予約・お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance; 
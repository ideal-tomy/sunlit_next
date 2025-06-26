import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* クリニック情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4">サンリットウエスト鍼灸整骨院</h3>
            <p className="mb-2">
              <strong>住所：</strong><br />
              神奈川県海老名市中野2-19-7<br />
              サンリットウエストH
            </p>
            <p className="mb-2">
              <strong>電話番号：</strong><br />
              <a href="tel:046-204-7870" className="text-white hover:text-primary">046-204-7870</a>
            </p>
            <p className="mb-2">
              <strong>受付時間：</strong><br />
              平日：10:00〜19:30<br />
              土曜日：10:00〜17:00
            </p>
            <p>※ 定休日：日曜・祝日</p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className="text-xl font-bold mb-4">メニュー</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white hover:text-primary transition-colors duration-300">トップ</Link></li>
              <li><Link href="/acupuncture" className="text-white hover:text-primary transition-colors duration-300">鍼灸</Link></li>
              <li><Link href="/private-treatment" className="text-white hover:text-primary transition-colors duration-300">自由診療</Link></li>
              <li><Link href="/insurance" className="text-white hover:text-primary transition-colors duration-300">保険診療</Link></li>
              <li><Link href="/staff" className="text-white hover:text-primary transition-colors duration-300">スタッフ紹介</Link></li>
              <li><Link href="/instagram" className="text-white hover:text-primary transition-colors duration-300">インスタグラム</Link></li>
              <li><Link href="/contact" className="text-white hover:text-primary transition-colors duration-300">お問い合わせ</Link></li>
            </ul>
          </div>

          {/* 診療内容 */}
          <div>
            <h3 className="text-xl font-bold mb-4">診療内容</h3>
            <ul className="space-y-2">
              <li>腰痛・肩こり</li>
              <li>スポーツ障害</li>
              <li>交通事故治療</li>
              <li>美容鍼</li>
              <li>自律神経調整</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} サンリットウエスト鍼灸整骨院. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
import React from 'react';

// 基本的なカード項目のインターフェース
interface BaseCardItem {
  title: string;
  description: string;
  bgColor?: string;
}

// メニューカード項目のインターフェース
interface MenuCardItem extends BaseCardItem {
  price: string;
  initialPrice?: string;
  duration: string;
  imageSrc?: string;
  imageAlt?: string;
}

// メニューグループのインターフェース
interface MenuGroup {
  title: string;
  items: MenuCardItem[];
}

// InfoCardGridのプロパティ
interface InfoCardGridProps {
  items?: BaseCardItem[];
  menuGroups?: MenuGroup[];
  columns?: number;
  gap?: string;
  marginBottom?: string;
}

const InfoCardGrid: React.FC<InfoCardGridProps> = ({
  items = [],
  menuGroups = [],
  columns = 2,
  gap = 'gap-8',
  marginBottom = 'mb-8'
}) => {
  // 単一のカード項目をレンダリングする関数
  const renderCardItem = (item: BaseCardItem, index: number | string) => (
    <div 
      key={index} 
      className={`bg-white rounded-xl overflow-hidden transform transition duration-300 hover:-translate-y-1 ${item.bgColor || ''}`}
    >
      <div className="p-6">
        <div className="flex items-center justify-center mb-5">
          <h3 className="text-2xl font-bold text-secondary-dark">{item.title}</h3>
        </div>
        <p className="text-gray-700 leading-relaxed text-center text-lg">{item.description}</p>
      </div>
    </div>
  );

  // 単一のメニュー項目をレンダリングする関数
  const renderMenuItem = (item: MenuCardItem, index: number | string) => (
    <div 
      key={index} 
      className="bg-white rounded-xl overflow-hidden transform transition duration-300 hover:-translate-y-1 mb-8"
    >
      <div className="p-6">
        <div className="flex items-center justify-center mb-5">
          <h3 className="text-2xl font-bold text-secondary-dark">{item.title}</h3>
        </div>
        
        <div className="mb-4 text-center bg-gradient-to-r from-primary-light to-primary-light bg-opacity-10 py-3 px-4 rounded-lg">
          <p className="text-3xl font-bold text-primary text-outline-black">{item.price}<span className="text-sm text-primary ml-1 text-outline-black">(税込)</span></p>
          {item.initialPrice && (
            <p className="text-lg font-medium text-primary mt-2 text-outline-black">初回 {item.initialPrice}</p>
          )}
          <p className="text-gray-700 mt-2 font-medium">所要時間：{item.duration}</p>
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-6 text-center text-lg">{item.description}</p>
        
        {item.imageSrc && (
          <div className="flex justify-center mt-3 mb-2">
            <img 
              src={item.imageSrc} 
              alt={item.imageAlt || item.title} 
              className="rounded-lg shadow-sm max-w-full h-auto" 
              style={{ maxWidth: '450px', maxHeight: '320px' }} 
            />
          </div>
        )}
      </div>
    </div>
  );

  // メニューグループをレンダリングする関数
  const renderMenuGroup = (group: MenuGroup, index: number) => (
    <div 
      key={index} 
      className="bg-white p-6 rounded-xl shadow-md h-full transform transition duration-300 hover:shadow-lg"
    >
      <div className="flex items-center justify-center mb-6 pb-3 border-b border-primary rounded-lg p-2">
        <h2 className="text-3xl font-bold text-secondary-dark">{group.title}</h2>
      </div>
      <div className="flex flex-col h-full">
        {group.items.map((item, idx) => renderMenuItem(item, index + "-" + idx))}
      </div>
    </div>
  );

  // 通常のカードグリッドのレンダリング
  if (items.length > 0) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-${columns} ${gap} ${marginBottom}`}>
        {items.map((item, index) => renderCardItem(item, index))}
      </div>
    );
  }

  // メニューグループのレンダリング
  if (menuGroups.length > 0) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-${columns} ${gap} ${marginBottom}`}>
        {menuGroups.map((group, index) => renderMenuGroup(group, index))}
      </div>
    );
  }

  return null;
};

export default InfoCardGrid;

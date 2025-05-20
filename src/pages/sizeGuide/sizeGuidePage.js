// src/pages/SizeGuidePage.js
import React, { useState } from 'react';

export default function SizeGuidePage() {
  const [gender, setGender] = useState('여성');
  const [nation, setNation] = useState('전체');
  const [inputValue, setInputValue] = useState('');
  const [recommendedSize, setRecommendedSize] = useState('');
  const [selectedPart, setSelectedPart] = useState('가슴둘레');
  const [unit, setUnit] = useState('cm');

  const sizeGuides = {
    여성: {
      가슴둘레: [
        { size: 'XS', value: 80 },
        { size: 'S', value: 85 },
        { size: 'M', value: 90 },
        { size: 'L', value: 95 },
        { size: 'XL', value: 100 },
      ],
      허리둘레: [
        { size: 'XS', value: 60 },
        { size: 'S', value: 65 },
        { size: 'M', value: 70 },
        { size: 'L', value: 75 },
        { size: 'XL', value: 80 },
      ],
      엉덩이둘레: [
        { size: 'XS', value: 85 },
        { size: 'S', value: 90 },
        { size: 'M', value: 95 },
        { size: 'L', value: 100 },
        { size: 'XL', value: 105 },
      ]
    },
    남성: {
      가슴둘레: [
        { size: 'XS', value: 85 },
        { size: 'S', value: 90 },
        { size: 'M', value: 95 },
        { size: 'L', value: 100 },
        { size: 'XL', value: 105 },
      ],
      허리둘레: [
        { size: 'XS', value: 70 },
        { size: 'S', value: 75 },
        { size: 'M', value: 80 },
        { size: 'L', value: 85 },
        { size: 'XL', value: 90 },
      ],
      엉덩이둘레: [
        { size: 'XS', value: 88 },
        { size: 'S', value: 93 },
        { size: 'M', value: 98 },
        { size: 'L', value: 103 },
        { size: 'XL', value: 108 },
      ]
    }
  };

  const convertToCm = (val) => (unit === 'inch' ? val * 2.54 : val);

  const handleSizeRecommendation = () => {
    const input = parseFloat(inputValue);
    if (isNaN(input)) {
      setRecommendedSize('올바른 숫자를 입력하세요.');
      return;
    }
    const data = sizeGuides[gender][selectedPart];
    const cmInput = convertToCm(input);
    const match = data.reduce((prev, curr) =>
      Math.abs(curr.value - cmInput) < Math.abs(prev.value - cmInput) ? curr : prev
    );
    setRecommendedSize(`${match.size} 사이즈 (기준 ${selectedPart} ${match.value}cm)`);
  };

  return (
    <div className="size-guide-wrapper p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">👗 여자 옷 사이즈표 사용자 가이드</h1>
      <br></br>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">📌 소개</h2>
        <p>
          여자 옷 사이즈 표를 통해 다양한 국가별 여성 의류 사이즈를 비교하고 변환할 수 있습니다.<br></br>
          이 가이드는 사이즈표를 정확하게 활용하는 방법과 치수 측정 팁을 소개합니다.
        </p>
      </section>

     
      <br></br>
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">✂️ 옷 사이즈 재는 법</h2>
        <p className="mb-2">멋진 핏의 시작!, 정확한 측정! 📐</p>
        <ul className="list-disc list-inside space-y-1">
          <li><b>가슴둘레</b> : 겨드랑이 바로 아래, 가슴의 가장 풍만한 부분을 수평으로 측정</li>
          <li><b>허리둘레</b> : 허리에서 가장 잘록한 부분을 수평으로 측정</li>
          <li><b>엉덩이둘레</b> : 엉덩이에서 가장 넓은 부분을 수평으로 측정</li>
          <li><b>어깨너비</b> : 어깨 끝에서 반대쪽 어깨 끝까지 직선으로 측정</li>
          <li><b>팔길이</b> : 어깨 끝에서 팔꿈치 거쳐 손목까지 측정</li>
          <li><b>다리 안쪽 길이</b> : 가랑이부터 발목까지 측정</li>
        </ul>
        <p className="mt-2 text-sm text-gray-600">※ 정확하게 측정할 경우, 속옷만 입고 줄자를 너무 조이거나 느슨하지 않게 측정하세요.</p>
      </section>
<br></br>
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">💡 활용 팁</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>👗 브랜드마다 사이즈가 다를 수 있으니 입어보는 것이 가장 정확합니다.</li>
          <li>🔄 체형을 고려해 여유 있는 핏을 선택하세요.</li>
          <li>📐 신축성 있는 옷은 타이트하게 선택해도 됩니다.</li>
          <li>👠 정장은 딱 맞게, 캐주얼은 여유 있게!</li>
          <li>🤰 임산부는 1~2 사이즈 크게 선택하세요.</li>
        </ul>
      </section>
<br></br>
<br></br>
<br></br>
      <h1 className="text-3xl font-bold mb-6 mt-16">👔 남자 옷 사이즈표 사용자 가이드</h1>
<br></br>
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">📌 소개</h2>
        <p>
          남성 의류 사이즈도 국가마다 달라요. <br></br>이 가이드는 다양한 사이즈 체계를 비교하고 변환하며 정확한 측정법을 알려줍니다.
        </p>
      </section>
<br></br>
      
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">✂️ 옷 사이즈 재는 법</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><b>가슴둘레</b> : 겨드랑이 아래, 가장 두꺼운 부분 측정</li>
          <li><b>허리둘레</b> : 배꼽 주변 가장 잘록한 부분 측정</li>
          <li><b>목둘레</b> : 목 밑부분을 편안하게 측정 (손가락 1개 여유)</li>
          <li><b>팔길이</b> : 어깨 끝 → 손목까지 (팔 살짝 구부리기)</li>
          <li><b>어깨너비</b> : 어깨 끝과 끝을 직선으로 측정</li>
          <li><b>엉덩이둘레</b> : 가장 튀어나온 부분을 수평 측정</li>
        </ul>
      </section>
<br></br>
      <section>
        <h2 className="text-xl font-semibold mb-2">💡 활용 팁</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>🧥 브랜드마다 핏이 다르므로 실측 비교 필수!</li>
          <li>📐 체형에 따라 여유 있게 선택하기</li>
          <li>🧺 세탁 후 수축 가능성 고려하기</li>
          <li>👔 정장은 딱 맞게, 캐주얼은 넉넉하게</li>
        </ul>
      </section>
<br></br>
      {/* 🔍 치수 기반 추천 기능 */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">🔍 치수 입력으로 사이즈 추천</h2>
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <label>성별:</label>
          <select
            className="border px-2 py-1 rounded"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="여성">여성</option>
            <option value="남성">남성</option>
          </select>
<br></br>
          <label>부위:</label>
          <select
            className="border px-2 py-1 rounded"
            value={selectedPart}
            onChange={(e) => setSelectedPart(e.target.value)}
          >
            <option value="가슴둘레">가슴둘레</option>
            <option value="허리둘레">허리둘레</option>
            <option value="엉덩이둘레">엉덩이둘레</option>
          </select>
<br></br>
          <label>{selectedPart} ({unit}):</label>
          <input
            type="number"
            className="border px-3 py-1 rounded w-32"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
<br></br>
<br></br>
          <button
            className="bg-black text-white px-4 py-1 rounded"
            onClick={handleSizeRecommendation}
          >
            추천 받기
          </button>

          <button
            className="ml-4 px-3 py-1 border rounded"
            onClick={() => setUnit(unit === 'cm' ? 'inch' : 'cm')}
          >
            단위: {unit === 'cm' ? 'cm → inch' : 'inch → cm'}
          </button>
        </div>
        {recommendedSize && (
          <div className="text-green-600 font-semibold mt-2">{recommendedSize}</div>
        )}
      </section>
    </div>
  );
}

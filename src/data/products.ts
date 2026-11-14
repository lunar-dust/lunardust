// 홈페이지에 소개할 제품 목록.
// 제품이 생기면 여기에 추가한다. 비어 있으면 홈에 "제품 준비 중" 항목이 나온다.
// 제품별 페이지는 src/pages/<slug>/ 아래에 두고, 약관은 <slug>/terms, 개인정보처리방침은 <slug>/privacy.

export type Product = {
  slug: string;
  name: string;
  summary: string;
  /** 분류 칩(예: "모바일 앱", "웹"). 첫 번째는 파란 칩으로 보인다. */
  tags?: string[];
  /** 외부 링크(스토어, 웹앱 등). 없으면 /<slug> 로 연결한다. */
  href?: string;
};

export const products: Product[] = [];

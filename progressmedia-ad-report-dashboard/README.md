# Progressmedia Ad Report Dashboard

로컬 전용(클라이언트 사이드) React + TypeScript + Vite 대시보드입니다.  
현재 Auth/DB는 `localStorage` 기반 Mock 구조이며, 서비스 레이어 분리(`authService`, `clientService`, `storageService`, `parserService`, `dashboardService`, `exportService`) 상태입니다.

## 기술 스택
- React
- TypeScript
- Vite
- Tailwind CSS
- xlsx
- recharts

## 의존성 점검 기준
`package.json`은 아래 런타임/개발 의존성을 기준으로 구성되어 있습니다.

- Runtime: `react`, `react-dom`, `xlsx`, `recharts`
- Dev: `vite`, `typescript`, `@vitejs/plugin-react`, `@types/react`, `@types/react-dom`, `tailwindcss`, `postcss`, `autoprefixer`

## 로컬 실행 방법
```bash
cd progressmedia-ad-report-dashboard
npm install
npm run dev
```

## 빌드 / 프리뷰
```bash
cd progressmedia-ad-report-dashboard
npm run build
npm run preview
```

## 로컬 테스트 체크리스트
아래 항목을 브라우저에서 수동 확인하세요.

1. 로그인 화면이 최초 진입 화면인지
2. "가입하기" 클릭 시 가입 화면으로 이동하는지
3. 가입 완료 후 로그인 화면으로 돌아오는지
4. 광고주 로그인(관리자 체크박스 OFF) 동작 여부
5. 관리자 체크박스 ON 시 관리자 패스워드 입력칸만 추가 노출되는지
6. 관리자 로그인 동작 여부
7. 로그인 후 상단에 브랜드명만 노출되는지
8. 관리자 계정에서만 업로드 패널이 보이는지
9. 광고주 계정에서는 조회만 가능한지
10. CSV/XLSX 업로드가 가능한지
11. 업로드 시 네이버 SA/DA/GFA/메타 자동 구분이 동작하는지
12. 자동 판별 실패 시 매체 선택 fallback으로 처리되는지

## npm install 실패(403) 시 대응
Codex/사내망 환경에서 아래와 같은 오류가 발생할 수 있습니다.

- `403 Forbidden - GET https://registry.npmjs.org/...`

대응 순서:

1. npm registry 설정 확인
```bash
npm config get registry
```

2. 공식 레지스트리 또는 사내 허용 레지스트리로 설정
```bash
npm config set registry https://registry.npmjs.org/
```

3. 사내 프록시/미러(Artifactory, Nexus, Verdaccio 등) 사용 시 해당 URL로 설정
4. 네트워크 정책상 외부 차단이면, 보안팀/인프라팀에 패키지 allowlist 요청
   - 최소 필요: `react`, `react-dom`, `vite`, `typescript`, `@types/react`, `@types/react-dom`, `tailwindcss`, `postcss`, `autoprefixer`, `xlsx`, `recharts`
5. 설정 변경 후 재시도
```bash
npm install
npm run build
npm run dev
```

## 참고
- 기본 샘플 데이터는 자동 로드하지 않습니다.
- 실제 운영 시 비밀번호 평문 저장은 금지이며, 현재는 Mock 개발 구조입니다.

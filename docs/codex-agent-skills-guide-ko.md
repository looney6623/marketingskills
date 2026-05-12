# OpenAI Codex용 Marketing Skills 적용 가이드

## 목적
이 문서는 `marketingskills` 저장소가 OpenAI Codex에서 바로 활용 가능한 Agent Skills 형태인지 점검하고, 설치/활용 절차와 커스터마이징 방향(마케팅 제안서·SEO/AEO/GEO 분석 중심)을 정리합니다.

## 1) Codex 즉시 활용 가능 여부

### 결론
- **가능**: 이 저장소는 Agent Skills spec 기반 구조를 따르며, `skills/<skill>/SKILL.md` 형태로 구성되어 Codex 계열 에이전트에서 바로 읽어 활용하기 좋은 구조입니다.
- `README.md`가 Codex를 지원 대상에 명시하고, `.agents/skills/` 설치 경로를 안내합니다.

### 체크 포인트
- 표준 스킬 구조: `skills/<skill-name>/SKILL.md`
- 스킬 메타데이터: YAML frontmatter에 `name`, `description`
- 설치 가이드: `npx skills`, clone/copy, submodule 등 다중 경로 제공
- 도구 연계 문서: `tools/REGISTRY.md`, `tools/integrations/*.md`

## 2) 설치 방법 요약 (Codex 관점)

### 가장 빠른 방법 (권장)
```bash
npx skills add coreyhaines31/marketingskills
```
- 전체 스킬 설치
- 일반적으로 `.agents/skills/`에 설치됨

### 특정 스킬만 설치
```bash
npx skills add coreyhaines31/marketingskills --skill seo-audit ai-seo programmatic-seo content-strategy
```

### 수동 설치
```bash
git clone https://github.com/coreyhaines31/marketingskills.git
cp -r marketingskills/skills/* .agents/skills/
```

## 3) 활용 방법 요약

### 자동 호출 방식
- Codex에게 작업을 자연어로 지시하면, 트리거 문구가 있는 스킬을 매칭해 실행하도록 설계되어 있습니다.
- 예: “AEO/GEO 기준으로 우리 문서를 진단해줘” → `ai-seo`, `seo-audit`, `schema-markup` 조합

### 직접 호출 방식
- 에이전트 환경이 slash 호출을 지원하면 `/seo-audit`, `/ai-seo` 같이 직접 명시할 수 있습니다.

### 선행 컨텍스트
- 대부분 스킬은 `product-marketing-context`를 먼저 확인하도록 작성되어 있어, 프로젝트별로 `.agents/product-marketing-context.md`를 먼저 준비하면 품질이 크게 올라갑니다.

## 4) AGENTS.md 기준 운영 포인트

- 스킬 파일은 500줄 이내 유지, 상세 내용은 `references/`로 분리
- `name`은 디렉토리명과 정확히 일치
- `description`에 사용 시점(트리거 문구) 명확히 포함
- 이 저장소는 교차 에이전트 호환을 지향하므로, Claude 전용 문법(`!\`command\``)은 공용 `SKILL.md`에 넣지 않고 로컬 오버라이드에만 적용

## 5) 마케팅 제안서 업무용 커스터마이징 제안

### 추천 스킬 번들
- 핵심: `product-marketing-context`, `content-strategy`, `copywriting`, `competitor-profiling`, `sales-enablement`
- 분석 보강: `analytics-tracking`, `ab-test-setup`, `pricing-strategy`

### 커스터마이징 방법
1. `skills/sales-enablement/references/`에 제안서 템플릿(문제-가설-실험-예상효과-ROI)을 추가
2. `content-strategy`의 출력 포맷에 “경영진 1페이지 요약” 섹션을 강제
3. `competitor-profiling`에 “대안 비교표(기능/가격/포지셔닝/리스크)” 기본 표 추가
4. `revops`와 연결해 “성과 측정 KPI 정의 + 데이터 수집 책임자” 필수 항목화

## 6) SEO/AEO/GEO 분석 업무용 커스터마이징 제안

### 추천 스킬 번들
- `seo-audit` + `ai-seo` + `schema-markup` + `site-architecture` + `programmatic-seo`

### 운영 설계
1. **공통 진단 프롬프트**를 별도 문서로 고정 (`.agents/skills/_playbooks/seo-aeo-geo-checklist.md` 권장)
2. 각 스킬 출력 형식을 통일:
   - 문제 요약
   - 우선순위(P0/P1/P2)
   - 실행 난이도/예상 임팩트
   - 검증 지표(GSC 클릭, AI 인용 노출, 전환율)
3. `schema-markup`에 FAQ/HowTo/Article/Product 스키마 적용 우선순위 매트릭스 추가
4. `ai-seo`에 LLM 인용 가능성 체크리스트(명확한 엔터티 설명, 출처 신뢰도, 문단 구조화) 추가
5. `programmatic-seo`에 GEO(지역/언어/의도) 변형 페이지 QA 규칙 추가

## 7) 권장 폴더 확장안 (Fork 후 적용)

```text
.agents/
  product-marketing-context.md
  skills/
    _playbooks/
      proposal-template.md
      seo-aeo-geo-checklist.md
      kpi-measurement-spec.md
```

- 핵심 아이디어: 기존 공개 스킬은 유지하고, **조직 전용 플레이북**만 별도 계층으로 관리해 업데이트 충돌을 최소화합니다.

## 8) 최종 판단
- 현재 저장소는 **Codex에서 즉시 사용 가능한 Agent Skills 구성**입니다.
- 실무 성과를 높이려면 “공통 컨텍스트 파일 + 조직 전용 플레이북 + 출력 포맷 표준화” 3가지를 먼저 적용하는 것이 가장 효율적입니다.

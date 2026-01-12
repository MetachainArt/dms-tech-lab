# DMS TECH LAB - Deployment Guide

## 🚀 배포 정보 (Deployment Info)
- **Hosting**: Hostinger Node.js Web App
- **Domain**: [dmssolution.co.kr](http://dmssolution.co.kr)
- **GitHub Repository**: [MetachainArt/dms-tech-lab](https://github.com/MetachainArt/dms-tech-lab)

## 🔄 업데이트 방법 (How to Update)
코드를 수정하고 배포하려면 터미널에서 다음 명령어를 순서대로 실행하세요. GitHub에 푸시하면 Hostinger가 *자동으로* 배포를 시작합니다.

```bash
# 1. 변경된 파일 스테이징
git add .

# 2. 커밋 생성 (변경사항 설명 입력)
git commit -m "업데이트 내용 작성"

# 3. GitHub에 푸시 (자동 배포 트리거)
git push
```

## ⚙️ 설정 정보 (Configuration)
### Hostinger 설정
- **Framework**: Next.js
- **Node Version**: 22.x
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Environment Variables**:
  - `NODE_ENV`: `production`

### DNS 설정 (Cafe24)
Hostinger 네임서버로 연결되어 있습니다.
- `ns1.dns-parking.com`
- `ns2.dns-parking.com`

"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark } from "lucide-react";
import Link from "next/link";
import NeuralBackground from "@/components/ui/NeuralBackground";

export default function N8NMasterclassPage() {
  return (
    <main className="w-full min-h-screen bg-[#050B1B] text-white font-poppins selection:bg-neon-sky selection:text-[#050B1B]">
      
      {/* ProgressBar - Scroll Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-neon-sky origin-left z-50"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }} // continuous scroll tracking would require state, simplified for now
      />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col justify-end pb-20 px-6 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050B1B] via-[#050B1B]/60 to-transparent z-10" />
             <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2574&auto=format&fit=crop" 
                alt="Server Room"
                className="w-full h-full object-cover opacity-50"
             />
        </div>

        <div className="max-w-4xl mx-auto w-full relative z-20">
            <Link href="/education" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Curriculum
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 rounded-full bg-neon-sky/20 text-neon-sky text-xs font-bold border border-neon-sky/30">
                        Tech/Dev
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-2" /> 2024. 05. 20
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-2" /> 15 min read
                    </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    N8N 워크플로우 100% 활용하기:<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-sky to-blue-500">
                        무한한 자동화의 세계
                    </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                    반복되는 마케팅 업무부터 복잡한 데이터 파이프라인까지.
                    노코드(No-code)의 한계를 뛰어넘는 N8N의 아키텍처와 실전 활용법을 심층 분석합니다.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Content Body */}
      <section className="relative px-6 py-20">
        <div className="max-w-3xl mx-auto">
            
            {/* Introduction */}
            <article className="prose prose-lg prose-invert text-gray-300 max-w-none">
                <p className="lead text-2xl text-white font-medium mb-12">
                    "자동화는 게으름이 아닙니다. 그것은 엔지니어링의 정수입니다."
                </p>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-6">왜 우리는 N8N에 주목해야 하는가?</h2>
                    <p className="mb-6">
                        현대 비즈니스 환경에서 'Speed'는 곧 생존입니다. Zapier나 Make(구 Integromat)와 같은 훌륭한 노코드 툴들이 존재하지만, 엔터프라이즈 레벨의 복잡한 로직을 구현하거나 자체 서버(Self-hosted) 환경에서의 데이터 보안이 중요해질 때, 우리는 필연적으로 N8N이라는 강력한 솔루션을 마주하게 됩니다.
                    </p>
                    <p className="mb-6">
                        N8N은 단순한 연결 도구가 아닙니다. 이것은 <strong>Workflow Orchestration Engine</strong>입니다. 노드 기반의 직관적인 UI 뒤에는 강력한 Node.js 런타임이 숨쉬고 있습니다. JSON 데이터를 자유자재로 다루고, JavaScript를 통해 불가능해 보이는 로직을 구현할 수 있는 유연성. 이것이 바로 전 세계 수만 명의 엔지니어와 그로스 해커들이 N8N에 열광하는 이유입니다.
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-6">1. 아키텍처의 이해: 노드와 JSON</h2>
                    <p className="mb-6">
                        N8N의 모든 데이터 흐름은 JSON 객체의 배열로 이루어집니다. 이 근본적인 구조를 이해하는 것이 100% 활용의 첫걸음입니다.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-300">
                        <li>
                            <strong>Trigger Node</strong>: 워크플로우의 심장입니다. Webhook 호출, 시간 기반 스케줄링(Cron), 또는 앱 이벤트(Slack 메시지 수신 등)가 될 수 있습니다.
                        </li>
                        <li>
                            <strong>Function Node (Code Node)</strong>: N8N의 알파이자 오메가입니다. 순수 JavaScript를 실행하여 데이터를 변환, 필터링, 병합합니다.
                        </li>
                        <li>
                            <strong>Integration Node</strong>: 200개 이상의 내장된 서비스 연동 노드들입니다. API 문서를 읽을 필요 없이 Google Sheets, Notion, OpenAI 등을 제어합니다.
                        </li>
                    </ul>
                    
                    <div className="bg-[#0A1124] border border-white/10 rounded-xl p-6 mb-8 font-mono text-sm text-blue-300 overflow-x-auto">
                        <p className="text-gray-500 mb-2">// Code Node Example: 데이터 정규화</p>
                        {`return items.map(item => {
  return {
    json: {
      userId: item.json.id,
      fullName: \`\${item.json.firstName} \${item.json.lastName}\`,
      timestamp: new Date().toISOString()
    }
  }
});`}
                    </div>
                    <p className="mb-6">
                        위 코드는 단순해 보이지만, 수천 개의 고객 데이터를 실시간으로 수신하여 표준화된 포맷으로 변환하는 강력한 파이프라인의 일부가 될 수 있습니다.
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-6">2. 실전 패턴: Webhook을 이용한 마케팅 자동화</h2>
                    <p className="mb-6">
                        가장 흔하면서도 강력한 유스케이스를 살펴봅시다. 페이스북 리드 광고(Facebook Lead Ads)를 통해 수집된 고객 정보를 CRM에 넣고, 영업팀에게 슬랙 알림을 보내는 시나리오입니다.
                    </p>
                    
                    <h3 className="text-xl font-bold text-white mb-4 mt-8">Phase 1: 데이터 수집 (Webhook)</h3>
                    <p className="mb-4">
                        N8N의 Webhook URL을 생성하여 페이스북 광고 관리자에 등록합니다. 리드가 발생할 때마다 실시간으로 JSON 페이로드가 우리 서버로 전송됩니다. polling 방식이 아닌 event-driven 방식이므로 지연 시간이 '0'에 수렴합니다.
                    </p>

                    <h3 className="text-xl font-bold text-white mb-4 mt-8">Phase 2: 데이터 분기 (Switch/If Node)</h3>
                    <p className="mb-4">
                        모든 리드가 동일한 가치를 지니지 않습니다. 고객의 예산 범위나 관심사에 따라 분기 처리를 해야 합니다.
                    </p>
                    <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-300">
                        <li><strong>VIP 고객</strong>: 즉시 영업 본부장에게 SMS 발송 (Twilio Node)</li>
                        <li><strong>일반 문의</strong>: 웰컴 이메일 자동 발송 (Gmail/SES Node) 후 Notion DB 적재</li>
                    </ul>

                    <p className="mb-6 bg-yellow-500/10 border-l-4 border-yellow-500 p-4 italic text-yellow-200">
                        Tip: 'Merge Node'를 활용하면 분기된 흐름을 다시 하나로 합쳐 최종 로깅을 수행할 수 있습니다. 이는 워크플로우의 디버깅 용이성을 획기적으로 높여줍니다.
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-6">3. 에러 핸들링과 프로덕션 운영 전략</h2>
                    <p className="mb-6">
                        "Make it work, make it right, make it fast."<br/>
                        프로토타입 단계에서는 동작하는 것에 집중하지만, 프로덕션 환경에서는 <strong>실패하지 않는 것</strong>이 더 중요합니다. N8N은 엔터프라이즈급 에러 핸들링 기능을 제공합니다.
                    </p>

                    <h3 className="text-xl font-bold text-white mb-4 mt-8">Error Trigger (Error Workflow)</h3>
                    <p className="mb-4">
                        워크플로우 설정에서 'Error Workflow'를 지정할 수 있습니다. 메인 로직 수행 중 API 타임아웃이나 파싱 에러가 발생하면, 즉시 에러 워크플로우가 실행됩니다. 여기서 개발자는 에러 스택 트레이스를 슬랙으로 전송하거나, 재시도(Retry) 로직을 수행할 수 있습니다.
                    </p>

                    <h3 className="text-xl font-bold text-white mb-4 mt-8">Execution History 관리</h3>
                    <p className="mb-4">
                        Self-hosted 버전의 장점은 데이터 보존 정책을 마음대로 설정할 수 있다는 것입니다. 하지만, 수십만 건의 실행 로그는 DB 용량을 빠르게 잠식합니다. 주기적인 Pruning(가지치기) 설정을 통해, 성공한 로그는 7일 보관, 실패한 로그는 30일 보관하는 식으로 리소스를 최적화해야 합니다.
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-white mb-6">4. AI Agent와의 결합: LangChain</h2>
                    <p className="mb-6">
                        이제 N8N은 단순한 룰 기반 자동화를 넘어섰습니다. LangChain 노드의 도입으로 LLM(Large Language Model)을 워크플로우의 의사결정자로 참여시킬 수 있습니다.
                    </p>
                    <p className="mb-6">
                        예를 들어, 고객 지원 티켓이 들어왔을 때 다음과 같은 흐름이 가능합니다:
                    </p>
                    <ol className="list-decimal pl-6 space-y-3 mb-8 text-gray-300">
                        <li>이메일 수신 (Trigger)</li>
                        <li>OpenAI GPT-4가 내용 분석 및 감정 분석 (Code/AI Node)</li>
                        <li>분노한 고객이라면 '긴급' 태그를 달아 매니저 호출</li>
                        <li>단순 문의라면 RAG(검색 증강 생성)를 통해 기술 문서 조회 후 자동 답변 초안(Draft) 작성</li>
                    </ol>
                    <p className="mb-6">
                        이 모든 과정이 사람의 개입 없이, 24시간 365일 돌아가는 'AI 직원' 시스템이 됩니다.
                    </p>
                </div>

                <div className="border-t border-white/10 pt-12 mt-20">
                    <h2 className="text-3xl font-bold text-white mb-8">마치며: 자동화된 미래를 설계하십시오</h2>
                    <p className="mb-8 text-lg leading-relaxed">
                        N8N을 마스터한다는 것은 단순히 도구 하나를 배우는 것이 아닙니다. 그것은 비즈니스의 프로세스를 코드로 정의하고, 시스템을 통해 확장은 무한히, 비용은 '0'에 가깝게 만드는 <strong>디지털 연금술</strong>의 영역에 들어서는 것입니다.
                    </p>
                    <p className="mb-12 text-lg leading-relaxed">
                        여러분의 비즈니스는 지금 자동으로 성장하고 있습니까, 아니면 누군가의 땀으로 겨우 유지되고 있습니까? 지금 바로 시작하십시오. 가장 작은 반복 업무부터, 가장 거대한 비즈니스 로직까지. N8N이 그 여정의 가장 강력한 엔진이 되어줄 것입니다.
                    </p>
                </div>

            </article>

            {/* Author Bio */}
            <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-6">
                <img 
                    src="https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=2500&auto=format&fit=crop" 
                    alt="Author"
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-lg font-bold text-white">Written by Lead Instructor</h3>
                    <p className="text-gray-400 text-sm">Global Field Engineer & Automation Architect</p>
                </div>
                <div className="ml-auto flex gap-3">
                     <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                        <Share2 className="w-5 h-5" />
                     </button>
                     <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                        <Bookmark className="w-5 h-5" />
                     </button>
                </div>
            </div>

        </div>
      </section>

      {/* Floating Action Button (Optional Mobile) */}
    </main>
  );
}

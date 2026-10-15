import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 기존 이미지 주소와 Next 내부 이미지 변환을 함께 보존합니다.
  async rewrites() {
    return {
      beforeFiles: [
        {
          "source": "/about/founder-new.png",
          "destination": "/images/web-optimized/001-founder-new-bde18bc7655a.webp"
        },
        {
          "source": "/about/founder.png",
          "destination": "/images/web-optimized/002-founder-b5cef36dad42.webp"
        },
        {
          "source": "/about/hero.png",
          "destination": "/images/web-optimized/003-hero-76fa47f95500.webp"
        },
        {
          "source": "/about/timeline.png",
          "destination": "/images/web-optimized/004-timeline-e846580c58b4.webp"
        },
        {
          "source": "/blog/agentic_era_ch4_01.jpg",
          "destination": "/images/web-optimized/005-agentic_era_ch4_01-9e271b68ccf8.webp"
        },
        {
          "source": "/blog/agentic_era_ch4_02.jpg",
          "destination": "/images/web-optimized/006-agentic_era_ch4_02-b8bf44cac4ec.webp"
        },
        {
          "source": "/blog/agentic_era_ch4_03.jpg",
          "destination": "/images/web-optimized/007-agentic_era_ch4_03-319573ffea86.webp"
        },
        {
          "source": "/blog/agentic_era_ch5_01.jpg",
          "destination": "/images/web-optimized/008-agentic_era_ch5_01-216aa80cc7c4.webp"
        },
        {
          "source": "/blog/agentic_era_ch5_02.jpg",
          "destination": "/images/web-optimized/009-agentic_era_ch5_02-de080a1bb8f3.webp"
        },
        {
          "source": "/blog/agentic_era_ch5_03.jpg",
          "destination": "/images/web-optimized/010-agentic_era_ch5_03-ecae2b406e85.webp"
        },
        {
          "source": "/blog/agentic_era_ch6_01.jpg",
          "destination": "/images/web-optimized/011-agentic_era_ch6_01-842fa41b0eb0.webp"
        },
        {
          "source": "/blog/agentic_era_ch6_02.jpg",
          "destination": "/images/web-optimized/012-agentic_era_ch6_02-52f79c4604a3.webp"
        },
        {
          "source": "/blog/agentic_era_ch6_03.jpg",
          "destination": "/images/web-optimized/013-agentic_era_ch6_03-013bf420841e.webp"
        },
        {
          "source": "/blog/ai_fantasy_life_ch4_01.jpg",
          "destination": "/images/web-optimized/014-ai_fantasy_life_ch4_01-986cf5839f7a.webp"
        },
        {
          "source": "/blog/ai_fantasy_life_ch4_02.jpg",
          "destination": "/images/web-optimized/015-ai_fantasy_life_ch4_02-6f4cc7447817.webp"
        },
        {
          "source": "/blog/ai_fantasy_life_ch4_03.jpg",
          "destination": "/images/web-optimized/016-ai_fantasy_life_ch4_03-c1c379c11b71.webp"
        },
        {
          "source": "/blog/ai_tech_trends_ch17_01.jpg",
          "destination": "/images/web-optimized/017-ai_tech_trends_ch17_01-1092e8bba28d.webp"
        },
        {
          "source": "/blog/ai_tech_trends_ch17_02.jpg",
          "destination": "/images/web-optimized/018-ai_tech_trends_ch17_02-c87e29d7ff8e.webp"
        },
        {
          "source": "/blog/ai_tech_trends_ch17_03.jpg",
          "destination": "/images/web-optimized/019-ai_tech_trends_ch17_03-c9bd8a69e065.webp"
        },
        {
          "source": "/blog/ai_tech_trends_ch18_01.jpg",
          "destination": "/images/web-optimized/020-ai_tech_trends_ch18_01-cc348e5304a9.webp"
        },
        {
          "source": "/blog/ai_tech_trends_ch18_02.jpg",
          "destination": "/images/web-optimized/021-ai_tech_trends_ch18_02-4911c4b9b296.webp"
        },
        {
          "source": "/blog/ai_tech_trends_ch18_03.jpg",
          "destination": "/images/web-optimized/022-ai_tech_trends_ch18_03-393e0ee22965.webp"
        },
        {
          "source": "/blog/ai_tech_trends_ch19_01.jpg",
          "destination": "/images/web-optimized/023-ai_tech_trends_ch19_01-d7fe56221de5.webp"
        },
        {
          "source": "/blog/ai_tech_trends_ch19_02.jpg",
          "destination": "/images/web-optimized/024-ai_tech_trends_ch19_02-f350b3215a77.webp"
        },
        {
          "source": "/blog/ai_tech_trends_ch19_03.jpg",
          "destination": "/images/web-optimized/025-ai_tech_trends_ch19_03-42011103958e.webp"
        },
        {
          "source": "/blog/daily_record_ch2_ceiling.png",
          "destination": "/images/web-optimized/026-daily_record_ch2_ceiling-069722e9d343.webp"
        },
        {
          "source": "/blog/daily_record_ch2_cover.png",
          "destination": "/images/web-optimized/027-daily_record_ch2_cover-7cfc105226f6.webp"
        },
        {
          "source": "/blog/daily_record_ch2_silence.png",
          "destination": "/images/web-optimized/028-daily_record_ch2_silence-b6548ed7553e.webp"
        },
        {
          "source": "/blog/future_arts_ch6_01.jpg",
          "destination": "/images/web-optimized/029-future_arts_ch6_01-ca959b577352.webp"
        },
        {
          "source": "/blog/future_arts_ch6_02.jpg",
          "destination": "/images/web-optimized/030-future_arts_ch6_02-b021b57b22f3.webp"
        },
        {
          "source": "/blog/future_arts_ch6_03.jpg",
          "destination": "/images/web-optimized/031-future_arts_ch6_03-823f5cc2d0bd.webp"
        },
        {
          "source": "/blog/generative_audio_visualization.png",
          "destination": "/images/web-optimized/032-generative_audio_visualization-e4b51ec34862.webp"
        },
        {
          "source": "/blog/homo_technicus_ch5_01.jpg",
          "destination": "/images/web-optimized/033-homo_technicus_ch5_01-9f4bd9f04184.webp"
        },
        {
          "source": "/blog/homo_technicus_ch5_02.jpg",
          "destination": "/images/web-optimized/034-homo_technicus_ch5_02-c9ed8b7d509b.webp"
        },
        {
          "source": "/blog/homo_technicus_ch5_03.jpg",
          "destination": "/images/web-optimized/035-homo_technicus_ch5_03-6e239c2ab3ed.webp"
        },
        {
          "source": "/blog/jin_yong_cover1.png",
          "destination": "/images/web-optimized/036-jin_yong_cover1-889c8440c43c.webp"
        },
        {
          "source": "/blog/jin_yong_cover2.png",
          "destination": "/images/web-optimized/037-jin_yong_cover2-7333c150f6f0.webp"
        },
        {
          "source": "/blog/jin_yong_cover3.png",
          "destination": "/images/web-optimized/038-jin_yong_cover3-56d590682380.webp"
        },
        {
          "source": "/blog/jin_yong_cover4.png",
          "destination": "/images/web-optimized/039-jin_yong_cover4-12ef6089efdc.webp"
        },
        {
          "source": "/blog/light_on_white_road_1_walking.png",
          "destination": "/images/web-optimized/040-light_on_white_road_1_walking-9bb082c70333.jpg"
        },
        {
          "source": "/blog/light_on_white_road_2_meeting.png",
          "destination": "/images/web-optimized/041-light_on_white_road_2_meeting-78bf81c33f3f.jpg"
        },
        {
          "source": "/blog/light_on_white_road_3_talking.png",
          "destination": "/images/web-optimized/042-light_on_white_road_3_talking-d1e8b4758494.jpg"
        },
        {
          "source": "/blog/light_on_white_road_4_courage.png",
          "destination": "/images/web-optimized/043-light_on_white_road_4_courage-e6318321293e.jpg"
        },
        {
          "source": "/blog/passive_income_ch2_01.jpg",
          "destination": "/images/web-optimized/044-passive_income_ch2_01-812516c57967.webp"
        },
        {
          "source": "/blog/passive_income_ch2_02.jpg",
          "destination": "/images/web-optimized/045-passive_income_ch2_02-e1720e0d9bdb.webp"
        },
        {
          "source": "/blog/passive_income_ch2_03.jpg",
          "destination": "/images/web-optimized/046-passive_income_ch2_03-90cdf93c542a.webp"
        },
        {
          "source": "/blog/passive_income_ch4_01.jpg",
          "destination": "/images/web-optimized/047-passive_income_ch4_01-e54459bbd5bf.webp"
        },
        {
          "source": "/blog/passive_income_ch4_02.jpg",
          "destination": "/images/web-optimized/048-passive_income_ch4_02-b3c1038315f7.webp"
        },
        {
          "source": "/blog/passive_income_ch4_03.jpg",
          "destination": "/images/web-optimized/049-passive_income_ch4_03-4aca5e0904cf.webp"
        },
        {
          "source": "/blog/resonance_of_intelligence_cover.png",
          "destination": "/images/web-optimized/050-resonance_of_intelligence_cover-be5eb0861b86.webp"
        },
        {
          "source": "/blog/today_me_ch2_autumn.png",
          "destination": "/images/web-optimized/051-today_me_ch2_autumn-c1dc9d1e1cfc.webp"
        },
        {
          "source": "/blog/today_me_ch3_01.jpg",
          "destination": "/images/web-optimized/052-today_me_ch3_01-e55c0bcdc395.webp"
        },
        {
          "source": "/blog/today_me_ch3_02.jpg",
          "destination": "/images/web-optimized/053-today_me_ch3_02-5e1e3e91aac7.webp"
        },
        {
          "source": "/blog/today_me_ch3_03.jpg",
          "destination": "/images/web-optimized/054-today_me_ch3_03-8fe6c468e6d0.webp"
        },
        {
          "source": "/blog/today_me_ch4_01.jpg",
          "destination": "/images/web-optimized/055-today_me_ch4_01-d54bb613eaf9.webp"
        },
        {
          "source": "/blog/today_me_ch4_02.jpg",
          "destination": "/images/web-optimized/056-today_me_ch4_02-4911c4b9b296.webp"
        },
        {
          "source": "/blog/today_me_ch4_03.jpg",
          "destination": "/images/web-optimized/057-today_me_ch4_03-8f4a733e3ce1.webp"
        },
        {
          "source": "/blog/vibe_coding_01_01.jpg",
          "destination": "/images/web-optimized/058-vibe_coding_01_01-350151c6fac5.webp"
        },
        {
          "source": "/blog/vibe_coding_01_02.jpg",
          "destination": "/images/web-optimized/059-vibe_coding_01_02-230088891fe5.webp"
        },
        {
          "source": "/blog/vibe_coding_01_03.jpg",
          "destination": "/images/web-optimized/060-vibe_coding_01_03-32ea5c63889d.webp"
        },
        {
          "source": "/gallery/museum-library.png",
          "destination": "/images/web-optimized/061-museum-library-ca0739f35aaf.webp"
        },
        {
          "source": "/icons/3d-curriculum-ai.png",
          "destination": "/images/web-optimized/062-3d-curriculum-ai-1edff0a13bab.webp"
        },
        {
          "source": "/icons/3d-curriculum-code.png",
          "destination": "/images/web-optimized/063-3d-curriculum-code-17647b3c130a.webp"
        },
        {
          "source": "/icons/3d-curriculum-hw.png",
          "destination": "/images/web-optimized/064-3d-curriculum-hw-aa5baa19a5e6.webp"
        },
        {
          "source": "/icons/3d-design.png",
          "destination": "/images/web-optimized/065-3d-design-c4a5fb15229e.webp"
        },
        {
          "source": "/icons/3d-dev.png",
          "destination": "/images/web-optimized/066-3d-dev-1e0bf4ccdbbe.webp"
        },
        {
          "source": "/icons/3d-edu.png",
          "destination": "/images/web-optimized/067-3d-edu-e50b83d72c21.webp"
        },
        {
          "source": "/icons/3d-trade.png",
          "destination": "/images/web-optimized/068-3d-trade-7c1aa6c15cdf.webp"
        },
        {
          "source": "/images/3D.png",
          "destination": "/images/web-optimized/069-3D-21553ec017c9.webp"
        },
        {
          "source": "/images/AIauto.png",
          "destination": "/images/web-optimized/070-AIauto-4117a16088d5.webp"
        },
        {
          "source": "/images/Service/openclaw-features.png",
          "destination": "/images/web-optimized/071-openclaw-features-f0f6215f7071.webp"
        },
        {
          "source": "/images/Service/real_ai_code_macro.png",
          "destination": "/images/web-optimized/072-real_ai_code_macro-50923e8f23fe.webp"
        },
        {
          "source": "/images/Service/real_automation_server.png",
          "destination": "/images/web-optimized/073-real_automation_server-70d61c65803f.webp"
        },
        {
          "source": "/images/Service/real_modern_workspace.png",
          "destination": "/images/web-optimized/074-real_modern_workspace-69c3fba68a93.webp"
        },
        {
          "source": "/images/a1.png",
          "destination": "/images/web-optimized/075-a1-946b1bc46e7d.webp"
        },
        {
          "source": "/images/a10.png",
          "destination": "/images/web-optimized/076-a10-3963da9087c0.webp"
        },
        {
          "source": "/images/a11.png",
          "destination": "/images/web-optimized/077-a11-7354fb2e6937.webp"
        },
        {
          "source": "/images/a12.png",
          "destination": "/images/web-optimized/078-a12-e25e1befd229.webp"
        },
        {
          "source": "/images/a13.png",
          "destination": "/images/web-optimized/079-a13-3e00624e63e2.webp"
        },
        {
          "source": "/images/a3.png",
          "destination": "/images/web-optimized/080-a3-c28c12a3862c.webp"
        },
        {
          "source": "/images/a4.png",
          "destination": "/images/web-optimized/081-a4-cc72e693eb81.webp"
        },
        {
          "source": "/images/a5.png",
          "destination": "/images/web-optimized/082-a5-191bb46f8715.webp"
        },
        {
          "source": "/images/a6.png",
          "destination": "/images/web-optimized/083-a6-454821772ee6.webp"
        },
        {
          "source": "/images/a7.png",
          "destination": "/images/web-optimized/084-a7-e7b4f9ac72b9.webp"
        },
        {
          "source": "/images/a8.png",
          "destination": "/images/web-optimized/085-a8-3e4b80309d69.webp"
        },
        {
          "source": "/images/agent.png",
          "destination": "/images/web-optimized/086-agent-f442c5fa9462.webp"
        },
        {
          "source": "/images/automation/shortform-diagram.png",
          "destination": "/images/web-optimized/087-shortform-diagram-86815a73f183.webp"
        },
        {
          "source": "/images/brand/ai-creation.png",
          "destination": "/images/web-optimized/088-ai-creation-561291d0c9b2.webp"
        },
        {
          "source": "/images/brand/automation-flow.png",
          "destination": "/images/web-optimized/089-automation-flow-41862ff91b9a.webp"
        },
        {
          "source": "/images/brand/education-lab.png",
          "destination": "/images/web-optimized/090-education-lab-6992a262f8df.webp"
        },
        {
          "source": "/images/brand/fiber-core-v2.png",
          "destination": "/images/web-optimized/091-fiber-core-v2-afefb31878f9.webp"
        },
        {
          "source": "/images/brand/fiber-core.png",
          "destination": "/images/web-optimized/092-fiber-core-eb118e72bba3.webp"
        },
        {
          "source": "/images/brand/fiber-detail.png",
          "destination": "/images/web-optimized/093-fiber-detail-73971d13b0e2.webp"
        },
        {
          "source": "/images/brand/fiber-exploded.png",
          "destination": "/images/web-optimized/094-fiber-exploded-2039f111a67f.webp"
        },
        {
          "source": "/images/brand/fiber-optics.png",
          "destination": "/images/web-optimized/095-fiber-optics-397b3fc694d7.webp"
        },
        {
          "source": "/images/brand/fiber-refraction.png",
          "destination": "/images/web-optimized/096-fiber-refraction-b66fa62ba404.webp"
        },
        {
          "source": "/images/brand/storylens-camera.png",
          "destination": "/images/web-optimized/097-storylens-camera-6d82a74f9a6b.webp"
        },
        {
          "source": "/images/business.png",
          "destination": "/images/web-optimized/098-business-a17cad29b942.webp"
        },
        {
          "source": "/images/dream.png",
          "destination": "/images/web-optimized/099-dream-78fadfd06b89.webp"
        },
        {
          "source": "/images/education/consistent-char/01-portrait.png",
          "destination": "/images/web-optimized/100-01-portrait-c194ffcefbaf.webp"
        },
        {
          "source": "/images/education/consistent-char/02-split.png",
          "destination": "/images/web-optimized/101-02-split-cdaa462de237.webp"
        },
        {
          "source": "/images/education/consistent-char/03-fullbody.png",
          "destination": "/images/web-optimized/102-03-fullbody-2d5b6eebe720.webp"
        },
        {
          "source": "/images/education/optical-training/fiber-selection/networks-en.png",
          "destination": "/images/web-optimized/103-networks-en-df1fa5e518b9.webp"
        },
        {
          "source": "/images/education/optical-training/fiber-selection/networks-ko.png",
          "destination": "/images/web-optimized/104-networks-ko-32f14bce6842.webp"
        },
        {
          "source": "/images/education/optical-training/fiber-selection/procurement-en.png",
          "destination": "/images/web-optimized/105-procurement-en-a34cc1a94f90.webp"
        },
        {
          "source": "/images/education/optical-training/fiber-selection/procurement-ko.png",
          "destination": "/images/web-optimized/106-procurement-ko-159cab6c122f.webp"
        },
        {
          "source": "/images/education/optical-training/fiber-selection/reach-en.png",
          "destination": "/images/web-optimized/107-reach-en-78bd379dbf36.webp"
        },
        {
          "source": "/images/education/optical-training/fiber-selection/reach-ko.png",
          "destination": "/images/web-optimized/108-reach-ko-39003a15f17f.webp"
        },
        {
          "source": "/images/education/optical-training/fiber-selection/selection-en.png",
          "destination": "/images/web-optimized/109-selection-en-6fb62be208d8.webp"
        },
        {
          "source": "/images/education/optical-training/fiber-selection/selection-ko.png",
          "destination": "/images/web-optimized/110-selection-ko-45e37fa3ec43.webp"
        },
        {
          "source": "/images/map-3d.png",
          "destination": "/images/web-optimized/111-map-3d-8b674a57acc2.webp"
        },
        {
          "source": "/images/openclaw.png",
          "destination": "/images/web-optimized/112-openclaw-6816112c07de.webp"
        },
        {
          "source": "/images/openclaw2.png",
          "destination": "/images/web-optimized/113-openclaw2-38a456fa264d.webp"
        },
        {
          "source": "/images/posts/ai-music/bundle.png",
          "destination": "/images/web-optimized/114-bundle-cdc4819819f4.webp"
        },
        {
          "source": "/images/posts/ai-music/cover.png",
          "destination": "/images/web-optimized/115-cover-ab800be47547.webp"
        },
        {
          "source": "/images/posts/ai-music/editing.png",
          "destination": "/images/web-optimized/116-editing-9a667be066e9.webp"
        },
        {
          "source": "/images/posts/ai-music/income.png",
          "destination": "/images/web-optimized/117-income-dfdf48a786e7.webp"
        },
        {
          "source": "/images/posts/ai-tech-trends-ch20-agent-team-ops-design-01.jpg",
          "destination": "/images/web-optimized/118-ai-tech-trends-ch20-agent-team-ops-design-01-cd1d7f76f451.webp"
        },
        {
          "source": "/images/posts/ai-tech-trends-ch20-agent-team-ops-design-02.jpg",
          "destination": "/images/web-optimized/119-ai-tech-trends-ch20-agent-team-ops-design-02-2fb6d4ff71e1.webp"
        },
        {
          "source": "/images/posts/ai-tech-trends-ch20-agent-team-ops-design-03.jpg",
          "destination": "/images/web-optimized/120-ai-tech-trends-ch20-agent-team-ops-design-03-a0a3987a8a48.webp"
        },
        {
          "source": "/images/posts/asset-first-ai-drama/cover.png",
          "destination": "/images/web-optimized/121-cover-f18f03b4916f.webp"
        },
        {
          "source": "/images/posts/asset-first-ai-drama/sheet.png",
          "destination": "/images/web-optimized/122-sheet-c98bc421035f.webp"
        },
        {
          "source": "/images/posts/asset-first-ai-drama/tags.png",
          "destination": "/images/web-optimized/123-tags-642fe0cde203.webp"
        },
        {
          "source": "/images/posts/calendar.png",
          "destination": "/images/web-optimized/124-calendar-7764acf45ce3.webp"
        },
        {
          "source": "/images/posts/canva-template.png",
          "destination": "/images/web-optimized/125-canva-template-be196dd98cdc.webp"
        },
        {
          "source": "/images/posts/cheatsheet.png",
          "destination": "/images/web-optimized/126-cheatsheet-a3075791bd30.webp"
        },
        {
          "source": "/images/posts/claude-cinemagraph-beginner/base.png",
          "destination": "/images/web-optimized/127-base-eaa36dae73be.webp"
        },
        {
          "source": "/images/posts/claude-cinemagraph-beginner/layers-3d-en.png",
          "destination": "/images/web-optimized/128-layers-3d-en-e33419e23081.webp"
        },
        {
          "source": "/images/posts/claude-cinemagraph-beginner/layers-3d.png",
          "destination": "/images/web-optimized/129-layers-3d-773dc5e8d842.webp"
        },
        {
          "source": "/images/posts/claude-cinemagraph-beginner/loop-3d-en.png",
          "destination": "/images/web-optimized/130-loop-3d-en-03a97b83f054.webp"
        },
        {
          "source": "/images/posts/claude-cinemagraph-beginner/loop-3d.png",
          "destination": "/images/web-optimized/131-loop-3d-6c5f1aa623fa.webp"
        },
        {
          "source": "/images/posts/claude-cinemagraph-beginner/mask.png",
          "destination": "/images/web-optimized/132-mask-19cfca472e59.webp"
        },
        {
          "source": "/images/posts/closure-capacity-144-to-288/d3-cond-en.png",
          "destination": "/images/web-optimized/133-d3-cond-en-abae0809491c.webp"
        },
        {
          "source": "/images/posts/closure-capacity-144-to-288/d3-cond-ko.png",
          "destination": "/images/web-optimized/134-d3-cond-ko-5179cca19c15.webp"
        },
        {
          "source": "/images/posts/closure-capacity-144-to-288/d3-entry-en.png",
          "destination": "/images/web-optimized/135-d3-entry-en-020e95356714.webp"
        },
        {
          "source": "/images/posts/closure-capacity-144-to-288/d3-entry-ko.png",
          "destination": "/images/web-optimized/136-d3-entry-ko-4e55e172dfa5.webp"
        },
        {
          "source": "/images/posts/closure-capacity-144-to-288/d3-overview-en.png",
          "destination": "/images/web-optimized/137-d3-overview-en-a978364f7c30.webp"
        },
        {
          "source": "/images/posts/closure-capacity-144-to-288/d3-overview-ko.png",
          "destination": "/images/web-optimized/138-d3-overview-ko-5d0b8410fa79.webp"
        },
        {
          "source": "/images/posts/closure-capacity-144-to-288/d3-space-en.png",
          "destination": "/images/web-optimized/139-d3-space-en-2d2969327316.webp"
        },
        {
          "source": "/images/posts/closure-capacity-144-to-288/d3-space-ko.png",
          "destination": "/images/web-optimized/140-d3-space-ko-fa5e4baa4601.webp"
        },
        {
          "source": "/images/posts/closure-capacity-144-to-288/render-cutaway.png",
          "destination": "/images/web-optimized/141-render-cutaway-a7933ad8e152.webp"
        },
        {
          "source": "/images/posts/closure-capacity-144-to-288/render-entry.png",
          "destination": "/images/web-optimized/142-render-entry-a877a5c82fff.webp"
        },
        {
          "source": "/images/posts/closure-capacity-144-to-288/render-exploded.png",
          "destination": "/images/web-optimized/143-render-exploded-4bc42ce1c9e7.webp"
        },
        {
          "source": "/images/posts/closure-capacity-144-to-288/render-tray.png",
          "destination": "/images/web-optimized/144-render-tray-a5ffcecbf3ef.webp"
        },
        {
          "source": "/images/posts/closure-reentry-sealing-checklist/compare-en.png",
          "destination": "/images/web-optimized/145-compare-en-09e3e0c59654.webp"
        },
        {
          "source": "/images/posts/closure-reentry-sealing-checklist/compare-ko.png",
          "destination": "/images/web-optimized/146-compare-ko-7cf6b63300d7.webp"
        },
        {
          "source": "/images/posts/closure-reentry-sealing-checklist/decision-en.png",
          "destination": "/images/web-optimized/147-decision-en-82940c892aa0.webp"
        },
        {
          "source": "/images/posts/closure-reentry-sealing-checklist/decision-ko.png",
          "destination": "/images/web-optimized/148-decision-ko-af97c8485f6e.webp"
        },
        {
          "source": "/images/posts/closure-reentry-sealing-checklist/record-en.png",
          "destination": "/images/web-optimized/149-record-en-48b4deab6bb0.webp"
        },
        {
          "source": "/images/posts/closure-reentry-sealing-checklist/record-ko.png",
          "destination": "/images/web-optimized/150-record-ko-c2a34b9ecda5.webp"
        },
        {
          "source": "/images/posts/closure-reentry-sealing-checklist/scene-gasket.png",
          "destination": "/images/web-optimized/151-scene-gasket-2122a85ba3ff.webp"
        },
        {
          "source": "/images/posts/closure-reentry-sealing-checklist/scene-handhole.png",
          "destination": "/images/web-optimized/152-scene-handhole-5cc368df5ae2.webp"
        },
        {
          "source": "/images/posts/closure-reentry-sealing-checklist/steps-en.png",
          "destination": "/images/web-optimized/153-steps-en-979830ac3b95.webp"
        },
        {
          "source": "/images/posts/closure-reentry-sealing-checklist/steps-ko.png",
          "destination": "/images/web-optimized/154-steps-ko-15df1e826f56.webp"
        },
        {
          "source": "/images/posts/crayon-redraw-prompt-object-budget/cover.png",
          "destination": "/images/web-optimized/155-cover-bfc980662fe5.webp"
        },
        {
          "source": "/images/posts/crayon-redraw-prompt-object-budget/crayon-detailed.png",
          "destination": "/images/web-optimized/156-crayon-detailed-d9918e0f0862.webp"
        },
        {
          "source": "/images/posts/crayon-redraw-prompt-object-budget/crayon-simple.png",
          "destination": "/images/web-optimized/157-crayon-simple-4efd09b56a9c.webp"
        },
        {
          "source": "/images/posts/crayon-redraw-prompt-object-budget/fruit-stall-photo.png",
          "destination": "/images/web-optimized/158-fruit-stall-photo-3bf32ec09564.webp"
        },
        {
          "source": "/images/posts/crayon-redraw-prompt-object-budget/reading-nook-photo.png",
          "destination": "/images/web-optimized/159-reading-nook-photo-dd02b0072dbf.webp"
        },
        {
          "source": "/images/posts/digital_immortality_cover.png",
          "destination": "/images/web-optimized/160-digital_immortality_cover-e8b1b16d9053.webp"
        },
        {
          "source": "/images/posts/ebook.png",
          "destination": "/images/web-optimized/161-ebook-0dcad9fcdc04.webp"
        },
        {
          "source": "/images/posts/email.png",
          "destination": "/images/web-optimized/162-email-f06b519058b5.webp"
        },
        {
          "source": "/images/posts/foresight-meeting-notes-evidence/cover.png",
          "destination": "/images/web-optimized/163-cover-bfc892762def.webp"
        },
        {
          "source": "/images/posts/foresight-meeting-notes-evidence/evidence.png",
          "destination": "/images/web-optimized/164-evidence-0cc044041681.webp"
        },
        {
          "source": "/images/posts/foresight-meeting-notes-evidence/review.png",
          "destination": "/images/web-optimized/165-review-d3c2a9ca16e6.webp"
        },
        {
          "source": "/images/posts/grief_tech_hologram.png",
          "destination": "/images/web-optimized/166-grief_tech_hologram-079e0eaccc80.webp"
        },
        {
          "source": "/images/posts/hanbok-prompt-garment-scene-separation/blue-wall.png",
          "destination": "/images/web-optimized/167-blue-wall-94f5e5432dbd.webp"
        },
        {
          "source": "/images/posts/hanbok-prompt-garment-scene-separation/collar-detail.png",
          "destination": "/images/web-optimized/168-collar-detail-7d7319d3e67f.webp"
        },
        {
          "source": "/images/posts/hanbok-prompt-garment-scene-separation/components.png",
          "destination": "/images/web-optimized/169-components-f41a2cdb18ba.webp"
        },
        {
          "source": "/images/posts/hanbok-prompt-garment-scene-separation/cover.png",
          "destination": "/images/web-optimized/170-cover-2d11eaa2e957.webp"
        },
        {
          "source": "/images/posts/hanbok-prompt-garment-scene-separation/planning.png",
          "destination": "/images/web-optimized/171-planning-86321f1603ea.webp"
        },
        {
          "source": "/images/posts/idea-vault.png",
          "destination": "/images/web-optimized/172-idea-vault-4a3e6dcac1cf.webp"
        },
        {
          "source": "/images/posts/isometric-set-multi-angle-prompt/bed-low.png",
          "destination": "/images/web-optimized/173-bed-low-550de5296b7a.webp"
        },
        {
          "source": "/images/posts/isometric-set-multi-angle-prompt/cover.png",
          "destination": "/images/web-optimized/174-cover-0ecbe2f84644.webp"
        },
        {
          "source": "/images/posts/isometric-set-multi-angle-prompt/eye-level.png",
          "destination": "/images/web-optimized/175-eye-level-7c4898fd2039.webp"
        },
        {
          "source": "/images/posts/isometric-set-multi-angle-prompt/no-reference.png",
          "destination": "/images/web-optimized/176-no-reference-41e6e505b2bc.webp"
        },
        {
          "source": "/images/posts/isometric-set-multi-angle-prompt/ref-set.png",
          "destination": "/images/web-optimized/177-ref-set-715464e28a78.webp"
        },
        {
          "source": "/images/posts/journal.png",
          "destination": "/images/web-optimized/178-journal-78cbb8befe31.webp"
        },
        {
          "source": "/images/posts/lead-magnet.png",
          "destination": "/images/web-optimized/179-lead-magnet-26a2349982c6.webp"
        },
        {
          "source": "/images/posts/low-angle-prompt-camera-height/cover.png",
          "destination": "/images/web-optimized/180-cover-ca0bab9486f9.webp"
        },
        {
          "source": "/images/posts/low-angle-prompt-camera-height/eye-level.png",
          "destination": "/images/web-optimized/181-eye-level-41f7bf35875a.webp"
        },
        {
          "source": "/images/posts/low-angle-prompt-camera-height/foreground.png",
          "destination": "/images/web-optimized/182-foreground-c8ae4fc07373.webp"
        },
        {
          "source": "/images/posts/meme-pose-pet-identity-prompt-roles/cover.png",
          "destination": "/images/web-optimized/183-cover-8efc25c34fce.webp"
        },
        {
          "source": "/images/posts/meme-pose-pet-identity-prompt-roles/dog-reference.png",
          "destination": "/images/web-optimized/184-dog-reference-08c3add777f1.webp"
        },
        {
          "source": "/images/posts/meme-pose-pet-identity-prompt-roles/jump-result.png",
          "destination": "/images/web-optimized/185-jump-result-df8b2189840d.webp"
        },
        {
          "source": "/images/posts/meme-pose-pet-identity-prompt-roles/jump-source.png",
          "destination": "/images/web-optimized/186-jump-source-1f3bc735a9ab.webp"
        },
        {
          "source": "/images/posts/meme-pose-pet-identity-prompt-roles/pose-source.png",
          "destination": "/images/web-optimized/187-pose-source-c4fb2c0a25bf.webp"
        },
        {
          "source": "/images/posts/meme-pose-pet-identity-prompt-roles/short-prompt.png",
          "destination": "/images/web-optimized/188-short-prompt-35b7b3ab827d.webp"
        },
        {
          "source": "/images/posts/memory_server_core.png",
          "destination": "/images/web-optimized/189-memory_server_core-91b3fc01caf0.webp"
        },
        {
          "source": "/images/posts/n8n-beginner/01-workflow-overview.png",
          "destination": "/images/web-optimized/190-01-workflow-overview-16d363248bb7.webp"
        },
        {
          "source": "/images/posts/n8n-beginner/02-expression-editor.png",
          "destination": "/images/web-optimized/191-02-expression-editor-1d7df832f314.webp"
        },
        {
          "source": "/images/posts/n8n-beginner/03-if-node.png",
          "destination": "/images/web-optimized/192-03-if-node-e9e779121cae.webp"
        },
        {
          "source": "/images/posts/n8n-beginner/04-output-result.png",
          "destination": "/images/web-optimized/193-04-output-result-ed18751bf90e.webp"
        },
        {
          "source": "/images/posts/n8n-beginner/05-final-check.png",
          "destination": "/images/web-optimized/194-05-final-check-90c52941fa2a.webp"
        },
        {
          "source": "/images/posts/notion-template.png",
          "destination": "/images/web-optimized/195-notion-template-3c49b2d1ef1a.webp"
        },
        {
          "source": "/images/posts/passive-income-14-products.png",
          "destination": "/images/web-optimized/196-passive-income-14-products-cec9ba89c0f0.webp"
        },
        {
          "source": "/images/posts/planner.png",
          "destination": "/images/web-optimized/197-planner-1adf5f97b8d2.webp"
        },
        {
          "source": "/images/posts/poster-prompt-type-subject-zones/bird.png",
          "destination": "/images/web-optimized/198-bird-a60b32c72e3a.webp"
        },
        {
          "source": "/images/posts/poster-prompt-type-subject-zones/cover.png",
          "destination": "/images/web-optimized/199-cover-ccf4f1b8adec.webp"
        },
        {
          "source": "/images/posts/poster-prompt-type-subject-zones/garden.png",
          "destination": "/images/web-optimized/200-garden-06a00d31cbd7.webp"
        },
        {
          "source": "/images/posts/prompt-guide.png",
          "destination": "/images/web-optimized/201-prompt-guide-d6b82b654576.webp"
        },
        {
          "source": "/images/posts/relative-scale-prompt-contact-shadow/cover.png",
          "destination": "/images/web-optimized/202-cover-3b22d28d4b70.webp"
        },
        {
          "source": "/images/posts/relative-scale-prompt-contact-shadow/spool.png",
          "destination": "/images/web-optimized/203-spool-abf050ed39b0.webp"
        },
        {
          "source": "/images/posts/relative-scale-prompt-contact-shadow/teapot.png",
          "destination": "/images/web-optimized/204-teapot-183ad6f01619.webp"
        },
        {
          "source": "/images/posts/riso-prompt-brand-style-sheet/round1-bakery.png",
          "destination": "/images/web-optimized/205-round1-bakery-e87ee25b5bab.webp"
        },
        {
          "source": "/images/posts/riso-prompt-brand-style-sheet/round1-mug.png",
          "destination": "/images/web-optimized/206-round1-mug-b2fe18dd1a77.webp"
        },
        {
          "source": "/images/posts/riso-prompt-brand-style-sheet/round1-reading.png",
          "destination": "/images/web-optimized/207-round1-reading-587e4e7f543b.webp"
        },
        {
          "source": "/images/posts/riso-prompt-brand-style-sheet/round2-mug.png",
          "destination": "/images/web-optimized/208-round2-mug-7aa3e9666f99.webp"
        },
        {
          "source": "/images/posts/riso-prompt-brand-style-sheet/round2-reading.png",
          "destination": "/images/web-optimized/209-round2-reading-46a107472c89.webp"
        },
        {
          "source": "/images/posts/sop.png",
          "destination": "/images/web-optimized/210-sop-14712183e68c.webp"
        },
        {
          "source": "/images/posts/storybook.png",
          "destination": "/images/web-optimized/211-storybook-636176790b01.webp"
        },
        {
          "source": "/images/posts/welcome-pack.png",
          "destination": "/images/web-optimized/212-welcome-pack-95bbdf7be139.webp"
        },
        {
          "source": "/images/projects/Creative-Ai_studio.jpg",
          "destination": "/images/web-optimized/213-Creative-Ai_studio-714c9d83399c.webp"
        },
        {
          "source": "/images/projects/neuro-design-ai.jpg",
          "destination": "/images/web-optimized/214-neuro-design-ai-a61b677db332.webp"
        },
        {
          "source": "/images/prompt.png",
          "destination": "/images/web-optimized/215-prompt-c572bd3edf17.webp"
        },
        {
          "source": "/images/prompts/knitted-cream.png",
          "destination": "/images/web-optimized/216-knitted-cream-71595ffc2801.webp"
        },
        {
          "source": "/images/prompts/luxury-beauty.png",
          "destination": "/images/web-optimized/217-luxury-beauty-7d327d0dc862.webp"
        },
        {
          "source": "/images/series/agentic_era.png",
          "destination": "/images/web-optimized/218-agentic_era-b8416f6c77cb.webp"
        },
        {
          "source": "/images/series/ai_fantasy.png",
          "destination": "/images/web-optimized/219-ai_fantasy-ccf4ecd3fb8b.webp"
        },
        {
          "source": "/images/series/ai_fantasy_life_2.png",
          "destination": "/images/web-optimized/220-ai_fantasy_life_2-6f3c0b41944f.webp"
        },
        {
          "source": "/images/series/ai_fantasy_life_3.png",
          "destination": "/images/web-optimized/221-ai_fantasy_life_3-d686c8c29ab2.webp"
        },
        {
          "source": "/images/series/ai_tech_trends.png",
          "destination": "/images/web-optimized/222-ai_tech_trends-c04a23add238.webp"
        },
        {
          "source": "/images/series/future_arts.png",
          "destination": "/images/web-optimized/223-future_arts-af876490d34f.webp"
        },
        {
          "source": "/images/series/homo_technicus.png",
          "destination": "/images/web-optimized/224-homo_technicus-6510ed5c1011.webp"
        },
        {
          "source": "/images/series/post_ai_news.png",
          "destination": "/images/web-optimized/225-post_ai_news-77dec94c4a9e.webp"
        },
        {
          "source": "/images/series/post_engineer_diary.png",
          "destination": "/images/web-optimized/226-post_engineer_diary-6a748b6ef7d8.webp"
        },
        {
          "source": "/images/series/post_fantasy_story.png",
          "destination": "/images/web-optimized/227-post_fantasy_story-5c6f16c49ad9.webp"
        },
        {
          "source": "/images/series/today_me.png",
          "destination": "/images/web-optimized/228-today_me-9817b77465ac.webp"
        },
        {
          "source": "/images/series/today_me_2.png",
          "destination": "/images/web-optimized/229-today_me_2-d55e955d7b6c.webp"
        },
        {
          "source": "/images/sj-atelier.png",
          "destination": "/images/web-optimized/230-sj-atelier-ca0739f35aaf.webp"
        },
        {
          "source": "/images/sj.png",
          "destination": "/images/web-optimized/231-sj-fa0b53f2c38e.webp"
        },
        {
          "source": "/images/unnamed.png",
          "destination": "/images/web-optimized/232-unnamed-0ae0cbf37665.webp"
        },
        {
          "source": "/images/w2.png",
          "destination": "/images/web-optimized/233-w2-a40a444018b0.webp"
        },
        {
          "source": "/images/works/ai-knowledge-base-world-tree/world-tree-3d-graph.png",
          "destination": "/images/web-optimized/234-world-tree-3d-graph-59812616be1e.webp"
        },
        {
          "source": "/images/works/paperclip-cover.png",
          "destination": "/images/web-optimized/235-paperclip-cover-ece4419ef3ac.webp"
        },
        {
          "source": "/images/works/paperclip/core-readme.png",
          "destination": "/images/web-optimized/236-core-readme-f170959f1b20.webp"
        },
        {
          "source": "/images/works/paperclip/deepwiki-install.png",
          "destination": "/images/web-optimized/237-deepwiki-install-1f3ac03d19e2.webp"
        },
        {
          "source": "/images/works/paperclip/docker-docs.png",
          "destination": "/images/web-optimized/238-docker-docs-5d96bfdc25f3.webp"
        },
        {
          "source": "/images/works/paperclip/docs-tree.png",
          "destination": "/images/web-optimized/239-docs-tree-e722892041a9.webp"
        },
        {
          "source": "/images/works/paperclip/github-hero.png",
          "destination": "/images/web-optimized/240-github-hero-12d17ab204f0.webp"
        },
        {
          "source": "/images/works/paperclip/github-readme.png",
          "destination": "/images/web-optimized/241-github-readme-3e191e2f580a.webp"
        },
        {
          "source": "/images/works/paperclip/hostinger-paperclip.png",
          "destination": "/images/web-optimized/242-hostinger-paperclip-40a59862de1b.webp"
        },
        {
          "source": "/images/works/paperclip/npm-page.png",
          "destination": "/images/web-optimized/243-npm-page-041c0a27aba8.webp"
        },
        {
          "source": "/images/works/paperclip/quickstart.png",
          "destination": "/images/web-optimized/244-quickstart-010f042642a4.webp"
        },
        {
          "source": "/images/works/paperclip/readme-concepts.png",
          "destination": "/images/web-optimized/245-readme-concepts-f170959f1b20.webp"
        },
        {
          "source": "/images/works/zimage.jpg",
          "destination": "/images/web-optimized/246-zimage-75d0d624f6e6.webp"
        },
        {
          "source": "/images/youtube.png",
          "destination": "/images/web-optimized/247-youtube-1a5eff91ecd4.webp"
        },
        {
          "source": "/og-default.png",
          "destination": "/images/web-optimized/249-og-default-367b5b981258.webp"
        },
        {
          "source": "/og-image.png",
          "destination": "/images/web-optimized/250-og-image-1e10d2364e65.jpg"
        },
        {
          "source": "/projects/project-ai.png",
          "destination": "/images/web-optimized/251-project-ai-50923e8f23fe.webp"
        },
        {
          "source": "/projects/project-apps.png",
          "destination": "/images/web-optimized/252-project-apps-69c3fba68a93.webp"
        },
        {
          "source": "/projects/project-automation.png",
          "destination": "/images/web-optimized/253-project-automation-70d61c65803f.webp"
        },
        {
          "source": "/reedo-profile-high.png",
          "destination": "/images/web-optimized/254-reedo-profile-high-638ebffebc5e.jpg"
        },
        {
          "source": "/series/agentic-era.png",
          "destination": "/images/web-optimized/255-agentic-era-24c2ba3a1977.webp"
        },
        {
          "source": "/series/ai-fantasy-life.png",
          "destination": "/images/web-optimized/256-ai-fantasy-life-1614cf3c2e43.webp"
        },
        {
          "source": "/series/ai-tech-trends.png",
          "destination": "/images/web-optimized/257-ai-tech-trends-f1090535a964.webp"
        },
        {
          "source": "/series/daily-record.png",
          "destination": "/images/web-optimized/258-daily-record-b03895886ae6.webp"
        },
        {
          "source": "/series/future-arts.png",
          "destination": "/images/web-optimized/259-future-arts-74e1835c2ef3.webp"
        },
        {
          "source": "/series/homo-technicus.png",
          "destination": "/images/web-optimized/260-homo-technicus-b884221557e7.webp"
        },
        {
          "source": "/series/openclaw-room.png",
          "destination": "/images/web-optimized/261-openclaw-room-6816112c07de.webp"
        },
        {
          "source": "/series/openclaw2.png",
          "destination": "/images/web-optimized/262-openclaw2-38a456fa264d.webp"
        },
        {
          "source": "/series/passive-income.png",
          "destination": "/images/web-optimized/263-passive-income-1867cef5ba8b.webp"
        },
        {
          "source": "/series/todays-me.png",
          "destination": "/images/web-optimized/264-todays-me-35e76207aaac.webp"
        }
      ],
      afterFiles: [],
      fallback: [],
    };
  },

  // 서버 번들에서 대용량 클라이언트 전용 패키지 제외
  serverExternalPackages: [
    "html2canvas",
    "jspdf",
  ],

  // 운영 Linux의 Prisma 실행 파일을 서버 함수 추적에 명시적으로 포함
  outputFileTracingIncludes: {
    "/*": ["./node_modules/.prisma/client/libquery_engine-rhel-openssl-3.0.x.so.node"],
  },

  // admin/blog API 함수에서 public/ 폴더 제외 (이미지/오디오가 함수 번들에 포함되는 문제 방지)
  outputFileTracingExcludes: {
    "/api/admin/blog/files": ["./public/**"],
    "/api/admin/blog/read": ["./public/**"],
    "/api/admin/blog/save": ["./public/**"],
  },

// 이미지 최적화 설정
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // 실험적 기능
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "clsx",
      "date-fns",
    ],
  },

  // 컴파일러 최적화
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Turbopack 설정 (Next.js 16 기본값)
  turbopack: {
    // Turbopack 관련 추가 설정 필요 시 여기에 작성
  },

  // 보안 헤더 설정
  async headers() {
    const cspDirectives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://www.googletagservices.com https://adservice.google.com https://tpc.googlesyndication.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://fundingchoicesmessages.google.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://images.unsplash.com https://www.google-analytics.com https://*.google.com https://*.googleusercontent.com https://*.public.blob.vercel-storage.com https://k.kakaocdn.net https://avatars.githubusercontent.com https://lh3.googleusercontent.com https://placehold.co https://loremflickr.com https://pagead2.googlesyndication.com https://tpc.googlesyndication.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google",
      "font-src 'self' data: https://fonts.gstatic.com https://fonts.googleapis.com",
      "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.supabase.co https://*.public.blob.vercel-storage.com https://pagead2.googlesyndication.com https://ep1.adtrafficquality.google https://googleads.g.doubleclick.net https://fundingchoicesmessages.google.com",
      "frame-src 'self' https://accounts.google.com https://kauth.kakao.com https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com https://www.youtube.com https://www.youtube-nocookie.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://fundingchoicesmessages.google.com",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "media-src 'self'",
      "frame-ancestors 'self'",
      "worker-src 'self' blob:",
    ];

    return [
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy',
            value: cspDirectives.join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;

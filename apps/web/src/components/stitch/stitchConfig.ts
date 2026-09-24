/**
 * Stitch Legal OS — Mockup Registry (85 high-fidelity screens)
 * Mirrors NEWSTITCH/stitch_acquit.ai_legal_operating_system folders exactly.
 */

export interface StitchScreen {
  id: string;
  label: string;
  category: string;
  description?: string;
  isPrimary?: boolean;
}

export interface StitchCategory {
  id: string;
  label: string;
  icon: string;
  route: string;
  primaryMockup: string;
  screens: StitchScreen[];
}

export const STITCH_CATEGORIES: StitchCategory[] = [
  {
    id: "command_center",
    label: "Command Center",
    icon: "dashboard",
    route: "/",
    primaryMockup: "command_center_dashboard_1",
    screens: [
      { id: "command_center_dashboard_1", label: "Command Center Dashboard 1", category: "command_center", isPrimary: true, description: "Operational hub: matter KPIs, alerts, navigation, and social/legal feeds." },
      { id: "command_center_dashboard_2", label: "Command Center Dashboard 2", category: "command_center", description: "Operational hub: matter KPIs, alerts, navigation, and social/legal feeds." },
      { id: "command_center_full_navigational_hub", label: "Command Center Full Navigational Hub", category: "command_center", description: "Operational hub: matter KPIs, alerts, navigation, and social/legal feeds." },
      { id: "command_center_genteam_workspace_1", label: "Command Center Genteam Workspace 1", category: "command_center", description: "Operational hub: matter KPIs, alerts, navigation, and social/legal feeds." },
      { id: "command_center_genteam_workspace_2", label: "Command Center Genteam Workspace 2", category: "command_center", description: "Operational hub: matter KPIs, alerts, navigation, and social/legal feeds." },
      { id: "command_center_home", label: "Command Center Home", category: "command_center", description: "Operational hub: matter KPIs, alerts, navigation, and social/legal feeds." },
      { id: "command_center_interactive_navigational_hub", label: "Command Center Interactive Navigational Hub", category: "command_center", description: "Operational hub: matter KPIs, alerts, navigation, and social/legal feeds." },
      { id: "command_center_navigational_hub", label: "Command Center Navigational Hub", category: "command_center", description: "Operational hub: matter KPIs, alerts, navigation, and social/legal feeds." },
      { id: "command_center_refined_social_hub_1", label: "Command Center Refined Social Hub 1", category: "command_center", description: "Operational hub: matter KPIs, alerts, navigation, and social/legal feeds." },
      { id: "command_center_refined_social_hub_2", label: "Command Center Refined Social Hub 2", category: "command_center", description: "Operational hub: matter KPIs, alerts, navigation, and social/legal feeds." },
      { id: "command_center_social_legal_hub", label: "Command Center Social Legal Hub", category: "command_center", description: "Operational hub: matter KPIs, alerts, navigation, and social/legal feeds." },
      { id: "command_center_social_news_hub", label: "Command Center Social News Hub", category: "command_center", description: "Operational hub: matter KPIs, alerts, navigation, and social/legal feeds." },
      { id: "command_center_telegram_legal_hub", label: "Command Center Telegram Legal Hub", category: "command_center", description: "Operational hub: matter KPIs, alerts, navigation, and social/legal feeds." },
    ],
  },
  {
    id: "chambers_genteam",
    label: "Chambers & GenTeam",
    icon: "groups",
    route: "/chambers",
    primaryMockup: "chambers_ai_legal_team_1",
    screens: [
      { id: "chambers_ai_legal_team_1", label: "Chambers Ai Legal Team 1", category: "chambers_genteam", isPrimary: true, description: "AI legal team bench, conference rooms, GenTeam autonomous workspaces, and sparring debates." },
      { id: "chambers_ai_legal_team_2", label: "Chambers Ai Legal Team 2", category: "chambers_genteam", description: "AI legal team bench, conference rooms, GenTeam autonomous workspaces, and sparring debates." },
      { id: "chambers_appoint_counsel", label: "Chambers Appoint Counsel", category: "chambers_genteam", description: "AI legal team bench, conference rooms, GenTeam autonomous workspaces, and sparring debates." },
      { id: "chambers_conference_room_1", label: "Chambers Conference Room 1", category: "chambers_genteam", description: "AI legal team bench, conference rooms, GenTeam autonomous workspaces, and sparring debates." },
      { id: "chambers_conference_room_2", label: "Chambers Conference Room 2", category: "chambers_genteam", description: "AI legal team bench, conference rooms, GenTeam autonomous workspaces, and sparring debates." },
      { id: "chambers_counsel_brief", label: "Chambers Counsel Brief", category: "chambers_genteam", description: "AI legal team bench, conference rooms, GenTeam autonomous workspaces, and sparring debates." },
      { id: "chambers_full_bench_view", label: "Chambers Full Bench View", category: "chambers_genteam", description: "AI legal team bench, conference rooms, GenTeam autonomous workspaces, and sparring debates." },
      { id: "chambers_mitigation_memo", label: "Chambers Mitigation Memo", category: "chambers_genteam", description: "AI legal team bench, conference rooms, GenTeam autonomous workspaces, and sparring debates." },
      { id: "chambers_plea_analysis", label: "Chambers Plea Analysis", category: "chambers_genteam", description: "AI legal team bench, conference rooms, GenTeam autonomous workspaces, and sparring debates." },
      { id: "chambers_rights_audit", label: "Chambers Rights Audit", category: "chambers_genteam", description: "AI legal team bench, conference rooms, GenTeam autonomous workspaces, and sparring debates." },
      { id: "chambers_session_transcripts", label: "Chambers Session Transcripts", category: "chambers_genteam", description: "AI legal team bench, conference rooms, GenTeam autonomous workspaces, and sparring debates." },
      { id: "acquit.ai_genteam_ai_workspace_lemonade_server", label: "Acquit.ai Genteam Ai Workspace Lemonade Server", category: "chambers_genteam", description: "AI legal team bench, conference rooms, GenTeam autonomous workspaces, and sparring debates." },
      { id: "acquit.ai_genteam_multi_agent_autonomous_workspace_telegram_lemonade", label: "Acquit.ai Genteam Multi Agent Autonomous Workspace Telegram Lemonade", category: "chambers_genteam", description: "AI legal team bench, conference rooms, GenTeam autonomous workspaces, and sparring debates." },
      { id: "acquit.ai_telegram_genteam_ai_workspace_lemonade_server", label: "Acquit.ai Telegram Genteam Ai Workspace Lemonade Server", category: "chambers_genteam", description: "AI legal team bench, conference rooms, GenTeam autonomous workspaces, and sparring debates." },
      { id: "genteam_autonomous_sparring_debate_marcus_sterling_vs_ausa_vance", label: "Genteam Autonomous Sparring Debate Marcus Sterling Vs Ausa Vance", category: "chambers_genteam", description: "AI legal team bench, conference rooms, GenTeam autonomous workspaces, and sparring debates." },
    ],
  },
  {
    id: "the_docket",
    label: "The Docket",
    icon: "gavel",
    route: "/docket",
    primaryMockup: "the_docket_cases_1",
    screens: [
      { id: "the_docket_cases_1", label: "The Docket Cases 1", category: "the_docket", isPrimary: true, description: "Case files: active matters, court retrieval, new matter intake, and closed matters." },
      { id: "the_docket_cases_2", label: "The Docket Cases 2", category: "the_docket", description: "Case files: active matters, court retrieval, new matter intake, and closed matters." },
      { id: "the_docket_closed_matters", label: "The Docket Closed Matters", category: "the_docket", description: "Case files: active matters, court retrieval, new matter intake, and closed matters." },
      { id: "the_docket_open_a_matter", label: "The Docket Open A Matter", category: "the_docket", description: "Case files: active matters, court retrieval, new matter intake, and closed matters." },
      { id: "the_docket_retrieve_from_court", label: "The Docket Retrieve From Court", category: "the_docket", description: "Case files: active matters, court retrieval, new matter intake, and closed matters." },
    ],
  },
  {
    id: "timeline",
    label: "Timeline",
    icon: "timeline",
    route: "/timeline",
    primaryMockup: "case_timeline_chronology_1",
    screens: [
      { id: "case_timeline_chronology_1", label: "Case Timeline Chronology 1", category: "timeline", isPrimary: true, description: "Master case chronology, event records, and event logging." },
      { id: "case_timeline_chronology_2", label: "Case Timeline Chronology 2", category: "timeline", description: "Master case chronology, event records, and event logging." },
      { id: "case_timeline_event_record", label: "Case Timeline Event Record", category: "timeline", description: "Master case chronology, event records, and event logging." },
      { id: "case_timeline_log_event", label: "Case Timeline Log Event", category: "timeline", description: "Master case chronology, event records, and event logging." },
    ],
  },
  {
    id: "investigations",
    label: "Investigations",
    icon: "policy",
    route: "/investigations",
    primaryMockup: "investigations_active_research_1",
    screens: [
      { id: "investigations_active_research_1", label: "Investigations Active Research 1", category: "investigations", isPrimary: true, description: "Evidence locker, evidence analysis, active research, issue spotting, and research memos." },
      { id: "investigations_active_research_2", label: "Investigations Active Research 2", category: "investigations", description: "Evidence locker, evidence analysis, active research, issue spotting, and research memos." },
      { id: "investigations_evidence_analysis_1", label: "Investigations Evidence Analysis 1", category: "investigations", description: "Evidence locker, evidence analysis, active research, issue spotting, and research memos." },
      { id: "investigations_evidence_analysis_2", label: "Investigations Evidence Analysis 2", category: "investigations", description: "Evidence locker, evidence analysis, active research, issue spotting, and research memos." },
      { id: "investigations_evidence_locker_1", label: "Investigations Evidence Locker 1", category: "investigations", description: "Evidence locker, evidence analysis, active research, issue spotting, and research memos." },
      { id: "investigations_evidence_locker_2", label: "Investigations Evidence Locker 2", category: "investigations", description: "Evidence locker, evidence analysis, active research, issue spotting, and research memos." },
      { id: "investigations_exhibit_analysis", label: "Investigations Exhibit Analysis", category: "investigations", description: "Evidence locker, evidence analysis, active research, issue spotting, and research memos." },
      { id: "investigations_issue_spotter", label: "Investigations Issue Spotter", category: "investigations", description: "Evidence locker, evidence analysis, active research, issue spotting, and research memos." },
      { id: "investigations_research_memo", label: "Investigations Research Memo", category: "investigations", description: "Evidence locker, evidence analysis, active research, issue spotting, and research memos." },
    ],
  },
  {
    id: "record_room",
    label: "Record Room",
    icon: "folder_shared",
    route: "/record-room",
    primaryMockup: "record_room_documents_1",
    screens: [
      { id: "record_room_documents_1", label: "Record Room Documents 1", category: "record_room", isPrimary: true, description: "Document vault, draft desk, exhibit gallery, record intake, and record preview." },
      { id: "record_room_documents_2", label: "Record Room Documents 2", category: "record_room", description: "Document vault, draft desk, exhibit gallery, record intake, and record preview." },
      { id: "record_room_draft_desk", label: "Record Room Draft Desk", category: "record_room", description: "Document vault, draft desk, exhibit gallery, record intake, and record preview." },
      { id: "record_room_exhibit_gallery", label: "Record Room Exhibit Gallery", category: "record_room", description: "Document vault, draft desk, exhibit gallery, record intake, and record preview." },
      { id: "record_room_file_a_record", label: "Record Room File A Record", category: "record_room", description: "Document vault, draft desk, exhibit gallery, record intake, and record preview." },
      { id: "record_room_record_preview", label: "Record Room Record Preview", category: "record_room", description: "Document vault, draft desk, exhibit gallery, record intake, and record preview." },
    ],
  },
  {
    id: "law_library",
    label: "Law Library",
    icon: "menu_book",
    route: "/law-library",
    primaryMockup: "law_library_case_folders",
    screens: [
      { id: "law_library_case_folders", label: "Law Library Case Folders", category: "law_library", isPrimary: true, description: "Legal research, stack search, case folders, citation web, and prior research." },
      { id: "law_library_citation_web", label: "Law Library Citation Web", category: "law_library", description: "Legal research, stack search, case folders, citation web, and prior research." },
      { id: "law_library_prior_research", label: "Law Library Prior Research", category: "law_library", description: "Legal research, stack search, case folders, citation web, and prior research." },
      { id: "law_library_research_1", label: "Law Library Research 1", category: "law_library", description: "Legal research, stack search, case folders, citation web, and prior research." },
      { id: "law_library_research_2", label: "Law Library Research 2", category: "law_library", description: "Legal research, stack search, case folders, citation web, and prior research." },
      { id: "law_library_search_the_stacks_1", label: "Law Library Search The Stacks 1", category: "law_library", description: "Legal research, stack search, case folders, citation web, and prior research." },
      { id: "law_library_search_the_stacks_2", label: "Law Library Search The Stacks 2", category: "law_library", description: "Legal research, stack search, case folders, citation web, and prior research." },
    ],
  },
  {
    id: "motions_tasks",
    label: "Motions & Tasks",
    icon: "task_alt",
    route: "/motions",
    primaryMockup: "motions_tasks_court_calendar",
    screens: [
      { id: "motions_tasks_court_calendar", label: "Motions Tasks Court Calendar", category: "motions_tasks", isPrimary: true, description: "Court calendar and motion board." },
      { id: "motions_tasks_motion_board", label: "Motions Tasks Motion Board", category: "motions_tasks", description: "Court calendar and motion board." },
    ],
  },
  {
    id: "court_watch",
    label: "Court Watch",
    icon: "visibility",
    route: "/court-watch",
    primaryMockup: "court_watch_docket_activity",
    screens: [
      { id: "court_watch_docket_activity", label: "Court Watch Docket Activity", category: "court_watch", isPrimary: true, description: "Docket activity monitoring and hearing preparation (war room & prep kit)." },
      { id: "court_watch_hearing_prep_kit", label: "Court Watch Hearing Prep Kit", category: "court_watch", description: "Docket activity monitoring and hearing preparation (war room & prep kit)." },
      { id: "hearing_prep_war_room", label: "Hearing Prep War Room", category: "court_watch", description: "Docket activity monitoring and hearing preparation (war room & prep kit)." },
    ],
  },
  {
    id: "counsel_directory",
    label: "Counsel Directory",
    icon: "contact_page",
    route: "/counsel",
    primaryMockup: "counsel_directory_attorney_profile",
    screens: [
      { id: "counsel_directory_attorney_profile", label: "Counsel Directory Attorney Profile", category: "counsel_directory", isPrimary: true, description: "Search portal, counsel listings, attorney profiles, and pro bono/legal aid." },
      { id: "counsel_directory_counsel_listings", label: "Counsel Directory Counsel Listings", category: "counsel_directory", description: "Search portal, counsel listings, attorney profiles, and pro bono/legal aid." },
      { id: "counsel_directory_pro_bono_legal_aid", label: "Counsel Directory Pro Bono Legal Aid", category: "counsel_directory", description: "Search portal, counsel listings, attorney profiles, and pro bono/legal aid." },
      { id: "counsel_directory_search", label: "Counsel Directory Search", category: "counsel_directory", description: "Search portal, counsel listings, attorney profiles, and pro bono/legal aid." },
      { id: "counsel_directory_search_portal_1", label: "Counsel Directory Search Portal 1", category: "counsel_directory", description: "Search portal, counsel listings, attorney profiles, and pro bono/legal aid." },
      { id: "counsel_directory_search_portal_2", label: "Counsel Directory Search Portal 2", category: "counsel_directory", description: "Search portal, counsel listings, attorney profiles, and pro bono/legal aid." },
    ],
  },
  {
    id: "filing_center",
    label: "Filing Center",
    icon: "send",
    route: "/filing",
    primaryMockup: "filing_center_court_submission",
    screens: [
      { id: "filing_center_court_submission", label: "Filing Center Court Submission", category: "filing_center", isPrimary: true, description: "Human-gated court submission packaging." },
    ],
  },
  {
    id: "lex_operating_system",
    label: "Lex OS & Alexandria",
    icon: "hub",
    route: "/lex",
    primaryMockup: "lex_operating_system",
    screens: [
      { id: "lex_operating_system", label: "Lex Operating System", category: "lex_operating_system", isPrimary: true, description: "Lex Operating System, Legal OS prototype, Alexandria archive, and 3D Core." },
      { id: "legal_os_prototype", label: "Legal Os Prototype", category: "lex_operating_system", description: "Lex Operating System, Legal OS prototype, Alexandria archive, and 3D Core." },
      { id: "alexandria", label: "Alexandria", category: "lex_operating_system", description: "Lex Operating System, Legal OS prototype, Alexandria archive, and 3D Core." },
      { id: "three.js_1", label: "3D Core 1", category: "lex_operating_system", description: "Lex Operating System, Legal OS prototype, Alexandria archive, and 3D Core." },
      { id: "three.js_2", label: "3D Core 2", category: "lex_operating_system", description: "Lex Operating System, Legal OS prototype, Alexandria archive, and 3D Core." },
    ],
  },
  {
    id: "security_settings",
    label: "Security & Settings",
    icon: "shield",
    route: "/security",
    primaryMockup: "workspace_security",
    screens: [
      { id: "workspace_security", label: "Workspace Security", category: "security_settings", isPrimary: true, description: "Workspace security, system audit, AI engine settings, integrations, notifications, accessibility, profile, and help." },
      { id: "system_audit", label: "System Audit", category: "security_settings", description: "Workspace security, system audit, AI engine settings, integrations, notifications, accessibility, profile, and help." },
      { id: "ai_engine_settings", label: "Ai Engine Settings", category: "security_settings", description: "Workspace security, system audit, AI engine settings, integrations, notifications, accessibility, profile, and help." },
      { id: "ai_engine_models_agent_personas_playground_studio", label: "Ai Engine Models Agent Personas Playground Studio", category: "security_settings", description: "Workspace security, system audit, AI engine settings, integrations, notifications, accessibility, profile, and help." },
      { id: "integrations_settings", label: "Integrations Settings", category: "security_settings", description: "Workspace security, system audit, AI engine settings, integrations, notifications, accessibility, profile, and help." },
      { id: "the_clerk_notification_settings", label: "The Clerk Notification Settings", category: "security_settings", description: "Workspace security, system audit, AI engine settings, integrations, notifications, accessibility, profile, and help." },
      { id: "accessibility_settings", label: "Accessibility Settings", category: "security_settings", description: "Workspace security, system audit, AI engine settings, integrations, notifications, accessibility, profile, and help." },
      { id: "user_profile", label: "User Profile", category: "security_settings", description: "Workspace security, system audit, AI engine settings, integrations, notifications, accessibility, profile, and help." },
      { id: "help_onboarding", label: "Help Onboarding", category: "security_settings", description: "Workspace security, system audit, AI engine settings, integrations, notifications, accessibility, profile, and help." },
    ],
  },
];

export const ALL_STITCH_MOCKUPS: string[] = [
  "command_center_dashboard_1",
  "command_center_dashboard_2",
  "command_center_full_navigational_hub",
  "command_center_genteam_workspace_1",
  "command_center_genteam_workspace_2",
  "command_center_home",
  "command_center_interactive_navigational_hub",
  "command_center_navigational_hub",
  "command_center_refined_social_hub_1",
  "command_center_refined_social_hub_2",
  "command_center_social_legal_hub",
  "command_center_social_news_hub",
  "command_center_telegram_legal_hub",
  "chambers_ai_legal_team_1",
  "chambers_ai_legal_team_2",
  "chambers_appoint_counsel",
  "chambers_conference_room_1",
  "chambers_conference_room_2",
  "chambers_counsel_brief",
  "chambers_full_bench_view",
  "chambers_mitigation_memo",
  "chambers_plea_analysis",
  "chambers_rights_audit",
  "chambers_session_transcripts",
  "acquit.ai_genteam_ai_workspace_lemonade_server",
  "acquit.ai_genteam_multi_agent_autonomous_workspace_telegram_lemonade",
  "acquit.ai_telegram_genteam_ai_workspace_lemonade_server",
  "genteam_autonomous_sparring_debate_marcus_sterling_vs_ausa_vance",
  "the_docket_cases_1",
  "the_docket_cases_2",
  "the_docket_closed_matters",
  "the_docket_open_a_matter",
  "the_docket_retrieve_from_court",
  "case_timeline_chronology_1",
  "case_timeline_chronology_2",
  "case_timeline_event_record",
  "case_timeline_log_event",
  "investigations_active_research_1",
  "investigations_active_research_2",
  "investigations_evidence_analysis_1",
  "investigations_evidence_analysis_2",
  "investigations_evidence_locker_1",
  "investigations_evidence_locker_2",
  "investigations_exhibit_analysis",
  "investigations_issue_spotter",
  "investigations_research_memo",
  "record_room_documents_1",
  "record_room_documents_2",
  "record_room_draft_desk",
  "record_room_exhibit_gallery",
  "record_room_file_a_record",
  "record_room_record_preview",
  "law_library_case_folders",
  "law_library_citation_web",
  "law_library_prior_research",
  "law_library_research_1",
  "law_library_research_2",
  "law_library_search_the_stacks_1",
  "law_library_search_the_stacks_2",
  "motions_tasks_court_calendar",
  "motions_tasks_motion_board",
  "court_watch_docket_activity",
  "court_watch_hearing_prep_kit",
  "hearing_prep_war_room",
  "counsel_directory_attorney_profile",
  "counsel_directory_counsel_listings",
  "counsel_directory_pro_bono_legal_aid",
  "counsel_directory_search",
  "counsel_directory_search_portal_1",
  "counsel_directory_search_portal_2",
  "filing_center_court_submission",
  "lex_operating_system",
  "legal_os_prototype",
  "alexandria",
  "three.js_1",
  "three.js_2",
  "workspace_security",
  "system_audit",
  "ai_engine_settings",
  "ai_engine_models_agent_personas_playground_studio",
  "integrations_settings",
  "the_clerk_notification_settings",
  "accessibility_settings",
  "user_profile",
  "help_onboarding",
];

export const STITCH_SCREEN_COUNT = ALL_STITCH_MOCKUPS.length;

export function formatMockupName(name: string): string {
  return name
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function findCategoryForMockup(mockupId: string): StitchCategory | undefined {
  return STITCH_CATEGORIES.find((cat) =>
    cat.screens.some((screen) => screen.id === mockupId)
  );
}

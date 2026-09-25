# Wire Legal OS into App.tsx

Replace `StitchCategoryPage` on MUST routes with React OS pages:

```tsx
import {
  CommandCenterPage,
  DocketEntriesPage,
  ConferenceRoomPage,
  EvidenceLockerPage,
  FilingTablePage,
  ChronologyPage,
  CounselListingsPage,
  RightsAuditPage,
} from "./components/os/OsRouter";

// Primary Legal OS (runtime)
<Route path="/" element={<CommandCenterPage />} />
<Route path="/command-center" element={<CommandCenterPage />} />
<Route path="/docket" element={<DocketEntriesPage />} />
<Route path="/cases" element={<DocketEntriesPage />} />
<Route path="/chambers" element={<ConferenceRoomPage />} />
<Route path="/ai-lab" element={<ConferenceRoomPage />} />
<Route path="/rights-audit" element={<RightsAuditPage />} />
<Route path="/investigations" element={<EvidenceLockerPage />} />
<Route path="/evidence" element={<EvidenceLockerPage />} />
<Route path="/record-room" element={<FilingTablePage />} />
<Route path="/documents" element={<FilingTablePage />} />
<Route path="/timeline" element={<ChronologyPage />} />
<Route path="/case-timeline" element={<ChronologyPage />} />
<Route path="/counsel" element={<CounselListingsPage />} />
<Route path="/attorney-directory" element={<CounselListingsPage />} />

// Stitch remains design-only
<Route path="/gallery" element={<StitchGallery />} />
<Route path="/stitch" element={<StitchGallery />} />
<Route path="/stitch/:mockupName" element={<StitchMockupDirectPage />} />
```

Keep `StitchMasterNav` category bar pointing at the same paths — users land on React OS, not HTML mockups.

import { getStitchComponent } from "@/components/stitch/registry";
import StitchPage from "@/lib/stitch/StitchPage";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Chambers - AI Legal Team | Acquit.ai",
  description: "Multi-agent legal workspace with specialized AI counselors",
};

const FOLDER = "chambers_ai_legal_team_1";

export default function ChambersPage() {
  const ReactPage = getStitchComponent(FOLDER);
  if (ReactPage) return <ReactPage />;
  return <StitchPage folder={FOLDER} />;
}

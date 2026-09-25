import { getStitchComponent } from "@/components/stitch/registry";
import StitchPage from "@/lib/stitch/StitchPage";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "The Docket | Acquit.ai",
  description: "Open matters, closed cases, and court retrieval",
};

const FOLDER = "the_docket_cases_1";

export default function DocketPage() {
  const ReactPage = getStitchComponent(FOLDER);
  if (ReactPage) return <ReactPage />;
  return <StitchPage folder={FOLDER} />;
}

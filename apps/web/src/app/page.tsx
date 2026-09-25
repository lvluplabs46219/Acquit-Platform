import { getStitchComponent } from "@/components/stitch/registry";
import StitchPage from "@/lib/stitch/StitchPage";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const ReactPage = getStitchComponent("command_center_home");
  if (ReactPage) return <ReactPage />;
  return <StitchPage folder="command_center_home" />;
}

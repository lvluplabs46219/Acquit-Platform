import { notFound } from "next/navigation";
import { getStitchComponent } from "@/components/stitch/registry";
import StitchPage from "@/lib/stitch/StitchPage";
import { resolveStitchFolder } from "@/lib/stitch/route-map";

export const dynamic = "force-dynamic";

export default async function StitchRoutePage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug = [] } = await params;
  const folder = resolveStitchFolder(slug);
  if (!folder) notFound();

  const ReactPage = getStitchComponent(folder);
  if (ReactPage) return <ReactPage />;

  // Fallback while a design has not been converted yet.
  return <StitchPage folder={folder} />;
}

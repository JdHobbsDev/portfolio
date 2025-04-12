import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), "public");
    const projectFolders = {
      "minds-matter-uk": path.join(publicDir, "projects", "minds-matter"),
      "asteroid-studios-ticket": path.join(
        publicDir,
        "projects",
        "asteroid-ticket",
      ),
      "utility-bots": path.join(publicDir, "projects", "utility-bot"),
    };
    const result: Record<string, string[]> = {};
    for (const [projectId, folderPath] of Object.entries(projectFolders)) {
      try {
        if (fs.existsSync(folderPath)) {
          const files = fs
            .readdirSync(folderPath)
            .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
            .map(
              (file) =>
                `/projects/${
                  projectId.includes("minds-matter")
                    ? "minds-matter"
                    : projectId.includes("asteroid")
                      ? "asteroid-ticket"
                      : "utility-bot"
                }/${file}`,
            );
          result[projectId] = files;
        } else {
          result[projectId] = [];
        }
      } catch (error) {
        console.error(`Error reading directory for ${projectId}:`, error);
        result[projectId] = [];
      }
    }
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error in project-images API route:", error);
    return NextResponse.json(
      { error: "Failed to fetch project images" },
      { status: 500 },
    );
  }
}

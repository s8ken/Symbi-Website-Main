import path from "path"
import fs from "fs"

export const dynamic = "force-dynamic"

function fileExists(p: string) {
  try {
    return fs.existsSync(p)
  } catch {
    return false
  }
}

export async function GET() {
  const dir = path.join(process.cwd(), "public", "archives")
  const part1 = path.join(dir, "all_text_part1.jsonl")
  const part2 = path.join(dir, "all_text_part2.jsonl")
  const combined = path.join(dir, "all_text.jsonl")

  const useParts = fileExists(part1) && fileExists(part2)
  const sourceFiles = useParts && (!fileExists(combined) || true) ? [part1, part2] : [combined]

  const stream = new ReadableStream({
    start(controller) {
      ;(async () => {
        for (const file of sourceFiles) {
          await new Promise<void>((resolve, reject) => {
            const rs = fs.createReadStream(file)
            rs.on("data", (chunk) => controller.enqueue(chunk))
            rs.on("error", reject)
            rs.on("end", () => resolve())
          })
        }
        controller.close()
      })().catch((e) => {
        controller.enqueue(new TextEncoder().encode(JSON.stringify({ error: String(e) }) + "\n"))
        controller.close()
      })
    },
  })

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  })
}


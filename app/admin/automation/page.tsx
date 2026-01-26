import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";

export default async function AdminAutomationPage() {
  const automations = await prisma.automation.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">자동화 관리</h1>
        <p className="text-white/50 text-sm">등록된 자동화 템플릿을 조회합니다.</p>
      </div>

      <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-black/20 text-white/40 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-8 py-5 font-semibold">Title</th>
              <th className="px-8 py-5 font-semibold">Category</th>
              <th className="px-8 py-5 font-semibold">Author</th>
              <th className="px-8 py-5 font-semibold">Created</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {automations.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-8 py-12 text-center text-white/30">
                  등록된 자동화 템플릿이 없습니다.
                </td>
              </tr>
            ) : (
              automations.map(automation => (
                <tr key={automation.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-8 py-5">
                    <div className="font-bold text-white text-lg">
                      {automation.title}
                    </div>
                    <div className="text-white/40 text-xs mt-1">
                      {automation.description}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
                      {automation.category}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-white/70">
                    {automation.author}
                  </td>
                  <td className="px-8 py-5 text-white/40 font-mono text-xs">
                    {formatDate(automation.createdAt)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { signOut } from "@/actions/auth";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <span className="text-xl font-bold text-gray-800 dark:text-white">
                  My SaaS
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-4 text-sm text-gray-500 dark:text-gray-400">
                {user.email}
              </span>
              <form action={signOut}>
                <Button variant="outline" size="sm">Sign Out</Button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                     <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Subscription Status</h3>
                     <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Free Tier</p>
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                     <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">API Usage</h3>
                     <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">0 / 1000 requests</p>
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
                     <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Projects</h3>
                     <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">1 Active Project</p>
                  </div>
               </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

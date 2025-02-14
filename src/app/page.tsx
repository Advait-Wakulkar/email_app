import { Button } from "@/components/ui/button";
import { api } from "@/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
}

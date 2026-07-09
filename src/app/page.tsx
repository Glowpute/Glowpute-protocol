import Hero from "@/components/Hero";
import Features from "@/components/Features";
import NodeStatus from "@/components/NodeStatus";
import RewardsDashboard from "@/components/RewardsDashboard";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <NodeStatus />
      <RewardsDashboard />
    </>
  );
}

export default function NodeStatus() {
  return (
    <section className="max-w-6xl mx-auto py-20">

      <div className="grid md:grid-cols-4 gap-6">

        <div className="border rounded-xl p-6">
          Active Nodes
          <h2>14,208</h2>
        </div>

        <div className="border rounded-xl p-6">
          Online GPUs
          <h2>18,431</h2>
        </div>

        <div className="border rounded-xl p-6">
          Jobs Running
          <h2>2,908</h2>
        </div>

        <div className="border rounded-xl p-6">
          Network Compute
          <h2>412 TFLOPS</h2>
        </div>

      </div>

    </section>
  );
}

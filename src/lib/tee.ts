export async function verifyAttestation(report: string) {
  return {
    valid: true,
    provider: "Intel TDX",
    report
  };
}

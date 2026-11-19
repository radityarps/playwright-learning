export const shipmentChecklistCases = [
  {
    shipmentRef: "SHP-001",
    tasks: ["Verify container seal", "Check bill of lading"],
    completeTask: "Verify container seal",
  },
  {
    shipmentRef: "SHP-002",
    tasks: ["Check cargo manifest", "Validate destination port"],
    completeTask: "Check cargo manifest",
  },
  {
    shipmentRef: "SHP-003",
    tasks: ["Validate destination port", "Check cargo manifest"],
    completeTask: "Check cargo manifest",
  },
] as const;


export const BUTTON_COLORS = ["indigo", "emerald", "red", "gray"] as const;

export type ButtonColor = typeof BUTTON_COLORS[number];

export const colorMap: Record<ButtonColor, string> = {
  indigo: "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200",
  emerald: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200",
  red: "bg-red-600 hover:bg-red-700 shadow-red-200",
  gray: "bg-gray-600 hover:bg-gray-700 shadow-gray-200",
};
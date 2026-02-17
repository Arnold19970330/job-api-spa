import type { ButtonColor } from "../types/colors";
import { colorMap } from "../types/colors";

interface CustomButtonProps {
  color?: ButtonColor;        // Az '?' jelzi: "Nem kötelező megadni"
  children: React.ReactNode; 
  onClick?: () => void;
}

// 3. A komponens exportálása
// Itt a ({ color = "indigo", ... }) rész állítja be az alapértelmezett színt
export const CustomButton = ({ 
  color = "indigo", 
  children, 
  onClick 
}: CustomButtonProps) => {
  
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-xl font-bold text-white transition-all shadow-lg active:scale-95 ${colorMap[color]}`}
    >
      {children}
    </button>
  );
};
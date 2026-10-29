import React from "react";
import { type LucideIcon } from "lucide-react";

export interface MockupProps {
  notice?: string;
  t?: (key: string) => string;
}

export interface DeepDiveItem {
  id: string;
  eyebrowKey: string;
  titleKey: string;
  descKey: string;
  bulletKeys: string[];
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  renderVisual: (t: (key: string) => string) => React.ReactNode;
}


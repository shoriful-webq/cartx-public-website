"use client";

import React from "react";
import {
  CreditCard,
  Truck,
  BarChart3,
  MessageSquare,
  Globe,
  ShieldCheck,
  Lock,
  CheckCircle2,
  AlertCircle,
  Layers,
  ArrowRight,
  Zap,
  Server,
  KeyRound,
  FileCheck,
  Send,
  HelpCircle,
  LucideProps,
} from "lucide-react";

interface IntegrationIconProps extends LucideProps {
  name: string;
}

export function IntegrationIcon({ name, ...props }: IntegrationIconProps) {
  switch (name) {
    case "CreditCard":
      return <CreditCard {...props} />;
    case "Truck":
      return <Truck {...props} />;
    case "BarChart3":
      return <BarChart3 {...props} />;
    case "MessageSquare":
      return <MessageSquare {...props} />;
    case "Globe":
      return <Globe {...props} />;
    case "ShieldCheck":
      return <ShieldCheck {...props} />;
    case "Lock":
      return <Lock {...props} />;
    case "CheckCircle2":
      return <CheckCircle2 {...props} />;
    case "AlertCircle":
      return <AlertCircle {...props} />;
    case "Layers":
      return <Layers {...props} />;
    case "Zap":
      return <Zap {...props} />;
    case "Server":
      return <Server {...props} />;
    case "KeyRound":
      return <KeyRound {...props} />;
    case "FileCheck":
      return <FileCheck {...props} />;
    case "Send":
      return <Send {...props} />;
    case "HelpCircle":
      return <HelpCircle {...props} />;
    case "ArrowRight":
      return <ArrowRight {...props} />;
    default:
      return <Layers {...props} />;
  }
}


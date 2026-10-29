import React from "react";
import { TrendingUp } from "lucide-react";
import { MockupFrame } from "../mockup-frame";
import { type MockupProps } from "../types";

export function ReportsAnalyticsMockup({
  notice,
  t = (k: string) => k,
}: MockupProps) {
  return (
    <MockupFrame
      url="admin.cartx.app/analytics"
      notice={notice}
      bodyClassName="space-y-3"
    >
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
          <span className="text-[9px] text-muted-foreground block">
            {t("featuresMockup.monthlyGross")}
          </span>
          <span className="text-base font-bold text-foreground">৳1,84,200</span>
          <span className="text-[8.5px] text-success flex items-center gap-0.5 mt-0.5">
            <TrendingUp className="size-2.5" /> +14.2% vs prev
          </span>
        </div>

        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
          <span className="text-[9px] text-muted-foreground block">
            {t("featuresMockup.lifetimeOrders")}
          </span>
          <span className="text-base font-bold text-foreground">
            218 Orders
          </span>
          <span className="text-[8.5px] text-primary block mt-0.5">
            {t("featuresMockup.avgOrderValue")}
          </span>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
        <div className="flex items-center justify-between text-[9.5px] mb-2">
          <span className="font-semibold text-foreground">
            Weekly Sales Activity
          </span>
          <span className="text-muted-foreground font-mono">Last 7 Days</span>
        </div>
        <div className="flex items-end justify-between gap-1.5 h-14 pt-1">
          {[45, 60, 50, 75, 85, 95, 70].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full rounded-t bg-primary/80 hover:bg-primary transition-colors"
                style={{ height: `${h}%` }}
              />
              <span className="text-[7.5px] text-muted-foreground">
                D{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </MockupFrame>
  );
}


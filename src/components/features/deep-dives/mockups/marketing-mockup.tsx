import React from "react";
import { Tag } from "lucide-react";
import { MockupFrame } from "../mockup-frame";
import { type MockupProps } from "../types";

export function MarketingMockup({ notice, t = (k: string) => k }: MockupProps) {
  return (
    <MockupFrame
      url="admin.cartx.app/promotions"
      notice={notice}
      bodyClassName="space-y-2.5"
    >
      <p className="text-xs font-bold text-foreground">
        {t("featuresMockup.campaignCoupons")}
      </p>
      <div className="rounded-lg border border-border bg-card overflow-hidden divide-y divide-border/60 shadow-2xs">
        <div className="p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tag className="size-3.5 text-primary" />
            <div>
              <span className="font-mono font-bold text-xs text-foreground">
                EID2026
              </span>
              <span className="text-[9px] text-muted-foreground block">
                15% off • Min order ৳1,500
              </span>
            </div>
          </div>
          <span className="text-[8.5px] font-semibold bg-success/10 text-success px-2 py-0.5 rounded">
            Active
          </span>
        </div>

        <div className="p-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Tag className="size-3.5 text-primary" />
            <div>
              <span className="font-mono font-bold text-xs text-foreground">
                FREESHIP
              </span>
              <span className="text-[9px] text-muted-foreground block">
                Free delivery • Min ৳2,000
              </span>
            </div>
          </div>
          <span className="text-[8.5px] font-semibold bg-success/10 text-success px-2 py-0.5 rounded">
            Active
          </span>
        </div>
      </div>

      <div className="rounded-md border border-border bg-card p-2 text-[9.5px] text-muted-foreground flex items-center justify-between">
        <span>{t("featuresMockup.usageLimit")}</span>
        <span className="font-bold text-foreground">428 Uses</span>
      </div>
    </MockupFrame>
  );
}


import React from "react";
import { Truck } from "lucide-react";
import { MockupFrame } from "../mockup-frame";
import { type MockupProps } from "../types";

export function DeliveryOperationsMockup({
  notice,
  t = (k: string) => k,
}: MockupProps) {
  return (
    <MockupFrame
      url="admin.cartx.app/shipping"
      notice={notice}
      bodyClassName="space-y-2.5"
    >
      <p className="text-xs font-bold text-foreground">
        Shipping Rate Configurations
      </p>
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
          <span className="text-[9px] text-muted-foreground block">
            {t("featuresMockup.insideDhaka")}
          </span>
          <span className="text-sm font-bold text-foreground">৳60</span>
          <span className="text-[8.5px] text-success block mt-0.5">
            24–48 Hours
          </span>
        </div>
        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
          <span className="text-[9px] text-muted-foreground block">
            {t("featuresMockup.outsideDhaka")}
          </span>
          <span className="text-sm font-bold text-foreground">৳120</span>
          <span className="text-[8.5px] text-primary block mt-0.5">
            48–72 Hours
          </span>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
        <p className="text-[10px] font-semibold text-foreground mb-1.5">
          Active Courier Integrations
        </p>
        <div className="flex items-center justify-between text-[9.5px] bg-muted/30 p-2 rounded">
          <div className="flex items-center gap-2">
            <Truck className="size-3.5 text-primary" />
            <span className="font-semibold text-foreground">
              {t("featuresMockup.pathaoSteadfast")}
            </span>
          </div>
          <span className="text-[8.5px] font-semibold bg-success/10 text-success px-1.5 py-0.2 rounded">
            Ready
          </span>
        </div>
      </div>
    </MockupFrame>
  );
}


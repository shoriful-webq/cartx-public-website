import React from "react";
import { MockupFrame } from "../mockup-frame";
import { type MockupProps } from "../types";

export function PaymentManagementMockup({
  notice,
  t = (k: string) => k,
}: MockupProps) {
  return (
    <MockupFrame
      url="admin.cartx.app/payments"
      notice={notice}
      bodyClassName="space-y-2.5"
    >
      <p className="text-xs font-bold text-foreground">
        {t("featuresMockup.mfsGateway")}
      </p>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-pink-600 text-xs">bKash</span>
            <span className="size-1.5 rounded-full bg-success" />
          </div>
          <p className="text-[9px] text-muted-foreground">
            {t("featuresMockup.instantCallback")}
          </p>
          <span className="text-[8.5px] font-semibold text-success bg-success/10 px-1.5 py-0.2 rounded mt-1.5 inline-block">
            {t("featuresMockup.activeConnected")}
          </span>
        </div>

        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-orange-600 text-xs">Nagad</span>
            <span className="size-1.5 rounded-full bg-success" />
          </div>
          <p className="text-[9px] text-muted-foreground">
            {t("featuresMockup.verifiedActive")}
          </p>
          <span className="text-[8.5px] font-semibold text-success bg-success/10 px-1.5 py-0.2 rounded mt-1.5 inline-block">
            {t("featuresMockup.activeConnected")}
          </span>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
        <div className="flex items-center justify-between text-[9px] font-semibold text-muted-foreground pb-1.5 mb-1.5 border-b border-border/60">
          <span>Recent Settlement</span>
          <span>{t("featuresMockup.status")}</span>
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <div>
            <span className="font-mono font-bold text-foreground">
              TXN-49201
            </span>
            <span className="text-[8.5px] text-muted-foreground block">
              ৳2,450 • bKash Merchant
            </span>
          </div>
          <span className="text-[8.5px] font-semibold text-success bg-success/10 px-2 py-0.5 rounded">
            Settled
          </span>
        </div>
      </div>
    </MockupFrame>
  );
}


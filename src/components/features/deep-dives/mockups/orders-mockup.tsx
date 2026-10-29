import React from "react";
import { MockupFrame } from "../mockup-frame";
import { type MockupProps } from "../types";

export function OrdersMockup({ notice, t = (k: string) => k }: MockupProps) {
  return (
    <MockupFrame
      url="admin.cartx.app/orders/1084"
      notice={notice}
      bodyClassName="space-y-3"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-foreground">Order #1084</span>
            <span className="text-[8.5px] font-semibold bg-primary/10 text-primary px-1.5 py-0.2 rounded">
              bKash Paid
            </span>
          </div>
          <p className="text-[9.5px] text-muted-foreground mt-0.5">
            Customer: Nusrat Jahan • 017********
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold text-foreground block">৳3,450</span>
          <span className="text-[8.5px] text-muted-foreground">2 Items</span>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-3 shadow-2xs space-y-2">
        <p className="text-[10px] font-semibold text-foreground uppercase tracking-wider">
          Order Fulfillment Timeline
        </p>
        <div className="grid grid-cols-4 gap-1 text-center text-[9px]">
          <div className="flex flex-col items-center">
            <div className="size-4 rounded-full bg-success text-white flex items-center justify-center text-[8px] font-bold">
              ✓
            </div>
            <span className="font-semibold text-foreground mt-1">
              {t("featuresMockup.placed")}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="size-4 rounded-full bg-success text-white flex items-center justify-center text-[8px] font-bold">
              ✓
            </div>
            <span className="font-semibold text-foreground mt-1">
              {t("featuresMockup.confirmed")}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="size-4 rounded-full bg-primary text-white flex items-center justify-center text-[8px] font-bold animate-pulse">
              •
            </div>
            <span className="font-semibold text-primary mt-1">
              {t("featuresMockup.dispatched")}
            </span>
          </div>
          <div className="flex flex-col items-center opacity-60">
            <div className="size-4 rounded-full bg-muted border border-border flex items-center justify-center text-[8px]">
              4
            </div>
            <span className="text-muted-foreground mt-1">
              {t("featuresMockup.delivered")}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[9.5px]">
        <div className="bg-card p-2 rounded border border-border">
          <span className="text-muted-foreground block text-[8.5px]">
            Courier Partner
          </span>
          <span className="font-bold text-foreground">Pathao Express</span>
        </div>
        <div className="bg-card p-2 rounded border border-border">
          <span className="text-muted-foreground block text-[8.5px]">
            Consignment ID
          </span>
          <span className="font-mono font-bold text-foreground">PTH-90218</span>
        </div>
      </div>
    </MockupFrame>
  );
}


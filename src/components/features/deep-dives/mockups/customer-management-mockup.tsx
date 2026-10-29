import React from "react";
import { MockupFrame } from "../mockup-frame";
import { type MockupProps } from "../types";

export function CustomerManagementMockup({
  notice,
  t = (k: string) => k,
}: MockupProps) {
  return (
    <MockupFrame
      url="admin.cartx.app/customers/302"
      notice={notice}
      bodyClassName="space-y-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
            NJ
          </div>
          <div>
            <p className="text-xs font-bold text-foreground">Nusrat Jahan</p>
            <p className="text-[9.5px] text-muted-foreground">
              01712-345678 • nusrat@example.com
            </p>
          </div>
        </div>
        <span className="text-[8.5px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
          {t("featuresMockup.vipShopper")}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-[10px]">
        <div className="bg-card p-2 rounded border border-border">
          <span className="text-[9px] text-muted-foreground block">
            {t("featuresMockup.lifetimeOrders")}
          </span>
          <span className="text-sm font-bold text-foreground">4 Orders</span>
        </div>
        <div className="bg-card p-2 rounded border border-border">
          <span className="text-[9px] text-muted-foreground block">
            {t("featuresMockup.totalSpend")}
          </span>
          <span className="text-sm font-bold text-foreground">৳12,450</span>
        </div>
        <div className="bg-card p-2 rounded border border-border">
          <span className="text-[9px] text-muted-foreground block">
            Last Order
          </span>
          <span className="text-sm font-bold text-foreground">2 days ago</span>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs space-y-1">
        <div className="flex items-center justify-between text-[9.5px]">
          <span className="font-semibold text-foreground">
            {t("featuresMockup.savedAddress")}
          </span>
          <span className="text-muted-foreground font-mono">Verified</span>
        </div>
        <p className="text-[9px] text-muted-foreground leading-snug">
          House 42, Road 11, Block D, Banani, Dhaka 1213
        </p>
      </div>
    </MockupFrame>
  );
}


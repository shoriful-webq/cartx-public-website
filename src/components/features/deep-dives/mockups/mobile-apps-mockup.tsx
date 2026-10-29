import React from "react";
import { ShoppingBag, Clock, Smartphone, Bell } from "lucide-react";
import { MockupFrame } from "../mockup-frame";
import { type MockupProps } from "../types";

export function MobileAppsMockup({
  notice,
  t = (k: string) => k,
}: MockupProps) {
  return (
    <MockupFrame
      url="console.cartx.app/mobile-apps"
      notice={notice}
      bodyClassName="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center"
    >
      <div className="sm:col-span-7 bg-card border border-border rounded-xl p-3 shadow-2xs space-y-2.5">
        <div className="flex items-center justify-between pb-1.5 border-b border-border">
          <span className="font-serif font-extrabold text-xs text-foreground tracking-wider">
            AURA STUDIO
          </span>
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <ShoppingBag className="size-3 text-primary" />
            <span className="font-bold text-foreground">2</span>
          </div>
        </div>

        <div className="rounded bg-gradient-to-r from-primary/15 to-secondary-accent/15 border border-primary/20 p-2">
          <span className="text-[7.5px] font-bold uppercase tracking-wider text-primary">
            Native App
          </span>
          <p className="text-[11px] font-bold text-foreground leading-tight mt-0.5">
            {t("featuresMockup.subSecond")}
          </p>
        </div>

        <div className="rounded border border-border bg-background p-2 shadow-2xs flex items-center gap-2">
          <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <Clock className="size-2.5" />
          </div>
          <div>
            <p className="text-[9px] font-bold text-foreground leading-none">
              Order #1084 Out for Delivery
            </p>
            <p className="text-[8px] text-muted-foreground mt-0.5">
              Pathao Express Courier arrives soon
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1 pt-1 border-t border-border text-center text-[7.5px] text-muted-foreground">
          <span className="font-bold text-primary">Shop</span>
          <span>Catalog</span>
          <span>Cart (2)</span>
          <span>Profile</span>
        </div>
      </div>

      <div className="sm:col-span-5 space-y-2">
        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
          <div className="flex items-center gap-1.5 text-primary mb-1">
            <Smartphone className="size-3.5" />
            <span className="text-[10px] font-bold text-foreground">
              {t("featuresMockup.nativeApps")}
            </span>
          </div>
          <p className="text-[9px] text-muted-foreground leading-snug">
            {t("featuresMockup.customBranded")}
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs">
          <div className="flex items-center gap-1.5 text-secondary-accent mb-1">
            <Bell className="size-3.5" />
            <span className="text-[10px] font-bold text-foreground">
              {t("featuresMockup.pushAlerts")}
            </span>
          </div>
          <p className="text-[9px] text-muted-foreground leading-snug">
            Direct automated customer alerts for orders, offers, and restocks.
          </p>
        </div>
      </div>
    </MockupFrame>
  );
}


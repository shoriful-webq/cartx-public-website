import React from "react";
import { Boxes } from "lucide-react";
import { MockupFrame } from "../mockup-frame";
import { type MockupProps } from "../types";

export function InventoryControlMockup({
  notice,
  t = (k: string) => k,
}: MockupProps) {
  return (
    <MockupFrame
      url="admin.cartx.app/inventory"
      notice={notice}
      bodyClassName="space-y-2.5"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-foreground">
            {t("featuresMockup.inventoryOverview")}
          </p>
          <p className="text-[9px] text-muted-foreground">
            Automated stock tracking enabled
          </p>
        </div>
        <span className="text-[9px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
          Central Warehouse
        </span>
      </div>

      <div className="rounded-lg border border-border bg-card overflow-hidden divide-y divide-border/60 shadow-2xs">
        <div className="px-3 py-1.5 bg-muted/30 text-[9px] font-semibold text-muted-foreground grid grid-cols-4">
          <span>Item / SKU</span>
          <span>{t("featuresMockup.inStock")}</span>
          <span>Threshold</span>
          <span className="text-right">{t("featuresMockup.status")}</span>
        </div>
        <div className="px-3 py-2 text-[10px] grid grid-cols-4 items-center">
          <span className="font-semibold text-foreground">LNN-BLU-L</span>
          <span className="font-bold text-foreground">42 units</span>
          <span className="text-muted-foreground">10 units</span>
          <span className="text-right font-bold text-success">Healthy</span>
        </div>
        <div className="px-3 py-2 text-[10px] grid grid-cols-4 items-center">
          <span className="font-semibold text-foreground">LNN-SND-M</span>
          <span className="font-bold text-amber-600 dark:text-amber-400">
            3 units
          </span>
          <span className="text-muted-foreground">10 units</span>
          <span className="text-right font-bold text-amber-600 dark:text-amber-400">
            {t("featuresMockup.lowStock")}
          </span>
        </div>
        <div className="px-3 py-2 text-[10px] grid grid-cols-4 items-center">
          <span className="font-semibold text-foreground">LNN-WHT-S</span>
          <span className="font-bold text-foreground">18 units</span>
          <span className="text-muted-foreground">5 units</span>
          <span className="text-right font-bold text-success">Healthy</span>
        </div>
      </div>

      <div className="rounded-md border border-border bg-card p-2 text-[9.5px] text-muted-foreground flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <Boxes className="size-3 text-primary" />
          Automatic stock deduction upon verified customer checkout
        </span>
        <span className="font-semibold text-primary font-mono text-[9px]">
          Active Sync
        </span>
      </div>
    </MockupFrame>
  );
}


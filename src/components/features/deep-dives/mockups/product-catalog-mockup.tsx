import React from "react";
import { Package } from "lucide-react";
import { MockupFrame } from "../mockup-frame";
import { type MockupProps } from "../types";

export function ProductCatalogMockup({
  notice,
  t = (k: string) => k,
}: MockupProps) {
  return (
    <MockupFrame
      url="admin.cartx.app/products"
      notice={notice}
      bodyClassName="space-y-2.5"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-foreground">
            {t("featuresMockup.prodTitle")}
          </p>
          <p className="text-[9px] font-mono text-muted-foreground">
            SKU: LNN-SHIRT-2026
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9.5px] line-through text-muted-foreground">
            ৳2,200
          </span>
          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
            ৳1,850
          </span>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card overflow-hidden divide-y divide-border/60 shadow-2xs">
        <div className="px-3 py-1.5 bg-muted/30 text-[9px] font-semibold text-muted-foreground grid grid-cols-4">
          <span>{t("featuresMockup.variant")}</span>
          <span>{t("featuresMockup.sku")}</span>
          <span>{t("featuresMockup.price")}</span>
          <span className="text-right">{t("featuresMockup.compareAt")}</span>
        </div>
        <div className="px-3 py-2 text-[10px] grid grid-cols-4 items-center">
          <span className="font-semibold text-foreground">Blue / M</span>
          <span className="font-mono text-muted-foreground text-[9px]">
            LNN-BLU-M
          </span>
          <span className="text-foreground font-semibold">৳1,850</span>
          <span className="text-right text-muted-foreground">৳2,200</span>
        </div>
        <div className="px-3 py-2 text-[10px] grid grid-cols-4 items-center">
          <span className="font-semibold text-foreground">Sand / L</span>
          <span className="font-mono text-muted-foreground text-[9px]">
            LNN-SND-L
          </span>
          <span className="text-foreground font-semibold">৳1,850</span>
          <span className="text-right text-muted-foreground">৳2,200</span>
        </div>
        <div className="px-3 py-2 text-[10px] grid grid-cols-4 items-center">
          <span className="font-semibold text-foreground">White / XL</span>
          <span className="font-mono text-muted-foreground text-[9px]">
            LNN-WHT-XL
          </span>
          <span className="text-foreground font-semibold">৳1,850</span>
          <span className="text-right text-muted-foreground">৳2,200</span>
        </div>
      </div>

      <div className="rounded-md border border-border bg-card p-2 text-[9.5px] text-muted-foreground flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <Package className="size-3 text-primary" />
          High-res media gallery with 4 product angles
        </span>
        <span className="font-semibold text-success">Optimized</span>
      </div>
    </MockupFrame>
  );
}


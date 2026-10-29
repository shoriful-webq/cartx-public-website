import React from "react";
import { Globe, Lock, Store } from "lucide-react";
import { MockupFrame } from "../mockup-frame";
import { type MockupProps } from "../types";

export function StorefrontMockup({
  notice,
  t = (k: string) => k,
}: MockupProps) {
  return (
    <MockupFrame
      url="admin.cartx.app/storefront"
      notice={notice}
      bodyClassName="space-y-3"
    >
      <div className="rounded-lg border border-border bg-card p-3 shadow-2xs">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Globe className="size-4 text-primary" />
            <div>
              <p className="text-xs font-bold text-foreground">
                {t("featuresMockup.customDomain")}
              </p>
              <p className="text-[9.5px] text-muted-foreground">
                {t("featuresMockup.customDomainDesc")}
              </p>
            </div>
          </div>
          <span className="text-[8.5px] font-semibold text-success bg-success/10 px-2 py-0.5 rounded border border-success/20">
            {t("featuresMockup.activeConnected")}
          </span>
        </div>
        <div className="flex items-center justify-between bg-muted/30 rounded p-2 text-xs font-mono">
          <span className="font-semibold text-foreground">mystore.com.bd</span>
          <span className="text-[9px] text-muted-foreground flex items-center gap-1">
            <Lock className="size-2.5 text-success" />{" "}
            {t("featuresMockup.sslAutoRenewed")}
          </span>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-3 shadow-2xs space-y-2">
        <p className="text-xs font-bold text-foreground">
          {t("featuresMockup.brandIdentity")}
        </p>
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="bg-muted/30 p-2 rounded border border-border/50">
            <span className="text-muted-foreground block text-[9px]">
              {t("featuresMockup.storeDisplayName")}
            </span>
            <span className="font-semibold text-foreground">Aura Boutique</span>
          </div>
          <div className="bg-muted/30 p-2 rounded border border-border/50">
            <span className="text-muted-foreground block text-[9px]">
              {t("featuresMockup.primaryColor")}
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="size-3 rounded-full bg-primary" />
              <span className="font-semibold font-mono text-foreground">
                #2563EB
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Store className="size-4 text-primary" />
          <span className="text-xs font-medium text-foreground">
            {t("featuresMockup.storefrontTheme")}
          </span>
        </div>
        <span className="text-[9px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded">
          {t("featuresMockup.themeLive")}
        </span>
      </div>
    </MockupFrame>
  );
}


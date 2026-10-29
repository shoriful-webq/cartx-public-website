import React from "react";
import { Key, Users, Lock, Database } from "lucide-react";
import { MockupFrame } from "../mockup-frame";
import { type MockupProps } from "../types";

export function SecurityMockup({ notice, t = (k: string) => k }: MockupProps) {
  return (
    <MockupFrame
      url="admin.cartx.app/security"
      notice={notice}
      bodyClassName="space-y-2.5"
    >
      <p className="text-xs font-bold text-foreground">
        {t("featuresMockup.securityRoles")}
      </p>
      <div className="rounded-lg border border-border bg-card overflow-hidden divide-y divide-border/60 shadow-2xs text-[10px]">
        <div className="p-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Key className="size-3.5 text-primary" />
            <div>
              <span className="font-semibold text-foreground">
                {t("featuresMockup.storeOwner")}
              </span>
              <span className="text-[8.5px] text-muted-foreground block">
                {t("featuresMockup.storeOwnerDesc")}
              </span>
            </div>
          </div>
          <span className="text-[8.5px] font-semibold text-success bg-success/10 px-2 py-0.5 rounded">
            Active
          </span>
        </div>

        <div className="p-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="size-3.5 text-secondary-accent" />
            <div>
              <span className="font-semibold text-foreground">
                {t("featuresMockup.operationsStaff")}
              </span>
              <span className="text-[8.5px] text-muted-foreground block">
                {t("featuresMockup.operationsStaffDesc")}
              </span>
            </div>
          </div>
          <span className="text-[8.5px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
            2 Accounts
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[9.5px]">
        <div className="bg-card p-2 rounded border border-border flex items-center gap-2">
          <Lock className="size-3.5 text-success" />
          <div>
            <span className="font-bold text-foreground block">
              {t("featuresMockup.tls256")}
            </span>
            <span className="text-[8px] text-muted-foreground">
              {t("featuresMockup.checkoutEncryption")}
            </span>
          </div>
        </div>
        <div className="bg-card p-2 rounded border border-border flex items-center gap-2">
          <Database className="size-3.5 text-primary" />
          <div>
            <span className="font-bold text-foreground block">
              {t("featuresMockup.dailyBackups")}
            </span>
            <span className="text-[8px] text-muted-foreground">
              {t("featuresMockup.autoEncrypted")}
            </span>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}


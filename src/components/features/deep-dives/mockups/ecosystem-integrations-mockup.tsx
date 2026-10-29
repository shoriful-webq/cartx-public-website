import React from "react";
import { Truck, CreditCard, Code, BarChart3, Layers } from "lucide-react";
import { MockupFrame } from "../mockup-frame";
import { type MockupProps } from "../types";

export function EcosystemIntegrationsMockup({
  notice,
  t = (k: string) => k,
}: MockupProps) {
  return (
    <MockupFrame
      url="admin.cartx.app/integrations"
      notice={notice}
      bodyClassName="space-y-2.5"
    >
      <p className="text-xs font-bold text-foreground">
        {t("featuresMockup.apiConnectors")}
      </p>
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="bg-card p-2.5 rounded-lg border border-border shadow-2xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="size-3.5 text-primary" />
            <div>
              <span className="font-semibold text-foreground block">
                Pathao Courier
              </span>
              <span className="text-[8.5px] text-muted-foreground">
                Logistics Dispatch
              </span>
            </div>
          </div>
          <span className="size-2 rounded-full bg-success" />
        </div>

        <div className="bg-card p-2.5 rounded-lg border border-border shadow-2xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="size-3.5 text-pink-600" />
            <div>
              <span className="font-semibold text-foreground block">
                bKash MFS
              </span>
              <span className="text-[8.5px] text-muted-foreground">
                Payment Gateway
              </span>
            </div>
          </div>
          <span className="size-2 rounded-full bg-success" />
        </div>

        <div className="bg-card p-2.5 rounded-lg border border-border shadow-2xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="size-3.5 text-blue-600" />
            <div>
              <span className="font-semibold text-foreground block">
                Meta Pixel
              </span>
              <span className="text-[8.5px] text-muted-foreground">
                Event Tracking
              </span>
            </div>
          </div>
          <span className="size-2 rounded-full bg-success" />
        </div>

        <div className="bg-card p-2.5 rounded-lg border border-border shadow-2xs flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="size-3.5 text-amber-600" />
            <div>
              <span className="font-semibold text-foreground block">
                Google Analytics
              </span>
              <span className="text-[8.5px] text-muted-foreground">
                Traffic & Funnels
              </span>
            </div>
          </div>
          <span className="size-2 rounded-full bg-success" />
        </div>
      </div>

      <div className="rounded-lg border border-border bg-card p-2.5 shadow-2xs flex items-center justify-between text-[9.5px]">
        <div className="flex items-center gap-2">
          <Layers className="size-3.5 text-primary" />
          <span className="font-medium text-foreground">
            Custom Webhooks & REST Endpoints
          </span>
        </div>
        <span className="text-[8.5px] font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded">
          TLS Secured
        </span>
      </div>
    </MockupFrame>
  );
}


'use client';

import React from 'react';
import { Info, AlertTriangle, Lightbulb, AlertCircle, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type CalloutType = 'info' | 'warning' | 'tip' | 'error' | 'success';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const calloutConfig: Record<CalloutType, { icon: typeof Info; className: string; defaultTitle: string }> = {
  info: {
    icon: Info,
    className: 'bg-blue-50 border-blue-400 text-blue-900',
    defaultTitle: 'Info',
  },
  warning: {
    icon: AlertTriangle,
    className: 'bg-amber-50 border-amber-400 text-amber-900',
    defaultTitle: 'Warning',
  },
  tip: {
    icon: Lightbulb,
    className: 'bg-emerald-50 border-emerald-400 text-emerald-900',
    defaultTitle: 'Tip',
  },
  error: {
    icon: AlertCircle,
    className: 'bg-red-50 border-red-400 text-red-900',
    defaultTitle: 'Error',
  },
  success: {
    icon: CheckCircle,
    className: 'bg-green-50 border-green-400 text-green-900',
    defaultTitle: 'Success',
  },
};

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        'my-6 rounded-lg border-l-4 p-4 not-prose',
        config.className
      )}
    >
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 h-5 w-5 flex-shrink-0" />
        <div className="flex-1">
          {title && (
            <p className="font-semibold mb-1">{title}</p>
          )}
          <div className="text-sm leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}


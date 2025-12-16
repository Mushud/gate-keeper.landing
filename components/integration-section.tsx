"use client";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Copy01Icon, CheckmarkCircle01Icon as CheckIcon } from "@hugeicons/core-free-icons";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const codeExamples = {
  standardCheckout: {
    title: "Standard Checkout",
    description: "Create a session and redirect to hosted checkout page",
    code: `// 1. Create checkout session
const response = await fetch('https://api.gatekeeperpro.live/api/checkout/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'your_api_key_here'
  },
  body: JSON.stringify({
    receiver: '+233XXXXXXXXX', // Phone or email
    type: 'phone', // or 'email'
    successUrl: 'https://yourapp.com/success',
    failureUrl: 'https://yourapp.com/failure',
    metadata: { userId: '12345' }
  })
});

const { sessionToken } = await response.json();

// 2. Redirect user to checkout
window.location.href = \`https://checkout.gatekeeperpro.cc/\${sessionToken}\`;

// 3. Handle success callback
// User will be redirected to:
// https://yourapp.com/success?verified=true&receiver=233XXXXXXXXX&name=John+Doe`,
  },
  directApi: {
    title: "Direct API Integration",
    description: "Generate and verify OTPs directly via API",
    code: `// 1. Generate OTP
const generateResponse = await fetch('https://api.gatekeeperpro.live/api/otp/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'your_api_key_here'
  },
  body: JSON.stringify({
    receiver: '+233XXXXXXXXX',
    type: 'phone', // or 'email'
    name: 'John Doe' // optional
  })
});

const { reference } = await generateResponse.json();

// 2. User enters OTP code from SMS/Email

// 3. Verify OTP
const verifyResponse = await fetch('https://api.gatekeeperpro.live/api/otp/verify', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': 'your_api_key_here'
  },
  body: JSON.stringify({
    reference: reference,
    code: '123456' // User input
  })
});

const { verified, name } = await verifyResponse.json();`,
  },
};

export default function IntegrationSection() {
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  const copyCode = (code: string, tab: string) => {
    navigator.clipboard.writeText(code);
    setCopiedTab(tab);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  return (
    <section className="py-24 md:py-32 bg-zinc-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            Integration
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight">
            Integrate in minutes
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Choose between hosted checkout or direct API. Start verifying users immediately.
          </p>
        </div>

        {/* Code examples */}
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="standard" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-zinc-800 border border-zinc-700 p-1">
              <TabsTrigger 
                value="standard"
                className="data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-100 text-zinc-400"
              >
                Standard Checkout
              </TabsTrigger>
              <TabsTrigger 
                value="direct"
                className="data-[state=active]:bg-zinc-700 data-[state=active]:text-zinc-100 text-zinc-400"
              >
                Direct API
              </TabsTrigger>
            </TabsList>

            <TabsContent value="standard" className="mt-6">
              <Card className="p-6 bg-white border-zinc-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 mb-1">
                      {codeExamples.standardCheckout.title}
                    </h3>
                    <p className="text-sm text-zinc-600">
                      {codeExamples.standardCheckout.description}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyCode(codeExamples.standardCheckout.code, 'standard')}
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                  >
                    {copiedTab === 'standard' ? (
                      <>
                        <HugeiconsIcon icon={CheckIcon} size={18} strokeWidth={1.5} className="mr-2" /> Copied
                      </>
                    ) : (
                      <>
                        <HugeiconsIcon icon={Copy01Icon} size={18} strokeWidth={1.5} className="mr-2" /> Copy
                      </>
                    )}
                  </Button>
                </div>
                <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto border border-zinc-700">
                  <pre className="text-sm text-zinc-100 font-mono">
                    <code>{codeExamples.standardCheckout.code}</code>
                  </pre>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="direct" className="mt-6">
              <Card className="bg-zinc-900 border-zinc-800 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-100 mb-1">
                      {codeExamples.directApi.title}
                    </h3>
                    <p className="text-sm text-zinc-400">
                      {codeExamples.directApi.description}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyCode(codeExamples.directApi.code, 'direct')}
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                  >
                    {copiedTab === 'direct' ? (
                      <>
                        <HugeiconsIcon icon={CheckIcon} size={18} strokeWidth={1.5} className="mr-2" /> Copied
                      </>
                    ) : (
                      <>
                        <HugeiconsIcon icon={Copy01Icon} size={18} strokeWidth={1.5} className="mr-2" /> Copy
                      </>
                    )}
                  </Button>
                </div>
                <div className="bg-zinc-950 rounded-lg p-4 overflow-x-auto border border-zinc-800">
                  <pre className="text-sm text-zinc-300 font-mono">
                    <code>{codeExamples.directApi.code}</code>
                  </pre>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTA to docs */}
          <div className="text-center mt-8">
            <Button
              variant="link"
              className="text-blue-500 hover:text-blue-400"
              onClick={() => window.location.href = 'https://developer.gatekeeperpro.cc/developer'}
            >
              View Full Documentation →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

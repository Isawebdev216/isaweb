import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Code,
  Server,
  Key,
  Webhook,
  FileText,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const apiSections = [
  {
    icon: Key,
    title: "Authentication",
    description: "Secure API access with JWT tokens and API keys",
    endpoint: "POST /api/v1/auth/token",
    example: `{
  "api_key": "your_api_key",
  "secret": "your_secret"
}`,
  },
  {
    icon: Server,
    title: "Device Registration",
    description: "Register and manage IoT devices in your network",
    endpoint: "POST /api/v1/devices",
    example: `{
  "device_id": "sensor_001",
  "type": "temperature_sensor",
  "location": "warehouse_a",
  "metadata": {
    "model": "TS-100",
    "firmware": "v2.1.0"
  }
}`,
  },
  {
    icon: FileText,
    title: "Data Ingestion",
    description: "Send sensor data and device telemetry",
    endpoint: "POST /api/v1/data/ingest",
    example: `{
  "device_id": "sensor_001",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "temperature": 23.5,
    "humidity": 65.2,
    "battery_level": 85
  }
}`,
  },
  {
    icon: Code,
    title: "Automation Rules",
    description: "Create and manage intelligent automation workflows",
    endpoint: "POST /api/v1/automations",
    example: `{
  "name": "Temperature Alert",
  "trigger": {
    "device_id": "sensor_001",
    "condition": "temperature > 30",
    "operator": "gt"
  },
  "action": {
    "type": "notification",
    "channel": "email",
    "recipients": ["admin@company.com"]
  }
}`,
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Real-time event notifications via webhooks",
    endpoint: "POST /api/v1/webhooks",
    example: `{
  "url": "https://your-app.com/webhook",
  "events": ["device_online", "alert_triggered"],
  "secret": "webhook_secret"
}`,
  },
];

const codeExamples = {
  javascript: `// JavaScript/Node.js Example
const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://api.isawebdev.com/v1',
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKEN',
    'Content-Type': 'application/json'
  }
});

// Register a device
const registerDevice = async () => {
  try {
    const response = await apiClient.post('/devices', {
      device_id: 'sensor_001',
      type: 'temperature_sensor',
      location: 'warehouse_a'
    });
    console.log('Device registered:', response.data);
  } catch (error) {
    console.error('Registration failed:', error);
  }
};`,

  python: `# Python Example
import requests
import json

API_BASE = 'https://api.isawebdev.com/v1'
HEADERS = {
    'Authorization': 'Bearer YOUR_JWT_TOKEN',
    'Content-Type': 'application/json'
}

def register_device():
    payload = {
        'device_id': 'sensor_001',
        'type': 'temperature_sensor',
        'location': 'warehouse_a'
    }
    
    response = requests.post(
        f'{API_BASE}/devices',
        headers=HEADERS,
        data=json.dumps(payload)
    )
    
    if response.status_code == 201:
        print('Device registered:', response.json())
    else:
        print('Registration failed:', response.text)

def send_sensor_data():
    payload = {
        'device_id': 'sensor_001',
        'timestamp': '2024-01-15T10:30:00Z',
        'data': {
            'temperature': 23.5,
            'humidity': 65.2
        }
    }
    
    response = requests.post(
        f'{API_BASE}/data/ingest',
        headers=HEADERS,
        data=json.dumps(payload)
    )
    
    print('Data sent:', response.status_code)`,

  go: `// Go Example
package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

const apiBase = "https://api.isawebdev.com/v1"

type Device struct {
    DeviceID string \`json:"device_id"\`
    Type     string \`json:"type"\`
    Location string \`json:"location"\`
}

func registerDevice() error {
    device := Device{
        DeviceID: "sensor_001",
        Type:     "temperature_sensor",
        Location: "warehouse_a",
    }
    
    jsonData, err := json.Marshal(device)
    if err != nil {
        return err
    }
    
    req, err := http.NewRequest("POST", apiBase+"/devices", bytes.NewBuffer(jsonData))
    if err != nil {
        return err
    }
    
    req.Header.Set("Authorization", "Bearer YOUR_JWT_TOKEN")
    req.Header.Set("Content-Type", "application/json")
    
    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        return err
    }
    defer resp.Body.Close()
    
    fmt.Printf("Device registered: %d\\n", resp.StatusCode)
    return nil
}`,
};

const ApiDocumentation = () => {
  const [activeTab, setActiveTab] = useState<'javascript' | 'python' | 'go'>('javascript');
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      toast({
        title: "Copied to clipboard!",
        description: "Code snippet has been copied.",
      });
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              API Documentation
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-hero font-bold text-foreground mb-6">
              Integrate IoT Intelligence{" "}
              <span className="text-gradient">Into Your Applications</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive REST API for device management, data ingestion, and automation.
              Build powerful IoT applications with our developer-friendly endpoints.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="accent" size="lg" asChild>
                <a href="#getting-started" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#code-examples">View Examples</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Endpoints */}
      <Section id="getting-started">
        <SectionHeader
          badge="API Reference"
          title="Core API Endpoints"
          description="Everything you need to integrate IsaWebDev into your IoT applications"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apiSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-card border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <section.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {section.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{section.description}</p>
              <code className="text-xs bg-muted px-2 py-1 rounded text-accent font-mono">
                {section.endpoint}
              </code>
              <details className="mt-4">
                <summary className="text-sm text-accent cursor-pointer hover:text-accent/80">
                  View Example
                </summary>
                <pre className="mt-2 text-xs bg-muted p-3 rounded overflow-x-auto">
                  <code>{section.example}</code>
                </pre>
              </details>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Code Examples */}
      <Section id="code-examples" className="bg-primary border-y border-border">
        <SectionHeader
          badge="Code Examples"
          title="Integration Examples"
          description="Get started quickly with our SDK examples in popular languages"
        />
        
        {/* Language Tabs */}
        <div className="flex items-center gap-2 mb-6">
          {(['javascript', 'python', 'go'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveTab(lang)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === lang
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </button>
          ))}
        </div>

        {/* Code Block */}
        <div className="relative">
          <pre className="bg-muted p-6 rounded-2xl overflow-x-auto text-sm">
            <code className="font-mono text-foreground">{codeExamples[activeTab]}</code>
          </pre>
          <button
            onClick={() => copyToClipboard(codeExamples[activeTab], activeTab)}
            className="absolute top-4 right-4 p-2 rounded-lg bg-background/80 hover:bg-background transition-colors"
          >
            {copied === activeTab ? (
              <Check className="w-4 h-4 text-accent" />
            ) : (
              <Copy className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
        </div>
      </Section>

      {/* SDK & Tools */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              align="left"
              badge="Developer Tools"
              title="SDKs & Libraries"
              description="Accelerate development with our official SDKs and community libraries"
            />
            <div className="space-y-4">
              {[
                { name: "Node.js SDK", description: "Official JavaScript/TypeScript SDK" },
                { name: "Python SDK", description: "Python library with async support" },
                { name: "Go SDK", description: "High-performance Go client library" },
                { name: "REST API", description: "Direct API access for any language" },
              ].map((sdk) => (
                <div key={sdk.name} className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border">
                  <Code className="w-8 h-8 text-accent" />
                  <div>
                    <h4 className="font-medium text-foreground">{sdk.name}</h4>
                    <p className="text-sm text-muted-foreground">{sdk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-card border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                  <FileText className="w-12 h-12 text-accent" />
                </div>
                <p className="font-heading text-2xl font-bold text-foreground mb-2">
                  Complete Documentation
                </p>
                <p className="text-muted-foreground">
                  Interactive API explorer and comprehensive guides
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-hero">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Build IoT Applications?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of developers building the next generation of connected devices.
            Start with our free tier and scale as you grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="accent" size="lg" asChild>
              <Link to="/plans-pricing">View Pricing</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about-contact">Get API Key</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ApiDocumentation;
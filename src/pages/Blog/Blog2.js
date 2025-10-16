import React, { useState } from 'react';
import { Menu, X, ChevronRight, Clock, User, Calendar, ArrowRight, Zap, GitBranch, Globe, Code, Workflow, BookOpen } from 'lucide-react';

const N8NBlog = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "N8N: The Ultimate Workflow Automation Platform for Modern Businesses",
      excerpt: "Discover how n8n is revolutionizing workflow automation with its powerful, open-source approach that puts you in control.",
      author: "Tech Innovator",
      date: "Oct 14, 2025",
      readTime: "8 min read",
      category: "Getting Started",
 image: "/images/imagen8n.jpg",
       className:"rounded-2xl shadow-lg max-w-md h-auto object-cover"
    },
    {
      id: 2,
      title: "10 Game-Changing N8N Workflows Every Business Needs",
      excerpt: "Transform your business operations with these powerful, ready-to-use n8n workflows that save hours every day.",
      author: "Automation Expert",
      date: "Oct 12, 2025",
      readTime: "12 min read",
      category: "Workflows",
      image: "/images/images.png",
       className:"rounded-2xl shadow-lg max-w-md h-auto object-cover"
    },
    {
      id: 3,
      title: "N8N vs Zapier vs Make: The Ultimate Comparison Guide 2025",
      excerpt: "A comprehensive, unbiased comparison of the top automation platforms to help you make the right choice for your business.",
      author: "Integration Specialist",
      date: "Oct 10, 2025",
      readTime: "15 min read",
      category: "Comparison",
      image: "/images/n8n.jpg",
       className:"rounded-2xl shadow-lg max-w-md h-auto object-cover"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Execute workflows in milliseconds with optimized performance"
    },
    {
      icon: GitBranch,
      title: "Visual Workflows",
      description: "Drag-and-drop interface makes automation accessible to everyone"
    },
    {
      icon: Globe,
      title: "300+ Integrations",
      description: "Connect with all your favorite tools and services seamlessly"
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Write custom code, create nodes, and extend functionality"
    },
    {
      icon: Workflow,
      title: "Self-Hosted",
      description: "Complete control over your data with self-hosting options"
    },
    {
      icon: BookOpen,
      title: "Fair-Code",
      description: "Open and transparent with a sustainable business model"
    }
  ];

  const getFullContent = (postId) => {
    const contents = {
      1: `N8N: The Ultimate Workflow Automation Platform for Modern Businesses

Introduction: The Automation Revolution

In today's fast-paced digital landscape, businesses are constantly seeking ways to optimize operations, reduce manual work, and increase productivity. Enter n8n - a powerful, fair-code workflow automation platform that's changing the game for developers, businesses, and automation enthusiasts worldwide.

What is N8N?

N8N (pronounced "n-eight-n") is an extendable workflow automation tool that allows you to connect anything to everything. Think of it as the Swiss Army knife of automation - versatile, powerful, and incredibly flexible.

Key Features That Set N8N Apart

1. Fair-Code Distribution Model
Unlike traditional open-source or proprietary software, n8n uses a fair-code model. This means source code is always visible and auditable, you can self-host for free, enterprise features are available for businesses, and community contributions are welcomed and valued.

2. Visual Workflow Builder
N8N provides an intuitive, node-based editor that makes creating complex automations as simple as drag-and-drop. No need to be a coding expert - though developers will love the flexibility it offers.

3. 300+ Native Integrations
Connect with virtually any service: Gmail, Slack, Trello, Notion, Google Sheets, PostgreSQL, MongoDB, MySQL, AWS, Google Cloud, Azure, HubSpot, Salesforce, Pipedrive, and hundreds more!

Why Choose N8N Over Other Automation Tools?

Self-Hosting Freedom: Unlike Zapier or Make, n8n can be fully self-hosted for complete data privacy, no subscription limits, unlimited workflows and executions, and full customization capabilities.

Developer-Friendly: Built with developers in mind - write custom JavaScript/TypeScript code within workflows, create custom nodes and extensions, access full API documentation, and version control your workflows with Git.

Cost-Effective Scaling: Start free with self-hosting, and only pay for cloud features if needed. This represents massive cost savings compared to per-execution pricing models.

Real-World Use Cases

Marketing Automation: Automate lead capture, email nurturing campaigns, social media posting, analytics aggregation, and ROI tracking.

Customer Support: Streamline ticket routing, automated responses, escalation workflows, satisfaction surveys, and knowledge base integration.

Sales Pipeline: Optimize lead scoring, CRM synchronization, meeting scheduling, proposal generation, and follow-up sequences.

Development & DevOps: Enhance CI/CD pipelines, deployment notifications, error monitoring, database backups, and code review reminders.

Data Operations: Streamline ETL processes, data synchronization, automated reporting, data quality checks, and backup workflows.

Getting Started with N8N

Docker Installation: docker run -it --rm --name n8n -p 5678:5678 -v ~/.n8n:/home/node/.n8n n8nio/n8n

NPM Installation: npm install n8n -g, then n8n start

Cloud Hosting: Sign up for n8n Cloud for a managed solution with zero setup.

Your First Workflow

Automatically save Gmail attachments to Google Drive:
1. Trigger: Gmail - New Email
2. Filter: Check if email has attachments
3. Action: Google Drive - Upload File
4. Notification: Slack - Send Message

This takes just 5 minutes to set up but saves hours every week!

Advanced Features

Error Handling: Retry mechanisms, error workflow triggers, detailed execution logs, and email/Slack notifications on failures.

Webhooks & APIs: Webhook triggers for real-time events, HTTP Request nodes for API calls, Function nodes for custom logic, and database operations.

Scheduling: Execute workflows with Cron expressions, interval-based execution, time zone support, and manual triggers.

Best Practices

1. Start Simple - Begin with one repetitive task and gradually expand
2. Use Error Handling - Always implement error handling to prevent workflow failures
3. Document Your Workflows - Use sticky notes in the n8n editor
4. Test Thoroughly - Use test execution feature before activation
5. Monitor Executions - Regularly check execution logs

Security Considerations

Use strong authentication, enable HTTPS/SSL, implement proper firewall rules, regular security updates, backup workflows regularly, and use environment variables for sensitive data.

The N8N Community

Active forum with thousands of members, weekly community workflows, regular updates and new integrations, responsive support team, and open-source contribution opportunities.

Conclusion

N8N represents the future of workflow automation - powerful enough for enterprises, accessible enough for individuals, and flexible enough for any use case. Start your n8n journey today!

Resources: n8n.io, docs.n8n.io, community.n8n.io, github.com/n8n-io/n8n`,

      2: `10 Game-Changing N8N Workflows Every Business Needs

Introduction

After working with hundreds of businesses, I've identified the most impactful n8n workflows that deliver immediate ROI.

1. Lead Management Powerhouse

Problem: Leads slip through the cracks, manual data entry is error-prone, follow-ups are inconsistent.

Solution: Automated Lead Capture & Distribution
- Webhook receives lead from website
- Enrich data with Clearbit/Hunter.io
- Calculate lead score
- Create CRM contact automatically
- Route to appropriate sales rep
- Slack alert for high-value leads
- Trigger automated email sequence

Impact: 80% faster lead processing, 50% increase in follow-up rate, zero data entry errors.

2. Customer Onboarding Automation

Problem: Manual onboarding is time-consuming and inconsistent.

Solution: Welcome email, account provisioning, Slack channel creation, mailing list signup, onboarding call scheduling, customer success manager assignment, project board creation, and automated check-in emails.

Impact: 5x faster onboarding, 90% customer satisfaction, scalable process.

3. Social Media Content Pipeline

Problem: Inconsistent posting, time-consuming distribution, poor engagement tracking.

Solution: Multi-platform automation - content storage in Google Sheets, scheduled posting based on optimal times, simultaneous posting to Twitter/LinkedIn/Facebook/Instagram, automatic image resizing, hashtag optimization, engagement tracking, and weekly analytics.

Impact: 10x more consistent posting, 40% engagement increase, 90% time saved.

4. Invoice and Payment Automation

Problem: Manual invoicing is tedious, payment follow-ups forgotten, cash flow suffers.

Solution: Automatic invoice generation, multi-currency support, email delivery with payment link, payment reminder sequences, confirmation and receipts, accounting software sync, overdue payment alerts, and monthly revenue reports.

Impact: 95% on-time payment rate, 70% reduction in accounts receivable time.

5. Customer Support Triage System

Problem: Support tickets get lost, response times are slow, high-priority issues aren't flagged.

Solution: Intelligent ticket routing - AI classification, priority scoring, smart routing to specialists, SLA tracking, auto-escalation, customer updates, and CSAT surveys.

Impact: 60% faster response times, 35% higher CSAT scores, zero missed tickets.

6. E-commerce Order Processing

Problem: Manual fulfillment is slow and error-prone.

Solution: Complete automation from order notification through payment verification, inventory update, packing slip generation, warehouse management, shipping label creation, fulfillment trigger, tracking info delivery, order status update, and review requests.

Impact: 85% faster fulfillment, 99% order accuracy, better customer experience.

7. HR Recruitment Pipeline

Problem: Manual resume screening, unorganized communication, slow hiring.

Solution: Resume parsing with AI, candidate scoring, automated communication, calendar integration, interview reminders, feedback collection, offer letter generation, and onboarding trigger.

Impact: 3x faster hiring, better candidate experience, reduced recruiter workload.

8. Content Backup and Archival

Problem: Data scattered, backups forgotten, disaster recovery impossible.

Solution: Automated backup of website content, databases, Google Drive/Dropbox, email archives, social media, code repositories, CRM data, analytics, and financial documents on daily/weekly/monthly schedules.

Impact: Zero data loss, peace of mind, quick disaster recovery.

9. Meeting Management System

Problem: Unproductive meetings, forgotten follow-ups, lost action items.

Solution: Complete lifecycle automation - calendar invitations with agenda, prep materials, document preparation, virtual meeting room setup, auto-join recording bot, real-time transcription, AI summaries, action item extraction and assignment, meeting notes distribution, and follow-up scheduling.

Impact: 50% more productive meetings, 90% action item completion rate.

10. Personal Productivity Dashboard

Problem: Information overload, scattered data, no single source of truth.

Solution: Daily briefing with calendar summary, important emails, task priorities, key metrics, sales pipeline updates, social media mentions, team updates, industry news, and weather/commute info.

Impact: Better informed decisions, 2 hours saved daily, reduced stress.

Implementation Tips

Start small, measure impact, iterate and improve, document everything, and get team buy-in.

Conclusion

These workflows represent just the beginning. The businesses that thrive will embrace intelligent automation. Which workflow will you implement first?`,

      3: `N8N vs Zapier vs Make: The Ultimate Comparison Guide 2025

Introduction

Choosing the right automation platform is critical for your business operations. This guide breaks down the three leading platforms across every dimension that matters.

Quick Comparison

N8N: Fair-code, free self-host, 300+ integrations, node-based editor, high code flexibility, medium learning curve, full data control, unlimited free tier (self-host)

Zapier: Per-task subscription, cloud-only, 5,000+ integrations, linear editor, limited code, low learning curve, cloud-only data, 100 tasks/month free

Make: Per-operation subscription, cloud-only, 1,500+ integrations, scenario-based editor, medium code flexibility, medium-high learning curve, cloud-only data, 1,000 ops/month free

Pricing and Cost Structure

N8N: Self-hosted is free forever with unlimited workflows and executions. Cloud pricing starts at $20/month. Extremely low total cost of ownership for self-hosted.

Zapier: Free tier with 100 tasks/month, Starter $19.99/month (750 tasks), Professional $49/month (2,000 tasks), Team $299/month (50,000 tasks), Company $599/month (100,000 tasks). Multi-step Zaps count each action as a task.

Make: Free tier with 1,000 operations/month, Core $9/month (10,000 ops), Pro $16/month, Teams $29/month. More affordable than Zapier but can get expensive with high volume.

Integration Ecosystem

N8N: 300+ native integrations covering all major business apps. Active community creating custom nodes. Easy to build custom integrations with HTTP request node.

Zapier: 5,000+ integrations - the largest library. Nearly every SaaS app included. Premium apps cost extra.

Make: 1,500+ integrations with strong selection and deep integration features.

Workflow Design and User Experience

N8N: Node-based visual editor with drag-and-drop. Intuitive for technical users with powerful debugging tools. Version control friendly. Steep learning curve for non-technical users.

Zapier: Linear, step-by-step builder. Simplest to learn. Great for simple workflows. Limited branching logic.

Make: Scenario builder with visual flowchart style. Router and filters for branching. More complex than Zapier. Excellent for complex automation.

Customization and Flexibility

N8N: Write JavaScript/TypeScript in workflows, create custom nodes, full API access, webhook triggers, database queries. Complete control over data transformation with no limitations. Flexibility Score: 10/10

Zapier: Code by Zapier (JavaScript/Python) limited to pre-defined steps. Cannot create custom integrations. Flexibility Score: 5/10

Make: Set/Get variables, mathematical operations, text manipulation, basic scripting. Flexibility Score: 7/10

Performance and Reliability

N8N: Self-hosted depends on your infrastructure. Cloud has 99.9% uptime SLA with fast execution times. Can scale horizontally with full control.

Zapier: 99.99% uptime, generally fast execution, occasional delays during peak times. Industry leader in reliability with excellent track record.

Make: 99.9% uptime, very fast execution, excellent for complex workflows, good scalability.

Data Privacy and Security

N8N: Self-hosted gives complete control - data never leaves your infrastructure. You control all security measures. SOC 2 compliant cloud version. Privacy Score: 10/10 (self-hosted)

Zapier: Cloud-only with data stored on Zapier servers. GDPR compliant. SOC 2 Type II certified with encryption at rest and in transit. Privacy Score: 7/10

Make: Cloud-only with data processing in EU/US. GDPR compliant. ISO 27001 certified with regular security audits. Privacy Score: 7/10

Use Case Recommendations

Choose N8N If: You need complete data privacy, have technical team members, want to avoid per-task pricing, need maximum customization, handle sensitive data, or want to self-host. Best For: Tech companies, enterprises with privacy requirements, developers.

Choose Zapier If: You want easiest setup, need maximum integrations, have non-technical users, budget isn't a primary concern, value stability over customization, need enterprise support. Best For: Marketing teams, small businesses, non-technical users.

Choose Make If: You need complex workflows, want visual scenario building, need good value for money, have moderate technical skills, need advanced logic. Best For: Operations teams, growing businesses, power users.

Real-World Cost Comparison

Scenario: 100,000 monthly tasks

N8N Self-hosted: ~$50/month (infrastructure)
N8N Cloud: ~$200/month
Zapier Company plan: $599/month
Make: ~$300/month

Annual Savings with N8N: $4,000-6,000

Conclusion

There's no universally "best" platform. My personal recommendation for most businesses in 2025: Start with N8N. The initial learning curve pays off quickly with superior flexibility, better pricing, and complete control.

The best automation platform is the one you'll actually use consistently. Choose wisely, and happy automating!`
    };
    return contents[postId] || '';
  };

  if (selectedPost) {
    const content = getFullContent(selectedPost.id);
    const paragraphs = content.split('\n\n').filter(p => p.trim());

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <button
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
              >
                ← Back to Blog
              </button>
              <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                N8N Automation Blog
              </div>
            </div>
          </div>
        </header>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              {selectedPost.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {selectedPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{selectedPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{selectedPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{selectedPost.readTime}</span>
              </div>
            </div>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl mb-12"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {paragraphs.map((paragraph, idx) => {
              if (paragraph.trim().length === 0) return null;
              
              const isHeading = paragraph.match(/^[A-Z][^.!?]*:?\s*$/m) || paragraph.split('\n')[0].length < 80;
              
              if (isHeading && paragraph.length < 100) {
                return (
                  <h2 key={idx} className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
                    {paragraph}
                  </h2>
                );
              }
              
              return (
                <p key={idx} className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Workflows?
              </h3>
              <p className="text-gray-700 mb-6">
                Start your automation journey with n8n today and experience the power of intelligent workflow automation.
              </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer">
  <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
    Start Automating Free
    <ArrowRight className="w-5 h-5" />
  </button>
</a>
</div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Workflow className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                N8N Blog
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Home</a>
              <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Features</a>
              <a href="#blog" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Blog</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">About</a>
              <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                Get Started
              </button>

              
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
                <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium">Features</a>
                <a href="#blog" className="text-gray-700 hover:text-indigo-600 font-medium">Blog</a>
                <a href="#pricing" className="text-gray-700 hover:text-indigo-600 font-medium">Pricing</a>
                <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium">About</a>
               
              </div>
            </div>
          )}
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-indigo-100 rounded-full">
              <span className="text-indigo-600 font-semibold">🚀 Workflow Automation Made Simple</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Automate Your World
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                With N8N
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              The powerful, fair-code automation platform that connects your apps and services. 
              Build workflows that work for you, not the other way around.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer">
  <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
    Start Automating Free
    <ArrowRight className="w-5 h-5" />
  </button>
</a>

<a href="https://www.youtube.com/watch?v=4cQWJViybAQ" target="_blank" rel="noopener noreferrer">
  <button className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all duration-300">
    Watch Demo
  </button>
</a>

            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose N8N?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features that make automation accessible, flexible, and completely under your control
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover expert guides, tutorials, and best practices for mastering workflow automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-indigo-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
<section id="pricing" className="py-20 bg-gradient-to-tr from-[#211242] via-[#181227] to-[#1a1442] text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">N8N Pricing & Deployment</h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">Build as much as you want. Pay only when your workflows run.</p>
      {/* Toggle Switch */}
      <div className="flex items-center justify-center mt-6 mb-3 gap-6">
        <span className="text-lg font-semibold text-gray-300">Monthly</span>
        <label className="flex cursor-pointer items-center">
          <input type="checkbox" className="sr-only peer"/>
          <div className="peer h-6 w-11 rounded-full bg-indigo-700 after:content-[''] after:absolute after:bg-white after:rounded-full after:h-5 after:w-5 after:top-0.5 after:left-0.5 peer-checked:after:translate-x-5 transition-all"></div>
        </label>
        <span className="text-lg font-semibold text-indigo-300">Annually <span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded ml-1">Save 17%</span></span>
      </div>
    </div>
    {/* Pricing Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {/* Starter */}
      <div className="bg-gradient-to-b from-white/5 via-indigo-700/30 to-indigo-900/40 rounded-2xl shadow-xl p-8 border border-indigo-700/50">
        <h3 className="text-2xl font-bold mb-2 text-white">Starter</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-extrabold">20€</span>
          <span className="text-gray-300 ml-2">/mo, billed annually</span>
        </div>
        <div className="mb-6 text-indigo-200">2.5k <span className="text-gray-400">workflow executions</span></div>
        <button className="w-full mb-6 px-6 py-3 bg-indigo-700 hover:bg-indigo-800 text-white rounded font-semibold transition">Start free trial</button>
        <ul className="text-gray-300 font-medium space-y-2 text-left">
          <li>1 shared project</li>
          <li>5 concurrent executions</li>
          <li>Unlimited users</li>
          <li>Forum support</li>
        </ul>
      </div>
      {/* Pro */}
      <div className="bg-gradient-to-b from-white/5 via-indigo-700/30 to-indigo-900/40 rounded-2xl shadow-xl p-8 border border-indigo-700/50">
        <h3 className="text-2xl font-bold mb-2 text-white">Pro</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-extrabold">50€</span>
          <span className="text-gray-300 ml-2">/mo, billed annually</span>
        </div>
        <div className="mb-6 text-indigo-200">10k <span className="text-gray-400">workflow executions</span></div>
        <button className="w-full mb-6 px-6 py-3 bg-indigo-700 hover:bg-indigo-800 text-white rounded font-semibold transition">Start free trial</button>
        <ul className="text-gray-300 font-medium space-y-2 text-left">
          <li>3 shared projects</li>
          <li>20 concurrent executions</li>
          <li>Admin roles & insights</li>
          <li>Global variables</li>
          <li>Execution search</li>
        </ul>
      </div>
      {/* Business */}
      <div className="bg-gradient-to-b from-white/5 via-indigo-700/30 to-indigo-900/40 rounded-2xl shadow-xl p-8 border border-indigo-700/50">
        <h3 className="text-2xl font-bold mb-2 text-white">Business</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-extrabold">667€</span>
          <span className="text-gray-300 ml-2">/mo, billed annually</span>
        </div>
        <div className="mb-6 text-indigo-200">40k <span className="text-gray-400">workflow executions</span></div>
        <button className="w-full mb-6 px-6 py-3 bg-indigo-700 hover:bg-indigo-800 text-white rounded font-semibold transition">Start free trial</button>
        <ul className="text-gray-300 font-medium space-y-2 text-left">
          <li>6 shared projects</li>
          <li>SSO & LDAP</li>
          <li>Scaling options</li>
          <li>30 days of insights</li>
          <li>Git integration</li>
          <li>Forum support</li>
        </ul>
      </div>
      {/* Enterprise */}
      <div className="bg-gradient-to-b from-white/5 via-indigo-700/30 to-indigo-900/40 rounded-2xl shadow-xl p-8 border border-indigo-700/50">
        <h3 className="text-2xl font-bold mb-2 text-white">Enterprise</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-extrabold">Contact us</span>
        </div>
        <div className="mb-6 text-indigo-200">Custom <span className="text-gray-400">workflow executions</span></div>
        <button className="w-full mb-6 px-6 py-3 bg-gradient-to-r from-indigo-700 to-purple-700 hover:from-indigo-800 hover:to-purple-800 text-white rounded font-semibold transition">Contact sales</button>
        <ul className="text-gray-300 font-medium space-y-2 text-left">
          <li>Unlimited shared projects</li>
          <li>200+ concurrent executions</li>
          <li>365 days of insights</li>
          <li>External secret integration</li>
          <li>Log streaming & advanced analytics</li>
        </ul>
      </div>
    </div>
  </div>
</section>


      <section id="about" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About N8N
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              N8N is the workflow automation platform that empowers teams to connect their tools and automate their work. 
              With a fair-code license, self-hosting capabilities, and a thriving community, n8n gives you the freedom to 
              build automation your way.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">300+</div>
                <div className="text-gray-600 font-medium">Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">50K+</div>
                <div className="text-gray-600 font-medium">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Open Source</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Workflow className="w-6 h-6" />
                <span className="text-xl font-bold">N8N Blog</span>
              </div>
              <p className="text-gray-400">
                Your ultimate resource for workflow automation insights and best practices.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://docs.n8n.io/"  target="_blank" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="https://docs.n8n.io/hosting/community-edition-features/"  target="_blank" className="hover:text-white transition-colors">Community</a></li>
                
              </ul>
            </div>
            
            
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
               
                <li><a href="https://www.linkedin.com/in/renu-deshmukh-2a422a1b1/"  target="_blank" className="hover:text-white transition-colors">LinkedIn</a></li>
               
               
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 N8N Blog. All rights reserved. Made with ❤️ for automation enthusiasts.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default N8NBlog;
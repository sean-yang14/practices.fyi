"use client"

import { useState, useEffect } from "react"
import { X, Settings, Banknote, Megaphone, AlertTriangle, ChevronLeft, ChevronRight, ExternalLink, ChevronDown, Check, Trash2, RotateCcw, TrendingUp, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type MetricData = {
  id: string
  label: string
  value: string
  score: number // 0-100
  explanation: string
  why: string
  scoreImpact?: number // +/- impact on overall category score
}

const lastMonthMetrics: MetricData[] = [
  {
    id: "lm-total-visits",
    label: "Total Visits",
    value: "1,247",
    score: 85,
    explanation: "Total number of patient visits across all providers in October.",
    why: "Tracking visit volume helps identify trends in patient demand and capacity utilization. Higher visit counts indicate strong patient engagement and revenue potential.",
  },
  {
    id: "lm-new-patients",
    label: "New Patients",
    value: "183",
    score: 92,
    explanation: "Number of first-time patients seen in October.",
    why: "New patient acquisition is critical for practice growth. This metric shows the effectiveness of your marketing efforts and referral network.",
  },
  {
    id: "lm-no-show-rate",
    label: "No-Show Rate",
    value: "8.2%",
    score: 72,
    explanation: "Percentage of scheduled appointments where patients didn't show up in October.",
    why: "High no-show rates impact revenue and prevent other patients from being seen. Reducing no-shows improves efficiency and patient care access.",
  },
  {
    id: "lm-revenue",
    label: "Revenue",
    value: "$234,500",
    score: 88,
    explanation: "Total revenue collected from all sources in October.",
    why: "Revenue is the lifeblood of your practice. Monitoring trends helps ensure financial sustainability and identify opportunities for growth.",
  },
  {
    id: "lm-ebitda",
    label: "EBITDA",
    value: "$52,300",
    score: 78,
    explanation: "Earnings Before Interest, Taxes, Depreciation, and Amortization for October.",
    why: "EBITDA measures operational profitability. It shows how efficiently your practice runs before accounting for financing and tax decisions.",
  },
]

const ytdMetrics: MetricData[] = [
  {
    id: "ytd-total-visits",
    label: "Total Visits",
    value: "11,850",
    score: 88,
    explanation: "Total number of patient visits across all providers year-to-date.",
    why: "YTD visit trends reveal practice growth patterns and help forecast annual performance. Consistent growth indicates healthy practice expansion.",
  },
  {
    id: "ytd-new-patients",
    label: "New Patients",
    value: "1,654",
    score: 90,
    explanation: "Number of first-time patients seen year-to-date.",
    why: "Annual new patient acquisition shows the long-term health of your marketing funnel and brand reputation in the community.",
  },
  {
    id: "ytd-no-show-rate",
    label: "No-Show Rate",
    value: "9.1%",
    score: 68,
    explanation: "Average percentage of no-shows across all appointments year-to-date.",
    why: "Annual no-show trends help identify systemic issues with scheduling, reminders, or patient engagement strategies.",
  },
  {
    id: "ytd-revenue",
    label: "Revenue",
    value: "$2.18M",
    score: 85,
    explanation: "Total revenue collected from all sources year-to-date.",
    why: "YTD revenue tracking is essential for annual planning, tax preparation, and assessing whether you'll meet your annual financial goals.",
  },
  {
    id: "ytd-ebitda",
    label: "EBITDA",
    value: "$485K",
    score: 81,
    explanation: "Cumulative operating income year-to-date.",
    why: "YTD EBITDA shows whether operational improvements are taking hold and if the practice is on track for profitability targets.",
  },
]

function getScoreColor(score: number) {
  if (score >= 80) return { bg: "bg-emerald-500", text: "text-emerald-600", light: "bg-emerald-50" }
  if (score >= 60) return { bg: "bg-yellow-500", text: "text-yellow-600", light: "bg-yellow-50" }
  return { bg: "bg-red-500", text: "text-red-600", light: "bg-red-50" }
}

function MetricRow({ metric }: { metric: MetricData }) {
  const [isOpen, setIsOpen] = useState(false)
  const colors = getScoreColor(metric.score)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="group">
        <CollapsibleTrigger asChild>
          <button className="w-full text-left py-4 px-6 hover:bg-slate-50 transition-colors">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-slate-900">{metric.label}</span>
                    {metric.scoreImpact !== undefined && (
                      <div className={`flex items-center justify-center size-5 rounded-full ${metric.scoreImpact >= 0 ? 'bg-emerald-100' : 'bg-red-100'}`}>
                        <span className={`text-[10px] font-bold ${metric.scoreImpact >= 0 ? 'text-emerald-700' : 'text-red-700'}`}>
                          {metric.scoreImpact >= 0 ? '+' : ''}{metric.scoreImpact}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-900">{metric.value}</span>
                    <ChevronDown
                      className={`size-5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>
                {/* Progress bar */}
                <div className="relative w-full h-3 bg-slate-200 rounded-full overflow-visible">
                  <div
                    className={`h-full ${colors.bg} rounded-full transition-all duration-500 relative`}
                    style={{ width: `${metric.score}%` }}
                  >
                    {/* Score above where color ends */}
                    <div className="absolute -top-5 right-0 -translate-x-1/2">
                      <div className={`text-xs font-bold ${colors.text}`}>
                        {metric.score}
                      </div>
                    </div>
                  </div>
                  {/* Goal marker at bottom right in green */}
                  <div className="absolute -bottom-4 right-0 text-[10px] font-bold text-emerald-600">
                    100
                  </div>
                </div>
              </div>
            </div>
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="px-6 pb-4 pt-2 bg-slate-50 border-t border-slate-100">
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-slate-700 mb-1">What it measures:</p>
                <p className="text-slate-600">{metric.explanation}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-1">Why it matters:</p>
                <p className="text-slate-600">{metric.why}</p>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}

function ScoreRing({ score }: { score: number }) {
  const start = { r: 255, g: 59, b: 48 } // #ff3b30
  const end = { r: 1, g: 242, b: 161 } // #01f2a1
  const t = Math.max(0, Math.min(1, score / 100))
  const mix = (a: number, b: number) => Math.round(a + (b - a) * t)
  const color = `rgb(${mix(start.r, end.r)}, ${mix(start.g, end.g)}, ${mix(start.b, end.b)})`

  const size = 120
  const radius = 52
  const stroke = 8
  const circumference = 2 * Math.PI * radius
  const progress = (score / 100) * circumference

  return (
    <div className="mx-auto w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full"
        role="img"
        aria-label={`Health score ${score} out of 100`}
      >
          <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
            <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e5e7eb" strokeWidth={stroke} />
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={color}
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
            />
          </g>
        <g>
          <foreignObject x="0" y="0" width={size} height={size}>
            <div className="w-full h-full grid place-items-center">
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color }}>
                  {score}
                </div>
              </div>
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  )
}

// Task types
type Task = {
  id: string
  title: string
  desc: string
  status: "open" | "completed" | "deleted"
  completedAt?: number
  deletedAt?: number
}

// Shared task state
const taskInitial: Task[] = [
  { id: "1", title: "Verify monthly revenue entries", desc: "Double‑check July and August P&L uploads.", status: "open" },
  { id: "2", title: "Connect Google Analytics", desc: "Link GA4 to surface acquisition trends.", status: "open" },
  { id: "3", title: "Tag denied claims", desc: "Mark top 5 denial reasons for review.", status: "open" },
  { id: "4", title: "Update patient portal content", desc: "Refresh FAQ section with new insurance coverage info.", status: "open" },
  { id: "5", title: "Review staff scheduling gaps", desc: "Check for coverage issues in December holiday schedule.", status: "open" },
  { id: "6", title: "Submit Q4 quality metrics", desc: "Complete MIPS reporting for quality measures by deadline.", status: "open" },
]

// Marketing channel data
type ChannelData = {
  name: string
  visits: number
  spend: number
  clicks: number
  bookings: number
  monthlyHistory: Array<{
    month: string
    visits: number
    spend: number
    clicks: number
    bookings: number
  }>
}

// Category-specific data
type CategoryData = {
  score: number
  callouts: StackItem[]
  tasks: Task[]
  goals: {
    top: GoalData
    sub1: GoalData
    sub2: GoalData
  }
  metrics: {
    lastMonth: MetricData[]
    ytd: MetricData[]
  }
  channels?: {
    website: ChannelData
    googleBusiness: ChannelData
    zocdoc: ChannelData
    googleAds: ChannelData
  }
}

type GoalData = {
  title: string
  metric: string
  qualitative: string
  lastMonth: string
  ytd: string
  current?: number
  target?: number
  unit?: string
  monthlyHistory?: { month: string; value: number }[]
  additionalInfo?: string
  reverseMetric?: boolean // true for metrics where lower is better (e.g., no-show rate)
}

const operationsData: CategoryData = {
  score: 88,
  callouts: [
    { id: "o1", type: "issue", title: "No-show rate increasing", desc: "October no-shows reached 8.2%, up from 6.1% in September." },
    { id: "o2", type: "notification", title: "Patient satisfaction up", desc: "Post-visit survey scores improved to 4.7/5.0 this month." },
  ],
  tasks: [
    { id: "o-t1", title: "Review staff scheduling gaps", desc: "Check for coverage issues in December holiday schedule.", status: "open" },
    { id: "o-t2", title: "Update EHR templates", desc: "Standardize documentation for common procedures.", status: "open" },
    { id: "o-t3", title: "Audit appointment reminders", desc: "Test SMS and email reminder delivery systems.", status: "open" },
  ],
  goals: {
    top: {
      title: "Total Visits",
      metric: "1,247",
      qualitative: "Monthly visits trending up. Goal is 1,400 visits/month by Q2 through improved scheduling efficiency and extended hours.",
      lastMonth: "1,247 visits",
      ytd: "11,850 visits",
      current: 1247,
      target: 1400,
      unit: "October visits",
      monthlyHistory: [
        { month: "Nov", value: 1050 },
        { month: "Dec", value: 1120 },
        { month: "Jan", value: 1080 },
        { month: "Feb", value: 1150 },
        { month: "Mar", value: 1200 },
        { month: "Apr", value: 1180 },
        { month: "May", value: 1220 },
        { month: "Jun", value: 1190 },
        { month: "Jul", value: 1230 },
        { month: "Aug", value: 1210 },
        { month: "Sep", value: 1195 },
        { month: "Oct", value: 1247 },
      ]
    },
    sub1: {
      title: "New Patients",
      metric: "183",
      qualitative: "Strong new patient growth. Target is 200+ new patients/month through referral programs and digital marketing.",
      lastMonth: "183 patients (14.7% of visits)",
      ytd: "1,654 patients",
      current: 183,
      target: 200,
      unit: "October patients",
      additionalInfo: "14.7% of total visits",
      monthlyHistory: [
        { month: "Nov", value: 145 },
        { month: "Dec", value: 152 },
        { month: "Jan", value: 138 },
        { month: "Feb", value: 148 },
        { month: "Mar", value: 165 },
        { month: "Apr", value: 158 },
        { month: "May", value: 172 },
        { month: "Jun", value: 160 },
        { month: "Jul", value: 178 },
        { month: "Aug", value: 168 },
        { month: "Sep", value: 170 },
        { month: "Oct", value: 183 },
      ]
    },
    sub2: {
      title: "No-Show Rate",
      metric: "8.2%",
      qualitative: "Target is below 6.0% by end of Q1. Implement automated reminders and flexible rescheduling options to reduce missed appointments.",
      lastMonth: "8.2%",
      ytd: "9.1%",
      current: 8.2,
      target: 6.0,
      unit: "%",
      reverseMetric: true,
      monthlyHistory: [
        { month: "Nov", value: 10.2 },
        { month: "Dec", value: 9.8 },
        { month: "Jan", value: 10.5 },
        { month: "Feb", value: 9.5 },
        { month: "Mar", value: 9.2 },
        { month: "Apr", value: 9.0 },
        { month: "May", value: 8.8 },
        { month: "Jun", value: 9.3 },
        { month: "Jul", value: 8.5 },
        { month: "Aug", value: 8.0 },
        { month: "Sep", value: 8.4 },
        { month: "Oct", value: 8.2 },
      ]
    }
  },
  metrics: {
    lastMonth: [
      { id: "op-lm-1", label: "Total Visits", value: "1,247", score: 85, explanation: "Total patient visits in October.", why: "Higher visit counts indicate strong capacity utilization.", scoreImpact: 30 },
      { id: "op-lm-2", label: "No-Show Rate", value: "8.2%", score: 72, explanation: "Percentage of missed appointments in October.", why: "Reducing no-shows improves revenue and patient access.", scoreImpact: 28 },
      { id: "op-lm-3", label: "Avg Wait Time", value: "12 min", score: 78, explanation: "Average patient wait time beyond scheduled appointment.", why: "Shorter wait times improve patient satisfaction and throughput.", scoreImpact: 30 },
    ],
    ytd: [
      { id: "op-ytd-1", label: "Total Visits", value: "11,850", score: 88, explanation: "Total patient visits year-to-date.", why: "YTD trends reveal practice growth patterns." },
      { id: "op-ytd-2", label: "No-Show Rate", value: "9.1%", score: 68, explanation: "Average no-show rate across all appointments YTD.", why: "Annual trends help identify systemic scheduling issues." },
      { id: "op-ytd-3", label: "Avg Wait Time", value: "13 min", score: 75, explanation: "Average wait time YTD.", why: "Tracking wait times helps optimize scheduling and staffing." },
    ]
  }
}

const financialData: CategoryData = {
  score: 92,
  callouts: [
    { id: "f1", type: "notification", title: "Revenue up 15% MoM", desc: "October revenue grew 15% compared to September." },
    { id: "f2", type: "issue", title: "Claims denial rate high", desc: "18% of submitted claims were denied in October, above 12% target." },
  ],
  tasks: [
    { id: "f-t1", title: "Verify monthly revenue entries", desc: "Double‑check July and August P&L uploads.", status: "open" },
    { id: "f-t2", title: "Tag denied claims", desc: "Mark top 5 denial reasons for review.", status: "open" },
    { id: "f-t3", title: "Review accounts receivable", desc: "Follow up on outstanding balances over 60 days.", status: "open" },
  ],
  goals: {
    top: {
      title: "Monthly Revenue",
      metric: "$234.5K",
      qualitative: "Strong growth trajectory. Target is $250K/month by Q2 through improved collection rates and patient volume.",
      lastMonth: "$234,500",
      ytd: "$2.18M",
      current: 234500,
      target: 250000,
      unit: "October revenue",
      monthlyHistory: [
        { month: "Nov", value: 195000 },
        { month: "Dec", value: 208000 },
        { month: "Jan", value: 198000 },
        { month: "Feb", value: 210000 },
        { month: "Mar", value: 218000 },
        { month: "Apr", value: 215000 },
        { month: "May", value: 225000 },
        { month: "Jun", value: 220000 },
        { month: "Jul", value: 228000 },
        { month: "Aug", value: 223000 },
        { month: "Sep", value: 227000 },
        { month: "Oct", value: 234500 },
      ]
    },
    sub1: {
      title: "EBITDA",
      metric: "$52.3K",
      qualitative: "Operating profitability is solid. Goal is $60K/month through cost optimization and improved revenue.",
      lastMonth: "$52,300",
      ytd: "$485K",
      current: 52300,
      target: 60000,
      unit: "October EBITDA",
      monthlyHistory: [
        { month: "Nov", value: 38000 },
        { month: "Dec", value: 45000 },
        { month: "Jan", value: 35000 },
        { month: "Feb", value: 42000 },
        { month: "Mar", value: 48000 },
        { month: "Apr", value: 44000 },
        { month: "May", value: 51000 },
        { month: "Jun", value: 47000 },
        { month: "Jul", value: 49000 },
        { month: "Aug", value: 46000 },
        { month: "Sep", value: 50000 },
        { month: "Oct", value: 52300 },
      ]
    },
    sub2: {
      title: "Net Cash Flow",
      metric: "$28.5K",
      qualitative: "Healthy cash position. Target is $35K/month to build reserves and fund growth initiatives.",
      lastMonth: "$28,500",
      ytd: "$285K",
      current: 28500,
      target: 35000,
      unit: "October net cash flow",
      monthlyHistory: [
        { month: "Nov", value: 18000 },
        { month: "Dec", value: 25000 },
        { month: "Jan", value: 15000 },
        { month: "Feb", value: 22000 },
        { month: "Mar", value: 28000 },
        { month: "Apr", value: 24000 },
        { month: "May", value: 30000 },
        { month: "Jun", value: 26000 },
        { month: "Jul", value: 27000 },
        { month: "Aug", value: 23000 },
        { month: "Sep", value: 29000 },
        { month: "Oct", value: 28500 },
      ]
    }
  },
  metrics: {
    lastMonth: [
      { id: "fin-lm-1", label: "Revenue", value: "$234,500", score: 88, explanation: "Total revenue collected in October.", why: "Revenue tracking ensures financial sustainability.", scoreImpact: 24 },
      { id: "fin-lm-2", label: "EBITDA", value: "$52,300", score: 78, explanation: "Operating income for October.", why: "EBITDA measures operational profitability.", scoreImpact: 22 },
      { id: "fin-lm-3", label: "Net Cash Flow", value: "$28,500", score: 82, explanation: "Net cash generated in October after all expenses and investments.", why: "Cash flow is critical for operational stability and growth.", scoreImpact: 23 },
      { id: "fin-lm-4", label: "Collections Rate", value: "94%", score: 85, explanation: "Percentage of billed services collected.", why: "High collection rates maximize revenue realization.", scoreImpact: 23 },
    ],
    ytd: [
      { id: "fin-ytd-1", label: "Revenue", value: "$2.18M", score: 85, explanation: "Total revenue YTD.", why: "YTD revenue tracking is essential for annual planning." },
      { id: "fin-ytd-2", label: "EBITDA", value: "$485K", score: 81, explanation: "Cumulative operating income YTD.", why: "YTD EBITDA shows if you're on track for profitability targets." },
      { id: "fin-ytd-3", label: "Net Cash Flow", value: "$285K", score: 80, explanation: "Cumulative net cash generated YTD.", why: "YTD cash flow shows financial health and ability to fund operations." },
      { id: "fin-ytd-4", label: "Collections Rate", value: "92%", score: 82, explanation: "Average collections rate YTD.", why: "Annual collection trends reveal revenue cycle efficiency." },
    ]
  }
}

const marketingData: CategoryData = {
  score: 84,
  callouts: [
    { id: "m1", type: "notification", title: "New patients up 22%", desc: "New patient bookings increased 22% in October vs September." },
    { id: "m2", type: "issue", title: "Zocdoc bookings down 50%", desc: "New patient bookings via Zocdoc declined 50% in October." },
  ],
  tasks: [
    { id: "m-t1", title: "Connect Google Analytics", desc: "Link GA4 to surface acquisition trends.", status: "open" },
    { id: "m-t2", title: "Update website content", desc: "Refresh services pages with seasonal offerings.", status: "open" },
    { id: "m-t3", title: "Launch email campaign", desc: "Send quarterly newsletter to patient list.", status: "open" },
  ],
  goals: {
    top: {
      title: "New Patient Acquisition",
      metric: "183",
      qualitative: "Strong new patient growth. Target is 200+ new patients/month through referral programs and digital marketing.",
      lastMonth: "183 patients (14.7% of visits)",
      ytd: "1,654 patients",
      current: 183,
      target: 200,
      unit: "October patients",
      additionalInfo: "14.7% of total visits",
      monthlyHistory: [
        { month: "Nov", value: 145 },
        { month: "Dec", value: 152 },
        { month: "Jan", value: 138 },
        { month: "Feb", value: 148 },
        { month: "Mar", value: 165 },
        { month: "Apr", value: 158 },
        { month: "May", value: 172 },
        { month: "Jun", value: 160 },
        { month: "Jul", value: 178 },
        { month: "Aug", value: 168 },
        { month: "Sep", value: 170 },
        { month: "Oct", value: 183 },
      ]
    },
    sub1: {
      title: "Cost Per Acquisition",
      metric: "$125",
      qualitative: "Average cost to acquire a new patient. Target is below $100 through improved conversion rates and channel optimization.",
      lastMonth: "$125 per patient",
      ytd: "$132 avg per patient",
      current: 125,
      target: 100,
      unit: "October CPA",
      reverseMetric: true,
      monthlyHistory: [
        { month: "Nov", value: 145 },
        { month: "Dec", value: 140 },
        { month: "Jan", value: 155 },
        { month: "Feb", value: 138 },
        { month: "Mar", value: 132 },
        { month: "Apr", value: 142 },
        { month: "May", value: 128 },
        { month: "Jun", value: 135 },
        { month: "Jul", value: 130 },
        { month: "Aug", value: 133 },
        { month: "Sep", value: 127 },
        { month: "Oct", value: 125 },
      ]
    },
    sub2: {
      title: "Conversion Rate",
      metric: "7.5%",
      qualitative: "Website visitors who booked appointments. Target is 10% through improved UX and booking flow.",
      lastMonth: "7.5%",
      ytd: "6.9%",
      current: 7.5,
      target: 10.0,
      unit: "%",
      monthlyHistory: [
        { month: "Nov", value: 5.8 },
        { month: "Dec", value: 6.2 },
        { month: "Jan", value: 5.5 },
        { month: "Feb", value: 6.0 },
        { month: "Mar", value: 6.5 },
        { month: "Apr", value: 6.3 },
        { month: "May", value: 7.0 },
        { month: "Jun", value: 6.8 },
        { month: "Jul", value: 7.2 },
        { month: "Aug", value: 7.0 },
        { month: "Sep", value: 7.3 },
        { month: "Oct", value: 7.5 },
      ]
    }
  },
  channels: {
    website: {
      name: "Website",
      visits: 85,
      spend: 2500,
      clicks: 1850,
      bookings: 85,
      monthlyHistory: [
        { month: "Nov", visits: 65, spend: 2200, clicks: 1600, bookings: 65 },
        { month: "Dec", visits: 72, spend: 2300, clicks: 1700, bookings: 72 },
        { month: "Jan", visits: 58, spend: 2100, clicks: 1500, bookings: 58 },
        { month: "Feb", visits: 68, spend: 2250, clicks: 1650, bookings: 68 },
        { month: "Mar", visits: 75, spend: 2400, clicks: 1750, bookings: 75 },
        { month: "Apr", visits: 70, spend: 2350, clicks: 1700, bookings: 70 },
        { month: "May", visits: 78, spend: 2450, clicks: 1800, bookings: 78 },
        { month: "Jun", visits: 73, spend: 2380, clicks: 1720, bookings: 73 },
        { month: "Jul", visits: 80, spend: 2480, clicks: 1820, bookings: 80 },
        { month: "Aug", visits: 77, spend: 2420, clicks: 1780, bookings: 77 },
        { month: "Sep", visits: 82, spend: 2490, clicks: 1840, bookings: 82 },
        { month: "Oct", visits: 85, spend: 2500, clicks: 1850, bookings: 85 },
      ]
    },
    googleBusiness: {
      name: "Google Business Profile",
      visits: 52,
      spend: 0,
      clicks: 420,
      bookings: 52,
      monthlyHistory: [
        { month: "Nov", visits: 38, spend: 0, clicks: 320, bookings: 38 },
        { month: "Dec", visits: 42, spend: 0, clicks: 350, bookings: 42 },
        { month: "Jan", visits: 35, spend: 0, clicks: 290, bookings: 35 },
        { month: "Feb", visits: 40, spend: 0, clicks: 330, bookings: 40 },
        { month: "Mar", visits: 45, spend: 0, clicks: 370, bookings: 45 },
        { month: "Apr", visits: 43, spend: 0, clicks: 355, bookings: 43 },
        { month: "May", visits: 48, spend: 0, clicks: 385, bookings: 48 },
        { month: "Jun", visits: 46, spend: 0, clicks: 375, bookings: 46 },
        { month: "Jul", visits: 50, spend: 0, clicks: 400, bookings: 50 },
        { month: "Aug", visits: 47, spend: 0, clicks: 380, bookings: 47 },
        { month: "Sep", visits: 51, spend: 0, clicks: 410, bookings: 51 },
        { month: "Oct", visits: 52, spend: 0, clicks: 420, bookings: 52 },
      ]
    },
    zocdoc: {
      name: "Zocdoc",
      visits: 28,
      spend: 3200,
      clicks: 890,
      bookings: 28,
      monthlyHistory: [
        { month: "Nov", visits: 25, spend: 2800, clicks: 780, bookings: 25 },
        { month: "Dec", visits: 28, spend: 2900, clicks: 820, bookings: 28 },
        { month: "Jan", visits: 22, spend: 2700, clicks: 720, bookings: 22 },
        { month: "Feb", visits: 26, spend: 2850, clicks: 800, bookings: 26 },
        { month: "Mar", visits: 30, spend: 3000, clicks: 850, bookings: 30 },
        { month: "Apr", visits: 28, spend: 2950, clicks: 830, bookings: 28 },
        { month: "May", visits: 32, spend: 3100, clicks: 880, bookings: 32 },
        { month: "Jun", visits: 29, spend: 3000, clicks: 840, bookings: 29 },
        { month: "Jul", visits: 33, spend: 3150, clicks: 900, bookings: 33 },
        { month: "Aug", visits: 30, spend: 3050, clicks: 860, bookings: 30 },
        { month: "Sep", visits: 27, spend: 3180, clicks: 870, bookings: 27 },
        { month: "Oct", visits: 28, spend: 3200, clicks: 890, bookings: 28 },
      ]
    },
    googleAds: {
      name: "Google Ads",
      visits: 18,
      spend: 4800,
      clicks: 1520,
      bookings: 18,
      monthlyHistory: [
        { month: "Nov", visits: 17, spend: 4200, clicks: 1350, bookings: 17 },
        { month: "Dec", visits: 10, spend: 3800, clicks: 1200, bookings: 10 },
        { month: "Jan", visits: 23, spend: 5000, clicks: 1600, bookings: 23 },
        { month: "Feb", visits: 14, spend: 4300, clicks: 1400, bookings: 14 },
        { month: "Mar", visits: 15, spend: 4500, clicks: 1450, bookings: 15 },
        { month: "Apr", visits: 17, spend: 4600, clicks: 1480, bookings: 17 },
        { month: "May", visits: 14, spend: 4400, clicks: 1420, bookings: 14 },
        { month: "Jun", visits: 12, spend: 4100, clicks: 1320, bookings: 12 },
        { month: "Jul", visits: 15, spend: 4650, clicks: 1500, bookings: 15 },
        { month: "Aug", visits: 14, spend: 4550, clicks: 1470, bookings: 14 },
        { month: "Sep", visits: 13, spend: 4700, clicks: 1500, bookings: 13 },
        { month: "Oct", visits: 18, spend: 4800, clicks: 1520, bookings: 18 },
      ]
    }
  },
  metrics: {
    lastMonth: [
      { id: "mkt-lm-1", label: "New Patients", value: "183", score: 92, explanation: "First-time patients in October.", why: "New patient acquisition is critical for growth.", scoreImpact: 29 },
      { id: "mkt-lm-2", label: "Website Visitors", value: "2,450", score: 78, explanation: "Unique website visitors in October.", why: "Traffic indicates marketing reach and brand awareness.", scoreImpact: 27 },
      { id: "mkt-lm-3", label: "Conversion Rate", value: "7.5%", score: 85, explanation: "Website visitors who booked appointments.", why: "Conversion rate shows marketing effectiveness.", scoreImpact: 28 },
    ],
    ytd: [
      { id: "mkt-ytd-1", label: "New Patients", value: "1,654", score: 90, explanation: "First-time patients YTD.", why: "Annual new patient acquisition shows marketing funnel health." },
      { id: "mkt-ytd-2", label: "Website Visitors", value: "24,100", score: 80, explanation: "Unique website visitors YTD.", why: "YTD traffic trends show brand growth over time." },
      { id: "mkt-ytd-3", label: "Conversion Rate", value: "6.9%", score: 82, explanation: "Average conversion rate YTD.", why: "Annual conversion trends reveal website optimization needs." },
    ]
  }
}

function TaskCard({ task, onComplete, onDelete, onUncomplete, onRestore, isCompleting }: {
  task: Task
  onComplete?: (id: string) => void
  onDelete?: (id: string) => void
  onUncomplete?: (id: string) => void
  onRestore?: (id: string) => void
  isCompleting?: boolean
}) {
  const isCompleted = task.status === "completed"
  const isDeleted = task.status === "deleted"

  return (
    <Card className={`rounded-2xl ring-1 transition-all ${
      isCompleting
        ? "ring-emerald-300 bg-emerald-50"
        : isDeleted
        ? "ring-slate-200 bg-slate-50"
        : "ring-gray-200 hover:ring-2 hover:ring-orange-200 hover:shadow-lg hover:shadow-orange-100"
    }`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className={`flex-1 transition-all duration-300 ${isCompleting ? "line-through opacity-50" : ""}`}>
            <CardTitle className={`text-base font-semibold leading-tight ${isCompleted ? "line-through text-slate-500" : ""} ${isDeleted ? "text-slate-400" : ""}`}>
              {task.title}
            </CardTitle>
            <CardDescription className={`mt-1 ${isCompleted ? "line-through" : ""} ${isDeleted ? "text-slate-400" : ""}`}>
              {task.desc}
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            {isDeleted && onRestore && (
              <button
                aria-label="Restore task to open"
                onClick={() => onRestore(task.id)}
                className="inline-flex items-center justify-center size-8 rounded-md text-slate-500 hover:text-orange-700 hover:bg-orange-50 ring-1 ring-transparent hover:ring-orange-200 transition-colors"
                title="Move back to open"
              >
                <RotateCcw className="size-4" />
              </button>
            )}
            {isCompleted && onUncomplete && (
              <button
                aria-label="Uncomplete task"
                onClick={() => onUncomplete(task.id)}
                className="inline-flex items-center justify-center size-8 rounded-md text-slate-500 hover:text-orange-700 hover:bg-orange-50 ring-1 ring-transparent hover:ring-orange-200 transition-colors"
                title="Move back to open"
              >
                <RotateCcw className="size-4" />
              </button>
            )}
            {!isCompleted && !isDeleted && onComplete && (
              <button
                aria-label="Complete task"
                onClick={() => onComplete(task.id)}
                className="inline-flex items-center justify-center size-8 rounded-md text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 ring-1 ring-transparent hover:ring-emerald-200 transition-colors"
              >
                <Check className="size-4" />
              </button>
            )}
            {!isDeleted && onDelete && (
              <button
                aria-label="Delete task"
                onClick={() => onDelete(task.id)}
                className="inline-flex items-center justify-center size-8 rounded-md text-slate-500 hover:text-red-700 hover:bg-red-50 ring-1 ring-transparent hover:ring-red-200 transition-colors"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

function TasksPanel({ preview = false, onSeeMore, tasks = [], onComplete, onDelete }: {
  preview?: boolean
  onSeeMore?: () => void
  tasks?: Task[]
  onComplete: (id: string) => void
  onDelete: (id: string) => void
}) {
  const [completingTasks, setCompletingTasks] = useState<Set<string>>(new Set())

  const openTasks = tasks.filter(t => t.status === "open")
  const displayTasks = openTasks

  const handleComplete = (id: string) => {
    setCompletingTasks(prev => new Set(prev).add(id))
    setTimeout(() => {
      onComplete(id)
      setCompletingTasks(prev => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })
    }, 600)
  }

  return (
    <div className="space-y-4">
      {displayTasks.length === 0 ? (
        <div className="p-6 text-sm text-muted-foreground text-center">All caught up — no tasks for now.</div>
      ) : (
        <>
          <div className={`space-y-3 ${preview ? "max-h-[340px] overflow-y-auto pr-2" : "max-h-[500px] overflow-y-auto pr-2"}`}>
            {displayTasks.map((t) => (
              <TaskCard
                key={t.id}
                task={t}
                onComplete={handleComplete}
                onDelete={onDelete}
                isCompleting={completingTasks.has(t.id)}
              />
            ))}
          </div>
          {preview && openTasks.length > 0 && onSeeMore && (
            <button
              onClick={onSeeMore}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-orange-700 bg-orange-50 hover:bg-orange-100 rounded-xl ring-1 ring-orange-200 hover:ring-orange-300 transition-all"
            >
              <span>See all {openTasks.length} tasks</span>
              <ExternalLink className="size-4" />
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default function PracticeHealthDashboardContent() {
  const score = 90
  const [showTasksModal, setShowTasksModal] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [tasks, setTasks] = useState(taskInitial)

  // Auto-delete tasks older than 3 days
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      const threeDaysMs = 3 * 24 * 60 * 60 * 1000
      setTasks(prev => prev.filter(t => {
        if (t.status === "deleted" && t.deletedAt) {
          return (now - t.deletedAt) < threeDaysMs
        }
        return true
      }))
    }, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  const completeTask = (id: string) => {
    setTasks(prev => prev.map(t =>
      t.id === id ? { ...t, status: "completed" as const, completedAt: Date.now() } : t
    ))
  }

  const uncompleteTask = (id: string) => {
    setTasks(prev => prev.map(t =>
      t.id === id ? { ...t, status: "open" as const, completedAt: undefined } : t
    ))
  }

  const deleteTask = (id: string) => {
    setTasks(prev => prev.map(t =>
      t.id === id ? { ...t, status: "deleted" as const, deletedAt: Date.now() } : t
    ))
  }

  const restoreTask = (id: string) => {
    setTasks(prev => prev.map(t =>
      t.id === id ? { ...t, status: "open" as const, deletedAt: undefined } : t
    ))
  }

  const markAllComplete = () => {
    setTasks(prev => prev.map(t =>
      t.status === "open" ? { ...t, status: "completed" as const, completedAt: Date.now() } : t
    ))
  }

  const clearAll = () => {
    setTasks(prev => prev.map(t =>
      t.status === "open" ? { ...t, status: "deleted" as const, deletedAt: Date.now() } : t
    ))
  }

  const clearCompleted = () => {
    setTasks(prev => prev.map(t =>
      t.status === "completed" ? { ...t, status: "deleted" as const, deletedAt: Date.now() } : t
    ))
  }

  const permanentlyDeleteAll = () => {
    setTasks(prev => prev.filter(t => t.status !== "deleted"))
    setShowDeleteConfirm(false)
  }

  const openTasks = tasks.filter(t => t.status === "open")
  const completedTasks = tasks.filter(t => t.status === "completed")
  const deletedTasks = tasks.filter(t => t.status === "deleted")

  return (
    <>
      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="operations">Operations</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
        </TabsList>

        {/* Summary Tab */}
        <TabsContent value="summary" className="space-y-8">
          {/* Top row: Overall Health (2/3) + Tasks (1/3) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Overall Health - 2/3 width */}
            <div className="lg:col-span-2">
              <Card className="rounded-3xl ring-1 ring-gray-200 hover:ring-2 hover:ring-orange-200 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Overall health</CardTitle>
                  <CardDescription>Calculated from financial, operational, and marketing signals.</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex items-center gap-4">
                    <ScoreRing score={score} />
                  </div>
                  {/* Notifications & Recommendations inside the same card */}
                  <div className="mt-4">
                    <StackedCards />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tasks - 1/3 width */}
            <div className="lg:col-span-1">
              <Card className="rounded-3xl ring-1 ring-gray-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Tasks</CardTitle>
                      <CardDescription>Quick actions to improve your score.</CardDescription>
                    </div>
                    <div className="flex items-center justify-center size-10 rounded-full bg-orange-100 text-orange-700 font-bold text-sm">
                      {openTasks.length}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <TasksPanel
                    preview
                    tasks={tasks}
                    onComplete={completeTask}
                    onDelete={deleteTask}
                    onSeeMore={() => setShowTasksModal(true)}
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom row: Category boxes - full width */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                key: "operations",
                title: "Operations",
                score: 88,
                Icon: Settings,
                textClass: "text-blue-600",
                bgClass: "bg-blue-50",
                ringColor: "#3b82f6",
              },
              {
                key: "financial",
                title: "Financial",
                score: 92,
                Icon: Banknote,
                textClass: "text-emerald-600",
                bgClass: "bg-emerald-50",
                ringColor: "#01f2a1",
              },
              {
                key: "marketing",
                title: "Marketing",
                score: 84,
                Icon: Megaphone,
                textClass: "text-violet-600",
                bgClass: "bg-violet-50",
                ringColor: "#8b5cf6",
              },
            ].map(({ key, title, score, Icon, textClass, bgClass, ringColor }) => (
              <Card key={key} className="rounded-2xl ring-1 ring-gray-200">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`inline-flex items-center justify-center size-9 rounded-full ${bgClass}`}>
                      <Icon className={`size-5 ${textClass}`} />
                    </div>
                    <CardTitle className="text-base font-semibold leading-tight">{title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-2 flex items-center justify-center">
                  <MiniScoreRing score={score} color={ringColor} />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Metrics Section - Split into two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Last Month Metrics */}
            <Card className="rounded-3xl ring-1 ring-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Last Month Summary</CardTitle>
                <CardDescription>October performance metrics</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  {lastMonthMetrics.map((metric) => (
                    <MetricRow key={metric.id} metric={metric} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* YTD Metrics */}
            <Card className="rounded-3xl ring-1 ring-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">YTD Metrics</CardTitle>
                <CardDescription>Year-to-date performance</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-100">
                  {ytdMetrics.map((metric) => (
                    <MetricRow key={metric.id} metric={metric} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Operations Tab */}
        <TabsContent value="operations">
          <CategoryTabContent
            data={operationsData}
            categoryName="Operations"
            categoryColor={{ bg: "bg-blue-50", text: "text-blue-600", ring: "#3b82f6" }}
            Icon={Settings}
          />
        </TabsContent>

        {/* Financial Tab */}
        <TabsContent value="financial">
          <CategoryTabContent
            data={financialData}
            categoryName="Financial"
            categoryColor={{ bg: "bg-emerald-50", text: "text-emerald-600", ring: "#01f2a1" }}
            Icon={Banknote}
          />
        </TabsContent>

        {/* Marketing Tab */}
        <TabsContent value="marketing">
          <CategoryTabContent
            data={marketingData}
            categoryName="Marketing"
            categoryColor={{ bg: "bg-violet-50", text: "text-violet-600", ring: "#8b5cf6" }}
            Icon={Megaphone}
          />
        </TabsContent>
      </Tabs>

      {/* Tasks Modal */}
      <Dialog open={showTasksModal} onOpenChange={setShowTasksModal}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Task Management</DialogTitle>
            <DialogDescription>Organize and track your practice improvement tasks</DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="open" className="flex-1 flex flex-col overflow-hidden">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="open" className="relative">
                Open
                {openTasks.length > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center size-5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
                    {openTasks.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="completed" className="relative">
                Completed
                {completedTasks.length > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center size-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                    {completedTasks.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="deleted" className="relative flex items-center gap-1">
                Deleted
                {deletedTasks.length > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center size-5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                    {deletedTasks.length}
                  </span>
                )}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="open" className="flex-1 flex flex-col overflow-hidden mt-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-muted-foreground">
                  {openTasks.length === 0 ? "No open tasks" : `${openTasks.length} open task${openTasks.length === 1 ? "" : "s"}`}
                </p>
                <div className="flex gap-2">
                  {openTasks.length > 0 && (
                    <>
                      <button
                        onClick={markAllComplete}
                        className="px-3 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg ring-1 ring-emerald-200 hover:ring-emerald-300 transition-all"
                      >
                        Mark All Complete
                      </button>
                      <button
                        onClick={clearAll}
                        className="px-3 py-1.5 text-xs font-medium text-red-700 bg-red-50 hover:bg-red-100 rounded-lg ring-1 ring-red-200 hover:ring-red-300 transition-all"
                      >
                        Clear All
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="flex-1 overflow-y-auto pr-2 space-y-3">
                {openTasks.length === 0 ? (
                  <div className="p-8 text-center text-muted-foreground">
                    All tasks complete! Great work.
                  </div>
                ) : (
                  openTasks.map(task => (
                    <TaskCard key={task.id} task={task} onComplete={completeTask} onDelete={deleteTask} />
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="flex-1 flex flex-col overflow-hidden mt-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-muted-foreground">
                  {completedTasks.length === 0 ? "No completed tasks" : `${completedTasks.length} completed task${completedTasks.length === 1 ? "" : "s"}`}
                </p>
                {completedTasks.length > 0 && (
                  <button
                    onClick={clearCompleted}
                    className="px-3 py-1.5 text-xs font-medium text-red-700 bg-red-50 hover:bg-red-100 rounded-lg ring-1 ring-red-200 hover:ring-red-300 transition-all"
                  >
                    Clear All
                  </button>
                )}
              </div>
              <div className="flex-1 overflow-y-auto pr-2 space-y-3">
                {completedTasks.length === 0 ? (
                  <div className="p-8 text-center text-muted-foreground">
                    No completed tasks yet.
                  </div>
                ) : (
                  completedTasks.map(task => (
                    <TaskCard key={task.id} task={task} onUncomplete={uncompleteTask} onDelete={deleteTask} />
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="deleted" className="flex-1 flex flex-col overflow-hidden mt-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-muted-foreground">
                  {deletedTasks.length === 0 ? "No deleted tasks" : `${deletedTasks.length} deleted task${deletedTasks.length === 1 ? "" : "s"} (auto-removed in 3 days)`}
                </p>
                {deletedTasks.length > 0 && (
                  <button
                    onClick={() => setShowDeleteConfirm(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-700 bg-red-50 hover:bg-red-100 rounded-lg ring-1 ring-red-200 hover:ring-red-300 transition-all"
                  >
                    <Trash2 className="size-3" />
                    Delete Permanently
                  </button>
                )}
              </div>
              <div className="flex-1 overflow-y-auto pr-2 space-y-3">
                {deletedTasks.length === 0 ? (
                  <div className="p-8 text-center text-muted-foreground">
                    No deleted tasks.
                  </div>
                ) : (
                  deletedTasks.map(task => (
                    <TaskCard key={task.id} task={task} onRestore={restoreTask} />
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Permanently Delete All Tasks?</DialogTitle>
            <DialogDescription>
              This will permanently remove all {deletedTasks.length} deleted task{deletedTasks.length === 1 ? "" : "s"}. This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 justify-end mt-4">
            <button
              onClick={() => setShowDeleteConfirm(false)}
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={permanentlyDeleteAll}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              Delete Permanently
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

function MiniScoreRing({ score, color }: { score: number; color: string }) {
  const size = 80
  const radius = 32
  const stroke = 6
  const circumference = 2 * Math.PI * radius
  const progress = (Math.max(0, Math.min(100, score)) / 100) * circumference

  return (
    <div className="w-20 h-20">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full" role="img" aria-label={`${score} out of 100`}>
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e5e7eb" strokeWidth={stroke} />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
          />
        </g>
        <g>
          <foreignObject x="0" y="0" width={size} height={size}>
            <div className="w-full h-full grid place-items-center">
              <div className="text-center">
                <div className="text-sm font-semibold" style={{ color }}>
                  {score}
                </div>
              </div>
            </div>
          </foreignObject>
        </g>
      </svg>
    </div>
  )
}

function GoalCard({ goal, isTop = false }: { goal: GoalData; isTop?: boolean }) {
  const [showChart, setShowChart] = useState(false)

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return { text: "text-emerald-600", bg: "bg-emerald-50" }
    if (progress >= 70) return { text: "text-yellow-600", bg: "bg-yellow-50" }
    return { text: "text-red-600", bg: "bg-red-50" }
  }

  // Calculate progress - for reverse metrics (lower is better), invert the calculation
  const calculateProgress = () => {
    if (!goal.current || !goal.target) return null

    if (goal.reverseMetric) {
      // For reverse metrics (like no-show rate), calculate how close we are to target
      // If current is at or below target, we're at 100%+
      // If current is above target, calculate the percentage
      if (goal.current <= goal.target) {
        return 100
      }
      // Calculate what % we are of the way from current to target
      // E.g., if target is 6, current is 8.2, and starting point assumed is higher
      // We want to show progress toward the lower target
      const range = goal.current - goal.target
      const improvement = Math.max(0, (range / goal.current) * 100)
      return Math.round(100 - improvement)
    }

    return Math.round((goal.current / goal.target) * 100)
  }

  const progress = calculateProgress()
  const progressColors = progress ? getProgressColor(progress) : { text: "text-slate-600", bg: "bg-slate-50" }

  return (
    <Card className={`rounded-3xl ring-1 ring-gray-200 hover:ring-2 hover:ring-orange-200 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300 ${isTop ? "lg:col-span-full" : ""}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className={isTop ? "text-xl font-bold" : "text-lg"}>{goal.title}</CardTitle>
          {goal.monthlyHistory && (
            <button
              onClick={() => setShowChart(!showChart)}
              className="inline-flex items-center justify-center size-9 rounded-full hover:bg-orange-50 text-slate-600 hover:text-orange-700 transition-colors"
              aria-label="Toggle chart"
            >
              <TrendingUp className="size-5" />
            </button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-baseline gap-3 flex-wrap">
          <div className={`font-extrabold tracking-tight text-orange-600 ${isTop ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl"}`}>
            {goal.current !== undefined
              ? (goal.unit?.includes('revenue') || goal.unit?.includes('EBITDA') || goal.unit?.includes('cash flow'))
                ? `${goal.current < 0 ? '-' : ''}$${Math.abs(goal.current / 1000).toFixed(1)}K`
                : goal.unit?.includes('CPA')
                ? `$${goal.current}`
                : goal.current.toLocaleString()
              : goal.metric}
          </div>
          {goal.unit && (
            <div className="text-xl md:text-2xl font-semibold text-slate-700">
              {goal.unit}
            </div>
          )}
        </div>

        {goal.additionalInfo && (
          <div className="text-sm text-slate-500">
            {goal.additionalInfo}
          </div>
        )}

        {progress !== null && goal.target && (
          <div className="flex items-center gap-3 flex-wrap">
            <div className="text-sm text-slate-600">
              Target: <span className="font-semibold">
                {(goal.unit?.includes('revenue') || goal.unit?.includes('EBITDA') || goal.unit?.includes('cash flow'))
                  ? `${goal.target < 0 ? '-' : ''}$${Math.abs(goal.target / 1000).toFixed(0)}K`
                  : goal.unit?.includes('CPA')
                  ? `$${goal.target}`
                  : goal.target.toLocaleString()}
              </span>
            </div>
            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${progressColors.bg}`}>
              <span className={`text-sm font-bold ${progressColors.text}`}>
                {progress}%
              </span>
              <span className="text-xs text-slate-600">to target</span>
            </div>
          </div>
        )}

        <p className="text-sm text-slate-600 leading-relaxed">
          {goal.qualitative}
        </p>

        {showChart && goal.monthlyHistory && (
          <div className="pt-4 border-t border-slate-100">
            <MonthlyBarChart data={goal.monthlyHistory} unit={goal.unit} target={goal.target} />
          </div>
        )}

        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-100">
          <div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Last Month</div>
            <div className="text-base font-semibold text-slate-900">{goal.lastMonth}</div>
          </div>
          <div>
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">YTD</div>
            <div className="text-base font-semibold text-slate-900">{goal.ytd}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function MonthlyBarChart({ data, unit, target }: { data: { month: string; value: number }[]; unit?: string; target?: number }) {
  const hasNegativeValues = data.some(d => d.value < 0)
  const maxValue = Math.max(...data.map(d => d.value), target || 0)
  const minValue = hasNegativeValues ? Math.min(...data.map(d => d.value), 0) : 0
  const range = maxValue - minValue

  const formatValue = (value: number, compact = false) => {
    const isMonetary = unit?.includes('revenue') || unit?.includes('EBITDA') || unit?.includes('cash flow')
    if (isMonetary) {
      const absVal = Math.abs(value / 1000)
      return `${value < 0 ? '-' : ''}$${absVal.toFixed(compact ? 0 : 1)}K`
    }
    if (compact && Math.abs(value) >= 1000) {
      return `${value < 0 ? '-' : ''}${Math.abs(value / 1000).toFixed(1)}K`
    }
    return value.toLocaleString()
  }

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-slate-700">12-Month Trend</h4>
      <div className="relative">
        {/* Target line */}
        {target !== undefined && (
          <div
            className="absolute left-0 right-0 border-t-2 border-dashed border-emerald-500 z-10"
            style={{ bottom: `${((target - minValue) / range) * 100}%` }}
          >
            <div className="absolute -top-2.5 right-0 bg-emerald-500 text-white text-[10px] px-1.5 py-0.5 rounded font-semibold">
              Target: {formatValue(target, true)}
            </div>
          </div>
        )}

        {/* Zero line for negative values */}
        {hasNegativeValues && (
          <div
            className="absolute left-0 right-0 border-t border-slate-300 z-10"
            style={{ bottom: `${((0 - minValue) / range) * 100}%` }}
          />
        )}

        <div className="grid grid-cols-12 gap-1 items-end h-32">
          {data.map((item, idx) => {
            const isNegative = item.value < 0
            const heightPercent = (Math.abs(item.value) / range) * 100
            const bottomPosition = hasNegativeValues ? ((0 - minValue) / range) * 100 : 0

            return (
              <div key={idx} className="flex flex-col items-center gap-1 h-full relative">
                <div className="flex-1 w-full flex relative" style={{ alignItems: hasNegativeValues ? 'flex-end' : 'flex-end' }}>
                  <div
                    className={`w-full ${isNegative ? 'bg-red-500 hover:bg-red-600' : 'bg-orange-500 hover:bg-orange-600'} transition-colors relative`}
                    style={{
                      height: `${heightPercent}%`,
                      position: 'absolute',
                      bottom: `${bottomPosition}%`,
                      borderRadius: isNegative ? '0 0 4px 4px' : '4px 4px 0 0'
                    }}
                  >
                    {/* Value label on bar */}
                    <div className={`absolute ${isNegative ? 'top-full mt-1' : '-top-5'} left-1/2 -translate-x-1/2 text-[9px] font-semibold text-slate-700 whitespace-nowrap`}>
                      {formatValue(item.value, true)}
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  {item.month}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function ChannelPieChart({ channels }: { channels: CategoryData['channels'] }) {
  if (!channels) return null

  const data = [
    { name: channels.website.name, value: channels.website.visits, color: "#f97316" },
    { name: channels.googleBusiness.name, value: channels.googleBusiness.visits, color: "#10b981" },
    { name: channels.zocdoc.name, value: channels.zocdoc.visits, color: "#3b82f6" },
    { name: channels.googleAds.name, value: channels.googleAds.visits, color: "#8b5cf6" },
  ]

  const total = data.reduce((sum, item) => sum + item.value, 0)
  let currentAngle = -90 // Start from top

  return (
    <Card className="rounded-3xl ring-1 ring-gray-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Channel Distribution</CardTitle>
        <CardDescription>October patient visits by source</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-8">
          {/* Pie chart */}
          <div className="relative w-48 h-48">
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              {data.map((item, idx) => {
                const percentage = (item.value / total) * 100
                const angle = (percentage / 100) * 360
                const x1 = 50 + 45 * Math.cos((currentAngle * Math.PI) / 180)
                const y1 = 50 + 45 * Math.sin((currentAngle * Math.PI) / 180)
                currentAngle += angle
                const x2 = 50 + 45 * Math.cos((currentAngle * Math.PI) / 180)
                const y2 = 50 + 45 * Math.sin((currentAngle * Math.PI) / 180)
                const largeArc = angle > 180 ? 1 : 0

                return (
                  <path
                    key={idx}
                    d={`M 50 50 L ${x1} ${y1} A 45 45 0 ${largeArc} 1 ${x2} ${y2} Z`}
                    fill={item.color}
                    className="hover:opacity-80 transition-opacity"
                  />
                )
              })}
              {/* Center circle for donut effect */}
              <circle cx="50" cy="50" r="25" fill="white" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">{total}</div>
                <div className="text-xs text-slate-500">Total</div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex-1 space-y-3">
            {data.map((item, idx) => {
              const percentage = ((item.value / total) * 100).toFixed(1)
              return (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }} />
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-900">{item.name}</div>
                    <div className="text-xs text-slate-600">
                      {item.value} visits ({percentage}%)
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ChannelCard({ channel, color }: { channel: ChannelData; color: string }) {
  const [showDetails, setShowDetails] = useState(false)
  const costPerVisit = channel.spend > 0 ? (channel.spend / channel.visits).toFixed(2) : '0.00'

  return (
    <Card className="rounded-3xl ring-1 ring-gray-200 hover:ring-2 hover:ring-orange-200 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{channel.name}</CardTitle>
            <CardDescription>October performance</CardDescription>
          </div>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center justify-center size-9 rounded-full hover:bg-orange-50 text-slate-600 hover:text-orange-700 transition-colors"
            aria-label="Toggle details"
          >
            <Info className="size-5" />
          </button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-baseline gap-2">
          <div className="text-5xl font-extrabold tracking-tight" style={{ color }}>
            {channel.visits}
          </div>
          <div className="text-xl font-semibold text-slate-700">visits</div>
        </div>

        {showDetails && (
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Spend</div>
                <div className="text-base font-semibold text-slate-900">
                  {channel.spend > 0 ? `$${channel.spend.toLocaleString()}` : 'Free'}
                </div>
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">
                  {channel.name.includes('Google Ads') || channel.name.includes('Website') ? 'Clicks' : 'Profile Views'}
                </div>
                <div className="text-base font-semibold text-slate-900">{channel.clicks.toLocaleString()}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Bookings</div>
                <div className="text-base font-semibold text-slate-900">{channel.bookings}</div>
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-1">Cost/Visit</div>
                <div className="text-base font-semibold text-slate-900">
                  {channel.spend > 0 ? `$${costPerVisit}` : 'Free'}
                </div>
              </div>
            </div>

            {/* 12-month trend */}
            <div className="pt-3 border-t border-slate-100">
              <h4 className="text-sm font-semibold text-slate-700 mb-3">12-Month Trend</h4>
              <div className="grid grid-cols-12 gap-1 items-end h-24">
                {channel.monthlyHistory.map((item, idx) => {
                  const maxVisits = Math.max(...channel.monthlyHistory.map(h => h.visits))
                  const heightPercent = (item.visits / maxVisits) * 100
                  return (
                    <div key={idx} className="flex flex-col items-center gap-1 h-full">
                      <div className="flex-1 w-full flex items-end relative">
                        <div
                          className="w-full rounded-t hover:opacity-80 transition-opacity relative"
                          style={{ height: `${heightPercent}%`, backgroundColor: color }}
                        >
                          <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-semibold text-slate-700 whitespace-nowrap">
                            {item.visits}
                          </div>
                        </div>
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">{item.month}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

type ItemType = "issue" | "notification"
type StackItem = { id: string; type: ItemType; title: string; desc: string }

function CalloutCarousel({ items, onDismiss }: { items: StackItem[]; onDismiss: (id: string) => void }) {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState<false | "next" | "prev">(false)
  const [leaving, setLeaving] = useState<StackItem | null>(null)

  const count = items.length
  const normalizedIndex = count ? ((index % count) + count) % count : 0

  const front = count ? items[normalizedIndex] : null
  const next1 = count > 1 ? items[(normalizedIndex + 1) % count] : null
  const next2 = count > 2 ? items[(normalizedIndex + 2) % count] : null

  const prev = () => {
    if (!count || animating) return
    setAnimating("prev")
    setLeaving(front)
    setTimeout(() => {
      setIndex((i) => i - 1)
      setAnimating(false)
      setLeaving(null)
    }, 300)
  }

  const next = () => {
    if (!count || animating) return
    setAnimating("next")
    setLeaving(front)
    setTimeout(() => {
      setIndex((i) => i + 1)
      setAnimating(false)
      setLeaving(null)
    }, 300)
  }

  const ButtonEl = ({ side }: { side: "left" | "right" }) => (
    <button
      type="button"
      onClick={side === "left" ? prev : next}
      disabled={count === 0}
      className="inline-flex items-center justify-center size-9 rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-orange-50 hover:border-orange-200 disabled:opacity-40 disabled:cursor-not-allowed"
      aria-label={side === "left" ? "Previous" : "Next"}
    >
      {side === "left" ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
    </button>
  )

  return (
    <div className="relative py-1">
      <div className="mb-1 text-base text-muted-foreground self-start">
        {count ? `${normalizedIndex + 1} of ${count} key callouts` : "0 of 0 key callouts"}
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-30">
          <ButtonEl side="left" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30">
          <ButtonEl side="right" />
        </div>

        <div className="relative w-full flex items-center justify-center min-h-[120px]">
          {count === 0 ? (
            <div className="text-sm text-muted-foreground">No callouts at this time</div>
          ) : (
            <div className="relative w-full max-w-xl">
              {animating && leaving && (
                <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                  <CalloutCard
                    item={leaving}
                    onDismiss={() => onDismiss(leaving.id)}
                    className={`transition-transform transition-opacity duration-300 ${
                      animating === "next" ? "translate-x-full opacity-0" : "-translate-x-full opacity-0"
                    }`}
                  />
                </div>
              )}
              {next2 && (
                <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
                  <CalloutCard item={next2} onDismiss={() => {}} className="scale-[0.96] opacity-60" />
                </div>
              )}
              {next1 && (
                <div className="absolute inset-0 flex items-center justify-center -z-0 pointer-events-none">
                  <CalloutCard item={next1} onDismiss={() => {}} className="scale-[0.98] opacity-80" />
                </div>
              )}
              {front && !animating && (
                <div className="relative z-20">
                  <CalloutCard item={front} onDismiss={() => onDismiss(front.id)} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function CalloutCard({ item, className = "", onDismiss }: { item: StackItem; className?: string; onDismiss?: () => void }) {
  const isIssue = item.type === "issue"
  const base = "relative w-full max-w-xl rounded-2xl border p-4 shadow-sm transition-all duration-300 bg-white"
  const hover = "hover:border-slate-300 hover:shadow-lg hover:shadow-orange-100"
  const neutral = "border-slate-200"
  const issue = "bg-red-50 border-red-200"

  return (
    <div className={`${base} ${hover} ${isIssue ? issue : neutral} ${className}`}>
      <div className="flex items-start gap-3">
        <div className={`inline-flex items-center justify-center size-8 rounded-full ${isIssue ? "bg-red-100 text-red-700" : "bg-orange-50 text-orange-700"}`}>
          {isIssue ? <AlertTriangle className="size-4" /> : <Megaphone className="size-4" />}
        </div>
        <div>
          <div className={`text-base font-semibold ${isIssue ? "text-red-800" : "text-slate-900"}`}>{item.title}</div>
          <p className={`mt-0.5 text-sm ${isIssue ? "text-red-700" : "text-slate-600"}`}>{item.desc}</p>
        </div>
        {onDismiss && (
          <button
            type="button"
            aria-label="Dismiss"
            onClick={onDismiss}
            className="ml-auto inline-flex items-center justify-center size-7 rounded-md text-slate-500 hover:text-slate-900 hover:bg-orange-50 ring-1 ring-transparent hover:ring-orange-200 transition-colors"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>
    </div>
  )
}

function CategoryTabContent({
  data,
  categoryName,
  categoryColor,
  Icon
}: {
  data: CategoryData
  categoryName: string
  categoryColor: { bg: string; text: string; ring: string }
  Icon: React.ComponentType<{ className?: string }>
}) {
  const [categoryTasks, setCategoryTasks] = useState(data.tasks)
  const [categoryCallouts, setCategoryCallouts] = useState(data.callouts)
  const [showTasksModal, setShowTasksModal] = useState(false)

  const completeTask = (id: string) => {
    setCategoryTasks(prev => prev.map(t =>
      t.id === id ? { ...t, status: "completed" as const, completedAt: Date.now() } : t
    ))
  }

  const uncompleteTask = (id: string) => {
    setCategoryTasks(prev => prev.map(t =>
      t.id === id ? { ...t, status: "open" as const, completedAt: undefined } : t
    ))
  }

  const deleteTask = (id: string) => {
    setCategoryTasks(prev => prev.map(t =>
      t.id === id ? { ...t, status: "deleted" as const, deletedAt: Date.now() } : t
    ))
  }

  const restoreTask = (id: string) => {
    setCategoryTasks(prev => prev.map(t =>
      t.id === id ? { ...t, status: "open" as const, deletedAt: undefined } : t
    ))
  }

  const dismissCallout = (id: string) => {
    setCategoryCallouts(prev => prev.filter(c => c.id !== id))
  }

  const openTasks = categoryTasks.filter(t => t.status === "open")
  const completedTasks = categoryTasks.filter(t => t.status === "completed")
  const deletedTasks = categoryTasks.filter(t => t.status === "deleted")

  return (
    <>
      <div className="space-y-8 py-4">
        {/* Top section: Score + Callouts (2/3) | Tasks (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - 2/3 width */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Score */}
            <Card className="rounded-3xl ring-1 ring-gray-200 hover:ring-2 hover:ring-orange-200 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300 flex-1">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`inline-flex items-center justify-center size-10 rounded-full ${categoryColor.bg}`}>
                    <Icon className={`size-6 ${categoryColor.text}`} />
                  </div>
                  <CardTitle className="text-lg">{categoryName} Score</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-2 flex items-center justify-center">
                <ScoreRing score={data.score} />
              </CardContent>
            </Card>

            {/* Callouts */}
            <Card className="rounded-3xl ring-1 ring-gray-200 hover:ring-2 hover:ring-orange-200 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300 flex-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Key Callouts</CardTitle>
                <CardDescription>Important updates and alerts</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <CalloutCarousel items={categoryCallouts} onDismiss={dismissCallout} />
              </CardContent>
            </Card>
          </div>

          {/* Right column - Tasks - 1/3 width */}
          <div className="lg:col-span-1">
            <Card className="rounded-3xl ring-1 ring-gray-200 h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Tasks</CardTitle>
                    <CardDescription>Actions to improve this area</CardDescription>
                  </div>
                  <div className="flex items-center justify-center size-10 rounded-full bg-orange-100 text-orange-700 font-bold text-sm">
                    {openTasks.length}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <TasksPanel
                  preview
                  tasks={categoryTasks}
                  onComplete={completeTask}
                  onDelete={deleteTask}
                  onSeeMore={() => setShowTasksModal(true)}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Goals Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Goals</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GoalCard goal={data.goals.top} isTop />
            <GoalCard goal={data.goals.sub1} />
            <GoalCard goal={data.goals.sub2} />
          </div>
        </div>

        {/* Marketing Channel Breakdown - Only for Marketing tab */}
        {data.channels && (
          <div>
            <h3 className="text-xl font-bold mb-4">Marketing Channel Breakdown</h3>
            <div className="space-y-6">
              {/* Pie chart first */}
              <ChannelPieChart channels={data.channels} />

              {/* Individual channel cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ChannelCard channel={data.channels.website} color="#f97316" />
                <ChannelCard channel={data.channels.googleBusiness} color="#10b981" />
                <ChannelCard channel={data.channels.zocdoc} color="#3b82f6" />
                <ChannelCard channel={data.channels.googleAds} color="#8b5cf6" />
              </div>
            </div>
          </div>
        )}

        {/* Metrics Section - Side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Last Month Metrics */}
          <Card className="rounded-3xl ring-1 ring-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Last Month Summary</CardTitle>
              <CardDescription>October performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                {data.metrics.lastMonth.map((metric) => (
                  <MetricRow key={metric.id} metric={metric} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* YTD Metrics */}
          <Card className="rounded-3xl ring-1 ring-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">YTD Metrics</CardTitle>
              <CardDescription>Year-to-date performance</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                {data.metrics.ytd.map((metric) => (
                  <MetricRow key={metric.id} metric={metric} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tasks Modal */}
      <Dialog open={showTasksModal} onOpenChange={setShowTasksModal}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Task Management - {categoryName}</DialogTitle>
            <DialogDescription>Organize and track your {categoryName.toLowerCase()} improvement tasks</DialogDescription>
          </DialogHeader>

          <Tabs defaultValue="open" className="flex-1 flex flex-col overflow-hidden">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="open" className="relative">
                Open
                {openTasks.length > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center size-5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold">
                    {openTasks.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="completed" className="relative">
                Completed
                {completedTasks.length > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center size-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                    {completedTasks.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="deleted" className="relative flex items-center gap-1">
                Deleted
                {deletedTasks.length > 0 && (
                  <span className="ml-2 inline-flex items-center justify-center size-5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                    {deletedTasks.length}
                  </span>
                )}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="open" className="flex-1 flex flex-col overflow-hidden mt-4">
              <div className="flex-1 overflow-y-auto pr-2 space-y-3">
                {openTasks.length === 0 ? (
                  <div className="p-8 text-center text-muted-foreground">
                    All tasks complete! Great work.
                  </div>
                ) : (
                  openTasks.map(task => (
                    <TaskCard key={task.id} task={task} onComplete={completeTask} onDelete={deleteTask} />
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="flex-1 flex flex-col overflow-hidden mt-4">
              <div className="flex-1 overflow-y-auto pr-2 space-y-3">
                {completedTasks.length === 0 ? (
                  <div className="p-8 text-center text-muted-foreground">
                    No completed tasks yet.
                  </div>
                ) : (
                  completedTasks.map(task => (
                    <TaskCard key={task.id} task={task} onUncomplete={uncompleteTask} onDelete={deleteTask} />
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="deleted" className="flex-1 flex flex-col overflow-hidden mt-4">
              <div className="flex-1 overflow-y-auto pr-2 space-y-3">
                {deletedTasks.length === 0 ? (
                  <div className="p-8 text-center text-muted-foreground">
                    No deleted tasks.
                  </div>
                ) : (
                  deletedTasks.map(task => (
                    <TaskCard key={task.id} task={task} onRestore={restoreTask} />
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  )
}

function StackedCards() {
  const initialItems: StackItem[] = [
    { id: "i1", type: "issue", title: "Cash burn increased", desc: "In October, operating spend outpaced revenue by 12%." },
    { id: "i2", type: "issue", title: "Zocdoc bookings down 50%", desc: "New patient bookings via Zocdoc declined 50% in October." },
    { id: "n1", type: "notification", title: "New review trend", desc: "Average rating improved to 4.6 over the last two weeks." },
    { id: "n2", type: "notification", title: "October revenue doubled YoY", desc: "October revenue is 2× compared to the same month last year." },
    { id: "n3", type: "notification", title: "Record low no‑show rate", desc: "October posted your lowest monthly no‑show rate on record." },
    { id: "n4", type: "notification", title: "Referral spike", desc: "Direct referrals are up 18% week‑over‑week." },
  ]

  const [items, setItems] = useState<StackItem[]>(initialItems)
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState<false | "next" | "prev">(false)
  const [leaving, setLeaving] = useState<StackItem | null>(null)

  const count = items.length
  const normalizedIndex = count ? ((index % count) + count) % count : 0

  const front = count ? items[normalizedIndex] : null
  const next1 = count > 1 ? items[(normalizedIndex + 1) % count] : null
  const next2 = count > 2 ? items[(normalizedIndex + 2) % count] : null

  const prev = () => {
    if (!count || animating) return
    setAnimating("prev")
    setLeaving(front)
    setTimeout(() => {
      setIndex((i) => i - 1)
      setAnimating(false)
      setLeaving(null)
    }, 300)
  }

  const next = () => {
    if (!count || animating) return
    setAnimating("next")
    setLeaving(front)
    setTimeout(() => {
      setIndex((i) => i + 1)
      setAnimating(false)
      setLeaving(null)
    }, 300)
  }

  const dismiss = (id: string) => {
    if (!count) return
    setItems((curr) => {
      const idx = curr.findIndex((x) => x.id === id)
      const nextArr = curr.filter((x) => x.id !== id)
      // Adjust index if needed so we don't skip or overflow
      if (idx === normalizedIndex) {
        // keep pointer at same position to show the next item naturally
      } else if (idx < normalizedIndex) {
        setIndex((i) => i - 1)
      }
      return nextArr
    })
  }

  const ButtonEl = ({ side }: { side: "left" | "right" }) => (
    <button
      type="button"
      onClick={side === "left" ? prev : next}
      disabled={count === 0}
      className="inline-flex items-center justify-center size-9 rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-orange-50 hover:border-orange-200 disabled:opacity-40 disabled:cursor-not-allowed"
      aria-label={side === "left" ? "Previous" : "Next"}
    >
      {side === "left" ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
    </button>
  )

  return (
    <div className="relative py-1">
      {/* indicator - positioned statically above everything */}
      <div className="mb-1 text-base text-muted-foreground self-start">
        {count ? `${normalizedIndex + 1} of ${count} key call outs` : "0 of 0 key call outs"}
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-30">
          <ButtonEl side="left" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30">
          <ButtonEl side="right" />
        </div>

        {/* Stack container */}
        <div className="relative w-full flex items-center justify-center min-h-[120px]">
          {count === 0 ? (
            <div className="text-sm text-muted-foreground">No notifications or recommendations</div>
          ) : (
            <div className="relative w-full max-w-xl">
              {/* leaving animation overlay */}
              {animating && leaving && (
                <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                  <StackCard
                    item={leaving}
                    onDismiss={() => dismiss(leaving.id)}
                    className={`transition-transform transition-opacity duration-300 ${
                      animating === "next" ? "translate-x-full opacity-0" : "-translate-x-full opacity-0"
                    }`}
                  />
                </div>
              )}
              {/* back 2 - no rotation or translation */}
              {next2 && (
                <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
                  <StackCard item={next2} onDismiss={() => {}} className="scale-[0.96] opacity-60" />
                </div>
              )}
              {/* back 1 - no rotation or translation */}
              {next1 && (
                <div className="absolute inset-0 flex items-center justify-center -z-0 pointer-events-none">
                  <StackCard item={next1} onDismiss={() => {}} className="scale-[0.98] opacity-80" />
                </div>
              )}
              {/* front */}
              {front && !animating && (
                <div className="relative z-20">
                  <StackCard item={front} onDismiss={() => dismiss(front.id)} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function StackCard({ item, className = "", onDismiss }: { item: StackItem; className?: string; onDismiss?: () => void }) {
  const isIssue = item.type === "issue"
  const base = "relative w-full max-w-xl rounded-2xl border p-4 shadow-sm transition-all duration-300 bg-white"
  const hover = "hover:border-slate-300 hover:shadow-lg hover:shadow-orange-100"
  const neutral = "border-slate-200"
  const issue = "bg-red-50 border-red-200"

  return (
    <div className={`${base} ${hover} ${isIssue ? issue : neutral} ${className}`}>
      <div className="flex items-start gap-3">
        <div className={`inline-flex items-center justify-center size-8 rounded-full ${isIssue ? "bg-red-100 text-red-700" : "bg-orange-50 text-orange-700"}`}>
          {isIssue ? <AlertTriangle className="size-4" /> : <Megaphone className="size-4" />}
        </div>
        <div>
          <div className={`text-base font-semibold ${isIssue ? "text-red-800" : "text-slate-900"}`}>{item.title}</div>
          <p className={`mt-0.5 text-sm ${isIssue ? "text-red-700" : "text-slate-600"}`}>{item.desc}</p>
        </div>
        {onDismiss && (
          <button
            type="button"
            aria-label="Dismiss"
            onClick={onDismiss}
            className="ml-auto inline-flex items-center justify-center size-7 rounded-md text-slate-500 hover:text-slate-900 hover:bg-orange-50 ring-1 ring-transparent hover:ring-orange-200 transition-colors"
          >
            <X className="size-3.5" />
          </button>
        )}
      </div>
    </div>
  )
}

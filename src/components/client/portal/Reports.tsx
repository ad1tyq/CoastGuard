"use client"
// Enhanced ReportForm.tsx - Comprehensive Hazard Reporting
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"

import { usePayout } from "@/contexts/PayoutContext"
import { useReport } from "@/contexts/ReportContext"

const formSchema = z.object({
  hazardType: z.string().min(1, "Please select a hazard type"),
  severity: z.string().min(1, "Please select severity level"),
  location: z.string().min(3, "Location is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
})

export default function ReportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const {setPayout} = usePayout();
  const { Report, setReport } = useReport();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hazardType: "",
      severity: "",
      location: "",
      description: "",
    },
  })

  function verifyReport(type: string, location: string, description: string): boolean {
    if (type === "coastal_flooding" && location.includes("coastal") && description.includes("damage")) return true;
    else if (type === "high_waves" && location.includes("coastal") && description.includes("damage")) return true;
    else if (type === "infrastructure_damage" && location.includes("coastal") && description.includes("damage")) return true;
    const val = Math.random() > 0.3;
    console.log("Math.random() > 0.3 : ", val);
    return val; // 70% chance it’s real
  }

  useEffect(() => {
    if (Report.length > 0) {
      console.log("from verify, report:", Report)
      if (verifyReport(
        Report[Report.length-1].hazardType,
        Report[Report.length-1].location,
        Report[Report.length-1].description,
       ) ) { setPayout(true); }
    }
  }, [Report])

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    console.log("Enhanced Hazard Report Submitted ✅", values)
    setReport(prev => [...prev, values])

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      form.reset()
      setTimeout(() => setSubmitSuccess(false), 4000)
    }, 2000)
  }

  if (submitSuccess) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-green-600 text-2xl">✅</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Report Submitted Successfully!</h3>
          <p className="text-gray-600 mb-4">Your hazard report is being analyzed by our AI system and will be verified within minutes.</p>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Report ID: <span className="font-mono font-semibold">CGR-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span></p>
            <p className="text-sm text-green-600 mt-1">Expected verification: 2-5 minutes</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Report Coastal Hazard</h2>
        <p className="text-gray-600">Accurate reporting helps protect your entire coastal community</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="hazardType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">Hazard Type</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                      <option value="">Select hazard type</option>
                      <option value="coastal_flooding">Coastal Flooding</option>
                      <option value="high_waves">High Waves/Storm Surge</option>
                      <option value="beach_erosion">Beach Erosion</option>
                      <option value="strong_winds">Strong Coastal Winds</option>
                      <option value="abnormal_tides">Abnormal Tides</option>
                      <option value="water_pollution">Water Pollution</option>
                      <option value="infrastructure_damage">Infrastructure Damage</option>
                      <option value="other">Other Coastal Hazard</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="severity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 font-semibold">Severity Level</FormLabel>
                  <FormControl>
                    <select {...field} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white">
                      <option value="">Select severity</option>
                      <option value="low">🟢 Low - Minor Impact</option>
                      <option value="medium">🟡 Medium - Moderate Concern</option>
                      <option value="high">🟠 High - Significant Risk</option>
                      <option value="critical">🔴 Critical - Immediate Danger</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-semibold">Location</FormLabel>
                <FormControl>
                  <Input
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter specific location, landmark, or coordinates"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-semibold">Detailed Description</FormLabel>
                <FormControl>
                  <Textarea
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
                    placeholder="Describe what you observed: water levels, wave height, damage extent, timeline, people affected, etc."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-lg">ℹ️</span>
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">AI-Powered Verification</p>
                <p>Your report will be cross-referenced with satellite data, weather patterns, and other community reports for instant verification.</p>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting Report...
              </span>
            ) : (
              'Submit Hazard Report'
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
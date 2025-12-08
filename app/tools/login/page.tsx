"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ToolsLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // No backend yet — simulate success and route to dashboard
    setTimeout(() => {
      setLoading(false)
      router.push("/tools/practice-health-reporting")
    }, 500)
  }

  function handleGoogle() {
    // No backend yet — simulate success and route to dashboard
    router.push("/tools/practice-health-reporting")
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-14">
      <div className="min-h-[50vh] grid place-items-center">
        <Card className="w-full max-w-lg rounded-3xl ring-1 ring-gray-200 hover:ring-2 hover:ring-orange-200 hover:shadow-lg hover:shadow-orange-100 transition-all">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Sign in</CardTitle>
            <CardDescription>Access your financial dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@practice.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-3">
                <Button
                  type="submit"
                  className="w-full h-11 bg-orange-500 hover:bg-orange-600 text-base"
                  disabled={loading}
                >
                  {loading ? "Signing in…" : "Sign in"}
                </Button>
                <div className="relative text-center text-sm text-muted-foreground">
                  <span className="bg-white px-3 relative z-10">or</span>
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gray-200" aria-hidden />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-11 border-gray-300 hover:border-orange-400 hover:ring-2 hover:ring-orange-200 text-base"
                  onClick={handleGoogle}
                >
                  Continue with Google
                </Button>
                <p className="text-xs text-muted-foreground">
                  Demo only — authentication not yet connected.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

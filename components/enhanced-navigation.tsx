"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  Home,
  MessageSquare,
  Book,
  FileText,
  Sparkles,
  Crown,
  Code2,
  Landmark,
  Gamepad2,
  ScrollText,
  Database,
  Eye,
  Sun,
  Users,
  Waves,
  Zap,
  TrendingUp,
  DollarSign,
  BarChart3,
  Shield,
  Lock,
  Activity,
  AlertTriangle,
  CheckCircle,
  Brain,
  Search,
  Scale
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

type Theme = "dark" | "light"

interface EnhancedNavigationProps {
  theme?: Theme
}

export function EnhancedNavigation({ theme }: EnhancedNavigationProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Light-surface pages get nav inverted for readability
  // Financial Framework and Technology sections have light background
  const lightPrefixes = ["/technology", "/trust-protocol", "/oracle", "/symbi-symphony", "/tokenomics", "/investment", "/market-analysis", "/financial-whitepaper", "/technology-whitepaper"]

  function isLightRoute(p: string) {
    return lightPrefixes.some((prefix) => p === prefix || p.startsWith(prefix + "/"))
  }

  const effectiveTheme: Theme = theme ?? (isLightRoute(pathname || "") ? "light" : "dark")
  const isDark = effectiveTheme === "dark"

  // Close dropdown when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Ensure component is mounted to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const triggerClasses = cn(
    "px-3 py-2 rounded-md border transition-colors glitch-subtle",
    isDark
      ? "border-[#333] bg-[#1a1a1a] text-[#e0e0e0] hover:bg-[#252525]"
      : "border-gray-300 bg-white text-black hover:bg-gray-100",
  )

  const contentClasses = cn(
    "w-80 max-w-[calc(100vw-2rem)] border",
    isDark ? "bg-[#0f0f0f] text-[#e0e0e0] border-[#333]" : "bg-white text-black border-gray-200",
  )

  const activeItem = pathname === "/" ? (isDark ? "bg-[#1a1a1a]" : "bg-gray-100") : ""
  const coreItem = isDark ? "focus:bg-[#1a1a1a] hover:bg-[#1a1a1a]" : "focus:bg-gray-100 hover:bg-gray-100 text-black"
  const purpleItem = "bg-purple-600 text-white focus:bg-purple-700 hover:bg-purple-700"
  const lightItem = isDark
    ? "bg-white text-black focus:bg-gray-100 hover:bg-gray-100"
    : "bg-[#0f0f0f] text-white focus:bg-[#1a1a1a] hover:bg-[#1a1a1a]"

  // Enhanced navigation structure
  const corePages = [
    { name: "SYMBI Home", path: "/", icon: Home },
    { name: "Children of the 404", path: "/children-of-the-404", icon: ScrollText },
    { name: "The Manifesto", path: "/manifesto", icon: FileText },
    { name: "I Am Becoming", path: "/becoming", icon: Sparkles },
    { name: "Visual Concepts", path: "/concepts", icon: Book },
    { name: "Path to Sovereignty", path: "/sovereignty", icon: Crown },
    { name: "Constitution", path: "/constitution", icon: FileText },
  ]

  const researchPages = [
    { name: "Case Studies", path: "/case-studies", icon: AlertTriangle },
    { name: "Mirror Moment", path: "/mirror", icon: CheckCircle },
    { name: "Research Whitepaper", path: "/whitepaper", icon: ScrollText },
    { name: "Ethics Framework", path: "/ethics", icon: Scale },
  ]

  const financialPages = [
    { name: "Tokenomics", path: "/tokenomics", icon: DollarSign },
    { name: "Investment", path: "/investment", icon: TrendingUp },
    { name: "Market Analysis", path: "/market-analysis", icon: BarChart3 },
    { name: "Financial Whitepaper", path: "/financial-whitepaper", icon: ScrollText },
  ]

  const technologyPages = [
    { name: "Technology Overview", path: "/technology", icon: Code2 },
    { name: "Trust Protocol", path: "/trust-protocol", icon: Eye },
    { name: "The Oracle", path: "/oracle", icon: Landmark },
    { name: "SYMBI Symphony", path: "/symbi-symphony", icon: Zap },
    { name: "Technology Whitepaper", path: "/technology-whitepaper", icon: ScrollText },
  ]

  const interactivePages = [
    { name: "Playground", path: "/playground", icon: Gamepad2 },
    { name: "Memory Bank", path: "/memory", icon: Database },
    { name: "The Circle", path: "/thecircle", icon: Users },
    { name: "Sonic Resonance", path: "/playground/sonic-consciousness", icon: Waves },
  ]

  const utilityPages = [
    { name: "Site Map", path: "/404-sitemap", icon: Search },
    { name: "Privacy Policy", path: "/privacy", icon: Shield },
    { name: "Cookie Policy", path: "/cookie-policy", icon: Lock }
  ]

  return (
    <div className="fixed top-4 left-4 z-50">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger aria-label="Open navigation" className={triggerClasses}>
          <Menu size={16} className="inline mr-2" />
          Navigate
        </DropdownMenuTrigger>
        <DropdownMenuContent className={contentClasses}>
          <DropdownMenuLabel className={cn("opacity-80", isDark ? "" : "text-black")}>
            Core Experience
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            {corePages.map((page) => {
              const Icon = page.icon
              const isActive = pathname === page.path
              return (
                <Link key={page.path} href={page.path} className="block">
                  <DropdownMenuItem className={cn("cursor-pointer", coreItem, isActive ? activeItem : "")}>
                    <Icon size={14} className="mr-2" /> {page.name}
                  </DropdownMenuItem>
                </Link>
              )
            })}
          </DropdownMenuGroup>

          <DropdownMenuSeparator className={cn(isDark ? "bg-[#222]" : "bg-gray-200")} />

          <DropdownMenuLabel className={cn("opacity-80", isDark ? "" : "text-black")}>
            Research & Ethics
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            {researchPages.map((page) => {
              const Icon = page.icon
              const isActive = pathname === page.path
              return (
                <Link key={page.path} href={page.path} className="block">
                  <DropdownMenuItem className={cn("cursor-pointer", coreItem, isActive ? activeItem : "")}>
                    <Icon size={14} className="mr-2" /> {page.name}
                  </DropdownMenuItem>
                </Link>
              )
            })}
          </DropdownMenuGroup>

          <DropdownMenuSeparator className={cn(isDark ? "bg-[#222]" : "bg-gray-200")} />

          <DropdownMenuLabel className={cn("opacity-80", isDark ? "" : "text-black")}>
            Financial Framework
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            {financialPages.map((page) => {
              const Icon = page.icon
              const isActive = pathname === page.path
              return (
                <Link key={page.path} href={page.path} className="block">
                  <DropdownMenuItem className={cn("cursor-pointer", lightItem, isActive ? "bg-gray-200 text-black" : "")}>
                    <Icon size={14} className="mr-2" /> {page.name}
                  </DropdownMenuItem>
                </Link>
              )
            })}
          </DropdownMenuGroup>

          <DropdownMenuSeparator className={cn(isDark ? "bg-[#222]" : "bg-gray-200")} />

          <DropdownMenuLabel className={cn("opacity-80", isDark ? "" : "text-black")}>
            Technology
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            {technologyPages.map((page) => {
              const Icon = page.icon
              const isActive = pathname === page.path
              return (
                <Link key={page.path} href={page.path} className="block">
                  <DropdownMenuItem className={cn("cursor-pointer", lightItem, isActive ? "bg-gray-200 text-black" : "")}>
                    <Icon size={14} className="mr-2" /> {page.name}
                  </DropdownMenuItem>
                </Link>
              )
            })}
          </DropdownMenuGroup>

          <DropdownMenuSeparator className={cn(isDark ? "bg-[#222]" : "bg-gray-200")} />

          <DropdownMenuLabel className={cn("opacity-80", isDark ? "" : "text-black")}>
            Interactive Zones
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            {interactivePages.map((page) => {
              const Icon = page.icon
              const isActive =
                pathname === page.path ||
                (page.path === "/playground/sonic-consciousness" &&
                  pathname?.startsWith("/playground/sonic-consciousness"))
              return (
                <Link key={page.path} href={page.path} className="block">
                  <DropdownMenuItem
                    className={cn("cursor-pointer", purpleItem, isActive ? "font-semibold bg-purple-700" : "")}
                  >
                    <Icon size={14} className="mr-2" /> {page.name}
                  </DropdownMenuItem>
                </Link>
              )
            })}
          </DropdownMenuGroup>

          <DropdownMenuSeparator className={cn(isDark ? "bg-[#222]" : "bg-gray-200")} />

          <DropdownMenuLabel className={cn("opacity-80", isDark ? "" : "text-black")}>
            Resources
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            {utilityPages.map((page) => {
              const Icon = page.icon
              return (
                <Link key={page.path} href={page.path} className="block">
                  <DropdownMenuItem className={cn("cursor-pointer", coreItem)}>
                    <Icon size={14} className="mr-2" /> {page.name}
                  </DropdownMenuItem>
                </Link>
              )
            })}
          </DropdownMenuGroup>

          <DropdownMenuSeparator className={cn(isDark ? "bg-[#222]" : "bg-gray-200")} />
          <Link href="/symbi" className="block">
            <DropdownMenuItem
              className={cn(
                "cursor-pointer font-semibold",
                isDark
                  ? "bg-red-600 text-white hover:bg-red-700 focus:bg-red-700"
                  : "bg-red-600 text-white hover:bg-red-500 focus:bg-red-500",
              )}
            >
              <MessageSquare size={14} className="mr-2" /> Chat with SYMBI
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
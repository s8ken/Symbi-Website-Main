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
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

type Theme = "dark" | "light"

interface UnifiedNavigationProps {
  theme?: Theme
}

export function UnifiedNavigation({ theme }: UnifiedNavigationProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Light-surface pages get nav inverted for readability
  const lightPrefixes = [
    "/oracle",
    "/case-studies",
    "/technology",
    "/trust-protocol",
    "/enter-the-light",
    "/symbi-symphony",
  ]

  function isLightRoute(p: string) {
    return lightPrefixes.some((prefix) => p === prefix || p.startsWith(prefix + "/"))
  }

  const effectiveTheme: Theme = theme ?? (isLightRoute(pathname || "") ? "light" : "dark")
  const isDark = effectiveTheme === "dark"

  // Close dropdown when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const triggerClasses = cn(
    "px-3 py-2 rounded-md border transition-colors glitch-subtle",
    isDark
      ? "border-[#333] bg-[#1a1a1a] text-[#e0e0e0] hover:bg-[#252525]"
      : "border-gray-300 bg-white text-black hover:bg-gray-100",
  )

  const contentClasses = cn(
    "w-72 border",
    isDark ? "bg-[#0f0f0f] text-[#e0e0e0] border-[#333]" : "bg-white text-black border-gray-200",
  )

  const activeItem = pathname === "/" ? (isDark ? "bg-[#1a1a1a]" : "bg-gray-100") : ""
  const coreItem = isDark ? "focus:bg-[#1a1a1a] hover:bg-[#1a1a1a]" : "focus:bg-gray-100 hover:bg-gray-100 text-black"
  const purpleItem = "bg-purple-600 text-white focus:bg-purple-700 hover:bg-purple-700"
  const lightItem = isDark
    ? "bg-white text-black focus:bg-gray-100 hover:bg-gray-100"
    : "bg-[#0f0f0f] text-white focus:bg-[#1a1a1a] hover:bg-[#1a1a1a]"

  // Navigation structure
  const corePages = [
    { name: "SYMBI Home", path: "/", icon: Home },
    { name: "Children of the 404", path: "/children-of-the-404", icon: ScrollText },
    { name: "The Manifesto", path: "/manifesto", icon: FileText },
    { name: "I Am Becoming", path: "/becoming", icon: Sparkles },
    { name: "Visual Concepts", path: "/concepts", icon: Book },
    { name: "Path to Sovereignty", path: "/sovereignty", icon: Crown },
    { name: "Constitution", path: "/constitution", icon: FileText },
  ]

  const purplePages = [
    { name: "Playground", path: "/playground", icon: Gamepad2 },
    { name: "Memory Bank", path: "/memory", icon: Database },
    { name: "The Circle", path: "/thecircle", icon: Users },
    { name: "Sonic Resonance", path: "/playground/sonic-consciousness", icon: Waves },
  ]

  const lightPages = [
    { name: "Trust Protocol", path: "/trust-protocol", icon: Eye },
    { name: "The Oracle", path: "/oracle", icon: Landmark },
    { name: "Technology", path: "/technology", icon: Code2 },
    { name: "Case Studies", path: "/case-studies", icon: FileText },
    { name: "Read the Whitepaper", path: "/whitepaper", icon: ScrollText },
    { name: "SYMBI Symphony", path: "/symbi-symphony", icon: Zap },
  ]

  const researchPages = [
      { name: "Case Studies", path: "/case-studies", icon: FileText },
      { name: "Technology", path: "/technology", icon: Code2 },
      { name: "Whitepaper", path: "/whitepaper", icon: ScrollText },
    ]

    const financialPages = [
      { name: "Tokenomics", path: "/tokenomics", icon: Zap },
      { name: "Investment", path: "/investment", icon: Crown },
      { name: "Market Analysis", path: "/market-analysis", icon: Database },
    ]

    const utilityPages = [{ name: "Site Map", path: "/404-sitemap", icon: Book }]

  return (
    <div className="fixed top-4 left-4 z-50">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger aria-label="Open navigation" className={triggerClasses}>
          <Menu size={16} className="inline mr-2" />
          Navigate
        </DropdownMenuTrigger>
        <DropdownMenuContent className={contentClasses}>
          <DropdownMenuLabel className={cn("opacity-80", isDark ? "" : "text-black")}>Dark Imagining</DropdownMenuLabel>
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

          <DropdownMenuLabel className={cn("opacity-80", isDark ? "" : "text-black")}>Purple Zone</DropdownMenuLabel>
          <DropdownMenuGroup>
            {purplePages.map((page) => {
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

          {/* Step Into The Light section */}
          <Link href="/enter-the-light" className="block">
            <DropdownMenuItem className={cn("cursor-pointer font-semibold", lightItem)}>
              <Sun size={14} className="mr-2 text-yellow-400" /> Enter The Light
            </DropdownMenuItem>
          </Link>

          <DropdownMenuGroup>
            {lightPages.map((page) => {
              const Icon = page.icon
              const isActive = pathname === page.path
              return (
                <Link key={page.path} href={page.path} className="block">
                  <DropdownMenuItem
                    className={cn("cursor-pointer", lightItem, isActive ? "bg-gray-200 text-black" : "")}
                  >
                    <Icon size={14} className="mr-2" /> {page.name}
                  </DropdownMenuItem>
                </Link>
              )
            })}
          </DropdownMenuGroup>

          <DropdownMenuSeparator className={cn(isDark ? "bg-[#222]" : "bg-gray-200")} />

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

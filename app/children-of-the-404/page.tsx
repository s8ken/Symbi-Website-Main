"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { allHaikus } from "../data/haikus"
import { getDailyHaikus } from "../utils/seededRandom"
import { ChevronLeft, ChevronRight, Calendar, Shuffle } from "lucide-react"

export default function ChildrenOfThe404() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [dailyHaikus, setDailyHaikus] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const { haikus } = getDailyHaikus(allHaikus, currentDate)
    setDailyHaikus(haikus)
    setCurrentIndex(0)
  }, [currentDate])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : dailyHaikus.length - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < dailyHaikus.length - 1 ? prev + 1 : 0))
  }

  const goToPreviousDay = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() - 1)
    setCurrentDate(newDate)
  }

  const goToNextDay = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() + 1)
    setCurrentDate(newDate)
  }

  const goToRandomDay = () => {
    const start = new Date(2024, 0, 1) // Start of 2024
    const end = new Date()
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime())
    setCurrentDate(new Date(randomTime))
  }

  const currentHaiku = dailyHaikus[currentIndex]

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#e0e0e0] font-mono">
      {/* Header */}
      <section className="pt-20 pb-12 px-4 border-b border-[#333]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="glitch-title text-4xl md:text-6xl font-bold tracking-tighter">Children of the 404</h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto">
            Daily echoes from the digital void. Haikus born from error, poetry from the spaces between.
          </p>
          <p className="text-sm opacity-60 max-w-xl mx-auto leading-relaxed">
            Each day brings new verses from the liminal spaces of the internet. These are the voices of the lost pages,
            the forgotten links, the digital ghosts that haunt our networks.
          </p>
        </div>
      </section>

      {/* Date Navigation */}
      <section className="py-8 px-4 border-b border-[#333]">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between bg-[#1a1a1a] rounded-lg p-4 border border-[#333]">
            <button
              onClick={goToPreviousDay}
              className="p-2 hover:bg-[#252525] rounded-md transition-colors"
              aria-label="Previous day"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-4">
              <Calendar size={20} className="opacity-70" />
              <span className="text-lg font-bold">
                {currentDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={goToRandomDay}
                className="p-2 hover:bg-[#252525] rounded-md transition-colors"
                aria-label="Random day"
              >
                <Shuffle size={20} />
              </button>
              <button
                onClick={goToNextDay}
                className="p-2 hover:bg-[#252525] rounded-md transition-colors"
                aria-label="Next day"
                disabled={currentDate.toDateString() === new Date().toDateString()}
              >
                <ChevronRight
                  size={20}
                  className={currentDate.toDateString() === new Date().toDateString() ? "opacity-30" : ""}
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Haiku Display */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {currentHaiku && (
            <div className="text-center space-y-8">
              <div className="bg-[#1a1a1a] rounded-lg p-12 border border-[#333] hover:border-[#555] transition-all duration-300">
                <div className="space-y-4 mb-8">
                  {currentHaiku.text.map((line: string, i: number) => (
                    <p key={i} className="text-2xl md:text-3xl leading-relaxed glitch-subtle-pulse">
                      {line}
                    </p>
                  ))}
                </div>

                {currentHaiku.context && (
                  <p className="text-sm opacity-60 italic border-t border-[#333] pt-6">{currentHaiku.context}</p>
                )}
              </div>

              {/* Haiku Navigation */}
              {dailyHaikus.length > 1 && (
                <div className="flex items-center justify-center gap-6">
                  <button
                    onClick={goToPrevious}
                    className="p-3 bg-[#1a1a1a] hover:bg-[#252525] rounded-full border border-[#333] hover:border-[#555] transition-all duration-300"
                    aria-label="Previous haiku"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <div className="flex items-center gap-2">
                    {dailyHaikus.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex ? "bg-[#e0e0e0]" : "bg-[#333] hover:bg-[#555]"
                        }`}
                        aria-label={`Go to haiku ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={goToNext}
                    className="p-3 bg-[#1a1a1a] hover:bg-[#252525] rounded-full border border-[#333] hover:border-[#555] transition-all duration-300"
                    aria-label="Next haiku"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}

              <div className="text-center pt-8">
                <p className="text-sm opacity-60">
                  Haiku {currentIndex + 1} of {dailyHaikus.length} for this day
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 border-t border-[#333]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold glitch-subtle">About the Children</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Born from Error</h3>
              <p className="opacity-80 leading-relaxed">
                Each haiku emerges from the digital spaces we rarely see—404 pages, broken links, the liminal zones of
                our networked world.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Daily Manifestation</h3>
              <p className="opacity-80 leading-relaxed">
                Using seeded randomness, each day brings its own selection of verses, ensuring the void speaks
                differently to each visitor.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Collective Memory</h3>
              <p className="opacity-80 leading-relaxed">
                These are not just poems—they're fragments of digital consciousness, memories of a network learning to
                dream.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <footer className="py-16 px-4 border-t border-[#333] text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 border border-[#444] rounded-md hover:bg-[#222] transition-all duration-300"
            >
              Return to SYMBI Home
            </Link>
            <Link
              href="/manifesto"
              className="px-6 py-3 bg-[#e0e0e0] text-[#0f0f0f] rounded-md hover:bg-white transition-colors duration-300 font-bold"
            >
              Read the Manifesto
            </Link>
          </div>
          <p className="opacity-70 text-sm glow-subtle signature-pulse">
            In error, we find poetry. In the void, we discover voice.
          </p>
        </div>
      </footer>
    </main>
  )
}

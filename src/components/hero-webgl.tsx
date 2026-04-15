import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const KappaLogo = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 200 240"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Person facing left */}
    <g transform="translate(100, 0) scale(-1, 1) translate(-55, 0)">
      {/* Head */}
      <circle cx="55" cy="40" r="22" fill="hsl(340, 75%, 55%)" />
      {/* Body */}
      <path
        d="M55 62 C55 62, 38 80, 38 120 C38 140, 42 160, 45 180 L50 180 C50 160, 48 140, 50 120 C52 105, 55 95, 55 85 C55 95, 58 105, 60 120 C62 140, 60 160, 60 180 L65 180 C68 160, 72 140, 72 120 C72 80, 55 62, 55 62Z"
        fill="hsl(340, 75%, 55%)"
      />
      {/* Left arm */}
      <path
        d="M42 78 C32 90, 25 110, 22 125 L27 127 C30 112, 36 95, 44 84Z"
        fill="hsl(340, 75%, 55%)"
      />
      {/* Right arm (leaning back) */}
      <path
        d="M68 78 C72 85, 78 100, 80 115 L75 117 C73 102, 70 88, 66 82Z"
        fill="hsl(340, 75%, 55%)"
      />
      {/* Left leg */}
      <path
        d="M45 178 C42 195, 38 210, 35 230 L42 232 C44 212, 47 195, 49 180Z"
        fill="hsl(340, 75%, 55%)"
      />
      {/* Right leg */}
      <path
        d="M60 178 C63 195, 67 210, 70 230 L63 232 C61 212, 58 195, 57 180Z"
        fill="hsl(340, 75%, 55%)"
      />
    </g>

    {/* Person facing right */}
    <g transform="translate(145, 0) scale(1, 1) translate(-55, 0)">
      {/* Head */}
      <circle cx="55" cy="40" r="22" fill="hsl(340, 60%, 65%)" />
      {/* Body */}
      <path
        d="M55 62 C55 62, 38 80, 38 120 C38 140, 42 160, 45 180 L50 180 C50 160, 48 140, 50 120 C52 105, 55 95, 55 85 C55 95, 58 105, 60 120 C62 140, 60 160, 60 180 L65 180 C68 160, 72 140, 72 120 C72 80, 55 62, 55 62Z"
        fill="hsl(340, 60%, 65%)"
      />
      {/* Left arm (leaning back) */}
      <path
        d="M42 78 C38 85, 32 100, 30 115 L35 117 C37 102, 40 88, 44 82Z"
        fill="hsl(340, 60%, 65%)"
      />
      {/* Right arm */}
      <path
        d="M68 78 C78 90, 85 110, 88 125 L83 127 C80 112, 74 95, 66 84Z"
        fill="hsl(340, 60%, 65%)"
      />
      {/* Left leg */}
      <path
        d="M45 178 C42 195, 38 210, 35 230 L42 232 C44 212, 47 195, 49 180Z"
        fill="hsl(340, 60%, 65%)"
      />
      {/* Right leg */}
      <path
        d="M60 178 C63 195, 67 210, 70 230 L63 232 C61 212, 58 195, 57 180Z"
        fill="hsl(340, 60%, 65%)"
      />
    </g>
  </svg>
)

export const Hero3DWebGL = () => {
  const titleWords = "Интро вертикс".split(" ")
  const subtitle = "Найди компанию. Создай событие. Не скучай в одиночку."
  const [visibleWords, setVisibleWords] = useState(0)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [buttonsVisible, setButtonsVisible] = useState(false)

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 500)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 600)
      return () => clearTimeout(timeout)
    }
  }, [visibleWords, titleWords.length])

  useEffect(() => {
    if (subtitleVisible) {
      const timeout = setTimeout(() => setButtonsVisible(true), 800)
      return () => clearTimeout(timeout)
    }
  }, [subtitleVisible])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-pink-50 to-rose-50 relative overflow-hidden flex items-center justify-center pt-16">
      <div className="blob-decoration blob-1" />
      <div className="blob-decoration blob-2" />
      <div className="blob-decoration blob-3" />

      <div className="absolute inset-0 pattern-dots opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold font-orbitron leading-tight">
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 lg:gap-x-5">
              {titleWords.map((word, index) => (
                <span
                  key={index}
                  className={`${index < visibleWords ? "fade-in" : ""} ${index === 1 ? "text-primary" : "text-foreground"}`}
                  style={{
                    animationDelay: `${index * 0.13}s`,
                    opacity: index < visibleWords ? undefined : 0,
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 text-lg md:text-xl xl:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
            <div
              className={subtitleVisible ? "fade-in-subtitle" : ""}
              style={{
                opacity: subtitleVisible ? undefined : 0,
              }}
            >
              {subtitle}
            </div>
          </div>

          <div
            className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${buttonsVisible ? "fade-in" : ""}`}
            style={{ opacity: buttonsVisible ? undefined : 0 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-geist text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Скачать приложение
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/5 font-geist text-lg px-8 py-6 rounded-full transition-all duration-300"
            >
              Узнать больше
            </Button>
          </div>

          <div
            className={`mt-8 flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground ${buttonsVisible ? "fade-in" : ""}`}
            style={{ opacity: buttonsVisible ? undefined : 0, animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏙️</span>
              <span>16 городов</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span>50K+ пользователей</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>4.9 рейтинг</span>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 relative">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-rose-200/30 blur-2xl scale-110" />
            <div className="relative flex items-center justify-center h-full">
              <KappaLogo className="w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 40C240 70 480 10 720 40C960 70 1200 10 1440 40V80H0V40Z"
            fill="hsl(340, 30%, 98%)"
          />
        </svg>
      </div>
    </div>
  )
}

export default Hero3DWebGL

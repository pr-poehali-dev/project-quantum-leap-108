import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-primary/5 via-pink-100/40 to-rose-50 relative overflow-hidden">
      <div className="blob-decoration blob-1" style={{ opacity: 0.1 }} />
      <div className="blob-decoration blob-2" style={{ opacity: 0.08 }} />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Бесплатно и без рекламы
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans text-balance">Хватит скучать в одиночку!</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Тысячи людей в твоём городе уже ищут компанию для событий. Скачай Интровертикс, заполни анкету
            и найди своих людей уже сегодня — это бесплатно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Скачать для iOS
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/5 text-lg px-8 py-6 rounded-full transition-all duration-300"
            >
              Скачать для Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

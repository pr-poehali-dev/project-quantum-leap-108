import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Алина, 26 лет",
    role: "Переехала из Казани в Москву",
    rating: "⭐⭐⭐⭐⭐",
    content:
      "Первый месяц в Москве был ужасным — никого не знала. Скачала Интровертикс, нашла пробежку в парке и познакомилась с пятью людьми за один вечер. Теперь мы бегаем каждые выходные!",
  },
  {
    name: "Дмитрий, 31 год",
    role: "Интроверт, Екатеринбург",
    rating: "⭐⭐⭐⭐⭐",
    content:
      "Я всегда боялся знакомиться первым. Но когда идёшь на конкретное мероприятие — не нужно придумывать тему для разговора. Общий интерес уже есть. Нашёл отличных друзей на туристическом походе.",
  },
  {
    name: "Катя, 23 года",
    role: "Организатор вечеринок, Краснодар",
    rating: "⭐⭐⭐⭐⭐",
    content:
      "У меня 4.9 звезды на вечеринках! Люди видят рейтинг и сразу решаются прийти. Провела уже 12 событий через Интровертикс — каждый раз новые лица и классная атмосфера.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-pink-50/30 to-background relative overflow-hidden">
      <div className="blob-decoration blob-3" style={{ opacity: 0.06, top: "20%", left: "70%" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Отзывы</span>
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Истории пользователей</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные люди, которые нашли компанию и перестали скучать в одиночку
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up rounded-2xl hover:-translate-y-1 transition-all duration-300" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-lg mb-3">{testimonial.rating}</p>
                <p className="text-foreground/80 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="pt-4 border-t border-primary/10">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

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
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Истории пользователей</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные люди, которые нашли компанию и перестали скучать в одиночку
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-lg mb-2">{testimonial.rating}</p>
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div>
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
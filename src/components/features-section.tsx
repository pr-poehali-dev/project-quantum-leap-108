import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Анкета и профиль",
    description: "Заполни анкету: пол, возраст, хобби, цели и социальный статус. Находи людей с похожими интересами мгновенно.",
    emoji: "🙋",
    badge: "Профиль",
  },
  {
    title: "События в твоём городе",
    description: "Вечеринки, свидания, тренировки, кино, театр, туризм и прогулки — выбирай что по душе прямо сейчас.",
    emoji: "📍",
    badge: "Города",
  },
  {
    title: "Присоединяйся в один клик",
    description: "Увидел интересное событие — нажал «Хочу пойти» и уже в компании. Никаких сложных шагов.",
    emoji: "⚡",
    badge: "Просто",
  },
  {
    title: "Рейтинг организаторов",
    description: "5 звёзд на вечеринках или 4 звезды в туризме — сразу видно, насколько крутой организатор. Безопасно и прозрачно.",
    emoji: "⭐",
    badge: "Доверие",
  },
  {
    title: "Идеально при переезде",
    description: "Переехал в новый город? Найди компанию за пару минут. Больше не нужно чувствовать себя чужим.",
    emoji: "🌆",
    badge: "Адаптация",
  },
  {
    title: "Для интровертов",
    description: "Не умеешь знакомиться первым? Просто выбери событие по интересу — общий контекст сделает всё сам.",
    emoji: "💗",
    badge: "Комфортно",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="blob-decoration blob-2" style={{ opacity: 0.08 }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Возможности</span>
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё для живого общения</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Интровертикс объединяет людей через реальные события — никакой скуки, только живые эмоции
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:-translate-y-1 transition-all duration-300 slide-up rounded-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">{feature.emoji}</span>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0 font-medium">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

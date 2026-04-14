import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Анкета и профиль",
    description: "Заполни анкету: пол, возраст, хобби, цели и социальный статус. Находи людей с похожими интересами мгновенно.",
    icon: "person",
    badge: "Профиль",
  },
  {
    title: "События в твоём городе",
    description: "Вечеринки, свидания, тренировки, кино, театр, туризм и прогулки — выбирай что по душе прямо сейчас.",
    icon: "map",
    badge: "Города",
  },
  {
    title: "Присоединяйся в один клик",
    description: "Увидел интересное событие — нажал «Хочу пойти» и уже в компании. Никаких сложных шагов.",
    icon: "zap",
    badge: "Просто",
  },
  {
    title: "Рейтинг организаторов",
    description: "5 звёзд на вечеринках или 4 звезды в туризме — сразу видно, насколько крутой организатор. Безопасно и прозрачно.",
    icon: "star",
    badge: "Доверие",
  },
  {
    title: "Идеально при переезде",
    description: "Переехал в новый город? Найди компанию за пару минут. Больше не нужно чувствовать себя чужим.",
    icon: "globe",
    badge: "Адаптация",
  },
  {
    title: "Для интровертов",
    description: "Не умеешь знакомиться первым? Просто выбери событие по интересу — общий контекст сделает всё сам.",
    icon: "heart",
    badge: "Комфортно",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё для живого общения</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Интровертикс объединяет людей через реальные события — никакой скуки, только живые эмоции
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "person" && "🙋"}
                    {feature.icon === "map" && "📍"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "star" && "⭐"}
                    {feature.icon === "globe" && "🌆"}
                    {feature.icon === "heart" && "💙"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
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
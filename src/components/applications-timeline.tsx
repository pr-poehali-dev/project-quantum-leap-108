import { Timeline } from "@/components/ui/timeline"

const cities = [
  "Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань",
  "Красноярск", "Нижний Новгород", "Челябинск", "Уфа", "Самара",
  "Ростов-на-Дону", "Краснодар", "Омск", "Воронеж", "Пермь", "Волгоград",
]

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Вечеринки и свидания",
      content: (
        <div>
          <p className="text-foreground/80 text-sm md:text-base font-normal mb-6 leading-relaxed">
            Организуй вечеринку или пригласи кого-то на свидание. Найди компанию для ночного города —
            людей, которые разделяют твой стиль жизни и настроение.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Домашние и клубные вечеринки
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Романтические свидания и знакомства
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Рейтинг организатора сразу виден в профиле
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Спорт, кино и культура",
      content: (
        <div>
          <p className="text-foreground/80 text-sm md:text-base font-normal mb-6 leading-relaxed">
            Тренировки вместе веселее, а в кино и театр приятнее идти в компании. Находи
            единомышленников на любое культурное и спортивное событие в своём городе.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Совместные тренировки: бег, йога, зал
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Поход в кино, театр, на выставку
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Прогулки и знакомство с городом
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Туризм и путешествия",
      content: (
        <div>
          <p className="text-foreground/80 text-sm md:text-base font-normal mb-6 leading-relaxed">
            Планируешь поход, поездку или просто хочешь исследовать новый город? Найди попутчиков
            с таким же маршрутом и уровнем подготовки.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Туристические походы и экспедиции
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Городские экскурсии для новосёлов
            </div>
            <div className="flex items-center gap-3 text-primary text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Совместные поездки на выходные
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Города присутствия",
      content: (
        <div>
          <p className="text-foreground/80 text-sm md:text-base font-normal mb-6 leading-relaxed">
            Интровертикс работает в 16 крупнейших городах России. Переехал — открой приложение и уже через
            несколько минут найди первое событие рядом.
          </p>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {cities.map((city) => (
              <div key={city} className="flex items-center gap-3 text-primary text-sm">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                {city}
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-background to-pink-50/50 relative overflow-hidden">
      <div className="blob-decoration blob-1" style={{ opacity: 0.06 }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">События</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">Что можно организовать</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Любой формат живого общения — от уютной прогулки до туристического похода.
            Выбирай событие, присоединяйся и знакомься.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}

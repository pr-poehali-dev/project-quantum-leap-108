import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как зарегистрироваться в приложении?",
      answer:
        "Скачай приложение, заполни анкету: укажи пол, возраст, хобби, цели и социальный статус. Всё занимает около 2 минут — и ты уже можешь смотреть события в своём городе.",
    },
    {
      question: "Как работает рейтинг организаторов?",
      answer:
        "После каждого события участники оценивают организатора по 5-звёздочной шкале отдельно для каждой категории: вечеринки, туризм, спорт и т.д. Видишь 4.8 на туризме — значит, человек проверенный и с ним можно идти в поход.",
    },
    {
      question: "Безопасно ли это — идти к незнакомым людям?",
      answer:
        "Все профили верифицированы, у каждого организатора открытый рейтинг и история событий. Ты всегда можешь изучить профиль, почитать отзывы участников и принять решение. Первые встречи рекомендуем в общественных местах.",
    },
    {
      question: "Что если я застенчивый или интроверт?",
      answer:
        "Интровертикс создан именно для таких людей! Когда идёшь на конкретное событие с понятной темой — не нужно придумывать повод для разговора. Общий интерес уже есть, и это делает знакомство естественным.",
    },
    {
      question: "Могу ли я сам создать событие?",
      answer:
        "Да! Любой пользователь может создать событие: выбери тип, укажи город, дату, место и количество участников. Чем больше событий ты проводишь и чем выше твой рейтинг, тем больше людей захотят к тебе присоединиться.",
    },
    {
      question: "В каких городах работает приложение?",
      answer:
        "Сейчас Интровертикс работает в 16 крупнейших городах России: Москва, Санкт-Петербург, Новосибирск, Екатеринбург, Казань, Красноярск, Нижний Новгород, Челябинск, Уфа, Самара, Ростов-на-Дону, Краснодар, Омск, Воронеж, Пермь и Волгоград.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-background relative">
      <div className="absolute inset-0 pattern-dots opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Всё, что нужно знать перед тем, как найти свою компанию в Интровертикс.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-primary/15 mb-3 bg-card rounded-xl px-2 overflow-hidden">
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary font-sans px-4 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed px-4 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

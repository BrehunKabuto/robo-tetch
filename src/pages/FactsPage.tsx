import { useState } from 'react'
import { SparklesIcon, ZapIcon } from '../components/Icons'
import { PastelCard } from '../components/PastelCard'

type FactCategory = 'all' | 'history' | 'tech' | 'records'

interface RoboFact {
  id: number
  category: Exclude<FactCategory, 'all'>
  badge: string
  metric: string
  title: string
  desc: string
}

const facts: RoboFact[] = [
  {
    id: 1,
    category: 'history',
    badge: 'ІСТОРІЯ • 1920',
    metric: '1920',
    title: 'Слово «робот» вигадали не інженери, а письменник і художник',
    desc: 'Термін уперше з’явився у науково-фантастичній п’єсі чеського письменника Карела Чапека «R.U.R.» (1920), а запропонував його брат Йозеф Чапек від слова «robota» — підневільна праця.',
  },
  {
    id: 2,
    category: 'history',
    badge: 'ІСТОРІЯ • 1961',
    metric: 'Unimate',
    title: 'Перший промисловий робот важив майже дві тонни',
    desc: 'Робот Unimate, створений Джорджем Деволом і Джозефом Енгельбергером, почав працювати на заводі General Motors у 1961 році — він переносив розпечені металеві деталі та виконував точкове зварювання.',
  },
  {
    id: 3,
    category: 'tech',
    badge: 'ТЕХНОЛОГІЇ • КОСМОС',
    metric: '40+ км',
    title: 'Марсоходи — це повністю автономні роботи-геологи',
    desc: 'Через затримку радіосигналу між Землею та Марсом (до 20 хвилин в один бік) марсохід Perseverance самостійно об’їжджає каміння, аналізує ґрунт лазером і керує міні-гелікоптером.',
  },
  {
    id: 4,
    category: 'records',
    badge: 'РЕКОРДИ • ШВИДКІСТЬ',
    metric: '0.305 с',
    title: 'Робот зібрав кубик Рубіка швидше, ніж людина встигає моргнути',
    desc: 'Спеціалізований робот TOKUI FastCube встановив світовий рекорд зі складання кубика Рубіка за 0.305 секунди — швидкість обертання граней перевищує можливості людського зору.',
  },
  {
    id: 5,
    category: 'tech',
    badge: 'БІОНІКА',
    metric: 'Soft',
    title: 'М’які роботи (Soft Robotics) надихаються восьминогами',
    desc: 'Замість жорсткого металу м’які роботи виготовляються з еластичних силіконів і пневматичних камер. Вони можуть делікатно тримати стиглу малину або проникати у вузькі щілини.',
  },
  {
    id: 6,
    category: 'records',
    badge: 'АГРОТЕХ',
    metric: '24/7',
    title: 'Лазерні агророботи знищують бур’яни без жодної краплі гербіцидів',
    desc: 'Автономні польові роботи розпізнають бур’яни за допомогою камер за мілісекунди й точково випалюють їх променем лазера, зберігаючи ґрунт та урожай екологічно чистими.',
  },
]

const categories: { key: FactCategory; label: string }[] = [
  { key: 'all', label: 'Усі факти' },
  { key: 'history', label: 'Історія' },
  { key: 'tech', label: 'Технології' },
  { key: 'records', label: 'Рекорди та інновації' },
]

export function FactsPage() {
  const [category, setCategory] = useState<FactCategory>('all')
  const [spotlightIndex, setSpotlightIndex] = useState(0)

  const filteredFacts =
    category === 'all' ? facts : facts.filter((f) => f.category === category)

  const spotlight = facts[spotlightIndex]

  const nextFact = () => {
    setSpotlightIndex((prev) => (prev + 1) % facts.length)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">
      {/* Header */}
      <section className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#40916c]">
          РОЗДІЛ 05 • ПІЗНАВАЛЬНО
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1b4332] tracking-tight">
          Цікаві факти про робототехніку
        </h1>
        <p className="text-base sm:text-lg text-[#3a5a40] leading-relaxed">
          Дивовижні історії про появу перших роботів, космічні експедиції, біоніку та
          рекорди сучасної автоматизації.
        </p>
      </section>

      {/* Spotlight Card */}
      <section className="rounded-3xl border border-[#95d5b2] bg-gradient-to-br from-[#e6f6ec] via-[#f4fbf6] to-[#e9f5db] p-6 sm:p-8 shadow-[0_12px_34px_-16px_rgba(45,106,79,0.25)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2d6a4f]">
              <SparklesIcon className="h-4 w-4 text-[#40916c]" />
              <span>ФАКТ У ФОКУСІ • {spotlight.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1b4332]">
              {spotlight.title}
            </h2>
            <p className="text-sm sm:text-base text-[#3a5a40] leading-relaxed">
              {spotlight.desc}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
            <div className="rounded-2xl border border-[#a3d9b8] bg-white/90 px-5 py-3 font-mono text-2xl font-bold text-[#2d6a4f]">
              {spotlight.metric}
            </div>
            <button
              type="button"
              onClick={nextFact}
              className="inline-flex items-center gap-2 rounded-xl bg-[#2d6a4f] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#1b4332] transition-colors cursor-pointer"
            >
              <ZapIcon className="h-4 w-4" />
              <span>НАСТУПНИЙ ФАКТ</span>
            </button>
          </div>
        </div>
      </section>

      {/* Filter + Facts */}
      <section className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setCategory(cat.key)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                category === cat.key
                  ? 'bg-[#2d6a4f] text-white'
                  : 'border border-[#cbe7d5] bg-white/80 text-[#3a5a40] hover:bg-[#e6f6ec]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {filteredFacts.map((fact) => (
            <PastelCard key={fact.id} className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[11px] font-semibold text-[#40916c]">
                  {fact.badge}
                </span>
                <span className="rounded-lg border border-[#b7e4c7] bg-[#e6f6ec] px-2.5 py-0.5 font-mono text-xs font-bold text-[#1b4332]">
                  {fact.metric}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1b4332]">{fact.title}</h3>
              <p className="text-sm text-[#4a6b5b] leading-relaxed">{fact.desc}</p>
            </PastelCard>
          ))}
        </div>
      </section>
    </div>
  )
}

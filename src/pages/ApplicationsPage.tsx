import { useState } from 'react'
import { CheckCircleIcon, LeafIcon } from '../components/Icons'
import { PastelCard } from '../components/PastelCard'

type SectorKey = 'all' | 'industry' | 'agro' | 'medicine' | 'logistics' | 'home'

const sectors: {
  id: string
  category: Exclude<SectorKey, 'all'>
  badge: string
  title: string
  desc: string
  benefits: string[]
}[] = [
  {
    id: 'ind',
    category: 'industry',
    badge: 'РОЗУМНЕ ВИРОБНИЦТВО',
    title: 'Автомобілебудування та електроніка',
    desc: 'Точкове лазерне зварювання, монтаж мікрокомпонентів і автоматичний оптичний контроль якості на конвеєрах.',
    benefits: ['Висока повторюваність', 'Робота у небезпечних зонах', 'Мінімум відходів'],
  },
  {
    id: 'agr',
    category: 'agro',
    badge: 'АГРОТЕХНОЛОГІЇ',
    title: 'Точне землеробство та еко-ферми',
    desc: 'Автономні трактори, дрони для моніторингу вологості ґрунту й точкового внесення добрив без перевитрат хімікатів.',
    benefits: ['Економія води до 35%', 'Картографування врожайності', 'Бережне ставлення до ґрунту'],
  },
  {
    id: 'med',
    category: 'medicine',
    badge: 'МЕДИЦИНА',
    title: 'Роботизована хірургія та догляд',
    desc: 'Малоінвазивні операції за допомогою систем класу Da Vinci, автоматизована доставка ліків у клініках та екзоскелети для реабілітації.',
    benefits: ['Мінімальна травматичність', 'Фільтрація тремору рук', 'Швидше відновлення пацієнтів'],
  },
  {
    id: 'log',
    category: 'logistics',
    badge: 'ЛОГІСТИКА',
    title: 'Автономні склади та сортування',
    desc: 'Мобільні роботи AMR самостійно доставляють стелажі до операторів, а оптичні сортувальники розподіляють тисячі посилок за годину.',
    benefits: ['Прискорення відвантажень у 3×', 'Оптимізація площі складу', 'Цілодобова робота'],
  },
  {
    id: 'hom',
    category: 'home',
    badge: 'ПОБУТ ТА МІСТО',
    title: 'Розумний дім та екосервіси',
    desc: 'Роботи-пилососи з LiDAR, автоматичні газонокосарки, розумний клімат-контроль і системи сортування побутового сміття.',
    benefits: ['Економія часу в побуті', 'Автоматичне керування енергією', 'Чистіше міське середовище'],
  },
]

const filterButtons: { key: SectorKey; label: string }[] = [
  { key: 'all', label: 'Усі галузі' },
  { key: 'industry', label: 'Виробництво' },
  { key: 'agro', label: 'Агротех' },
  { key: 'medicine', label: 'Медицина' },
  { key: 'logistics', label: 'Логістика' },
  { key: 'home', label: 'Побут' },
]

const taskPresets = [
  {
    id: 'warehouse',
    label: 'Складська логістика',
    robotType: 'Автономний мобільний робот (AMR)',
    sensors: '2D/3D LiDAR, камери SLAM, ультразвукові бампери',
    effect: 'Скорочує піші переходи персоналу на 70% і працює 24/7 з автоматичною підзарядкою.',
  },
  {
    id: 'agro',
    label: 'Моніторинг посівів',
    robotType: 'Автономний агродрон з мультиспектральною камерою',
    sensors: 'Мультиспектральний сенсор, RTK-GPS, барометр',
    effect: 'Виявляє дефіцит вологи чи шкідників на ранній стадії та зменшує витрату ресурсів до 30%.',
  },
  {
    id: 'assembly',
    label: 'Складання дрібних деталей',
    robotType: '6-осьовий колаборативний робот (Кобот)',
    sensors: 'Датчики крутного моменту в кожному суглобі, камера машинного зору',
    effect: 'Легко переналаштовується під нові задачі та безпечно працює поруч з оператором.',
  },
]

export function ApplicationsPage() {
  const [filter, setFilter] = useState<SectorKey>('all')
  const [selectedTask, setSelectedTask] = useState(taskPresets[0].id)

  const visibleSectors =
    filter === 'all' ? sectors : sectors.filter((s) => s.category === filter)

  const activePreset = taskPresets.find((t) => t.id === selectedTask) ?? taskPresets[0]

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#40916c]">
          РОЗДІЛ 04 • ГАЛУЗЕВІ РІШЕННЯ
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1b4332] tracking-tight">
          Практичне застосування
        </h1>
        <p className="text-base sm:text-lg text-[#3a5a40] leading-relaxed">
          Робототехніка давно вийшла за межі заводських цехів: сьогодні автоматизовані
          системи допомагають вирощувати врожай, рятувати життя та берегти енергію.
        </p>
      </section>

      {/* Filter + Cards */}
      <section className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              type="button"
              onClick={() => setFilter(btn.key)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                filter === btn.key
                  ? 'bg-[#2d6a4f] text-white shadow-sm'
                  : 'border border-[#cbe7d5] bg-white/80 text-[#3a5a40] hover:bg-[#e6f6ec]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleSectors.map((item) => (
            <PastelCard key={item.id} className="flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] font-semibold text-[#40916c]">
                  {item.badge}
                </div>
                <h2 className="mt-2 text-xl font-bold text-[#1b4332]">{item.title}</h2>
                <p className="mt-2 text-sm text-[#4a6b5b] leading-relaxed">{item.desc}</p>
              </div>

              <ul className="mt-5 pt-4 border-t border-[#e2f3e8] space-y-2">
                {item.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs font-medium text-[#2d6a4f]">
                    <CheckCircleIcon className="h-4 w-4 text-[#52b788] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </PastelCard>
          ))}
        </div>
      </section>

      {/* Interactive Robot Selector */}
      <section className="rounded-3xl border border-[#b7e4c7] bg-white/90 p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#40916c]">
              <LeafIcon className="h-4 w-4" />
              <span>ІНТЕРАКТИВНИЙ ПІДБІР</span>
            </div>
            <h2 className="mt-1 text-2xl font-bold text-[#1b4332]">
              Підбір робота під конкретну задачу
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {taskPresets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => setSelectedTask(preset.id)}
                className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                  selectedTask === preset.id
                    ? 'bg-[#2d6a4f] text-white'
                    : 'border border-[#cbe7d5] bg-[#f4fbf6] text-[#2d6a4f] hover:bg-[#d8f3dc]'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#d8f3dc] bg-[#f4fbf6] p-5">
            <div className="text-xs font-semibold text-[#52796f]">РЕКОМЕНДОВАНИЙ КЛАС</div>
            <div className="mt-2 text-base font-bold text-[#1b4332]">
              {activePreset.robotType}
            </div>
          </div>
          <div className="rounded-2xl border border-[#d8f3dc] bg-[#f4fbf6] p-5">
            <div className="text-xs font-semibold text-[#52796f]">НАБІР СЕНСОРІВ</div>
            <div className="mt-2 text-sm font-medium text-[#2d6a4f]">
              {activePreset.sensors}
            </div>
          </div>
          <div className="rounded-2xl border border-[#b7e4c7] bg-[#e6f6ec] p-5">
            <div className="text-xs font-semibold text-[#2d6a4f]">ОЧІКУВАНИЙ ЕФЕКТ</div>
            <div className="mt-2 text-sm text-[#1b4332] leading-relaxed">
              {activePreset.effect}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

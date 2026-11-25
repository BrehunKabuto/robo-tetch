import { useState } from 'react'
import {
  ActivityIcon,
  BotIcon,
  CogIcon,
  CpuIcon,
  EyeIcon,
  LayersIcon,
  LeafIcon,
} from '../components/Icons'
import { PastelCard } from '../components/PastelCard'

const capabilities = [
  {
    tag: 'COMPUTER VISION',
    title: 'Комп’ютерний зір та LiDAR',
    desc: 'Розпізнавання деталей, перевірка якості продукції, побудова 3D-карт приміщень і точна орієнтація у просторі.',
    chips: ['3D-сканування', 'Дефектоскопія', 'SLAM'],
    icon: EyeIcon,
  },
  {
    tag: 'COLLABORATIVE',
    title: 'Колаборативна взаємодія',
    desc: 'Розумні обмеження сили й швидкості дозволяють коботам безпечно працювати поруч із людиною без огороджень.',
    chips: ['Датчики сили', 'Навчання рукою', 'Безпека ISO'],
    icon: BotIcon,
  },
  {
    tag: 'PREDICTIVE AI',
    title: 'Предиктивне обслуговування',
    desc: 'Аналіз вібрацій, температури й струму двигунів завчасно попереджає про знос підшипників до зупинки лінії.',
    chips: ['IoT-телеметрія', 'Нуль простоїв', 'Аналіз аномалій'],
    icon: ActivityIcon,
  },
  {
    tag: 'DIGITAL TWINS',
    title: 'Цифрові двійники (Digital Twins)',
    desc: 'Віртуальна копія заводу чи робота дозволяє тестувати нові маршрути й програми без ризику для реального обладнання.',
    chips: ['3D-симуляція', 'Оптимізація циклів', 'Швидкий запуск'],
    icon: LayersIcon,
  },
  {
    tag: 'PRECISION',
    title: 'Прецизійна мікромеханіка',
    desc: 'Виконання операцій із точністю до сотих часток міліметра — від паяння мікросхем до офтальмологічної хірургії.',
    chips: ['±0.02 мм', 'Мікрозахвати', 'Стабільність'],
    icon: CogIcon,
  },
  {
    tag: 'ECO-AUTOMATION',
    title: 'Оптимізація ресурсів та енергії',
    desc: 'Точне дозування матеріалів, води та електроенергії зменшує кількість виробничого браку й вуглецевий слід.',
    chips: ['Менше відходів', 'Smart Grid', 'Рекуперація'],
    icon: LeafIcon,
  },
]

export function CapabilitiesPage() {
  const [stations, setStations] = useState(3)
  const [shifts, setShifts] = useState(2)

  const monthlyHoursSaved = stations * shifts * 165
  const defectReduction = Math.min(94, 62 + stations * 4)
  const annualHours = monthlyHoursSaved * 12

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#40916c]">
          РОЗДІЛ 03 • ТЕХНОЛОГІЧНІ ПЕРЕВАГИ
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1b4332] tracking-tight">
          Основні можливості автоматизації
        </h1>
        <p className="text-base sm:text-lg text-[#3a5a40] leading-relaxed">
          Сучасні роботизовані системи поєднують точну механіку, машинне навчання та
          сенсорну аналітику, відкриваючи нові горизонти продуктивності й безпеки.
        </p>
      </section>

      {/* Capabilities Grid */}
      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap) => {
          const Icon = cap.icon
          return (
            <PastelCard key={cap.title} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#b7e4c7] bg-[#e6f6ec] text-[#2d6a4f]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-[#52796f]">
                    {cap.tag}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1b4332]">{cap.title}</h2>
                <p className="mt-2 text-sm text-[#4a6b5b] leading-relaxed">{cap.desc}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#e2f3e8] flex flex-wrap gap-2">
                {cap.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-lg border border-[#cbe7d5] bg-[#f4fbf6] px-2.5 py-1 text-xs font-medium text-[#2d6a4f]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </PastelCard>
          )
        })}
      </section>

      {/* Interactive Automation Impact Calculator */}
      <section className="rounded-3xl border border-[#b7e4c7] bg-white/90 p-6 sm:p-8 shadow-[0_12px_36px_-16px_rgba(45,106,79,0.2)]">
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#2d6a4f]">
              <CpuIcon className="h-4 w-4 text-[#40916c]" />
              <span>ІНТЕРАКТИВНИЙ КАЛЬКУЛЯТОР</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1b4332]">
              Оцінка ефекту автоматизації
            </h2>
            <p className="text-sm text-[#4a6b5b] leading-relaxed">
              Налаштуйте кількість роботизованих станцій та змін на добу, щоб побачити
              орієнтовну економію рутинних годин і зниження кількості помилок.
            </p>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm font-medium text-[#1b4332] mb-1.5">
                  <span>Кількість роботизованих постів</span>
                  <span className="font-mono font-bold text-[#2d6a4f]">{stations}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={stations}
                  onChange={(e) => setStations(Number(e.target.value))}
                  className="w-full accent-[#2d6a4f] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm font-medium text-[#1b4332] mb-1.5">
                  <span>Кількість робочих змін на добу</span>
                  <span className="font-mono font-bold text-[#2d6a4f]">{shifts}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={3}
                  value={shifts}
                  onChange={(e) => setShifts(Number(e.target.value))}
                  className="w-full accent-[#2d6a4f] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#cbe7d5] bg-[#f4fbf6] p-5">
              <div className="text-xs font-medium text-[#52796f]">ЗЕКОНОМЛЕНО ЗА МІСЯЦЬ</div>
              <div className="mt-2 font-mono text-3xl font-bold text-[#1b4332]">
                {monthlyHoursSaved}
                <span className="text-sm font-normal text-[#4a6b5b]"> год</span>
              </div>
              <p className="mt-1 text-xs text-[#4a6b5b]">рутинної операційної праці</p>
            </div>

            <div className="rounded-2xl border border-[#cbe7d5] bg-[#f4fbf6] p-5">
              <div className="text-xs font-medium text-[#52796f]">ЗНИЖЕННЯ БРАКУ</div>
              <div className="mt-2 font-mono text-3xl font-bold text-[#2d6a4f]">
                -{defectReduction}%
              </div>
              <p className="mt-1 text-xs text-[#4a6b5b]">завдяки стабільній повторюваності</p>
            </div>

            <div className="sm:col-span-2 rounded-2xl border border-[#b7e4c7] bg-[#e6f6ec] p-5 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-[#2d6a4f]">РІЧНИЙ ПОТЕНЦІАЛ</div>
                <div className="mt-1 text-sm text-[#3a5a40]">
                  Сумарно вивільненого часу для творчих та інженерних задач
                </div>
              </div>
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#1b4332] shrink-0">
                {annualHours.toLocaleString('uk-UA')} год
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

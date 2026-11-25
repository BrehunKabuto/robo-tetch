import { useState } from 'react'
import { BotIcon, CogIcon, CpuIcon, EyeIcon } from '../components/Icons'
import { PastelCard } from '../components/PastelCard'

const robotLayers = [
  {
    id: 'sensors',
    badge: '01 • СПРИЙНЯТТЯ',
    title: 'Сенсорика та датчики',
    short: 'Очі, вуха й тактильні рецептори робота для зчитування довкілля.',
    desc: 'Робот отримує інформацію про навколишній світ у реальному часі: відстань до перешкод, температуру, зусилля захоплення, форму та колір об’єктів.',
    examples: ['LiDAR та 3D-камери глибини', 'Тензодатчики сили й крутного моменту', 'Ультразвукові та інфрачервоні сенсори'],
    icon: EyeIcon,
  },
  {
    id: 'brain',
    badge: '02 • АНАЛІЗ І РІШЕННЯ',
    title: 'Контролер та ШІ',
    short: 'Обчислювальний центр, що планує траєкторію та приймає рішення.',
    desc: 'Мікроконтролери, промислові ПЛК та нейропроцесори обробляють сигнали сенсорів за мілісекунди, будують карту простору й формують команди для двигунів.',
    examples: ['Промислові контролери (PLC)', 'Бортові AI-прискорювачі', 'Фреймворк ROS 2 (Robot Operating System)'],
    icon: CpuIcon,
  },
  {
    id: 'actuators',
    badge: '03 • ДІЯ',
    title: 'Актюатори та механіка',
    short: 'Приводи, двигуни й захвати, які перетворюють код на фізичний рух.',
    desc: 'Серводвигуни, пневматичні циліндри, гідравліка та м’які вакуумні захвати виконують точні переміщення, збирання, зварювання чи транспортування.',
    examples: ['Безщіткові сервоприводи', '6-осьові шарнірні маніпулятори', 'М’які адаптивні захвати (Soft Grippers)'],
    icon: CogIcon,
  },
]

const robotTypes = [
  {
    title: 'Промислові маніпулятори',
    desc: 'Швидкі й високоточні роботи для конвеєрів, зварювання, фарбування та пакування великих партій продукції.',
  },
  {
    title: 'Колаборативні роботи (Коботи)',
    desc: 'Безпечні роботи з датчиками зіткнень, створені для спільної роботи пліч-о-пліч з людиною без захисних кліток.',
  },
  {
    title: 'Автономні мобільні роботи (AMR)',
    desc: 'Самостійно орієнтуються на складах, у лікарнях та на полях, оминаючи перешкоди без магнітних стрічок.',
  },
  {
    title: 'Сервісні та медичні роботи',
    desc: 'Асистують хірургам, доставляють ліки, прибирають приміщення та допомагають у догляді й реабілітації.',
  },
]

export function AboutPage() {
  const [selectedId, setSelectedId] = useState('sensors')
  const activeLayer = robotLayers.find((l) => l.id === selectedId) ?? robotLayers[0]
  const ActiveIcon = activeLayer.icon

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Header */}
      <section className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold uppercase tracking-widest text-[#40916c]">
          РОЗДІЛ 02 • ОСНОВИ РОБОТОТЕХНІКИ
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1b4332] tracking-tight">
          Про тему: робототехніка та автоматизація
        </h1>
        <p className="text-base sm:text-lg text-[#3a5a40] leading-relaxed">
          Робототехніка поєднує механіку, електроніку та програмування для створення машин,
          здатних виконувати складні фізичні дії. Автоматизація ж дозволяє процесам працювати
          стабільно, економно й з мінімальним втручанням людини.
        </p>
      </section>

      {/* Interactive 3 Pillars of a Robot */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1b4332]">
            Три ключові ланки будь-якого робота
          </h2>
          <p className="mt-1 text-sm text-[#4a6b5b]">
            Оберіть етап циклу «Сприйняття → Рішення → Дія», щоб побачити деталі.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 space-y-3">
            {robotLayers.map((layer) => {
              const isSelected = layer.id === activeLayer.id
              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setSelectedId(layer.id)}
                  className={`w-full text-left rounded-2xl border p-5 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#52b788] bg-[#e6f6ec] shadow-[0_10px_25px_-12px_rgba(45,106,79,0.28)]'
                      : 'border-[#cde2d4] bg-white/80 hover:border-[#95d5b2]'
                  }`}
                >
                  <div className="font-mono text-[11px] font-semibold text-[#40916c]">
                    {layer.badge}
                  </div>
                  <div className="mt-1 text-lg font-bold text-[#1b4332]">{layer.title}</div>
                  <p className="mt-1 text-sm text-[#4a6b5b]">{layer.short}</p>
                </button>
              )
            })}
          </div>

          <div className="lg:col-span-7">
            <PastelCard className="p-6 sm:p-8 space-y-6 bg-white/95">
              <div className="flex items-center justify-between border-b border-[#d8f3dc] pb-4">
                <div>
                  <div className="font-mono text-xs font-semibold text-[#40916c]">
                    {activeLayer.badge}
                  </div>
                  <h3 className="mt-1 text-2xl font-bold text-[#1b4332]">
                    {activeLayer.title}
                  </h3>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d8f3dc] text-[#1b4332]">
                  <ActiveIcon className="h-6 w-6" />
                </div>
              </div>

              <p className="text-[#3a5a40] leading-relaxed">{activeLayer.desc}</p>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#52796f] mb-2.5">
                  Типові компоненти
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeLayer.examples.map((ex) => (
                    <span
                      key={ex}
                      className="rounded-xl border border-[#b7e4c7] bg-[#f1faf4] px-3 py-1.5 text-xs font-medium text-[#1b4332]"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </PastelCard>
          </div>
        </div>
      </section>

      {/* Classification */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-[#40916c]">
            КЛАСИФІКАЦІЯ
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#1b4332]">
            Основні типи сучасних роботів
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {robotTypes.map((type) => (
            <PastelCard key={type.title} tone="pistachio">
              <BotIcon className="h-6 w-6 text-[#2d6a4f] mb-3" />
              <h3 className="text-lg font-bold text-[#1b4332]">{type.title}</h3>
              <p className="mt-2 text-sm text-[#4a6b5b] leading-relaxed">{type.desc}</p>
            </PastelCard>
          ))}
        </div>
      </section>
    </div>
  )
}

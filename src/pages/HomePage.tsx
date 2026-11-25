import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ActivityIcon,
  ArrowRightIcon,
  BotIcon,
  CogIcon,
  CpuIcon,
  LeafIcon,
  SparklesIcon,
} from '../components/Icons'
import { PastelCard } from '../components/PastelCard'

const quickSections = [
  {
    to: '/about',
    tag: 'Розділ 02',
    title: 'Про тему',
    desc: 'Як влаштовані роботи: сенсори, алгоритми керування, актюатори та еволюція автоматизації.',
    icon: BotIcon,
  },
  {
    to: '/capabilities',
    tag: 'Розділ 03',
    title: 'Основні можливості',
    desc: 'Комп’ютерний зір, коботи, цифрові двійники та калькулятор ефекту автоматизації.',
    icon: CpuIcon,
  },
  {
    to: '/applications',
    tag: 'Розділ 04',
    title: 'Практичне застосування',
    desc: 'Агротех, медицина, розумні склади, виробництво та підбір робота під задачу.',
    icon: CogIcon,
  },
  {
    to: '/facts',
    tag: 'Розділ 05',
    title: 'Цікаві факти',
    desc: 'Від п’єси Карела Чапека 1920 року до марсоходів і сучасних біороботів.',
    icon: SparklesIcon,
  },
]

export function HomePage() {
  const [visionOn, setVisionOn] = useState(true)
  const [cobotOn, setCobotOn] = useState(true)
  const [ecoMode, setEcoMode] = useState(true)
  const [speed, setSpeed] = useState(85)

  const throughput = Math.round(
    (speed * 1.4) * (cobotOn ? 1.25 : 0.75) * (visionOn ? 1.15 : 0.9)
  )
  const accuracy = (92 + (visionOn ? 6.4 : 0) + (cobotOn ? 1.4 : 0)).toFixed(1)
  const energySave = ecoMode ? '28%' : '9%'

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20">
      {/* Hero Section */}
      <section className="grid gap-10 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#a3d9b8] bg-[#e6f6ec] px-3.5 py-1.5 text-xs font-semibold text-[#2d6a4f]">
            <LeafIcon className="h-3.5 w-3.5 text-[#40916c]" />
            <span>ЕРА РОЗУМНОЇ ТА ЕКОЛОГІЧНОЇ АВТОМАТИЗАЦІЇ</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1b4332] leading-[1.1]">
            Робототехніка, що{' '}
            <span className="bg-gradient-to-r from-[#2d6a4f] via-[#40916c] to-[#52b788] bg-clip-text text-transparent">
              працює в гармонії з людиною
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#3a5a40] max-w-2xl leading-relaxed">
            Відкрийте світ сучасних роботів і автоматизованих систем: від точних
            механічних маніпуляторів та комп’ютерного зору до «зелених» агродронів і
            розумних виробництв майбутнього.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2d6a4f] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_-6px_rgba(45,106,79,0.45)] hover:bg-[#1b4332] transition-all"
            >
              <span>Основні можливості</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-[#95d5b2] bg-white/85 px-5 py-3 text-sm font-semibold text-[#1b4332] hover:bg-[#d8f3dc] transition-all"
            >
              <span>Дізнатися про тему</span>
            </Link>
          </div>
        </div>

        {/* Interactive Smart Automation Line Simulator */}
        <div className="lg:col-span-5">
          <PastelCard className="p-6 space-y-5 bg-white/90">
            <div className="flex items-center justify-between border-b border-[#d8f3dc] pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#52b788]" />
                <span className="font-mono text-xs font-semibold text-[#2d6a4f]">
                  SMART_CELL_SIMULATOR
                </span>
              </div>
              <span className="rounded-full bg-[#d8f3dc] px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#1b4332]">
                АКТИВНО
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              <div className="rounded-xl border border-[#d8f3dc] bg-[#f4fbf6] p-3 text-center">
                <div className="text-[11px] text-[#52796f]">ПРОДУКТИВНІСТЬ</div>
                <div className="mt-1 font-mono text-lg font-bold text-[#1b4332]">
                  {throughput} <span className="text-[10px] font-normal">од/г</span>
                </div>
              </div>
              <div className="rounded-xl border border-[#d8f3dc] bg-[#f4fbf6] p-3 text-center">
                <div className="text-[11px] text-[#52796f]">ТОЧНІСТЬ</div>
                <div className="mt-1 font-mono text-lg font-bold text-[#2d6a4f]">
                  {accuracy}%
                </div>
              </div>
              <div className="rounded-xl border border-[#d8f3dc] bg-[#f4fbf6] p-3 text-center">
                <div className="text-[11px] text-[#52796f]">ЕКОНОМІЯ</div>
                <div className="mt-1 font-mono text-lg font-bold text-[#40916c]">
                  {energySave}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-medium text-[#2d6a4f] mb-1.5">
                  <span>Швидкість конвеєра</span>
                  <span className="font-mono">{speed}%</span>
                </div>
                <input
                  type="range"
                  min={40}
                  max={120}
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="w-full accent-[#2d6a4f] cursor-pointer"
                />
              </div>

              <div className="space-y-2 pt-1">
                {[
                  {
                    label: 'Оптичний зір (AI-камери)',
                    active: visionOn,
                    toggle: () => setVisionOn((v) => !v),
                  },
                  {
                    label: 'Колаборативний маніпулятор',
                    active: cobotOn,
                    toggle: () => setCobotOn((v) => !v),
                  },
                  {
                    label: 'Енергоощадний Eco-режим',
                    active: ecoMode,
                    toggle: () => setEcoMode((v) => !v),
                  },
                ].map((ctrl) => (
                  <button
                    key={ctrl.label}
                    type="button"
                    onClick={ctrl.toggle}
                    className={`w-full flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-xs font-medium transition-all cursor-pointer ${
                      ctrl.active
                        ? 'border-[#95d5b2] bg-[#e6f6ec] text-[#1b4332]'
                        : 'border-slate-200 bg-slate-50 text-slate-500'
                    }`}
                  >
                    <span>{ctrl.label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold ${
                        ctrl.active
                          ? 'bg-[#2d6a4f] text-white'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {ctrl.active ? 'ON' : 'OFF'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </PastelCard>
        </div>
      </section>

      {/* Metrics */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { value: '4.2M+', label: 'промислових роботів працює на заводах світу' },
          { value: '±0.02 мм', label: 'точність позиціонування сучасних маніпуляторів' },
          { value: '30%', label: 'середнє зниження витрат енергії завдяки автоматизації' },
          { value: '24/7', label: 'безперервна робота автономних логістичних систем' },
        ].map((item) => (
          <PastelCard key={item.label} tone="sage" className="p-5">
            <div className="font-mono text-2xl sm:text-3xl font-bold text-[#2d6a4f]">
              {item.value}
            </div>
            <p className="mt-1.5 text-xs sm:text-sm text-[#4a6b5b] leading-snug">
              {item.label}
            </p>
          </PastelCard>
        ))}
      </section>

      {/* Sections Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-[#40916c]">
              НАВІГАЦІЯ ПОРТАЛОМ
            </div>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-[#1b4332]">
              Досліджуйте розділи
            </h2>
          </div>
          <p className="text-sm text-[#4a6b5b] max-w-md">
            Від базової архітектури роботів до реальних галузевих кейсів та дивовижних фактів.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quickSections.map((sec) => {
            const Icon = sec.icon
            return (
              <Link key={sec.to} to={sec.to} className="block h-full">
                <PastelCard className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#b7e4c7] bg-[#e6f6ec] text-[#2d6a4f]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs text-[#52796f]">{sec.tag}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#1b4332] group-hover:text-[#2d6a4f] transition-colors">
                      {sec.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#4a6b5b] leading-relaxed">{sec.desc}</p>
                  </div>

                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#2d6a4f]">
                    <span>Перейти</span>
                    <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </PastelCard>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Bottom Callout */}
      <section className="rounded-3xl border border-[#b7e4c7] bg-gradient-to-r from-[#e6f6ec] via-[#f1faf4] to-[#e9f5db] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#95d5b2] bg-white/80 text-[#2d6a4f]">
            <ActivityIcon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#1b4332]">
              Оцініть ефект автоматизації для вашого проєкту
            </h3>
            <p className="mt-1 text-sm text-[#3a5a40]">
              Скористайтеся інтерактивним калькулятором ефективності або підберіть тип робота під конкретну задачу.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link
            to="/capabilities"
            className="rounded-xl bg-[#2d6a4f] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#1b4332] transition-colors"
          >
            Калькулятор ефекту
          </Link>
          <Link
            to="/applications"
            className="rounded-xl border border-[#95d5b2] bg-white px-4 py-2.5 text-sm font-medium text-[#1b4332] hover:bg-[#d8f3dc] transition-colors"
          >
            Підбір робота
          </Link>
        </div>
      </section>
    </div>
  )
}

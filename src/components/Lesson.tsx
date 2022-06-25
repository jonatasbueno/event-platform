import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

type LessonProps = {
  title: string,
  slug: string,
  availableAt: Date,
  type: 'live' | 'class'
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const isLassonAvailable = isPast(availableAt);
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'HH:mm", { locale: ptBr })

  return (
    <a href="#">
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLassonAvailable ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-xs rounded py-[0.125rem] px-2 text-right border border-green-300">
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <span>
          <strong className="text-gray-200 mt-5 block">
            {title}
          </strong>
        </span>
      </div>
    </a>
  )
}
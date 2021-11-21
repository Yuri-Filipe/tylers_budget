import { addHours } from "date-fns";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns-tz";

function Index(): Array<String> {
  const d = addHours(new Date(), -3);

  const date = format(d, "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR,
    timeZone: "America/Sao_Paulo",
  });
  const hours = format(d, "HH:mm", {
    locale: ptBR,
    timeZone: "America/Sao_Paulo",
  });

  return [date, hours];
}

export default Index;

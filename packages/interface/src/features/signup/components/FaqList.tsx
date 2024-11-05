import { Heading } from "~/components/ui/Heading";

import { FAQItem } from "./FaqItem";

export const FAQList = (): JSX.Element => (
  <div className="mt-28 flex flex-col items-center justify-center dark:text-white">
    <Heading size="6xl">FAQ</Heading>

    <FAQItem
      description={
        <div className="text-lg leading-relaxed">
          Academia Round es una convocatoria organizada por&nbsp;
          <a href="https://linktr.ee/ethereumtgu_" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            Ethereum Tegucigalpa
          </a> 
          &nbsp;para financiar proyectos de impacto social o a la comunidad en local, conocidos en el ecosistema&nbsp;
          <a href="https://ethereum.org/es/learn/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              Ethereum
          </a> 
          &nbsp;como “Bienes Públicos”. Esta quinta edición de financiamiento esta enfocada en las propuestas de las comunidades universitarias en Tegucigalpa. La convocatoria está abierta a estudiantes y profesores para presentar proyectos en investigación, educación, bien social e iniciativas académicas que fomenten la adopción de blockchain. La convocatoria estará abierta durante noviembre 2024, del total de propuestas, algunas serán pre-seleccionadas para asignar entre los proyectos aprobados $5,000.00 en DAIs, para que puedan ejecutarlos a partir de enero 2025. ¡Queremos ver&nbsp;
          <a href="https://ethereum.foundation/infinitegarden" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            florecer el jardín infinito
          </a> 
          &nbsp;en los espacios académicos!
        </div>
      }
      title="Sobre la Ronda"
    />

    <FAQItem
      description={
        <div className="text-lg leading-relaxed space-y-6">
        <h3 className="text-2xl font-semibold">Metas</h3>
        <ol className="list-decimal ml-5 space-y-2">
          <li>Concientizar sobre Web3, Ethereum y sus oportunidades entre universidades, facultades y estudiantes.</li>
          <li>Financiar actividades destinadas a iniciar rápidamente la innovación, la tecnología, el bien social y la adopción de blockchain en Honduras.</li>
          <li>Establecer colaboraciones duraderas con universidades y académicos en Honduras y Ethereum Tegucigalpa.</li>
          <li>Contribuir al ecosistema local y más amplio probando diferentes formas de implementar rondas de bienes públicos. Generar mejores prácticas para facilitar la adopción de Ethereum.</li>
        </ol>
      
        <h3 className="text-2xl font-semibold">Calendario de la ronda</h3>
        <div>
          <h4 className="text-xl font-semibold">Noviembre</h4>
          <ul className="list-disc ml-5 space-y-1">
            <li>4 - Abrir ronda para recibir propuestas de proyectos.</li>
            <li>1 - 24 - Promoción de la Ronda</li>
            <li>24 - Fecha límite para la presentación de propuestas.</li>
            <li>25 - 30 - Evaluar la elegibilidad de las propuestas y votación.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Diciembre</h4>
          <ul className="list-disc ml-5 space-y-1">
            <li>1-3 - Publicar resultados y solicitar formularios de cumplimiento.</li>
            <li>3-13 - Desembolso y sesión presencial para proyectos seleccionados.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold">Enero - Junio 2025</h4>
          <p className="ml-5">Seguimiento de proyectos.</p>
        </div>
      
        <h3 className="text-2xl font-semibold">Selección de Proyectos</h3>
        <p>
          Academia Round es organizada y financiada por el equipo core de{" "}
          <a href="https://linktr.ee/ethereumtgu_" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            Ethereum Tegucigalpa
          </a>
          , quienes publicarán, asesorarán y verificarán que proyectos son elegibles para los fondos. Una vez seleccionadas las propuestas, 5 miembros de la comunidad Ethereum Tegucigalpa votarán por los proyectos en blockchain para distribuir los fondos. Se seleccionarán entre 3 a 5 proyectos para la adjudicación de fondos.
        </p>
      </div>        
      }
      title="Sobre Academia Round"
    />

    <FAQItem
      description={
        <div className="text-lg leading-relaxed space-y-6">
  <h3 className="text-2xl font-semibold">Financiación y otros beneficios</h3>
  <p>
    Los proyectos que cumplan con los criterios de selección tendrán su solicitud cargada en{" "}
    <a href="http://grants.ethereumtgu.com/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
      grants.ethereumtgu.com
    </a>{" "}
    para participar en la distribución de 5,000 DAIs.
  </p>
  <p>Además, todos los proyectos que participen en la Ronda Académica se beneficiarán de:</p>
  <ul className="list-disc ml-5 space-y-2">
    <li>Evaluación para profundizar en web3 y blockchain.</li>
    <li>Participación en eventos organizados por la comunidad de Ethereum TGU y comunidades asociadas para mostrar sus causas.</li>
    <li>Networking en espacios web3 nacionales e internacionales.</li>
    <li>La oportunidad de formar parte de la comunidad de Ethereum TGU y ser elegibles para futuros programas de becas para eventos internacionales.</li>
    <li>Colaboración y soporte técnico de Ethereum TGU para establecer centros, clubes y otros espacios o actividades universitarias dedicadas a blockchain, web3 y Ethereum.</li>
  </ul>

  <h3 className="text-2xl font-semibold">Propuestas elegibles</h3>
  <ul className="list-disc ml-5 space-y-2">
    <li>Proyectos académicos: aplicaciones de investigación, artículos, grupos de estudio, actividades educativas, proyectos orientados a blockchain y web3, etc.</li>
    <li>Equipamiento tecnológico para espacios universitarios orientados a actividades académicas relacionadas con blockchain, web3 o Ethereum.</li>
    <li>Subvenciones de investigación relacionadas con Ethereum y blockchain y actividades educativas.</li>
    <li>Proyectos de impacto social que aborden áreas como salud, medio ambiente, paz y servicios comunitarios, tanto dentro como fuera de los entornos universitarios.</li>
    <li>Espacios o propuestas universitarias innovadoras: financiación para equipamiento o establecimiento de espacios que serán utilizados durante al menos un año para actividades de Web3 y blockchain por estudiantes y docentes. Para estas propuestas, las universidades deben comprometerse a proporcionar sostenibilidad y apoyo durante un mínimo de 2 años.</li>
  </ul>

  <h3 className="text-2xl font-semibold">Criterios</h3>
  <ul className="list-disc ml-5 space-y-2">
    <li>Los miembros de los proyectos participantes deben ser parte de la comunidad universitaria (estudiantes, profesores, administradores, etc. con afiliación actual a la universidad; los ex-alumnos no son elegibles).</li>
    <li>Cada proyecto debe tener al menos dos miembros en el equipo.</li>
    <li>Los proyectos deben desarrollarse en Tegucigalpa.</li>
    <li>Todas las propuestas deben estar dispuestas a ejecutar los fondos dentro de los 6 meses posteriores a su recepción y aceptar los términos de la Ronda Académica antes del desembolso.</li>
    <li>No elegibles: Proyectos o personas que ejecuten fondos de rondas organizadas por Eth TGU.</li>
  </ul>

  <h3 className="text-2xl font-semibold">Aplicación y selección de propuestas</h3>
  <p>
    Puedes acceder al formulario de aplicación aquí. (Disponible a partir del 4 de noviembre)
  </p>
  <p>
    El equipo core de Ethereum Tegucigalpa verificará que las propuestas cumplan con los criterios de la Ronda tan pronto sean presentadas. Se permitirá que un máximo de 5 proyectos pase a la fase de votación, siguiendo el principio de &quot;primero en llegar, primero en ser atendido&quot;. Los organizadores enviarán un correo electrónico confirmando la recepción de la propuesta e informarán si esta continúa en el proceso según los criterios de elegibilidad.
  </p>
  <p>
    En la fase de votación, cada votante dispondrá de 200 puntos para distribuir entre los proyectos participantes. Los votantes serán miembros activos de la comunidad Ethereum Tegucigalpa que se comprometerán a cumplir las pautas de evaluación.  Al finalizar la evaluación, los fondos se distribuirán proporcionalmente según el porcentaje de puntos obtenidos por cada proyecto.
  </p>
  <p>
   Concluida la votación y asignación de fondos, los organizadores notificarán a los proyectos participantes sobre los montos que recibirán. Enviarán un formulario de cumplimiento que deberá completarse antes del desembolso, incluyendo un resumen de los resultados esperados en un plazo de 6 meses y un comprobante de afiliación a una universidad en Tegucigalpa (como fotografías de carnés estudiantiles, de empleados o matrículas). Posteriormente, Ethereum Tegucigalpa transferirá los fondos designados a la billetera de cada proyecto.
  </p>

  <h3 className="text-2xl font-semibold">Pautas de Evaluación</h3>
  <ul className="list-disc ml-5 space-y-2">
    <li>Impacto e innovación del alcance del proyecto:  un cambio positivo significativo dentro de la comunidad académica o la sociedad en general. Considerar cuán innovador es el enfoque, si aborda una necesidad urgente y si tiene el potencial de inspirar una mayor adopción de blockchain o investigación en el ámbito académico.</li>
    <li>Claridad de la propuesta: objetivos bien definidos y actividades planificadas.</li>
    <li>Capacidad del equipo: los miembros poseen las habilidades y experiencia necesarias para llevar a cabo las actividades propuestas.</li>
    <li>Integración de tecnología blockchain y Ethereum: incorporación de blockchain dentro del desarrollo del proyecto o inclusión de actividades educativas y de incorporación relacionadas con blockchain o Ethereum.</li>
    <li>Colaboraciones y sostenibilidad: propuesta orientada a un compromiso a largo plazo con el trabajo relacionado con blockchain o Ethereum, o disposición a asociarse con Ethereum Tegucigalpa u otros actores en el ecosistema de Ethereum.</li>
  </ul>

  <h3 className="text-2xl font-semibold">Compromisos y entregables</h3>
  <h4 className="text-xl font-semibold">Ethereum Tegucigalpa hacia los Proyectos</h4>
  <ul className="list-disc ml-5 space-y-2">
    <li>Se compromete a transferir los fondos a la billetera del proyecto para el 15 de diciembre.</li>
    <li>Colaborar en la publicación de los avances y resultados de los proyectos, una vez que sean enviados por parte de cada proyecto.</li>
    <li>Asesorar, en caso de que sea necesario, sobre la ejecución del proyecto para garantizar el cumplimiento de resultados en los tiempos establecidos.</li>
  </ul>
  <h4 className="text-xl font-semibold">Proyectos hacia Ethereum Tegucigalpa</h4>
  <ul className="list-disc ml-5 space-y-2">
    <li>Proporcionar actualizaciones y presentar un informe final detallando las actividades realizadas y los resultados alcanzados.</li>
    <li>Completar todas las actividades del proyecto en un período máximo de 6 meses.</li>
    <li>También deben firmar una declaración de conformidad con los valores de la comunidad Eth Honduras y ejecutar el proyecto bajo los términos acordados.</li>
  </ul>
</div>
      }
      title="Sobre las propuestas"
    />

    <FAQItem
      description={
        <div className="space-y-4">
          <p>
            Correo electrónico:{" "}
            <a href="mailto:admin@ethereumtgu.com" className="text-blue-500 underline">
              admin@ethereumtgu.com
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/ethereumtgu" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>{", "}
            <a href="https://www.x.com/ethereumtgu_" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
              X
            </a>{", "}
            Discord, TG: @ethereumtgu
          </p>
        </div>
      }
      title="Información de contacto"
    />
  </div>
);

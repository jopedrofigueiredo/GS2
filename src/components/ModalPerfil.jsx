import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import CardPerfil from "./CardPerfil"
import DadosModal from "./DadosModal"
import ToogleBarPerfil from "./ToogleBarPerfil"
import { useState } from "react"

export default function ModalPerfil({id, nome, foto, cargo, skills, localizacao, area, habilidadesTecnicas, softSkills, experiencias, formacao, projetos, certificacoes, idiomas, areaInteresses}) {
  const [toogleValues, setToogleValues] = useState([])

    return (
    <Dialog>
      <DialogTrigger>
        <CardPerfil id={id} nome={nome} foto={foto} cargo={cargo} skills={skills}/>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mt-3 flex-col">
          <div className="flex flex-row">
            <img className="rounded-full w-25 h-25"src="https://img.freepik.com/fotos-gratis/fundo-texturizado-abstrato_1258-30461.jpg" alt="Foto Usuário" />
            <div className="flex flex-col items-center w-full just">
              <DialogTitle className="flex flex-col justify-center">{nome}</DialogTitle>
              <div className="h-full flex items-center">
                <ToogleBarPerfil toogleValues={toogleValues}
                                 onToogleChange={setToogleValues}          
                />
              </div>
            </div>
          </div>
          <h2 className="font-medium">{cargo}</h2>
          <DialogDescription>
            <p>{skills}</p>
          </DialogDescription>
        </DialogHeader>

        <DadosModal localizacao={localizacao}
                    area={area}
                    habilidadesTecnicas={habilidadesTecnicas}
                    softSkills={softSkills}
                    experiencias={experiencias}
                    formacao={formacao}
                    projetos={projetos}
                    certificacoes={certificacoes}
                    idiomas={idiomas}
                    areaInteresses={areaInteresses}
        />

      </DialogContent>
    </Dialog>
)}
import CardPerfil from "./CardPerfil"
import { useState, useEffect } from "react"
import ModalPerfil from "./ModalPerfil";

export default function Feed() {
    const [perfis, setPerfis] = useState([]);
    
    useEffect(() => {
        fetch("../../public/perfis.json")
            .then(res => res.json())
            .then(data => setPerfis(data))
            .catch(err => console.error("Erro ao carregar os perfis:", err));  
    }, []);

    return (
        <section className="flex flex-col items-center my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-[1600px]">
                {perfis.map((key) => (
                    <ModalPerfil id={key.id}
                                nome={key.nome} 
                                foto={key.foto} 
                                cargo={key.cargo} 
                                skills={key.resumo}
                                localizacao={key.localizacao}
                                area={key.area}
                                habilidadesTecnicas={key.habilidadesTecnicas}
                                softSkills={key.softSkills}
                                experiencias={key.experiencias}
                                formacao={key.formacao}
                                projetos={key.projetos}
                                certificacoes={key.certificacoes}
                                idiomas={key.idiomas}
                                areaInteresses={key.areaInteresses}
                            />
                ))}
            </div>
        </section>
    )
}
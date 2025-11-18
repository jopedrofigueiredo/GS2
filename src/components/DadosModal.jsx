export default function DadosModal({localizacao, area, habilidadesTecnicas, softSkills, experiencias, formacao, projetos, certificacoes, idiomas, areaInteresses}) {

    return (
        <section className="flex flex-col gap-5 overflow-y-scroll max-h-[60vh]">
            <div id="localizacao">
                <h3 className="font-semibold text-xl">Localização</h3>
                <p>{localizacao}</p>
            </div>
            <div id="area">
                <h3 className="font-semibold text-xl">Área</h3>
                <p>{area}</p>
            </div>
            <div id="habilidadesTecnicas">
                <h3 className="font-semibold text-xl">habilidades Técnicas</h3>
                <ul>{habilidadesTecnicas.map((habilidade, i) => (
                    <li key={i}>• {habilidade}</li>
                ))}
                </ul>
            </div>
            <div id="softSkills">
                <h3 className="font-semibold text-xl">SoftSkills</h3>
                <ul>{softSkills.map((softSkills, i) => (
                    <li key={i}>• {softSkills}</li>
                ))}
                </ul>
            </div>
            <div id="softSkills">
                <h3 className="font-semibold text-xl">Experiências</h3>
                <ul>{experiencias.map((experiencia, i) => (
                    <div key={i}>
                            <li><span className="font-medium">Empresa:</span> {experiencia.empresa}</li>
                            <li><span className="font-medium">Cargo:</span> {experiencia.cargo}</li>
                            <li><span className="font-medium">Inicio:</span> {experiencia.inicio}</li>
                            <li><span className="font-medium">Fim:</span> {experiencia.fim}</li>
                            <li><span className="font-medium">Resumo:</span> {experiencia.descricao}</li> 
                    </div>
                ))}
                </ul>
            </div>
            <div id="formacao">
                <h3 className="font-semibold text-xl">Formação</h3>
                <ul>{formacao.map((formacao, i) => (
                    <div key={i}>
                        <li><span className="font-medium">Curso:</span> {formacao.curso}</li>
                        <li><span className="font-medium">Instituição:</span> {formacao.instituicao}</li>
                        <li><span className="font-medium">Conclusão:</span> {formacao.ano}</li>
                    </div>
                ))}
                </ul>
            </div>
            <div id="projetos">
                <h3 className="font-semibold text-xl">Projetos</h3>
                <ul>{projetos.map((projeto, i) => (
                    <div key={i}>
                        <li><span className="font-medium">Título:</span> {projeto.titulo}</li>
                        <li><span className="font-medium">Acesse:</span> {projeto.link}</li>
                        <li><span className="font-medium">Descrição:</span> {projeto.descricao}</li>
                    </div>
                ))}
                </ul>
            </div>
            <div id="certificacoes">
                <h3 className="font-semibold text-xl">Certificações</h3>
                <ul>{certificacoes.map((certificacao, i) => (
                        <li key={i}>{certificacao}</li>
                ))}
                </ul>
            </div>
            <div id="idiomas">
                <h3 className="font-semibold text-xl">Línguas</h3>
                <ul className="flex flex-col gap-1">{idiomas.map((idioma, i) => (
                    <div key={i}>
                            <li><span className="font-medium">Idioma:</span> {idioma.idioma}</li>
                            <li><span className="font-medium">Nível:</span> {idioma.nivel}</li>
                    </div>
                    ))}
                </ul>
            </div>
            <div id="areaInteresses">
                <h3 className="font-semibold text-xl">Áreas de interesse</h3>
                <ul>{areaInteresses.map((interesse, i) => (
                    <li key={i}>• {interesse}</li>
                ))}
                </ul>
            </div>
        </section>
    )
}
import './Projects.css'
import IMG from '../../../assets/img/Nina-carducci.png'
import Collapse from "../../Collapse/Collapse"


const Projects = ( ) => {
    return (
        <div>
            <h3>Projects</h3>
            <div className='zone-projets'>
                <Collapse
                title= {<h4 className='title-collapse-container'> <a href="https://crowan1.github.io/P5-Nina-Carducci/">Nina Carducci</a></h4>}

                content={   <div className='projet-nina'>
                <div className='zone-image-nina'>
            <img src={IMG} className='img-site-nina' />
            </div> 
            <div className='collapse-competence'>
                <Collapse
                title={<h4>Compétences 💻</h4>}
                content={<p className='p-collapse-compétences'>   Pendant ce projet, j'ai utilisé les outils Lighthouse, Waves et schema.org pour analyser et optimiser un site web. 
                L'utilisation de Lighthouse m'a permis d'évaluer les performances et l'accessibilité du site,
                 tandis que Waves m'a aidé à détecter et à corriger les erreurs d'accessibilité.
                  Enfin, l'intégration de schema.org m'a permis d'améliorer le référencement du site en structurant les données de manière adéquate pour les moteurs de recherche.</p>}
                />
                <Collapse
                title={<h4>Tools Used 🛠</h4>}
                content={<p className='p-collapse-compétences'> 
                <a href="https://wave.webaim.org">📡 Waves</a>
                <a href="https://schema.org">📡 Schema.org</a>
                <a href="https://developer.chrome.com/docs/lighthouse/overview?hl=fr">📡 Lightouse</a>
                </p>}
                />
                 <Collapse
                title={<h4>Programming Languages 〶</h4>}
                content={<p className='p-collapse-compétences' id='p-languages'> 
                ☞ Javascript <br />
                ☞ HTML5 / CSS3
                </p>}
                />
                </div>          
            </div>}
                />
            </div>
            
          
        </div>

    )
}

export default Projects
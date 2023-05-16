import React, { useEffect, useState } from 'react'
import Evolution from '../Evolution/Evolution'

const EvolutionChain = ({ evolutionSearchResult }) => {

    const [evolutionStage, setEvolutionStage] = useState("");
    const [showEvolution, setShowEvolution] = useState(false)



    useEffect(() => {

        if (evolutionSearchResult.length !== 0) {

            let tempEvolutionStage = [evolutionSearchResult.chain.species.name]
            let currentChain = evolutionSearchResult.chain.evolves_to
            if (evolutionSearchResult.chain.evolves_to.length !== 0) {
                setShowEvolution(true)


                while (currentChain.length !== 0) {
                    currentChain.forEach(evolution => {
                        if (!tempEvolutionStage.includes(evolution.species.name)) {

                            tempEvolutionStage.push(evolution.species.name);
                        }
                    });
                    currentChain = currentChain[0].evolves_to
                }
                setEvolutionStage(tempEvolutionStage)

            } else {
                setShowEvolution(false)
            }

        }

    }, [evolutionSearchResult])

    return (
        <>
            {
                showEvolution ?
                    <Evolution evolutionStage={evolutionStage} />
                    : null
            }
        </>
    )
}

export default EvolutionChain


import React, { useContext, useEffect, useState } from 'react'
import { ApiPoke } from '../../context/PokeApiContext'
import Card from 'react-bootstrap/Card';



const Ability = ({ showAbility }) => {

    const { abilitySearchResult, abilityInfo, abilityInfoFlavorTxt, abilityInfoNameTxt, abilityInfoEffectTxt } = useContext(ApiPoke)


    useEffect(() => {

        if (abilitySearchResult.length !== 0) {
            abilityInfo(abilitySearchResult, "flavor_text_entries", "en", "flavor_text")
            abilityInfo(abilitySearchResult, "names", "en", "name")
            abilityInfo(abilitySearchResult, "effect_entries", "en", "effect")
        }

    }, [abilitySearchResult, abilityInfoFlavorTxt, abilityInfoNameTxt, abilityInfoEffectTxt])

    return (
        <>
            {
                showAbility ?
                    <>
                        <Card.Text> Ability: {abilityInfoNameTxt}</Card.Text >
                        <Card.Text>{abilityInfoFlavorTxt}</Card.Text>
                        <Card.Text>{abilityInfoEffectTxt}</Card.Text>
                    </>
                    :
                    null
            }
        </>
    )
}

export default Ability
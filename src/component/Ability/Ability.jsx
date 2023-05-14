import React, { useContext, useEffect } from 'react'
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
        <div className='d-flex-col-center showAbilityStyle m-top'>
            {
                showAbility ?
                    <>
                        <Card.Text>
                            <span className='descriptionItem-title'>Ability:</span>
                            <span className='descriptionItem-item'>{abilityInfoNameTxt}</span>
                        </Card.Text >

                        <Card.Text>
                            <span className='descriptionItem-title'>
                                {abilityInfoFlavorTxt}
                            </span>
                        </Card.Text>

                        <Card.Text>{abilityInfoEffectTxt}</Card.Text>
                    </>
                    :
                    null
            }
        </div>
    )
}

export default Ability
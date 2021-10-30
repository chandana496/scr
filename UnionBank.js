import React from 'react'
import AndhraBank from './AndhraBank'
import CorporationBank from './CorporationBank'

export default function UnionBank() {
    let data={
        firstName:'Hari',
        lastName:'Chandana'
    }
    return (
        <div>
            <AndhraBank info={data}/>
            <CorporationBank info={data} />
        </div>
    )
}



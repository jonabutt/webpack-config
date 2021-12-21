const elvenShieldReceipe = {
    leathStrips: 2,
    ironIgnot: 1,
    refinedMoonstone: 4
}

const elvenGuantletsReceipe = {
    ...elvenShieldReceipe,
    leather: 1,
    refinedMoonstone: 3
}

console.log(elvenShieldReceipe)
console.log(elvenGuantletsReceipe)
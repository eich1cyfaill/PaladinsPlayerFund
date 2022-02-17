export const getChampionAvatar = (name: string) => {
    switch (name) {
        case "Saati":
            return `https://static.paladins.guru/i/champions/icons/saati.jpg`
        case "Azaan":
            return `https://static.paladins.guru/i/champions/icons/azaan.jpg`
        case "Rei":
            return `https://static.paladins.guru/i/champions/icons/rei.jpg`
        case "Mal'Damba":
            return `https://static.paladins.guru/i/champions/icons/mal-damba.jpg`
        case "Bomb King":
            return `https://static.paladins.guru/i/champions/icons/bomb-king.jpg`
        case "Vatu":
            return `https://static.paladins.guru/i/champions/icons/vatu.jpg`
        case "VII":
            return `https://static.paladins.guru/i/champions/icons/vii.jpg`
        case "Sha Lin":
            return `https://static.paladins.guru/i/champions/icons/sha-lin.jpg`
        default:
            return `https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/characters/${name.toLowerCase()}.jpg`
    }
}
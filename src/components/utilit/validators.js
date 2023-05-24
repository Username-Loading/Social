

export const requared = (velue) => {
    if(!!velue) return undefined
    else return "Поле пусте!"
}

export const maxLengthPost = (maxLenght) => {
    return (velue) => {
        if(velue.length > maxLenght) return "Введено забагато символів"
        else return undefined
    }
}


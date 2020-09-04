export type Skill = {
    id: number,
    name: string,
    imageUrl: string,
    sortOrder: number
}

export namespace Skill {

    export type Category = {
        id: number,
        name: string,
        sortOrder: number,
        skills: Skill[]
    }
}
export type Skill = {
    id: number,
    name: string,
    image: Skill.Image
}

export namespace Skill {

    export type Category = {
        id: number,
        name: string,
        skills: Skill[]
    }

    export type Image = {
        id: number,
        url: string,
        width: number,
        height: number
    }

    export function getImageUrl(image: Image): string {
        return `${process.env.NEXT_PUBLIC_API_BASE_URL}${image.url}`;
    }
}
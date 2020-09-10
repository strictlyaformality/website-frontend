export type Education = {
    id: number,
    institutionName: string,
    logoUrl: string,
    degreeName: string,
    startDate: string,
    endDate?: string,
    achievedGpa: number,
    maximumGpa: number,
    additionalInformation: string
}

export namespace Education { }
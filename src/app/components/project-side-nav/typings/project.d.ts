export interface PROJECT {
    id: string | number,
    title: string,
    admins: any[],
    members: any[],
    sprintIds: string[] | number[]
}
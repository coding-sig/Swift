export interface SPRINT {
    id: number,
    name: string,
    cadence: number,
    progress: number,
    maxStorySize: number,
    startDate: string,
    endDate: string,
    isOnGoing: boolean,
    isCollapsed: boolean,
    items: any[]
} 
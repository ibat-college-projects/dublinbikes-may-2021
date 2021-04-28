

   
    export interface Availabilities {
        bikes: number;
        stands: number;
    }

    export interface TotalStands {
        availabilities: Availabilities;
        capacity: number;
    }

    export interface Availabilities2 {
        bikes: number;
        stands: number;
    }

    export interface MainStands {
        availabilities: Availabilities2;
        capacity: number;
    }

    // export interface Availabilities3 {
    //     bikes: number;
    //     stands: number;
    // }

    // export interface OverflowStands {
    //     availabilities: Availabilities3;
    //     capacity: number;
    // }

    export interface Position {
        lat: number;
        lng: number;
    }

    export interface DublinBikeStation {
        number: number;
        contractName: string;
        name: string;
        address: string;
        position: Position;
        // banking: boolean;
        // bonus: boolean;
        // status: string;
        // lastUpdate: Date;
        // connected: boolean;
        // overflow: boolean;
        // shape?: any;
        // totalStands: TotalStands;
        // mainStands: MainStands;
        // overflowStands: OverflowStands;
    }




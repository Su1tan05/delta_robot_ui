export type TrajectoryPoint = [number, number, number];

export interface TrajectoryPointsModel {
    id: number;
    trajectoryPoints: TrajectoryPoint[];
    moveRobot: boolean;
}
import { useEffect } from "react";
import { useRosContext } from "../../RosProvider"
import ROSLIB from "roslib";

export const useLogic = () => {
    const rosContextResult = useRosContext();
    const ros = rosContextResult?.[0];
    const pidTuningsTopic = rosContextResult?.[1];

    useEffect(() => {
        if (!ros) {
            return;
        }

        ros.on('error', function(error){
            console.log('ROS connection error: ', error);
        });
        
        ros.on('connection', function(){
            console.log('Connected to ROS server.');
        });
        
        ros.on('close', function(){
            console.log('ROS connection closed.');
        });
    }, [ros]);
}
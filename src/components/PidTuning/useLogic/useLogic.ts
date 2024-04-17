import { useEffect, useState } from "react";
import { useRosContext } from "../../RosProvider"
import ROSLIB from "roslib";

export const useLogic = () => {
    const rosContextResult = useRosContext();
    const ros = rosContextResult;

    const message = useState(() => {
        return new ROSLIB.Message({
            kp: 0,
            ki: 0,
            kd: 0
        });
    });

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

    useEffect(() => {
        if (!ros) {
            return;
        }

        const pidTuningTopic = new ROSLIB.Topic({
            ros: ros,
            name: '/pid_tuning',
            messageType: 'pid_tuning/PidTuning'
        });

        console.log('Publishing message to /pid_tuning topic: ', message);

        pidTuningTopic.publish(message);

    }, [message]);
}
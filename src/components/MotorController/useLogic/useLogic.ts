import { useEffect, useState } from "react";
import { useRosContext } from "../../RosProvider"
import ROSLIB from "roslib";

export const useLogic = () => {
    const rosContextResult = useRosContext();
    const ros = rosContextResult;
    const [motor1Monitoring, setMotor1Monitoring] = useState({x: 0, y: 0, z: 0});

    useEffect(() => {
        if (!ros) {
            return;
        }
        
        var motor1MonitoringSub = new ROSLIB.Topic({
            ros : ros,
            name : '/motor1_monitoring',
            messageType : 'geometry_msgs/Vector3'
        });

        motor1MonitoringSub.subscribe(function(message: any) {
            console.log('Motor 1 Monitoring: ', message.x + ', ' + message.y + ', ' + message.z);
            setMotor1Monitoring({
                x: message.x,
                y: message.y,
                z: message.z
            });
        });    
        
        return () => {
            motor1MonitoringSub.unsubscribe();
        };
    }, []);

    return {motor1Monitoring};
}
import React, {  useContext } from 'react'
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);
        if(alertContext.alert !== null){
            return (
                    <div className="container mt-2">
                        <div className="alert alert-warning" role="alert">
                            {`${alertContext.alert.msg}`}
                        </div>
                    </div>
                )
            }else{
                return (
                    <></>
                )
            }
}

export default Alert
